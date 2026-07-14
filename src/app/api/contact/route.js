import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, message, source } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Taxaccolega Website <onboarding@resend.dev>', // swap once domain verified in Resend
      to: ['info@taxaccolega.co.uk'],
      replyTo: email,
      subject: `New enquiry from ${name} — ${source || 'Website contact form'}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return Response.json({ success: true, id: data.id });
  } catch (err) {
    console.error('Contact API error:', err);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}