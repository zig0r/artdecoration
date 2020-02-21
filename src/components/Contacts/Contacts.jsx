import React from 'react';
import s from './Contacts.module.scss'
import { 
  FormattedMessage as T, 
  FormattedHTMLMessage as Thtml, 
  useIntl 
} from 'react-intl';

const Contacts = () => {
  const intl = useIntl();

  return (
    <div className="content">
      <h3 className="container-style">
        <T id="contact.name" />
      </h3>

      <article className={s.container}>
        <div>
          <h3>Пишіть:</h3>
          <form>
            <div class="control-group">
              <label><T id="contact.form.name" />:</label>
              <div class="controls">
                <input type="text" name="feedback[name]" />                                    
              </div>
            </div>

            <div class="control-group">
              <label><T id="contact.form.email" />:</label>
              <div class="controls">
                <input type="text" name="feedback[email]" />                                    
              </div>
            </div>

            <div class="control-group">
              <label><T id="contact.form.text" />:</label>
              <div class="controls">
                <textarea rows="6" cols="30" name="feedback[message]" />                                    
              </div>
            </div>
                    
            <button type="submit" class="btn"><T id="contact.form.send" /></button>
          </form>
        </div>
            
        <div>
          <h3><T id="contact.phone" />:</h3>
          <div className={s.phones}>
            {intl.messages.raw.menu.phones
              .map((phone, index) => <div key={index} dangerouslySetInnerHTML={{ __html: phone }} />)}
          </div>
          <div className="markdown">
            <Thtml id="contact.details" />
          </div>
        </div>
      </article>
    </div>
  )
}

export default Contacts;