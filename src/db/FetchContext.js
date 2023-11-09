import { createContext } from 'react'
import { useState } from 'react';


export const FetchContext = createContext();

export const FetchContextProvider = (props) => {
  const [apiData, setApiData] = useState(null);
  const [inputLink, setInputLink] = useState('');
  const [loading, setloading] = useState(false)

  const fetchData = async () => {
    setloading(true)
    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${inputLink}&length=3`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3a454b8756msh519093a17205cdcp10a233jsn4dd37b6162c8',
        'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setApiData(result.summary);
      setloading(false)
      console.log(result.summary);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDataButton = async () => {
    await fetchData();
  };

  const handleInput = (e) => {
    const value = e.target.value;
    setInputLink(value);
  };

  const contextValue = { apiData, loading, fetchDataButton, fetchData, inputLink, handleInput };

  return (
    <FetchContext.Provider value={contextValue}>
      {props.children}
    </FetchContext.Provider>
  );
};
