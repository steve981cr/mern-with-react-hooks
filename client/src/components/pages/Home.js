import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    const results = articles.filter(
      article =>
        article.fname.toLowerCase().includes(searchTerm) ||
        article.lname.toLowerCase().includes(searchTerm) ||
        article.phone.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm, articles]);

  return (
    <div>
      <Link to="/articles/new" className="btn btn-primary float-right">
        Create Article
      </Link>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <ul>
        {searchResults.map((item, key) => (
          <li key={key}>
            <Link to={`/articles/${item._id}`}>
              {item.fname} {item.lname} - {item.phone}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
