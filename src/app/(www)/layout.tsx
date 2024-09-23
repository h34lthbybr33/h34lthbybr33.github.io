import { type Metadata } from 'next';
import { getImageProps } from 'next/image';
import { Roboto, Poppins, Raleway } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import classNames from 'classnames';

import contactInfo from '@www/_data/contact-info';
import siteInfo from '@www/_data/site-info';
import {
  type ISiteContext,
  CalendlyContextProvider,
  Header,
  SiteContext,
  Footer,
} from './_ui';
import socialMedia from '@www/_data/social-links';

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

const siteImageProps = getImageProps({
  alt: '',
  width: 300,
  height: 300,
  src: require('@www/_assets/img/logo/full.svg'),
});

export const metadata: Metadata = {
  title: `${siteInfo.title} | ${siteInfo.description}`,
  description: siteInfo.description,
  keywords: siteInfo.keywords,
  openGraph: {
    type: 'website',
    images: siteImageProps.props.src,
    title: siteInfo.title,
    description: siteInfo.description,
  },
};

interface RootLayoutProps {
  children?: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }): JSX.Element => {
  const Analytics = () => {
    if (process.env.NODE_ENV !== 'development') {
      return (
        <>
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
          {process.env.NEXT_PUBLIC_VERCEL_URL && <VercelAnalytics />}
        </>
      );
    }
    return <script dangerouslySetInnerHTML={{ __html: '/* Analytics Disabled */' }} />;
  };
  const bodyClassName = classNames(
    roboto.className,
    poppins.className,
    raleway.className,
    'antialiased',
  );
  const siteContextValue: ISiteContext = {
    contactEmail: contactInfo.email,
    contactName: contactInfo.name,
    contactTelephone: contactInfo.telephone,
    siteTitle: siteInfo.title,
    siteDescription: siteInfo.description,
    socialMedias: socialMedia,
  };

  return (
    <html lang="en">
      <body className={bodyClassName}>
        <SiteContext value={siteContextValue}>
          <CalendlyContextProvider>
            <Header />
            <main className="main">{children}</main>
            <Footer />
          </CalendlyContextProvider>
        </SiteContext>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
