command_line.notes

## Basics

1.  Commands:
	- test:
		- builtin: tests whether something is true or false
		- alias for test is [ <test condition> ]
		- Options:
		> - `-d` : Exists and is a directory
		> - `-e` : Exists
		> - `-f` : Exists and is a file
		> - `-r` : Exists and is readable
		> - `-s` : Exists and size is greater than o bytes
		> - `-w` : Exists and is writable
		> - `-x` : Exists and is executable



## Advanced topics

1.  cron


2.  Scripting


3.  .ssh
	-  Correct file permissions for .ssh
		- chmod u+x .ssh (for the directory itself, it must be executable)
		- cd .ssh/
		- chmod u-x * (for the files in the directory, they cannot be executable)
	-  Setting up rsa keys  TODO:
		**Resource:**  http://git-scm.com/book/en/Git-on-the-Server-Generating-Your-SSH-Public-Key
	- 
4.