import get from 'lodash/get';
import moo from 'moo';

import {
  INDENT,
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

const lexer = moo.states({
  main: {
    INDENT,
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


lexer._reset = lexer.reset;
lexer.reset = function(string) {
  this.lastIndent = 0;
  return this._reset(string);
};

lexer._next = lexer.next;
lexer.next = function() {
  let nextToken = this._next();
  if (get(nextToken, 'type') === 'INDENT'){
    const nextIndent = nextToken.value.length
    if (nextIndent < this.lastIndent) {
      nextToken.type = 'DEDENT';
    } else if (nextIndent === this.lastIndent) {
      return this.next();
    }
    this.lastIndent = get(nextToken, 'value.length', 0);
  }

  return nextToken;
};

export default lexer;
