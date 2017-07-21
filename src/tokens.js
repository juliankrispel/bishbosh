const COMMENT = /#[^\n\r]*/;

const TEXT = /[^#\n\r]+/;

const NL = {
  match: /[\r\n]/,
  lineBreaks: true,
};

const COLOR_START = {
  match: /{\w+}/,
};

const COLOR_END = {
  match: /{\/\w+}/,
};

const SCRIPT = {
  match: /[^\n\r#]+/,
  lineBreaks: true,
};

const INDENT = /^[\t ]+/;

const PROMPT_INPUT = /:[\w]+/;

const EXECUTION_OP = {
  match: /[\t ]*->[\t ]*/,
  push: 'exec',
};

const PROMPT_OP = {
  match: /[\t ]*\?[\t ]*/,
  push: 'prompt',
};

const COMMA = /[\t ]*,[\t ]*/;

const DEDENT = 'DEDENT';

const COMMAND_OP = {
  match: /[\t ]*>[\t ]*/
};

const IDENT = /([a-zA-Z0-9_]+)(?=(?:[\t ]*,)|(?:[\t ]*>))/;

module.exports = {
  INDENT,
  DEDENT,
  EXECUTION_OP,
  COMMAND_OP,
  COMMENT,
  COMMA,
  COLOR_START,
  COLOR_END,
  PROMPT_OP,
  PROMPT_INPUT,
  IDENT,
  NL,
  TEXT,
  SCRIPT,
};
