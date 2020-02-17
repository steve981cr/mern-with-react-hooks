import React, { useState } from 'react';
import { post } from 'axios';
import { firstNameField, lastNameField, phoneField } from '../fieldHelpers';

function ArticleAdd(props) {
  const initialState = { fname: '', lname: '', phone: '+' };
  const [article, setArticle] = useState(initialState);
  const [err, setErr] = useState();

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
    if (!article.fname || !article.lname || !article.phone) return;
    if (!article.phone.match(/([+][0-9]{9,15})/g)) {
      setErr(
        'Wrong format for phone. Should start with a "+" and be minimum total of 9 digits without spaces'
      );
      return;
    }
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
        {firstNameField('fname', article.fname, handleChange)}
        {lastNameField('lname', article.lname, handleChange)}
        {phoneField('phone', article.phone, handleChange)}
        {err && <p style={{ color: 'red' }}>{err}</p>}
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
