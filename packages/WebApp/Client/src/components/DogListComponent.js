import withLoader from '../hoc/withLoader';
import React from 'react';

const DogList = withLoader(function DogImages(props) {
  const src = props.data.message;
  return <img src={src} alt="Dog" />;
}, '/dogs');

export default DogList;
