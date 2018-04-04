# itrash

[![NPM version](https://badge.fury.io/js/itrash.svg)](https://npmjs.org/package/itrash)
[![License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://raw.githubusercontent.com/ruyadorno/itrash/master/LICENSE)
[![Join the chat at https://gitter.im/ipipeto/Lobby](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ipipeto/Lobby)

Interactively selects files to delete from current folder in the cli

> An [iPipeTo](https://github.com/ruyadorno/ipt) workflow

<br />
<br />

<p align="center">
<a href="https://asciinema.org/a/174395">
<img alt="demo animation" width="600" src="https://cdn.rawgit.com/ruyadorno/itrash/master/demo.svg" />
</a>
</p>

<br />

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

