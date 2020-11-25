import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { numberFormatter } from '../fieldHelpers';

function ArticleInfo(props) {
  const [article, setArticle] = useState({});

  useEffect(
    function () {
      async function getArticle() {
        try {
          const response = await axios.get(
            `/api/articles/${props.match.params._id}`
          );
          setArticle(response.data);
        } catch (error) {
          console.log('error', error);
        }
      }
      getArticle();
    },
    [props]
  );

  async function handleDelete() {
    try {
      await axios.delete(`/api/articles/${props.match.params._id}`);
      props.history.push('/');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2>
        {article.fname} {article.lname}
      </h2>
      <p>Number: {article.phone && numberFormatter(article.phone)}</p>
      <br />
      <div className="btn-group">
        <Link to={`/articles/${article._id}/edit`} className="btn btn-primary">
          Edit
        </Link>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
        <Link to="/" className="btn btn-secondary">
          Close
        </Link>
      </div>
    </div>
  );
}

export default ArticleInfo;
