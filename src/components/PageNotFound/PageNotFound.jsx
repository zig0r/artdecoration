import React from 'react';
import Html from '../Html';
import { useI18n } from '../../services/i18n';

export default () => {
  const { t } = useI18n();

  return (
    <div className="content">
      <h3 className="container-style">{t('notfound.name')}</h3>
      <Html className="markdown" value={t('notfound.content')} />
    </div>
  );
};
