# git Notes

git online book: ON Section 4.2

## Basics 
**BOOK:**  http://git-scm.com/book

1.  Set up
	1. mkdir <dirName> && cd <dirName>
	2. git init
	3. cd ..
	4. subl <dirName>

2.  Most common commands:
	- add, commit < -m >, pull, push, diff, reflog, reset -- aliases in .gitconfig OR .bash_profile
	- git diff master develop - gives the difference between master and develop

3.  


## Advanced Topics

1.  Submodule
	- Purpose: 
		- Useful for a project that needs to be used in multiple projects, but may be slightly different
		- Third party libraries that you want, but still need to pull in their updates when available
	- What are git submodules
		-
	- cloning a repo that already has a submodule:
		1.  git clone *repoName*
		2.  git submodule init
		3.  git submodule update
	- setting up a submodule from scratch
		-

2.  Setting up a gitolite server
	-

3.  Setting up gl
	-  Taken from: http://mamykin.com/2010/03/28/favorite-git-log-formatting.html
	-  Put this in ~/.bash_profile (ensequence):

	```
	alias gl="git log --graph --pretty=format:'%Cred%h%Creset %C(cyan)%an%Creset - %C(yellow)%d%Creset %s %Cgreen(%cr)%Creset' --abbrev-commit --date=relative"
	```

4.  github account
	-  Set up:
		- a
		- a
		- ssh keys
	-  Using github:

5.  Ensequence Specific commands
	-  Changing to new giblab server (from old gitolite server):
		- cd <repoName>
		- nano .git/config : Change url to gitlab OR git@<url>:<repoName>
		- cd .git/modules/lib/db (if ther is a submodule)
		- nano config : Change url (if ther is a submodule)
		- cd ../../../..
		- nano .gitmodule : Change url to git@<url>:<repoName>
	- mysql command line
		- ssh -L 3306:127.0.0.1:3306 root@198.61.234.139
	- raptor builder
		- $ db_service_create -s newApp1

6.  Adding a remote branch to a project
	- 

7.  Delete a remote branch
	-  git push origin :feature_branch

