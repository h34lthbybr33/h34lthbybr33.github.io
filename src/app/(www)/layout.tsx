import type { Metadata } from 'next';
import { Roboto, Poppins, Raleway } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

import siteInfo from '@www/_data/site-info';
import BookAppointmentProvider from '@www/_ctx/BookAppointment';
import Header from '@www/_components/Header';
import Footer from '@www/_components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@www/_assets/css/main.css';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
});
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
});
const raleway = Raleway({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: siteInfo.title,
  description: siteInfo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isVercel = !!process.env.NEXT_PUBLIC_VERCEL_URL;

  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${poppins.className} ${raleway.className} antialiased`}>
        <BookAppointmentProvider>
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </BookAppointmentProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
        {isVercel && <VercelAnalytics />}
      </body>
    </html>
  );
}
