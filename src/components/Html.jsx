import React from 'react';

export default ({ tag: Tag = 'div', className, value }) => (
  <Tag className={className} dangerouslySetInnerHTML={{ __html: value }} />
);
