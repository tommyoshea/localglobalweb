import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, businessName, template, cmsPages, budget, timeline, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Email to you (Gmail)
    const emailToYou = {
      from: 'LocalGlobalWeb <hello@localglobalweb.com>',
      to: ['your-gmail@gmail.com'], // Replace with your Gmail
      subject: `New Website Inquiry from ${name} - ${businessName || 'No Business Name'}`,
      html: generateEmailTemplate({
        name,
        email,
        phone,
        businessName,
        template,
        cmsPages,
        budget,
        timeline,
        message,
        isToYou: true
      })
    }

    // Email to user (confirmation)
    const emailToUser = {
      from: 'LocalGlobalWeb <hello@localglobalweb.com>',
      to: [email],
      subject: 'Thank you for your inquiry - LocalGlobalWeb',
      html: generateEmailTemplate({
        name,
        email,
        phone,
        businessName,
        template,
        cmsPages,
        budget,
        timeline,
        message,
        isToYou: false
      })
    }

    // Send emails using Resend
    try {
      await resend.emails.send(emailToYou)
      await resend.emails.send(emailToUser)
    } catch (emailError) {
      console.error('Email sending error:', emailError)
      // Fallback: log the emails for manual sending
      console.log('Email to you:', emailToYou)
      console.log('Email to user:', emailToUser)
    }

    return NextResponse.json(
      { success: true, message: 'Thank you! We\'ll get back to you soon.' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

function generateEmailTemplate(data: any) {
  const { name, email, phone, businessName, template, cmsPages, budget, timeline, message, isToYou } = data

  if (isToYou) {
    // Email template for you (Gmail)
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Website Inquiry</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #667eea; }
          .value { background: white; padding: 10px; border-radius: 5px; border-left: 4px solid #667eea; }
          .message-box { background: white; padding: 15px; border-radius: 5px; border: 1px solid #ddd; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 New Website Inquiry</h1>
            <p>Someone wants to transform their business online!</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${email}</div>
            </div>
            ${phone ? `<div class="field">
              <div class="label">Phone:</div>
              <div class="value">${phone}</div>
            </div>` : ''}
            ${businessName ? `<div class="field">
              <div class="label">Business Name:</div>
              <div class="value">${businessName}</div>
            </div>` : ''}
            ${template ? `<div class="field">
              <div class="label">Template Interest:</div>
              <div class="value">${template}</div>
            </div>` : ''}
            ${cmsPages ? `<div class="field">
              <div class="label">CMS Pages:</div>
              <div class="value">${cmsPages}</div>
            </div>` : ''}
            ${budget ? `<div class="field">
              <div class="label">Budget:</div>
              <div class="value">${budget}</div>
            </div>` : ''}
            ${timeline ? `<div class="field">
              <div class="label">Timeline:</div>
              <div class="value">${timeline}</div>
            </div>` : ''}
            <div class="field">
              <div class="label">Message:</div>
              <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>This inquiry was submitted from your LocalGlobalWeb contact form.</p>
            <p>Reply to: ${email}</p>
          </div>
        </div>
      </body>
      </html>
    `
  } else {
    // Email template for user (confirmation)
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank you for your inquiry</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .highlight { background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #667eea; }
          .cta { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 5px; text-align: center; margin: 20px 0; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Thank You, ${name}!</h1>
            <p>We've received your inquiry and we're excited to help transform your business online.</p>
          </div>
          <div class="content">
            <div class="highlight">
              <h3>What happens next?</h3>
              <ul>
                <li>We'll review your requirements within 24 hours</li>
                <li>You'll receive a personalized proposal</li>
                <li>We'll schedule a consultation to discuss your project</li>
                <li>Your website will be live in 3-4 weeks!</li>
              </ul>
            </div>
            <div class="cta">
              <h3>📞 Need to reach us?</h3>
              <p>Email: hello@localglobalweb.com<br>
              Phone: (089) 2781782<br>
              WhatsApp: +353892781782</p>
            </div>
            <p>We're committed to delivering a website that not only looks stunning but also drives real business results. Your success is our priority!</p>
          </div>
          <div class="footer">
            <p>LocalGlobalWeb - Dublin Web Designers</p>
            <p>Leixlip, Co. Kildare, Ireland</p>
          </div>
        </div>
      </body>
      </html>
    `
  }
}
