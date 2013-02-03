server.notes

1.  Setting up a Rackspace server
	-


2.  Costs of Rackspace server
	-


3.  Webfaction
	- 

4.  Setting up a AWS server
	- aws.amazon.com/console/
	- My Account -> AWS Management Console
	- Login or create account for Amazon EC2
	- Services -> EC2
	- Launch Instance
	- If you have no key, I suggest making one on command-line with rsa keygen, then choosing Key Pairs -> Import Key Pair.  Add the id_rsa.pub from ~/.ssh
	- When the key pair menu appears during the Launch Instance setup, use this key.
	from command-line: ssh ubuntu@<yourServerInstance>