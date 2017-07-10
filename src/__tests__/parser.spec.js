// The compiler
import parser from '../parser';

let p;

beforeEach(() => {
  p = parser();
})

describe('parser', () => {
  it('parses a command', () => {
    expect(p.feed('a, aber, aberdoch > Hello World').results[0]).toEqual({
      type: 'command',
      aliases: ['a', 'aber', 'aberdoch'],
      text: 'Hello World',
    })
  });

  it('parses a simple prompt', () => {
    expect(p.feed('? Howdy how\'s it going?').results[0]).toEqual({
      type: 'prompt',
      input: false,
      text: "Howdy how's it going?",
    })
  });

  it('parses a simple input prompt', () => {
    expect(p.feed('?:input Howdy how\'s it going?').results[0]).toEqual({
      type: 'prompt',
      input: 'input',
      text: "Howdy how's it going?",
    })
  });

  it('parses a simple execution statement', () => {
    expect(p.feed('  -> ./node.sh').results[0]).toEqual({
      type: 'execution',
      command: "./node.sh",
    })
  });
});
