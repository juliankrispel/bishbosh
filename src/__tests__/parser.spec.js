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

  // it('parses a simple prompt', () => {
  //   expect(p.feed('? Howdy how\'s it going?').results[0]).toEqual({
  //     type: 'prompt',
  //     input: false,
  //     text: "Howdy how's it going?",
  //   })
  // });

  // it('parses a simple input prompt', () => {
  //   expect(p.feed('?:input Howdy how\'s it going?').results[0]).toEqual({
  //     type: 'prompt',
  //     input: 'input',
  //     text: "Howdy how's it going?",
  //   })
  // });

  // it('parses a simple execution statement', () => {
  //   expect(p.feed('  -> ./node.sh').results[0]).toEqual({
  //     type: 'execution',
  //     command: "./node.sh",
  //   })
  // });

  // it('parses plain text', () => {
  //   const text = 'Hello world how is it going?';
  //   expect(p.feed(text).results).toEqual({
  //     type: 'plain_text',
  //     text,
  //   });
  // });

  // it('parses styled text', () => {
  //   const text = 'Hello {green}world how{/green} is it going?';
  //   console.log(p.feed(text).results);
  //   // expect(p.feed(text).results).toEqual({
  //   //   type: 'plain_text',
  //   //   text,
  //   // });
  // });

});
