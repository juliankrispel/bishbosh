// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }

  const char= {
    test: (x) => /\b[a-zA-Z0-9_]+\b/.test(x)
  }

  const plain_text_token = {
    test: x => /[^\n{}\r]+/.test(x)
  }

  const text_token = {
    test: x => /[^\n{}\r]+/.test(x)
  }

var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "unsigned_int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_int$ebnf$1", "symbols": ["unsigned_int$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_int", "symbols": ["unsigned_int$ebnf$1"], "postprocess": 
        function(d) {
            return parseInt(d[0].join(""));
        }
        },
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"+"}]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "int$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "int$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$2", "symbols": ["int$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "int", "symbols": ["int$ebnf$1", "int$ebnf$2"], "postprocess": 
        function(d) {
            if (d[0]) {
                return parseInt(d[0][0]+d[1].join(""));
            } else {
                return parseInt(d[1].join(""));
            }
        }
        },
    {"name": "unsigned_decimal$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$1", "symbols": ["unsigned_decimal$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1", "symbols": [{"literal":"."}, "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "unsigned_decimal$ebnf$2", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "unsigned_decimal$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "unsigned_decimal", "symbols": ["unsigned_decimal$ebnf$1", "unsigned_decimal$ebnf$2"], "postprocess": 
        function(d) {
            return parseFloat(
                d[0].join("") +
                (d[1] ? "."+d[1][1].join("") : "")
            );
        }
        },
    {"name": "decimal$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "decimal$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$2", "symbols": ["decimal$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": ["decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "decimal$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "decimal$ebnf$3", "symbols": ["decimal$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "decimal$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal", "symbols": ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "")
            );
        }
        },
    {"name": "percentage", "symbols": ["decimal", {"literal":"%"}], "postprocess": 
        function(d) {
            return d[0]/100;
        }
        },
    {"name": "jsonfloat$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "jsonfloat$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$2", "symbols": ["jsonfloat$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": ["jsonfloat$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "jsonfloat$ebnf$3", "symbols": ["jsonfloat$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": ["jsonfloat$ebnf$4$subexpression$1$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$4$subexpression$1", "symbols": [/[eE]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "jsonfloat$ebnf$4$subexpression$1$ebnf$2"]},
    {"name": "jsonfloat$ebnf$4", "symbols": ["jsonfloat$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat", "symbols": ["jsonfloat$ebnf$1", "jsonfloat$ebnf$2", "jsonfloat$ebnf$3", "jsonfloat$ebnf$4"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "") +
                (d[3] ? "e" + (d[3][1] || "+") + d[3][2].join("") : "")
            );
        }
        },
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "statement$subexpression$1", "symbols": ["execution"]},
    {"name": "statement$subexpression$1", "symbols": ["prompt"]},
    {"name": "statement$subexpression$1", "symbols": ["input_prompt"]},
    {"name": "statement$subexpression$1", "symbols": ["command"]},
    {"name": "statement$subexpression$1", "symbols": ["text"]},
    {"name": "statement", "symbols": ["statement$subexpression$1"], "postprocess": 
        data => data[0][0]
        },
    {"name": "execution$string$1", "symbols": [{"literal":"-"}, {"literal":">"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "execution", "symbols": ["_", "execution$string$1", "ws", "text"], "postprocess": 
        data => ({
          type: 'execution',
          command: data[3],
        })
        },
    {"name": "prompt", "symbols": ["_", {"literal":"?"}, "ws", "text"], "postprocess": 
        data => ({
          type: 'prompt',
          input: false,
          text: data[3]
        })
        },
    {"name": "input_prompt$string$1", "symbols": [{"literal":"?"}, {"literal":":"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "input_prompt", "symbols": ["_", "input_prompt$string$1", "word", "ws", "text"], "postprocess": 
        data => ({
          type: 'prompt',
          input: data[2],
          text: data[4],
        })
        },
    {"name": "command$ebnf$1", "symbols": ["list"], "postprocess": id},
    {"name": "command$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "command", "symbols": ["command$ebnf$1", {"literal":">"}, "ws", "text"], "postprocess": 
        data => ({
          type: 'command',
          aliases: data[0],
          text: data[3]
        })
        },
    {"name": "list$ebnf$1", "symbols": []},
    {"name": "list$ebnf$1", "symbols": ["list$ebnf$1", "comma_list_item"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "list", "symbols": ["_", "word", "list$ebnf$1"], "postprocess": 
        data => [data[1]].concat(data[2])
        },
    {"name": "comma_list_item", "symbols": ["_", {"literal":","}, "_", "word", "_"], "postprocess": 
        data => data[3]
        },
    {"name": "text", "symbols": ["plain_text"], "postprocess": data => data[0]},
    {"name": "plain_text$ebnf$1", "symbols": [plain_text_token]},
    {"name": "plain_text$ebnf$1", "symbols": ["plain_text$ebnf$1", plain_text_token], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "plain_text", "symbols": ["_", "plain_text$ebnf$1"], "postprocess": 
        data => {
          console.log('plain text token', data);
          return {
            type: 'plain_text',
            text: data[1].join('')
          };
        }
        },
    {"name": "word$ebnf$1", "symbols": [char]},
    {"name": "word$ebnf$1", "symbols": ["word$ebnf$1", char], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "word", "symbols": ["word$ebnf$1"], "postprocess": 
        data => data[0].join('')
        },
    {"name": "ws$ebnf$1", "symbols": [/[\n\r\s\t]/]},
    {"name": "ws$ebnf$1", "symbols": ["ws$ebnf$1", /[\n\r\s\t]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ws", "symbols": ["ws$ebnf$1"], "postprocess": data => data[0].join('')},
    {"name": "styled_text$subexpression$1$string$1", "symbols": [{"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$2", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$3", "symbols": [{"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$1", {"literal":"}"}, "text", "styled_text$subexpression$1$string$2", "styled_text$subexpression$1$string$3", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$4", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$5", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$6", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$4", {"literal":"}"}, "text", "styled_text$subexpression$1$string$5", "styled_text$subexpression$1$string$6", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$7", "symbols": [{"literal":"y"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$8", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$9", "symbols": [{"literal":"y"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$7", {"literal":"}"}, "text", "styled_text$subexpression$1$string$8", "styled_text$subexpression$1$string$9", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$10", "symbols": [{"literal":"c"}, {"literal":"y"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$11", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$12", "symbols": [{"literal":"c"}, {"literal":"y"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$10", {"literal":"}"}, "text", "styled_text$subexpression$1$string$11", "styled_text$subexpression$1$string$12", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$13", "symbols": [{"literal":"b"}, {"literal":"l"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$14", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$15", "symbols": [{"literal":"b"}, {"literal":"l"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$13", {"literal":"}"}, "text", "styled_text$subexpression$1$string$14", "styled_text$subexpression$1$string$15", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$16", "symbols": [{"literal":"g"}, {"literal":"r"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$17", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$18", "symbols": [{"literal":"g"}, {"literal":"r"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$16", {"literal":"}"}, "text", "styled_text$subexpression$1$string$17", "styled_text$subexpression$1$string$18", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$19", "symbols": [{"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$20", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$21", "symbols": [{"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$19", {"literal":"}"}, "text", "styled_text$subexpression$1$string$20", "styled_text$subexpression$1$string$21", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$22", "symbols": [{"literal":"b"}, {"literal":"l"}, {"literal":"u"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$23", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$24", "symbols": [{"literal":"b"}, {"literal":"l"}, {"literal":"u"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$22", {"literal":"}"}, "text", "styled_text$subexpression$1$string$23", "styled_text$subexpression$1$string$24", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$25", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"g"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$26", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$27", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"g"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$25", {"literal":"}"}, "text", "styled_text$subexpression$1$string$26", "styled_text$subexpression$1$string$27", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$28", "symbols": [{"literal":"b"}, {"literal":"g"}, {"literal":"B"}, {"literal":"l"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$29", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$30", "symbols": [{"literal":"b"}, {"literal":"g"}, {"literal":"B"}, {"literal":"l"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$28", {"literal":"}"}, "text", "styled_text$subexpression$1$string$29", "styled_text$subexpression$1$string$30", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$31", "symbols": [{"literal":"b"}, {"literal":"g"}, {"literal":"R"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$32", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$33", "symbols": [{"literal":"b"}, {"literal":"g"}, {"literal":"R"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$31", {"literal":"}"}, "text", "styled_text$subexpression$1$string$32", "styled_text$subexpression$1$string$33", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$34", "symbols": [{"literal":"b"}, {"literal":"g"}, {"literal":"G"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$35", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$36", "symbols": [{"literal":"b"}, {"literal":"g"}, {"literal":"G"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$34", {"literal":"}"}, "text", "styled_text$subexpression$1$string$35", "styled_text$subexpression$1$string$36", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$37", "symbols": [{"literal":"b"}, {"literal":"g"}, {"literal":"Y"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$38", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$39", "symbols": [{"literal":"b"}, {"literal":"g"}, {"literal":"Y"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$37", {"literal":"}"}, "text", "styled_text$subexpression$1$string$38", "styled_text$subexpression$1$string$39", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$40", "symbols": [{"literal":"b"}, {"literal":"g"}, {"literal":"B"}, {"literal":"l"}, {"literal":"u"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$41", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$42", "symbols": [{"literal":"b"}, {"literal":"g"}, {"literal":"B"}, {"literal":"l"}, {"literal":"u"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$40", {"literal":"}"}, "text", "styled_text$subexpression$1$string$41", "styled_text$subexpression$1$string$42", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$43", "symbols": [{"literal":"b"}, {"literal":"g"}, {"literal":"M"}, {"literal":"a"}, {"literal":"g"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$44", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$45", "symbols": [{"literal":"b"}, {"literal":"g"}, {"literal":"M"}, {"literal":"a"}, {"literal":"g"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$43", {"literal":"}"}, "text", "styled_text$subexpression$1$string$44", "styled_text$subexpression$1$string$45", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$46", "symbols": [{"literal":"b"}, {"literal":"g"}, {"literal":"C"}, {"literal":"y"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$47", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$48", "symbols": [{"literal":"b"}, {"literal":"g"}, {"literal":"C"}, {"literal":"y"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$46", {"literal":"}"}, "text", "styled_text$subexpression$1$string$47", "styled_text$subexpression$1$string$48", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$49", "symbols": [{"literal":"b"}, {"literal":"g"}, {"literal":"W"}, {"literal":"h"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$50", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$51", "symbols": [{"literal":"b"}, {"literal":"g"}, {"literal":"W"}, {"literal":"h"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$49", {"literal":"}"}, "text", "styled_text$subexpression$1$string$50", "styled_text$subexpression$1$string$51", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$52", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$53", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$54", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$52", {"literal":"}"}, "text", "styled_text$subexpression$1$string$53", "styled_text$subexpression$1$string$54", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$55", "symbols": [{"literal":"b"}, {"literal":"o"}, {"literal":"l"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$56", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$57", "symbols": [{"literal":"b"}, {"literal":"o"}, {"literal":"l"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$55", {"literal":"}"}, "text", "styled_text$subexpression$1$string$56", "styled_text$subexpression$1$string$57", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$58", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$59", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$60", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$58", {"literal":"}"}, "text", "styled_text$subexpression$1$string$59", "styled_text$subexpression$1$string$60", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$61", "symbols": [{"literal":"i"}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":"i"}, {"literal":"c"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$62", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$63", "symbols": [{"literal":"i"}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":"i"}, {"literal":"c"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$61", {"literal":"}"}, "text", "styled_text$subexpression$1$string$62", "styled_text$subexpression$1$string$63", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$64", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$65", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$66", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$64", {"literal":"}"}, "text", "styled_text$subexpression$1$string$65", "styled_text$subexpression$1$string$66", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$67", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$68", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$69", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$67", {"literal":"}"}, "text", "styled_text$subexpression$1$string$68", "styled_text$subexpression$1$string$69", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$70", "symbols": [{"literal":"h"}, {"literal":"i"}, {"literal":"d"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$71", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$72", "symbols": [{"literal":"h"}, {"literal":"i"}, {"literal":"d"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$70", {"literal":"}"}, "text", "styled_text$subexpression$1$string$71", "styled_text$subexpression$1$string$72", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$73", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":"t"}, {"literal":"h"}, {"literal":"r"}, {"literal":"o"}, {"literal":"u"}, {"literal":"g"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$74", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$75", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":"t"}, {"literal":"h"}, {"literal":"r"}, {"literal":"o"}, {"literal":"u"}, {"literal":"g"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$73", {"literal":"}"}, "text", "styled_text$subexpression$1$string$74", "styled_text$subexpression$1$string$75", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$76", "symbols": [{"literal":"r"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":"b"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$77", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$78", "symbols": [{"literal":"r"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":"b"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$76", {"literal":"}"}, "text", "styled_text$subexpression$1$string$77", "styled_text$subexpression$1$string$78", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$79", "symbols": [{"literal":"z"}, {"literal":"e"}, {"literal":"b"}, {"literal":"r"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$80", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$81", "symbols": [{"literal":"z"}, {"literal":"e"}, {"literal":"b"}, {"literal":"r"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$79", {"literal":"}"}, "text", "styled_text$subexpression$1$string$80", "styled_text$subexpression$1$string$81", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$82", "symbols": [{"literal":"a"}, {"literal":"m"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$83", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$84", "symbols": [{"literal":"a"}, {"literal":"m"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$82", {"literal":"}"}, "text", "styled_text$subexpression$1$string$83", "styled_text$subexpression$1$string$84", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$85", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"a"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$86", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$87", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"a"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$85", {"literal":"}"}, "text", "styled_text$subexpression$1$string$86", "styled_text$subexpression$1$string$87", {"literal":"}"}]},
    {"name": "styled_text$subexpression$1$string$88", "symbols": [{"literal":"r"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":"o"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$89", "symbols": [{"literal":"{"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1$string$90", "symbols": [{"literal":"r"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":"o"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "styled_text$subexpression$1", "symbols": [{"literal":"{"}, "styled_text$subexpression$1$string$88", {"literal":"}"}, "text", "styled_text$subexpression$1$string$89", "styled_text$subexpression$1$string$90", {"literal":"}"}]},
    {"name": "styled_text", "symbols": ["styled_text$subexpression$1"], "postprocess": 
        data => ({
          type: 'styled_text',
          color: data[1],
          text: data[3],
        })
        }
]
  , ParserStart: "statement"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
