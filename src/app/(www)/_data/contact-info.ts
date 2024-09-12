export type Address = {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zipCode: string;
};

export type License = {
  state: string;
  licenseNo: string;
};

export type ContactInfo = {
  address: Address;
  email: string;
  name: string;
  telephone: string;
  licenses: License[];
};

export const contactInfo: ContactInfo = {
  address: {
    line1: '9620 Executive Center Dr N',
    line2: 'Suite 150',
    city: 'St. Petersburg',
    state: 'FL',
    zipCode: '33702',
  },
  email: 'agent.breethomas@gmail.com',
  name: 'Bree Thomas',
  telephone: '1.727.899.6077',
  licenses: [
    {
      state: 'Florida',
      licenseNo: 'G086330',
      //licenseUrl: 'https://licenseesearch.fldfs.com/Licensee/2473302',
      //npmNo: '21053872',
    },
    {
      state: 'Texas',
      licenseNo: '3217908',
      //licenseUrl: 'https://txapps.texas.gov/NASApp/tdi/TdiARManager',
    },
    {
      state: 'Michigan',
      licenseNo: '1318609',
      //licenseUrl: 'https://difs.state.mi.us/locators?searchtype=Insurance',
      //npmNo: '21053872',
    },
  ],
};

export default contactInfo;
