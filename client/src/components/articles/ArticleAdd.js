import React, { useState } from 'react';
import { post } from 'axios';
import { NameField, PhoneField } from '../fieldHelpers';

function ArticleAdd(props) {
  const initialState = { fname: '', lname: '', phone: '+' };
  const [article, setArticle] = useState(initialState);
  const [err, setErr] = useState();

  function handleChange(event) {
    setArticle({ ...article, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!article.fname || !article.lname || !article.phone) return;
    if (!article.phone.match(/([+][0-9]{9,15})/g)) {
      setErr(
        'Wrong format for phone. Should start with a "+" and be minimum total of 9 digits without spaces'
      );
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
    props.history.push('/');
  }

  return (
    <div>
      <h1>Create Article</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        {NameField('fname', article.fname, handleChange)}
        {NameField('lname', article.lname, handleChange)}
        {PhoneField('phone', article.phone, handleChange)}
        {err && <p style={{ color: 'red' }}>{err}</p>}
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
