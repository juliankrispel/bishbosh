const COMMENT = /#[^\n\r]*/;

const TEXT = /[\t ]*[^#\n\r]+/;

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

const COMMAND_OP = {
  match: /[\t ]*>[\t ]*/,
  push: 'txt',
};

const IDENT = /[\t ]*([a-zA-Z0-9_]+)(?=(?:[\t ]*,)|(?:[\t ]*>))/;

module.exports = {
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
