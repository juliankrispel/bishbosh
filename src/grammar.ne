@builtin "number.ne"
@builtin "whitespace.ne"

statement -> (
  execution |
  prompt |
  input_prompt |
  command |
  text
) {%
  data => data[0][0]
%}

execution -> _ "->" ws text {%
  data => ({
    type: 'execution',
    command: data[3],
  })
%}

prompt -> _ "?" ws text {%
  data => ({
    type: 'prompt',
    input: false,
    text: data[3]
  })
%}

input_prompt -> _ "?:" word ws text {%
  data => ({
    type: 'prompt',
    input: data[2],
    text: data[4],
  })
%}


command -> list:? ">" ws text {%
  data => ({
    type: 'command',
    aliases: data[0],
    text: data[3]
  })
%}

list -> _ word comma_list_item:* {%
  data => [data[1]].concat(data[2])
%}

comma_list_item -> _ "," _ word _ {%
  data => data[3]
%}

text -> plain_text {% data => data[0] %}

plain_text -> _ %plain_text_token:+ {%
  data => {
    console.log('plain text token', data);
    return {
      type: 'plain_text',
      text: data[1].join('')
    };
  }
%}

word -> %char:+ {%
  data => data[0].join('')
%}

@{%
  const char= {
    test: (x) => /\b[a-zA-Z0-9_]+\b/.test(x)
  }

  const plain_text_token = {
    test: x => /[^\n{}\r]+/.test(x)
  }

  const text_token = {
    test: x => /[^\n{}\r]+/.test(x)
  }

%}

ws -> [\n\r\s\t]:+ {% data => data[0].join('') %}

styled_text -> (
  "{" "green" "}" text "{/" "green" "}" |
  "{" "red" "}" text "{/" "red" "}" |
  "{" "yellow" "}" text "{/" "yellow" "}" |
  "{" "cyan" "}" text "{/" "cyan" "}" |
  "{" "black" "}" text "{/" "black" "}" |
  "{" "gray" "}" text "{/" "gray" "}" |
  "{" "grey" "}" text "{/" "grey" "}" |
  "{" "blue" "}" text "{/" "blue" "}" |
  "{" "magenta" "}" text "{/" "magenta" "}" |
  "{" "bgBlack" "}" text "{/" "bgBlack" "}" |
  "{" "bgRed" "}" text "{/" "bgRed" "}" |
  "{" "bgGreen" "}" text "{/" "bgGreen" "}" |
  "{" "bgYellow" "}" text "{/" "bgYellow" "}" |
  "{" "bgBlue" "}" text "{/" "bgBlue" "}" |
  "{" "bgMagenta" "}" text "{/" "bgMagenta" "}" |
  "{" "bgCyan" "}" text "{/" "bgCyan" "}" |
  "{" "bgWhite" "}" text "{/" "bgWhite" "}" |
  "{" "reset" "}" text "{/" "reset" "}" |
  "{" "bold" "}" text "{/" "bold" "}" |
  "{" "dim" "}" text "{/" "dim" "}" |
  "{" "italic" "}" text "{/" "italic" "}" |
  "{" "underline" "}" text "{/" "underline" "}" |
  "{" "inverse" "}" text "{/" "inverse" "}" |
  "{" "hidden" "}" text "{/" "hidden" "}" |
  "{" "strikethrough" "}" text "{/" "strikethrough" "}" |
  "{" "rainbow" "}" text "{/" "rainbow" "}" |
  "{" "zebra" "}" text "{/" "zebra" "}" |
  "{" "america" "}" text "{/" "america" "}" |
  "{" "trap" "}" text "{/" "trap" "}" |
  "{" "random" "}" text "{/" "random" "}"
) {%
  data => ({
    type: 'styled_text',
    color: data[1],
    text: data[3],
  })
%}

