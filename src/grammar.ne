@builtin "number.ne"
@builtin "whitespace.ne"

@{%
  const nm = require('nearley-moo');
  const tokens = require('./tokens');
  console.log('tokens', tokens);
  nm(tokens);
%}


STATEMENTS -> STATEMENT:+ {%
  data => {
    return data;
  }
%}

STATEMENT ->
  %TEXT %NL |
  %NL

