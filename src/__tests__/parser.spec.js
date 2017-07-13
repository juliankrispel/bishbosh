// The compiler
import parser from '../parser';

let p;

beforeEach(() => {
  p = parser();
});

describe('parser', () => {
  it('parses', () => {
    // console.log(JSON.stringify(p.feed('aber > Hello there').results, null, 2));
    // console.log('a, aber, aberdoch -> Hello there my friend');
    // console.log(p.feed('ab, aber > Hello'));
    // p.feed('a')

    // p.feed('a, aber, aberdoch > Hello world');
    // console.log(p.results);
  });
});
