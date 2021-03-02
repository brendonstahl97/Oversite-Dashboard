import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [quote, setQuote] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://api.quotable.io/random", 
    { mode: 'no-cors'})
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setQuote(result);
          console.log("🚀 ~ file: Quotes.js ~ line 20 ~ useEffect ~ result", result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            // return error
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
          {quote.map(q => (
          <li key={q.id}>
            {q.content} - {q.author}
          </li>
          ))}
      </ul>
    );
  }
};


export default Quotes;
