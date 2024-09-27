import { Metadata } from 'next';
import { BiSolidPencil, BiNotepad } from 'react-icons/bi';
import { FaMagnifyingGlass, FaPeopleGroup } from 'react-icons/fa6';

import { IconCard, IconCardList, PageTitle } from '@www/_ui';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
};

export default async function Schedule() {
  return (
    <>
      <PageTitle breadcrumbTitle="Schedule" />
      <IconCardList
        title="Let's meet"
        subtitle="Let's find a time to review what's on your mind!">
        <IconCard
          icon={<BiSolidPencil />}
          title="Request a quote"
          titleHref="/schedule/quote">
          <p>
            Let's use this opportunity to discuss your current needs and find an option
            that get's you the coverage you need.
          </p>
        </IconCard>
        <IconCard
          icon={<FaMagnifyingGlass />}
          title="Review policy"
          titleHref="/schedule/quote">
          <p>
            Let's use this opportunity to discuss your current needs and find an option
            that get's you the coverage you need.
          </p>
        </IconCard>
        <IconCard icon={<BiNotepad />} title="Application" titleHref="/schedule/quote">
          <p>
            Let's use this opportunity to discuss your current needs and find an option
            that get's you the coverage you need.
          </p>
        </IconCard>
        <IconCard
          icon={<FaPeopleGroup />}
          title="Group Policy"
          titleHref="/schedule/quote">
          <p>
            Let's use this opportunity to discuss your current needs and find an option
            that get's you the coverage you need.
          </p>
        </IconCard>
      </IconCardList>
    </>
  );
}
