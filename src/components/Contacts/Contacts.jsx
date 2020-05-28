import React from 'react';
import { Form } from 'react-html5-form';
import FormInput from '../FormInput/FormInput';
import s from './Contacts.module.scss';
import {
  FormattedMessage as T,
  FormattedHTMLMessage as Thtml,
  useIntl
} from 'react-intl';
import { useState } from 'react';

const ContactInput = FormInput.scoped({
  scope: 'contact.form',
  className: s.controlGroup,
});

const DEFAULT_VALUES = {
  name: '',
  email: '',
  message: '',
};

export default () => {
  const intl = useIntl();
  const [values, setValues] = useState(DEFAULT_VALUES);
  const setValue = prop => event => setValues({ ...values, [prop]: event.target.value });

  function submit() {
    // TODO: send request to server
    console.log(values)
    setValues(DEFAULT_VALUES)
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  }

  return (
    <div className="content">
      <h3 className="container-style">
        <T id="contact.name" />
      </h3>

      <article className={s.container}>
        <div className={s.block}>
          <h3><T id="contact.form.title" />:</h3>

          <Form className={s.form} onSubmit={submit}>
            {({ pristine, submitting }) => (<>
              <ContactInput
                name="name"
                className="input-block"
                required
                value={values.name}
                onChange={setValue('name')}
              />
              <ContactInput
                name="email"
                type="email"
                className="input-block"
                value={values.email}
                onChange={setValue('email')}
              />
              <ContactInput
                name="message"
                type="textarea"
                required
                className="input-block"
                value={values.message}
                onChange={setValue('message')}
              />
              <button type="submit" className={s.btn} disabled={pristine || submitting}>
                <T id="contact.form.send" />
              </button>
            </>)}
          </Form>
        </div>

        <div className={s.block}>
          <h3><T id="contact.phone" />:</h3>
          <div className={s.phones}>
            {intl.messages.raw.menu.phones
              .map((phone, index) => <p key={index} dangerouslySetInnerHTML={{ __html: phone }} />)}
          </div>
          <div className={s.details}>
            <Thtml id="contact.details" />
          </div>
        </div>
      </article>
    </div>
  )
}