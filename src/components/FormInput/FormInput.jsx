import React from 'react';
import s from '../Contacts/Contacts.module.scss';
import { InputGroup } from "react-html5-form";
import { FormattedMessage as T, useIntl } from 'react-intl';

const FormInput = ({ name, className, scope, controlsClassName, type = 'text', ...validation }) => {
  const intl = useIntl();

  return (
    <InputGroup
      validate={[name]}
      className={className}
      translate={{
        [name]: {
          valueMissing: 'validation.valueMissing',
          typeMismatch: `validation.invalid${type[0].toUpperCase() + type.slice(1)}`,
        }
      }}>
      {({ error }) => (<>
        <div className={error ? 'has-error' : ''}>
          <label><T id={`${scope}.${name}`} />:</label>
          <div>
            {type === 'textarea' ?
              <textarea
                name={name}
                rows="6"
                cols="30"
                {...validation}
              /> :
              <input
                type={type}
                name={name}
                {...validation}
              />
            }
          </div>
        </div>
        {error && <div class="error">{intl.formatMessage({ id: error })}</div>}
      </>)}
    </InputGroup >
  );
};

FormInput.scoped = scopedProps => props => <FormInput {...scopedProps} {...props} />

export default FormInput;
