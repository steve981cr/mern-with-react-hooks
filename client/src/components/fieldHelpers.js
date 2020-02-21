import React from 'react';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function nameField(label, name, str, func) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
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

function phoneField(name, nr, func) {
  return (
    <div className="form-group">
      <label>Phone</label>
      <input
        pattern="[+][0-9]{9,15}"
        title="Phone number should start with a '+', consist of numbers only and be 9 to 15 digits, not contain spaces"
        name={name}
        type="text"
        value={nr}
        onChange={func}
        className="form-control"
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

export { nameField, phoneField, numberFormatter };
