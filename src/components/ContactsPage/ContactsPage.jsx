import React from 'react';
import { Form } from 'react-html5-form';
import { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import s from './ContactsPage.module.scss';
import { useI18n } from '../../services/i18n';
import { sendEmail } from '../../services/mail';
import Html from '../Html';
import Meta from '../Meta';

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
  const { messages, t } = useI18n();
  const [values, setValues] = useState(DEFAULT_VALUES);
  const [response, setResponse] = useState();
  const setValue = prop => event => setValues({ ...values, [prop]: event.target.value });
  const submit = () => {
    return sendEmail(values)
      .then((response) => {
        setResponse(response);

        if (response.status === 'sent') {
          setValues(DEFAULT_VALUES);
        }
      })
      .catch((error) => {
        setResponse({ status: 'error' });
        console.error(error);
      });
  };
  let responseMessage;

  if (response) {
    responseMessage = <div className={`${s.response} ${s[`${response.status}Response`]}`}>
      {t(`contact.form.response.${response.status}`)}
    </div>;
  }

  return (
    <div className="content">
      <Meta name="contact" />
      <h3 className="container-style">{t('contact.name')}</h3>
      <article className={s.container}>
        <div className={s.block}>
          <h3>{t('contact.form.title')}:</h3>
          {responseMessage}
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
                {t('contact.form.send')}
              </button>
            </>)}
          </Form>
        </div>

        <div className={s.block}>
          <h3>{t('contact.phone')}:</h3>
          <div className={s.phones}>
            {messages && messages.menu.phones
              .map((phone, index) => <Html key={index} tag="p" value={phone} />)}
          </div>
          <Html className={s.details} value={t('contact.details')} />
        </div>
      </article>
    </div>
  )
}
