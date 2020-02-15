import React from 'react';

function Capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function NameField(name, str, func) {
  return (
    <div className="form-group">
      <label>fname</label>
      <input
        name={name}
        type="text"
        value={Capitalize(str)}
        onChange={func}
        className="form-control"
        required
      />
    </div>
  );
}

function PhoneField(name, nr, func) {
  return (
    <div className="form-group">
      <label>phone</label>
      <input
        name={name}
        type="text"
        value={nr}
        onChange={func}
        className="form-control"
      />
    </div>
  );
}

function NumberFormatter(num) {
  const prefix = num.substring(1, 3);
  const national = num.substring(3, 5);
  const personal = num.substring(5, num.length);
  return '+' + prefix + ' ' + national + ' ' + personal;
}

export { NameField, PhoneField, NumberFormatter };
