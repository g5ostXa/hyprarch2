# Bash beautify

A **simple** extension that just works for shell script formatting based on [Paul Lutus - Bash Script Beautifier](https://arachnoid.com/python/beautify_bash_program.html), The underlying script doesn't do any syntax processing, Hence **simple**. It's lightweight and just needs python

It'll work with the default format keyboard binding when you edit a `.sh` file.

* If you need error checking consider installing also [ShellCheck](https://marketplace.visualstudio.com/items?itemName=timonwong.shellcheck).

* If you want a more extensive formatter check out [shell-format](https://marketplace.visualstudio.com/items?itemName=foxundermoon.shell-format) it requires
`golang` and `shfmt` installed 

This is my first vscode extension, Please feel free to report issues, give feedback and request features.

### Requirements
- Make sure to have [Python](https://www.python.org/downloads/) installed and added to `$PATH` You'll mostly have those requirements met by default if you're running Linux

## Features
- Adjustable tab size by changing the value of the property from settings `bashBeautify.tabSize` the default value is 4

- Bash script formatting

![Formatting](https://github.com/shakram02/bash_beautify/raw/master/images/formatting.gif)


# License
Although the extension is under MIT license, the underlying python script uses GPL license. So the script should stay under GPL and re-distributed accordingly
