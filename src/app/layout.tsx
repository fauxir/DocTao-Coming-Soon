import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./theme-provider";
import { OpenpanelProvider } from "@openpanel/nextjs";

import Head from "next/head";

const inter = Inter({
  weight: ["100", "200", "300", "600", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "DocTao - Comming soon!",
  description:
    "Welcome to the DocTao coming soon page! DocTao is a documentation aggregator designed to enhance your online documentation experience with improved search functionality and timely update notifications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${inter.className} bg-gray-200	min-h-screen dark:bg-[#0d1117] `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <main className="main">
            <OpenpanelProvider
              url="https://api.openpanel.dev"
              clientId="d564d009-c108-457d-ad14-4301b997af50"
              trackScreenViews={true}
              trackAttributes={true}
              trackOutgoingLinks={true}
              // If you have a user id, you can pass it here to identify the user
              // profileId={'123'}
            />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
