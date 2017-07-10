// The compiler
import nearley from 'nearley';
import parser from '../build/grammar';

export default () => (
  new nearley.Parser(parser.ParserRules, parser.ParserStart)
);
