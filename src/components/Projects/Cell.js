import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

fetch('https://q3d0rlossg.execute-api.us-east-1.amazonaws.com/default/invoiceContainer', {
  method: 'POST',
  headers: {
            'x-api-key': '4KQfn4znnK8caRlTklZrFcUNNJvB6oFuWFKF4dh0',
            'Content-Type': 'text/plain'
        },
  body: JSON.stringify({
    firstParam: 'yourValue'
  })
})

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <a href={data.link} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
