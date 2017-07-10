@builtin "number.ne"
@builtin "whitespace.ne"

@{%
  const nm = require('nearley-moo');
  const tokens = require('./tokens');

  nm(tokens);
%}

# execution -> _ "->" _ [^#]:* {%
#   function(data) {
#     console.log('exec', data);
#     return data[3];
#   }
# %}

command -> list:? %command_op 

list -> %word comma_list_item:* {%
  function(data) {
    return [data[0]].concat(data[1]);
  }
%}

text -> %word | %text

comma_list_item -> %comma %word {%
  function(data){
    return data[1];
  }
%}
