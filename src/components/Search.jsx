import React, {useEffect, useState} from 'react';
let timeout;
export default function Search({setData, placeholder}) {
  const [title, setTitle] = useState('');
  const getData = async (e) => {
    clearTimeout(timeout);
    setTitle(e.target.value);
    if (e.target.value.length >= 3) {
      timeout = setTimeout(() => {
        setData(e.target.value);
      }, 300);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div className="search">
      <img className="search-icon" src="./assets/icon-search.svg" alt="" />
      <input type="text" onChange={getData} placeholder={placeholder} value={title} />
    </div>
  );
}
