import React, { useState } from 'react';
import { post } from 'axios';

function ArticleAdd(props) {
  const initialState = { fname: '', lname: '', phone: '' };
  const [article, setArticle] = useState(initialState);

  function handleChange(event) {
    setArticle({ ...article, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!article.fname || !article.lname || !article.phone) return;
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
        <div className="form-group">
          <label>fname</label>
          <input
            name="fname"
            type="text"
            value={article.fname}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>lname</label>
          <input
            name="lname"
            type="text"
            value={article.lname}
            onChange={handleChange}
            className="form-control"
          />
        </div>
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
