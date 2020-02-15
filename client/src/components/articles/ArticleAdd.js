import React, { useState } from 'react';
import { post } from 'axios';
import { NameField } from '../fieldHelpers';

function ArticleAdd(props) {
  const initialState = { fname: '', lname: '', phone: '+' };
  const [article, setArticle] = useState(initialState);

  function handleChange(event) {
    setArticle({ ...article, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!article.fname || !article.lname || !article.phone) return;

    if (!article.phone.match(/([+][0-9]{2,3})\s?[0-9]{1,2}\s?([0-9]{6,10})/g)) {
      console.log('wrong number');
      return;
    }

    async function postArticle() {
      try {
        const response = await post('/api/articles', article);
        props.history.push(`/articles/${response.data._id}`);
      } catch (error) {
        console.log('error', error);
      }
    }
    postArticle();
  }

  function handleCancel() {
    props.history.push('/articles');
  }

  return (
    <div>
      <h1>Create Article</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        {NameField('fname', article.fname, handleChange)}
        {NameField('lname', article.lname, handleChange)}
        <div className="form-group">
          <label>phone</label>
          <input
            name="phone"
            type="text"
            value={article.phone}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="btn-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
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
