import React, { useState } from 'react';
import { post } from 'axios';
import { nameField, phoneField } from '../fieldHelpers';

function ArticleAdd(props) {
  const initialState = { fname: '', lname: '', phone: '+' };
  const [article, setArticle] = useState(initialState);

  function handleChange(event) {
    setArticle({ ...article, [event.target.name]: event.target.value });
  }

  async function postArticle() {
    try {
      const response = await post('/api/articles', article);
      props.history.push(`/articles/${response.data._id}`);
    } catch (error) {
      console.log('error', error);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    postArticle();
  }

  function handleCancel() {
    props.history.push('/');
  }

  return (
    <div>
      <h1>Create Contact</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        {nameField('First Name', 'fname', article.fname, handleChange)}
        {nameField('Last Name', 'lname', article.lname, handleChange)}
        {phoneField('phone', article.phone, handleChange)}
        <div className="btn-group">
          <button className="btn btn-primary">Submit</button>
          <button
            type="button"
            onClick={handleCancel}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ArticleAdd;
