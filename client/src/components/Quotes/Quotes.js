import React, { useEffect, useState } from 'react';
import axios from "axios";

const Quotes = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [quote, setQuote] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    axios.get("https://api.quotable.io/random")
      .then(
        (result) => {
          setIsLoaded(true);
          setQuote(result.data);
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
        <div>
            <p key={quote.id}>"{quote.content}"</p>
            <br></br>
            <p>- {quote.author}</p>
        </div>
    );
  };
};


export default Quotes;
