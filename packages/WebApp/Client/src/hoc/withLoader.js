import React, { useEffect, useState } from 'react';

export default function withLoader(Element, url) {
  return props => {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function getData() {
        const res = await fetch(url);
        const dogData = await res.json();
        setData(dogData);
      }

      getData();
    }, []);

    if (!data) {
      return <div>Loading...</div>;
    }

    return <Element {...props} data={data} />;
  };
}
