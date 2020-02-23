import React, { useState } from 'react';
import { post } from 'axios';
import ArticleAddForm from './ArticleAddForm';

function ArticleAdd(props) {
  const initialState = { fname: '', lname: '', phone: '+' };
  const [article, setArticle] = useState(initialState);

  function handleChange(event) {
    setArticle({ ...article, [event.target.name]: event.target.value });
  }

  async function postArticle(art) {
    try {
      const response = await post('/api/articles', art);
      props.history.push(`/articles/${response.data._id}`);
    } catch (error) {
      console.log('error', error);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    postArticle(article);
  }

  function handleCancel() {
    props.history.push('/');
  }

  return (
    <ArticleAddForm
      article={article}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  );
}

export default ArticleAdd;
