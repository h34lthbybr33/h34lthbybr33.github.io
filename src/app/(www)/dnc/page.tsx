import { Metadata } from 'next';
import Link from 'next/link';
import { BsThreeDotsVertical, BsQuestionOctagon } from 'react-icons/bs';
import { FaIdCard, FaPersonCircleQuestion, FaPhone, FaStopwatch } from 'react-icons/fa6';
import { IoKeypad } from 'react-icons/io5';
import { RiSpeakLine } from 'react-icons/ri';

import {
  CallToAction,
  ImageCard,
  Markdown,
  PageTitle,
  Section,
  SectionTitle,
  Tab,
  Tabs,
} from '@www/_ui';
import androidSilenceUnknown from '@www/_assets/img/tabs/android-silence-unknown-callers.png';
import iphoneSilenceUnknown from '@www/_assets/img/tabs/iphone-silence-unknown-callers.png';
import manOnPhone from '@www/_assets/img/stock/man-on-phone.jpg';
import manYelling from '@www/_assets/img/stock/man-yelling-at-phone.jpg';

export const metadata: Metadata = {
  title: 'Do Not Call',
};

const content = `
Insurance estimate websites can become overwhelming and sign you up for
calls you didn't want. I'm sorry if my call added to that stress, but
hopefully I can help you avoid any future ones.

In addition to the **[National Do Not Call Registry](https://www.donotcall.gov/)**,
below are some other tips and tricks you can use to give yourself some piece
of mind from those relentless solicitors!
`;

export default async function DNCPage() {
  return (
    <>
      <PageTitle breadcrumbTitle="Do Not Call" />
      <Section name="dnc">
        <SectionTitle title="Do Not Call">
          <p>Sorry if I bothered you, but maybe I can still help.</p>
        </SectionTitle>
        <ImageCard image={manYelling} background="light">
          <Markdown content={content} />
          <ul>
            <li>
              <BsQuestionOctagon />
              <div>
                <h5>Don't answer calls from unknown numbers</h5>
                If you do answer, hang up immediately.
              </div>
            </li>
            <li>
              <FaPersonCircleQuestion />
              <div>
                <h5>Local calls aren't always local</h5>
                Calls have the ability to misrepresent their origin. A call that looks
                like a local number may not be.
              </div>
            </li>
            <li>
              <IoKeypad />
              <div>
                <h5>If you're asked to press a button&mdash;don't.</h5>
                Scammers use this tactic to identify potential targets. Pressing a button
                may just be a way to validate the number is real.
              </div>
            </li>
          </ul>
        </ImageCard>
        <ImageCard image={manOnPhone} background="light" imageAlignment="left">
          <ul>
            <li>
              <RiSpeakLine />
              <div>
                <h5>Don't respond to vague questions</h5>
                Scammers will ask very broad questions, expecially those that can be
                answered with a simple "yes".
              </div>
            </li>
            <li>
              <FaIdCard />
              <div>
                <h5>Don't provide personal information</h5>
                Never give out personal information such as account numbers, Social
                Security numbers, maiden names or passwords.
              </div>
            </li>
            <li>
              <FaStopwatch />
              <div>
                <h5>Use caution if you're being pressured</h5>A sense of urgency is a
                tactic many scammers will use to rush you into making mis-informed
                decisions.
              </div>
            </li>
          </ul>
        </ImageCard>
      </Section>
      <Section name="disable-unknown">
        <Tabs
          title="Disable the Unknown"
          subtitle="Learn how to stop calls from unknown numbers.">
          <Tab id="iphone" title="iPhone" image={iphoneSilenceUnknown}>
            <p>
              With iOS 13 and later, you can turn on Silence Unknown Callers to help cut
              down on the number of unwanted calls. This will block numbers who you've
              never spoken to (and aren't in your contacts list).
            </p>
            <p>To enable this feature:</p>
            <ol>
              <li>Go to Settings &gt; Phone</li>
              <li>Scroll down to Silence Unknown Callers and tap</li>
              <li>Tap the toggle to enable this feature</li>
            </ol>
            <p>
              For more information, please visit{' '}
              <Link
                href="https://support.apple.com/en-us/111106"
                target="_blank"
                rel="nofollow">
                Apple's website
              </Link>
              .
            </p>
          </Tab>
          <Tab id="android" title="Android" image={androidSilenceUnknown}>
            <p>
              With Android 6 and later, you can turn on unknown number blocking to help
              cut down on the number of unwanted calls. This will block numbers who you've
              never spoken to (and aren't in your contacts list).
            </p>
            <p>To enable this feature:</p>
            <ol>
              <li>
                Open your phone app (<FaPhone />)
              </li>
              <li>
                Tap More (<BsThreeDotsVertical />
                ), then click Settings
              </li>
              <li>Tap on Block numbers</li>
              <li>Enable Block calls from unknown numbers</li>
            </ol>
            <p>
              For more information, please visit{' '}
              <Link
                href="https://support.google.com/phoneapp/answer/6325463?hl=en"
                target="_blank"
                rel="nofollow">
                Google's website
              </Link>
              .
            </p>
          </Tab>
        </Tabs>
      </Section>
      <CallToAction background="light">
        <h2>National Do Not Call Registry</h2>
        <p>
          Reputable companies will honor this list, so be sure you're already signed up!
        </p>
        <Link
          href="https://www.donotcall.gov/"
          target="_blank"
          rel="nofollow"
          className="btn btn-primary">
          Visit Website
        </Link>
      </CallToAction>
    </>
  );
}
