"use client"

import React, { useState } from "react";
import data from "../../../data/data";
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { newsletterheading, hideSubscribeForm } = data;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, name})
      });
      const result = await response.json();
      if (response.ok) {
        setEmail('');
        setName('');
        setIsSubscribed(true);
      } else {
        console.error('Subscription failed:', result.message);
      }
    } catch(error) {
      console.error('Error:', error);
    }
  }
 
  if (hideSubscribeForm) return null;

  return (
    <section className="text-center lg:m-7 mt-10 p-3">
      {isSubscribed ? (
        <Alert>
          <AlertDescription>
            Thank you for subscribing! We&apos;ve sent a confirmation email to your inbox.
          </AlertDescription>
        </Alert>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-slate-800 dark:text-slate-100 font-light text-sm leading-6"
            >
              {newsletterheading}
            </label>
            <div className="mt-2 flex-col flex lg:flex md:flex-row">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full placeholder:text-gray-500 pl-[10px] focus:outline-none border-0 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mr-0 rounded-none p-2"
              />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full placeholder:text-gray-500 pl-[10px] focus:outline-none border-0 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mr-0 rounded-none p-2"
              />
              <button className="ml-0 bg-slate-900 sm:w-auto border-slate-800 dark:border-slate-100 rounded-none mt-2 md:mt-0 p-2 border-2 dark:text-white hover:bg-slate-950">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      )}
    </section>
  );
}