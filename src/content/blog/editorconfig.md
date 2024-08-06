---
title: 'EditorConfig'
description: 'Use EditorConfig to maintain consistent coding styles across various editors and IDEs.'
pubDate: '2024-08-06'
cover: './assets/editorconfig.png'
coverAlt: 'EditorConfig logo'
---

Having a consistently formatted code base has several advantages. Code that looks
similar is easier to understand and maintain. When you work in a team, it's even
more crucial that all developers share the same code style. This makes PR
reviews much more efficient, because real changes are not obfuscated by
arbitrary changes in the code style.

There are several tools which help you to keep your code base in a consistent
shape. One of the most basic ones is EditorConfig. Its configuration consists of
a file called `.editorconfig`. No additional tool is required because many code
editors support EditorConfig out-of-the-box. For most of the other editors there
are plugins to enable the required support.

A basic configuration looks like this:

```ini
root = true

[*]
charset = utf-8
end_of_line = lf
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true
max_line_length = 120

[*.cs]
charset = utf-8-bom
indent_size = 4
insert_final_newline = false

[*.md]
trim_trailing_whitespace = false
```

An `.editorconfig` file placed at the root of a repository is recursively valid
in all sub directories. If a sub directory needs other settings, another
`.editorconfig` file can be added to this directory with just the properties that
differ from the parent settings.

The amount of universal properties is limited, but it's enough to cover the most
important aspects of code formatting. For C# projects, it's possible to add
additional domain specific properties in the form of ReSharper settings, style
settings, or Roslyn analyzer settings.

EditorConfig and Prettier share some settings. When Prettier detects an
`.editorconfig` file, it will use the settings from this file. So it's not
required to maintain two separate configuration files for the same settings.

## References

- [EditorConfig Homepage](https://editorconfig.org/)
