import React from 'react';
import ArticleAddForm from './ArticleAddForm';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { NameField, PhoneField } from '../fieldHelpers';

afterEach(cleanup);

describe('Adds', () => {
  it('adds smt', () => {
    const handleSubmit = jest.fn();
    const handleCancel = jest.fn();
    const handleChange = jest.fn();
    const article = { fname: 'name', lname: 'one', phone: '+32 01234567' };
    const { getByTestId } = render(
      <ArticleAddForm
        article={article}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
      />
    );
    getByTestId('form').dispatchEvent(new Event('submit'));
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    fireEvent.click(getByTestId('cancelButton'));
    expect(handleCancel).toHaveBeenCalledTimes(1);
  });

  it('edits first name', () => {
    const func = jest.fn();
    const { getByLabelText } = render(
      <NameField label="First Name" name="fname" str="sdgf" func={func} />
    );
    fireEvent.change(getByLabelText('First Name'), {
      target: {
        value: 'sdvzd'
      }
    });
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('edits last name', () => {
    const func = jest.fn();
    const { getByLabelText } = render(
      <NameField label="Last Name" name="lname" str="sdgf" func={func} />
    );
    fireEvent.change(getByLabelText('Last Name'), {
      target: {
        value: 'sdvzd'
      }
    });
    expect(func).toHaveBeenCalledTimes(1);
  });
});
