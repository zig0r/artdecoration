function extractField(object, fieldName) {
  switch (fieldName) {
    case 'content':
      if (!object.description) {
        return '';
      }

      let content = object.description;
      const index = content.indexOf('</h1>');

      if (index !== -1) {
        content = content.slice(index + 5);
      }

      return content
        .replace(/<[^>]+>/g, ' ')
        .trim()
        .slice(0, 200);
    default:
      return object[fieldName];
  }
}
export default {
  extractField,
  storeFields: ['content'],
  fields: ['title', 'content'],
  searchOptions: {
    boost: {
      title: 2,
    },
  },
};
