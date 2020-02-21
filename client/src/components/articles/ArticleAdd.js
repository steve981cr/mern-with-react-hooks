import React, { useState } from 'react';
import { post } from 'axios';
import { NameField, PhoneField } from '../fieldHelpers';

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
        <NameField
          label="First Name"
          name="fname"
          str={article.fname}
          func={handleChange}
        />
        <NameField
          label="Last Name"
          name="lname"
          str={article.lname}
          func={handleChange}
        />
        <PhoneField name="phone" nr={article.phone} func={handleChange} />
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
