import React from 'react';
import { Helmet } from 'react-helmet';
import { useI18n } from '../services/i18n';

export default (props) => {
  const { messages } = useI18n();
  let meta;
  let title;

  if (props.use) {
    meta = props.use.meta;
    title = props.use.title || title;
  } else if (props.name) {
    meta = messages && messages[props.name] ? messages[props.name].meta : null;
  }

  console.log(meta)

  if (!meta) {
    return null;
  }

  return (
    <Helmet titleTemplate={messages.titleTemplate}>
      <title>{title || meta.title}</title>
      {meta.description && <meta name="description" content={meta.description} />}
      {meta.keywords && <meta name="keywords" content={meta.keywords} />}
    </Helmet>
  );
};
