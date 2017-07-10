// The compiler
import parser from '../parser';

let p;

beforeAll(() => {
  p = parser();
})

describe('parser', () => {
  it('parses a command', () => {
    expect(p.feed('a, aber, aberdoch > Hello World').results[0]).toEqual({
      type: 'command',
      aliases: ['a', 'aber', 'aberdoch'],
      text: ' Hello World',
    })
  });

  it('parses a command', () => {
    expect(p.feed('a, aber, aberdoch > Hello World').results[0]).toEqual({
      type: 'command',
      aliases: ['a', 'aber', 'aberdoch'],
      text: ' Hello World',
    })
  });
});
