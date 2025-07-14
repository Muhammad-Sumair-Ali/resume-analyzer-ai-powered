import { connectDb } from "@/app/config/connectdb";
import { Contact } from "@/app/model/contact.model";
import { NextRequest, NextResponse } from "next/server";


interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}


export async function POST(request: NextRequest) {
  try {
    await connectDb();

    const body: ContactFormData = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    if (name.length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters long' },
        { status: 400 }
      );
    }
    if (subject.length < 5) {
      return NextResponse.json(
        { error: 'Subject must be at least 5 characters long' },
        { status: 400 }
      );
    }
    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });
    await newContact.save();

    // console.log('Contact form submission saved:', {
    //   name,
    //   email,
    //   subject,
    //   message,
    //   timestamp: new Date().toISOString(),
    // });

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully! I\'ll get back to you soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectDb();
  try {
    const messages = await Contact.find();
    return NextResponse.json(
      { success: true, data: messages },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error!" }, { status: 500 });
  }
}

