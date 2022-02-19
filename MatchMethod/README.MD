## Match Method

The match() method retrieves the result of matching a string against a regular expression.

```
The .match() function str.match(regexp) will do the following:

if there is a match it will return:
if the g flag is used in the regexp: it will return all the substrings (ignoring capture groups)
if the g flag is not used in the regexp: it will return the same as regexp.exec(str)
if there is no match it will return:
null

Source: https://stackoverflow.com/questions/9214754/what-is-the-difference-between-regexp-s-exec-function-and-string-s-match-fun/33139816
```
