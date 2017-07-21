// The compiler
import parser from '../parser';

let p;

beforeEach(() => {
  p = parser();
});

const mapNode = (node) => {
  const { type, left, right, block } = node;
  const res = { type };
  if (left) res.left = left.map(mapNode);
  if (right) res.right = right.map(mapNode);
  if (block) res.block = block.map(mapNode);
  return res;
};

// const mapNode = (node) => {
//   const { type, left = [], right = [] } = node;
//   return {
//     type,
//     left: left.map(({type, value}) => ({type, value})),
//     right: right.map(({type, value}) => ({type, value})),
//   }
// };


describe('parser', () => {
  //   it('parses text statements', () => {
  //     const input = `
  //     Hello there
  //     How can I help
  //     Would you like a coffee?
  //     `;
  //     p.feed(input);
  //     console.log(JSON.stringify(p.results, null, 2));
  //   });

  // it('throws for commands without blocks', () => {
  //   const input = `a, b, c > Hey there mate`;
  //   expect(() => p.feed(input)).toThrow();
  // });


  it('parses commands with blocks', () => {
    const input = `a, b, c > Hey there mate
    Thats great mate`;
    p.feed(input);
    expect(p.results[0].map(mapNode))
    .toEqual([{
      type: 'COMMAND',
      left: [
        { type: 'IDENT'},
        { type: 'IDENT'},
        { type: 'IDENT'},
      ],
      right: [
        { type: 'TEXT'},
      ],
      block: [
        { type: 'TEXT'},
      ]
    }]);
  });

  it('parses command with nested command', () => {
    const input = `a, b, c > Hey there mate
    a > Thats great mate
      Hello friend!`;
    p.feed(input);
    expect(p.results[0].map(mapNode))
    .toEqual([{
      type: 'COMMAND',
      left: [
        { type: 'IDENT'},
        { type: 'IDENT'},
        { type: 'IDENT'},
      ],
      right: [
        { type: 'TEXT'},
      ],
      block: [
        {
          type: 'COMMAND',
          left: [
            { type: 'IDENT' }
          ],
          right: [
            { type: 'TEXT'},
          ],
          block: [
            { type: 'TEXT'},
          ]
        }
      ]
    }]);
  });

  it('parses command with multiple nested command blocks', () => {
    const input = `a, b, c > Hey there mate
    a > Thats great mate
      Hello friend!
    b > Thats great mate
      Hello friend!`;

    p.feed(input);

    expect(p.results[0].map(mapNode))
    .toEqual([{
      type: 'COMMAND',
      left: [
        { type: 'IDENT'},
        { type: 'IDENT'},
        { type: 'IDENT'},
      ],
      right: [
        { type: 'TEXT'},
      ],
      block: [
        {
          type: 'COMMAND',
          left: [
            { type: 'IDENT' }
          ],
          right: [
            { type: 'TEXT'},
          ],
          block: [
            { type: 'TEXT'},
          ]
        },
        {
          type: 'COMMAND',
          left: [
            { type: 'IDENT' }
          ],
          right: [
            { type: 'TEXT'},
          ],
          block: [
            { type: 'TEXT'},
          ]
        }
      ]
    }]);
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
