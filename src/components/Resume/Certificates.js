import React from 'react';
import PropTypes from 'prop-types';

import Certificate from './Certificates/Certificate';

const Certificates = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="certificate" />
    <div className="title">
      <h3>Certificates</h3>
    </div>
    {data.map((certificate) => (
      <Certificate
        data={certificate}
        key={certificate.certificate}
      />
    ))}
  </div>
);

Certificates.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    certificate: PropTypes.string,
    date: PropTypes.string,
  })),
};

Certificates.defaultProps = {
  data: [],
};

export default Certificates;
