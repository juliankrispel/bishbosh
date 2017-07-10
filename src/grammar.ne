@builtin "number.ne"
@builtin "whitespace.ne"

# execution -> _ "->" _ [^#]:* {%
#   function(data) {
#     console.log('exec', data);
#     return data[3];
#   }
# %}

#  command -> command_list:? _ ">" _ .:* {%
#    function(data) {
#      console.log('command', data);
#      return data[0];
#    }
#  %}

command -> list:? ">" text:? {%
  data => {
    return {
      type: 'command',
      aliases: data[0],
      text: data[2]
    };
  }
%}

list -> _ word comma_list_item:* {%
  data => [data[1]].concat(data[2])
%}

comma_list_item -> _ "," _ word _ {%
  data => data[3]
%}

@{%
  const text_token = {
    test: x => /[^\n\r]+/.test(x)
  }
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

ws -> [\n\r\s\t]:+ {% data => data[0].join('') %}
