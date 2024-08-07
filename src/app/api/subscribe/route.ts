import { client } from '../../../../lib/api/postmark/subscribe'
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Parse the incoming request body
  const res = await request.json();
  const { email, name } = res;

  // Send email using the Postmark client
  client.sendEmailWithTemplate({
    "From": "michael@doctao.io",
    "To": email,
    "TemplateId": 36877284,
    "TemplateModel": {
      "name": name
    }
  })

  // Return a JSON response
  return NextResponse.json({ message: 'Received', email, name });
}