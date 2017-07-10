@builtin "number.ne"
@builtin "whitespace.ne"

statement -> (
  execution |
  prompt |
  input_prompt |
  command
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

text -> %text_token:+ {%
  data => data[0].join('')
%}

word -> %char:+ {%
  data => data[0].join('')
%}

@{%
  const char= {
    test: (x) => /\b[a-zA-Z0-9_]+\b/.test(x)
  }
%}

@{%
  const text_token = {
    test: x => /[^\n\r]+/.test(x)
  }
%}

ws -> [\n\r\s\t]:+ {% data => data[0].join('') %}
