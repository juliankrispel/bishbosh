const tokens = {
  commments: /#[^\n\r]*/,
  comma: ',',
  command_op: '>',
  word: /[\s\t ]*([a-zA-Z0-9_]+)[\s\t ]*/,
  //   ws: {
  //     match: /[ \n\r\s\t]+/,
  //     lineBreaks: true,
  //   },
  // _: /[\s\t ]*/,
  text: /[^\n\r]+/
};

module.exports = tokens;
