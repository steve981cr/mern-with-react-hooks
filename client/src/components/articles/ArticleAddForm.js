import React from 'react';
import { NameField, PhoneField } from '../fieldHelpers';

function ArticleAddForm({ article, handleSubmit, handleCancel, handleChange }) {
  return (
    <div>
      <h1>Create Contact</h1>
      <hr />
      <form onSubmit={handleSubmit} data-testid="form">
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
          <button data-testid="submitButton" className="btn btn-primary">
            Submit
          </button>
          <button
            data-testid="cancelButton"
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
export default ArticleAddForm;
