import moo from 'moo';

import {
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
} from './tokens';

export default moo.states({
  main: {
    COMMENT,
    PROMPT_OP,
    COMMA,
    EXECUTION_OP,
    COMMAND_OP,
    NL,
    COLOR_START,
    COLOR_END,
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
    SCRIPT
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
