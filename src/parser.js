import nearley from 'nearley';
import grammar from './___';
import lexer from './lexer';
import nearleyMoo from 'nearley-moo';

export default () => {
  const parser = nearleyMoo.parser(nearley, grammar, lexer);
  parser.ignore('COMMENT');
  return parser;
};
