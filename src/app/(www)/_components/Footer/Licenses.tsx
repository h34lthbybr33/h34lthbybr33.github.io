'use client';

import contactInfo from '@www/_data/contact-info';

export function Licenses() {
  return (
    <div className="col-sm-4 footer-links">
      <h4>Licensed States</h4>
      <ul>
        {contactInfo.licenses.map((license, index) => (
          <li key={index}>
            {license.state}: {license.licenseNo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Licenses;
