import React from 'react';
import PropTypes from 'prop-types';

const Certificate = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h4><a href={data.link}>{data.certificate}</a></h4>
      <p className="daterange"> {data.date}</p>
    </header>
  </article>
);

Certificate.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    certificate: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Certificate;
