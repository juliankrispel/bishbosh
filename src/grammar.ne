@builtin "number.ne"
@builtin "whitespace.ne"

@{%
  const nm = require('nearley-moo');
  const tokens = require('./tokens');
  nm(tokens);
%}

STATEMENTS -> STATEMENT:+ {% data => data[0] %}

STATEMENT -> (
  COMMAND |
  %TEXT |
  %NL
) {% data => data[0][0] %}

COMMAND -> IDENT_LIST:? %COMMAND_OP %TEXT {%
  data => {
    console.log('command', data);
    return data;
  }
%}

IDENT_LIST -> %IDENT ( %COMMA %IDENT ):+ {%
  data => [data[0]].concat(data[1].map(dat => dat[1]))
%}
