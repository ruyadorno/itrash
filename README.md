# itrash

Interactively selects files to delete from current folder in the cli

> An [iPipeTo](https://github.com/ruyadorno/ipt) workflow

[![asciicast](https://asciinema.org/a/174132.png)](https://asciinema.org/a/174132)

## Install

Get it with **npm**:

```sh
npm install -g itrash
```

### Run

Anywhere in your file system, use the command:

```
itrash
```

**OR**

bypass **npm install** and run it at once using **npx**:

```sh
npx itrash
```

## Bash alias equivalent

If you're already an **ipt** user that has it globally installed, you can get this same functionality by just adding this alias to your **bash** (or equivalent) file:

### Requirements

- Unix-like system (needs `ls` and `xargs` cmds)
- [trash-cli](https://www.npmjs.com/package/trash-cli) globally installed
- [ipt](https://www.npmjs.com/package/ipt) globally installed

```sh
alias itrash="ls | ipt -m -M 'Select items to delete:' | xargs trash"
```

## License

[MIT](LICENSE) © 2018 [Ruy Adorno](http://ruyadorno.com)

