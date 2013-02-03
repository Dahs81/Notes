## Server Notes

1.  Setting up a Rackspace server
	- a
2.  Costs of Rackspace server
	- a
3.  Webfaction
	- a
4.  Setting up a AWS server
	- aws.amazon.com/console/
	- My Account -> AWS Management Console
	- Login or create account for Amazon EC2
	- Services -> EC2
	- Launch Instance
	- If you have no key, I suggest making one on command-line with rsa keygen, then choosing Key Pairs -> Import Key Pair.  Add the id_rsa.pub from ~/.ssh
	- When the key pair menu appears during the Launch Instance setup, use this key.
	from command-line: ssh ubuntu@<yourServerInstance>