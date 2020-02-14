import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(function() {
    async function getArticles() {
      try {
        const response = await axios.get('/api/articles');
        setArticles(response.data);
      } catch (error) {
        console.log('error', error);
      }
    }
    getArticles();
  }, []);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = articles.filter(article =>
      article.fname.includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm, articles]);

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <ul>
        {searchResults.map((item, key) => (
          <li key={key}>
            {item.fname} - {item.lname} - {item.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
