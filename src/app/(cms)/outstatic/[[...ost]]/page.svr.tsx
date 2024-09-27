import { Outstatic } from 'outstatic';
import { OstClient } from 'outstatic/client';

import 'outstatic/outstatic.css';

interface PageProps {
  params: {
    ost: string[];
  };
}

export default async function Page({ params }: PageProps): Promise<JSX.Element> {
  const ostData = await Outstatic();
  return <OstClient ostData={ostData} params={params} />;
}
