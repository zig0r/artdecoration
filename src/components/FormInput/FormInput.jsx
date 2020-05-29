import React from 'react';
import { InputGroup } from 'react-html5-form';
import { useI18n } from '../../services/i18n';

const FormInput = ({ name, className, scope, controlsClassName, type = 'text', ...validation }) => {
  const { t } = useI18n();

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
          <label>{t(`${scope}.${name}`)}:</label>
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
        {error && <div className="error">{t(error)}</div>}
      </>)}
    </InputGroup >
  );
};

FormInput.scoped = scopedProps => props => <FormInput {...scopedProps} {...props} />

export default FormInput;
