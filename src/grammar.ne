@builtin "number.ne"
@builtin "whitespace.ne"

@{%
  const nm = require('nearley-moo');
  const tokens = require('./tokens');
  nm(tokens);
%}

STATEMENTS -> STATEMENT:+ {% data => {
  return data[0]
}%}

STATEMENT -> ( %INDENT:? (
  COMMAND |
  %TEXT |
  %NL
)) {% data => data[0][1][0] %}

COMMAND -> IDENT_LIST %COMMAND_OP %TEXT BLOCK {%
  (data, location, reject) => {
    const block = data[3];
    if (!block) {
      const err =  new Error('You need a block for your command, \nLine ' + (location + 1));
      throw err;
    }
    return {
      type: 'COMMAND',
      left: data[0],
      right: [data[2]],
      block,
    }
  }
%}

BLOCK -> (
  (%NL %INDENT STATEMENT:+ %DEDENT) |
  (%NL %INDENT STATEMENT:+)
) {% data => data[0][0][2] %}

IDENT_LIST -> (( %IDENT ( %COMMA %IDENT ):+ ) | ( %IDENT )) {%
  data => {
    const otherIndents = data[0][0][1] || [];
    return [data[0][0][0]].concat(otherIndents.map(dat => dat[1]));
  }
%}
