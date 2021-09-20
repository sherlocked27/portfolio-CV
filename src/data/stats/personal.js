import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1998-08-27T01:28:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Jaipur, India',
  },
  {
    key: 'shows',
    label: 'TV Shows Watched',
    value: <a href = "https://www.tvtime.com/en/user/9852367/profile">50</a>,
  },
  {
    key: 'hero',
    label: 'Favorite Superhero',
    value: 'Dr. Strange',
  },
  {
    key: 'book',
    label: 'Favorite Book',
    value: 'Sapiens: A Brief History of Humankind',
  },
];

export default data;
