import React, { useState, useEffect } from 'react';
import { get, patch } from 'axios';
import { NameField } from '../fieldHelpers';

function ArticleEdit(props) {
  const initialState = { fname: '', lname: '', phone: '' };
  const [article, setArticle] = useState(initialState);

  useEffect(
    function() {
      async function getArticle() {
        try {
          const response = await get(`/api/articles/${props.match.params._id}`);
          setArticle(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      getArticle();
    },
    [props]
  );

  function handleChange(event) {
    setArticle({ ...article, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    async function updateArticle() {
      try {
        await patch(`/api/articles/${article._id}`, article);
        props.history.push(`/articles/${article._id}`);
      } catch (error) {
        console.log(error);
      }
    }
    updateArticle();
  }

  function handleCancel() {
    props.history.push(`/articles/${article._id}`);
  }

  return (
    <div>
      <h1>Edit {article.title}</h1>
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
          <button type="submit" className="btn btn-primary">
            Update
          </button>
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

export default ArticleEdit;
