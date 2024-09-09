import Image from 'next/image';
import Hero from './_components/Hero';
//import { InlineWidget } from 'react-calendly';

export default function Home() {
  return (
    <div>
      <Hero id="home" background="light" />
      {/*<InlineWidget url={process.env.NEXT_PUBLIC_CALENDLY_URL||''} />*/}
    </div>
  );
}
