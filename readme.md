:neckbeard: 

# BishBosh - A domain specific language for writing command line interfaces

__Disclaimer__ - (This is at Proposal-Stage) - At the moment this is nothing other than an __opionated braindump__. If you read something here which aligns with you or otherwise, please make a pr or an issue.

### By all means, tell me your opinion, whether it'd be a rant, encouragement, or an idea for improvement - I welcome feedback and am reaching out to you for it!

:fire: :fire: __Warning - opinions ahead__ :fire: :fire:

## Problem - Writing cli's is hard


- Writing cli's is harder than it should be
- Bash scripting sucks
- Using languages for writing cli's kinda sucks too.


## Requirements:

What if it was piss-easy to write cli apps which:

- conform to best practices
- are language agnostic (run scripts in any language)

## Idea: I want to write CLIs like this:

In an ideal world, when I write CLIs, I want focus on content. Rather than reinventing the wheel everytime and implementing a cli with language X, I'd like to write down a script with as little syntax as possible, that describes:
- a user flow for prompts
- commands & documentation for commands

```
Eyo - Welcome to this {{green}}super amazing{{/green}} cli whoop whoop!

? So what do you want to do
  c > create a new app
    -> ./create-new-app.sh
    Yippie!
    Your app is now created!
    You can run it by typing {{yellow}}npm start{{/yellow}}

  a > add a module to your app

    ?:component Where do you want your component?
      ? Which one?
        # Copies around files
        m > a middleware -> cp ./templates/middleware {{component}}
        r > a reducer -> cp ./templates/middleware {{component}}

  d > deploy the app -> ./deploy.sh
```

Possible applications:
- Scaffolding
- Text adventures
- Clis for environments - How often I wished there was a cli that just walked me through setting up a dev environment

## Here's a slightly contrived example for a cli tool that helps setting up a vm
```
Welcome to Project X, to cancel just press ctrl[c]
# To keep it simple, we could do if/else statements that rely on whether a process exits with 0 or 1

if -> sudo service elasticsearch status
  {green}Elasticsearch running{/green}
else
  Looks like elasticsearch isn't running, wanna restart it?
    - Yes -> sudo service elasticsearch restart
    - No

if -> sudo service dynamo status
  - {green}Dynamo DB is running{/green}
else
  Looks like dynamo isn't running, wanna restart it?
    > Yes
      if -> sudo service dynamo restart
        {green}Dynamo DB is running{/green}
      else
        I can't get dynamo db running sry dude, ask your sysadmin for help -> exit 0

    > No

Right, that's all, see you later aligator!
```

### Syntax - Just thinking out loud rn

### Comments
`# Yo I am a comment`

### Prompts
`? Some prompt that asks you a question or not`
If no options are specified, any key can be pressed to continue

### Prompt with Options
```
? What do you want to do?
  > run the app
  > build the app
  > deploy the app
```
Options can be chosen with arrow keys

### Prompt with Options with key commands
```
? What do you want to do?
  r > run the app
  b > build the app
  d > deploy the app
```
Options can be chosen with arrow keys or key commands


### Prompt with Input
```
?:input What do you want to say?
```
The input will be used as env variable for the process, which you can reference in other places.

### Execution statements
Execution statements are in essence shell scripts. They spin up processes.

- If the process fails the app will exit.
```
-> cp ./template ./src/something
-> ./run-a-shell-thing.sh
-> ./run-a-js-thing.js
-> ./run-a-ruby-thing.js
```

### Conditionals
You can use conditionals. Conditional expressions use C-style operators, like `==`, `!=`, `&&`.

You can also use execution statements. If you do, a failed execution statement (one that exits with 1) will be interpreted `false`, a successfull execution statement (exit 0) will be evaluated as `true`.
```
?:input Hello there what can I do for you?
if input == "build"
  Ok, I'll build the app for you, hold on a sec -> ./build.sh
elseif input == "deploy"
  Ok, I'll deploy the app for you, hold on a sec -> ./deploy.sh
else
  Sorry, that's not a valid command, by then -> exit
```

### Color output
You can color your output like so:
```
{red}Hello there{/red}
```

