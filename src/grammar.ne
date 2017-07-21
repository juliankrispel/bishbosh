@builtin "number.ne"
@builtin "whitespace.ne"

@{%
  const nm = require('nearley-moo');
  const tokens = require('./tokens');
  nm(tokens);
%}

STATEMENTS -> LINE:+ {% data => data[0] %}

LINE -> (
  STATEMENT |
  %NL
) {% data => data[0][0] %}

STATEMENT -> ( %INDENT:? (
  COMMAND |
  %TEXT
)) {% data => data[0][1][0] %}

COMMAND -> IDENT_LIST:? %COMMAND_OP %TEXT {%
  data => ({
    type: 'COMMAND',
    left: data[0],
    right: [data[2]],
  })
%}

IDENT_LIST -> %IDENT ( %COMMA %IDENT ):+ {%
  data => [data[0]].concat(data[1].map(dat => dat[1]))
%}
