import React from 'react';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function NameField({ label, name, str, func }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type="text"
        value={capitalize(str)}
        onChange={func}
        className="form-control"
        required
      />
    </div>
  );
}

function PhoneField({ name, nr, func }) {
  return (
    <div className="form-group">
      <label>Phone</label>
      <input
        name={name}
        type="text"
        value={nr}
        onChange={func}
        className="form-control"
        pattern="[+][0-9]{9,15}"
        title="Phone number should start with a '+', consist of numbers only and be 9 to 15 digits, not contain spaces"
      />
    </div>
  );
}

function numberFormatter(num) {
  const prefix = num.substring(1, 3);
  const national = num.substring(3, 5);
  const personal = num.substring(5, num.length);
  return '+' + prefix + ' ' + national + ' ' + personal;
}

export { NameField, PhoneField, numberFormatter };
