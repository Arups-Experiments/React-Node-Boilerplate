import withLoader from '../hoc/withLoader';
import React from 'react';

const DogList = withLoader(function DogImages(props) {
  return props.data.message.map((dog, index) => (
    <img src={dog} alt="Dog" key={index} />
  ));
}, 'https://dog.ceo/api/breed/labrador/images/random/6');

export default DogList;
