import moo from 'moo';

const COMMENT = /#[^\n\r]*/;
const TEXT = /[\t ]*[^#\n\r]+/;

const NL = {
  match: /[\r\n]/,
  lineBreaks: true,
};

const PROMPT_INPUT = /:[\w]+/;

const EXECUTION_OP = {
  match: /[\t ]*->[\t ]*/,
  push: 'exec',
};

const PROMPT_OP = {
  match: /[\t ]*\?[\t ]*/,
  push: 'prompt',
};

const IDENT = /[\t ]*([a-zA-Z0-9_]+)(?=(?:[\t ]*,)|(?:[\t ]*>))/;

const lexer = moo.states({
  main: {
    COMMENT,
    PROMPT_OP,
    COMMA: /[\t ]*,[\t ]*/,
    EXECUTION_OP,
    COMMAND_OP: {
      match: /[\t ]*>[\t ]*/,
      push: 'txt',
    },
    NL,
    COLOR_START: {
      match: /{\w+}/,
    },
    COLOR_END: {
      match: /{\/\w+}/,
    },
    IDENT,
    TEXT
  },
  txt: {
    EXECUTION_OP,
    COMMENT,
    NL: {
      ...NL,
      pop: 1,
    },
    TEXT,
  },
  exec: {
    COMMENT,
    NL: {
      ...NL,
      pop: 1,
    },
    SCRIPT: {
      match: /[^\n\r#]+/,
      lineBreaks: true,
    }
  },
  prompt: {
    PROMPT_INPUT,
    NL: {
      ...NL,
      pop: 1,
    },
    TEXT,
  }
});

module.exports = lexer;
