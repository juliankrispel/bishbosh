import lexer from '../lexer';

const lex = (string) => {
  lexer.reset(string);
  return Array.from(lexer).map(token => token.type);
}

describe('lexer', () => {
  it('lexes a command with newline', () => {
    const input = 'thing > Something\n';
    expect(lex(input)).toEqual([
      'IDENT',
      'COMMAND_OP',
      'TEXT',
      'NL'
    ]);
  });

  it('lexes a command with command list', () => {
    const input = 'a, b, c > Something\n';
    expect(lex(input)).toEqual([
      'IDENT',
      'COMMA',
      'IDENT',
      'COMMA',
      'IDENT',
      'COMMAND_OP',
      'TEXT',
      'NL'
    ]);
  });

  it('lexes a command without command list', () => {
    const input = '> Something';
    expect(lex(input)).toEqual([
      'COMMAND_OP',
      'TEXT',
    ]);
  });

  it('lexes a command with a comment', () => {
    const input = '> Something #eyo how is it going';
    expect(lex(input)).toEqual([
      'COMMAND_OP',
      'TEXT',
      'COMMENT'
    ]);
  });

  it('lexes an execution statement', () => {
    const input = '-> ./boing.sh';
    expect(lex(input)).toEqual([
      'EXECUTION_OP',
      'SCRIPT'
    ]);
  });

  it('lexes an execution statement with a comment', () => {
    const input = '-> ./boing.sh #Boing boing';
    expect(lex(input)).toEqual([
      'EXECUTION_OP',
      'SCRIPT',
      'COMMENT'
    ]);
  });

  it('lexes a prompt ', () => {
    const input = '? Boing boing';
    expect(lex(input)).toEqual([
      'PROMPT_OP', 'TEXT',
    ]);
  });

  it('lexes a prompt with input ', () => {
    const input = '?:input Boing boing?';
    expect(lex(input)).toEqual([
      'PROMPT_OP', 'PROMPT_INPUT', 'TEXT',
    ]);
  });

  it('lexes command, option list, text, exection statement on several lines', () => {
    const input = `a, b > Hello there
    -> ./boing.sh # this is awesome`;
    expect(lex(input)).toEqual([
      'IDENT', 'COMMA', 'IDENT', 'COMMAND_OP', 'TEXT', 'NL',
      'INDENT', 'EXECUTION_OP', 'SCRIPT', 'COMMENT'
    ]);
  });

  it('lexes multiple lines of text', () => {
    const input = `The most difficult thing is the decision to act
    the rest is merely tenacity.
    The fears are paper tigers.
    You can do anything you decide to do.
    You can act to change and control your life;
    and the procedure, the process is its own reward`;

    // unfortunately our first word will be an IDENT, since there
    // is no way for us to give precedence over TEXT at this point
    expect(lex(input)).toEqual([
      'TEXT', 'NL',
      'INDENT', 'TEXT', 'NL',
      'TEXT', 'NL',
      'TEXT', 'NL',
      'TEXT', 'NL',
      'TEXT',
    ]);
  });

  it('lexes a bishbosh program', () => {
    const program = `
    Welcome to our {green}awesome{/green} Program!
    ?:name Say your name!
      Hi {{name}}

    ? What's your job?
      a > Truck Driver
      b > Taxi Driver
      c > P.O.T.U.S.
        -> ./go-to-hell.sh
        Now you've gone to hell!

    bomb > Build a bomb`;

    const tokens = [
      'NL',
      'INDENT', 'TEXT', 'NL',
      'PROMPT_OP', 'PROMPT_INPUT', 'TEXT', 'NL',
      'INDENT', 'TEXT', 'NL',
      'NL',
      'DEDENT', 'PROMPT_OP', 'TEXT', 'NL',
      'INDENT', 'IDENT', 'COMMAND_OP', 'TEXT', 'NL',
      'IDENT', 'COMMAND_OP', 'TEXT', 'NL',
      'IDENT', 'COMMAND_OP', 'TEXT', 'NL',
      'INDENT', 'EXECUTION_OP', 'SCRIPT', 'NL',
      'TEXT', 'NL',
      'NL',
      'DEDENT', 'IDENT', 'COMMAND_OP', 'TEXT'
    ];

    expect(lex(program)).toEqual(tokens);
  });
});
