import React from 'react';

function Capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
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

function phone(params) {}

export { NameField };
