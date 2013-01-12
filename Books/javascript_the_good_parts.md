# Javascript: The Good Parts

### Chapter 1: Good Parts


### Chapter 2: Grammar


### Chapter 3: Objects
#### Introduction
> - Everything in javascript are objects except numbers, strings, and booleans.
> - Object:  a container of properties that have a value aka key/value pairs.  
> - Keys are any string, values can be anything but undefined.
> - Object prototype linkage: this allows one object to inherit the properties of another object.
	
#### Object Literals - 3.1
> - a

### Chapter 4: Functions


### Chapter 5: Inheritance


### Chapter 6: Arrays


### Chapter 7: Regular Expressions
============================================================

#### Introduction to Regexp
> - Regex if javascript was borrowed from Perl
> - regex Methods: regexp.exec, regexp.test, string.match, stirng.replace, string.search, string.split
> - Regexp usually have a significant performance advantage over string equiv methods.

#### Example:
> `var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;`
> `var url = 'http://www.google.com:80/test?q#some';`
> `var result = parse_url.exec(url);`

#### Capturing groups vs non-capturing groups:
> - A capturing group is ...
> - a

#### Flags
> - /g - Match the regexp multiple times
> - /i - Ignore case throughout the regexp 
> - /m - Matches on multiple lines

#### Character meanings:
> - (?: ... )?  Non-capturing group --An optional question mark followed by a colon indicates that the group in parenthesis 
				is optional - parenthesis followed by another ?
> - []   Brackets means match the characters within the brackets - NOTE: [Ee] === (?:E|e)
> - []*  Match the characters in the brackets ZERO or more times
> - []+  Match the characters in the brackets ONE or more times
> - ^   This means a string begins with the regexp specified
> - $   This means a string ends with the regexp specified
> - ^ ... $  This means a string only has the regexp specified
> - \d  This is the same as [0-9]

CURRENTLY ON PAGE 149 - 7.2 CONSTRUCTORS

#### More References: 
- https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions

### Chapter 8: Methods


### Chapter 9: Style
> - indent 4 spaces
> - use spaces consistantly
> - if (true) { ... } -- space between 'if (' AND ') {'
> - no spaces for function invocation -- myFunction()
> - make comments meaningful, don't add meaningless comments -- example: i = 0; //Set i to zero
> - declare all variables at the beginning of a function - due to js lack of block scope

### Chapter 10: Beautiful Features


### Appendix A: Awful Parts


### Appendix B: Bad Parts


### Appendix C: JSLint
