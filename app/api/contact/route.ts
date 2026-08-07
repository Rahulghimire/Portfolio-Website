import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return null;
  }

  return new Resend(apiKey);
}

async function sendWithFormSubmit(recipient: string, payload: Record<string, string>) {
  const formData = new URLSearchParams();

  Object.entries(payload).forEach(([key, value]) => {
    formData.append(key, value);
  });

  formData.append("_captcha", "false");
  formData.append("_subject", `New portfolio contact from ${payload.name}`);
  formData.append("_template", "table");
  formData.append("_replyto", payload.email);

  const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  });

  return response;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all fields." },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_TO_EMAIL || "ghimirerahul554@gmail.com";

    const resend = getResendClient();

    if (resend) {
      const sender = process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

      const { data, error } = await resend.emails.send({
        from: sender,
        to: [recipient],
        subject: `New contact message from ${name}`,
        html: `
          <h2>New portfolio contact message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      if (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, messageId: data?.id });
    }

    const response = await sendWithFormSubmit(recipient, {
      name,
      email,
      message,
    });

    if (!response.ok) {
      throw new Error("The form submission service rejected the request.");
    }

    return NextResponse.json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
