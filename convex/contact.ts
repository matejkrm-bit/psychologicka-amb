import { action } from "./_generated/server"
import { v } from "convex/values"
import { callMacalyJson } from "./macaly"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const MAX_SUBJECT = 200
const MAX_MESSAGE = 5000
const MAX_EMAIL = 254

/**
 * Public contact form action. Sends a notification email to the configured
 * clinic recipient via the Macaly client-notification endpoint.
 * Does not log submitted personal data or email content.
 */
export const sendContactEmail = action({
  args: {
    email: v.string(),
    subject: v.string(),
    message: v.string(),
  },
  handler: async (_ctx, args) => {
    const email = args.email.trim()
    const subject = args.subject.trim()
    const message = args.message.trim()

    if (!email) {
      throw new Error("Vyplňte prosím svou e-mailovou adresu.")
    }
    if (email.length > MAX_EMAIL || !EMAIL_RE.test(email)) {
      throw new Error("Zadejte prosím platnou e-mailovou adresu.")
    }
    if (!subject) {
      throw new Error("Vyplňte prosím předmět zprávy.")
    }
    if (subject.length > MAX_SUBJECT) {
      throw new Error("Předmět zprávy je příliš dlouhý.")
    }
    if (!message) {
      throw new Error("Vyplňte prosím text zprávy.")
    }
    if (message.length > MAX_MESSAGE) {
      throw new Error("Text zprávy je příliš dlouhý.")
    }

    const toEmail = process.env.RECIPIENT_EMAIL
    if (!toEmail) {
      // Configuration problem, not user-facing input.
      throw new Error(
        "Odeslání zprávy se nezdařilo. Zkuste to prosím později.",
      )
    }

    const composedSubject = `Nová zpráva z kontaktního formuláře: ${subject}`
    const composedMessage = [
      `Odesílatel (e-mail): ${email}`,
      `Předmět: ${subject}`,
      "",
      "Zpráva:",
      message,
    ].join("\n")

    try {
      await callMacalyJson("/api/emails/client-notifications", {
        toEmail,
        subject: composedSubject,
        message: composedMessage,
        appName: process.env.APP_NAME,
        secretKey: process.env.SECRET_KEY,
      })
    } catch (error) {
      // Log only non-sensitive transition context; never the message body.
      console.error("Contact email delivery failed")
      console.error(
        error instanceof Error ? error.message : "Unknown delivery error",
      )
      throw new Error(
        "Zprávu se nepodařilo odeslat. Zkuste to prosím později nebo nás kontaktujte telefonicky.",
      )
    }

    return { success: true }
  },
})
