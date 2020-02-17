import React, { useState, useEffect } from 'react';
import { get, patch } from 'axios';
import { firstNameField, lastNameField, phoneField } from '../fieldHelpers';

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

  async function updateArticle() {
    try {
      await patch(`/api/articles/${article._id}`, article);
      props.history.push(`/articles/${article._id}`);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
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
        {firstNameField('fname', article.fname, handleChange)}
        {lastNameField('lname', article.lname, handleChange)}
        {phoneField('phone', article.phone, handleChange)}
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
