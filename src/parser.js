import nearley from 'nearley';
import moo from 'moo';
import tokens from './tokens';
import grammar from './compiled';
import nearleyMoo from 'nearley-moo';

export default () => {
  const nm = nearleyMoo.parser(nearley, grammar);
  const parser = nm(moo.compile(tokens));
  parser.ignore('comments');
  return parser;
};
