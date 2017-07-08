// The compiler
import nearley from 'nearley';
import parser from '../parser';

let p;

beforeAll(() => {
  p = new nearley.Parser(parser.ParserRules, parser.ParserStart);
})

describe('parser', () => {
  it('', () => {
  });
});
