import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import './index.css';

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;

  if (type === 'textArea') {
    return (
      <div className="field">
        <label htmlFor={fieldId}>
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            placeholder={label}
            rows="4"
          />
        </label>
      </div>
    );
  }
  return (
    <div className="field">
      <label htmlFor={fieldId}>
        <input
          id={fieldId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={label}
        />
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
