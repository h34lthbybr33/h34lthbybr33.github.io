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
  address?: Address;
  email: string;
  name: string;
  telephone: string;
  texting: string;
  licenses: License[];
  serving: {
    [key: string]: string;
  };
  npnNumber: string;
};

export const contactInfo: ContactInfo = {
  email: 'info@healthbybree.com',
  name: 'Bree Thomas',
  telephone: '1.813.489.9844',
  texting: '1.813.489.9844',
  licenses: [
    {
      state: 'Florida',
      licenseNo: 'G086330',
      //licenseUrl: 'https://licenseesearch.fldfs.com/Licensee/2473302',
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
    },
  ],
  serving: {
    AL: 'Alabama',
    AK: 'Alaska',
    CO: 'Colorado',
    DE: 'Delaware',
    FL: 'Florida',
    GA: 'Georgia',
    IL: 'Illinois',
    IN: 'Indiana',
    IA: 'Iowa',
    KS: 'Kansas',
    KT: 'Kentucky',
    LA: 'Louisiana',
    MD: 'Maryland',
    MI: 'Michigan',
    MS: 'Mississippi',
    MO: 'Missouri',
    MT: 'Montana',
    NE: 'Newbraska',
    NV: 'Nevada',
    NC: 'North Carolina',
    OH: 'Ohio',
    OK: 'Oklahoma',
    SC: 'South Carolina',
    SD: 'South Dakota',
    TN: 'Tennessee',
    TX: 'Texas',
    UT: 'Utah',
    VA: 'Virgina',
    WV: 'West Virginia',
    WI: 'Wisconsin',
    WY: 'Wyoming',
  },
  npnNumber: '21053872',
};

export default contactInfo;
