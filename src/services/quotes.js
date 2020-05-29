import { createHookForList } from './hooks';
import memoize from 'lodash/memoize';

export const useQuotes = createHookForList(memoize(lang => import(`../content/quotes.${lang}.yml`)))
