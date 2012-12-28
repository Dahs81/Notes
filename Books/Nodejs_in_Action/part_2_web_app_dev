Part II : Web Application Development With Node - Ch 4-11

Chapter 4


Chapter 5
	- This chapter covers filesystem storage, RMDB storage, and non-relational database storage (NoSQL)
	- Five factors for the type of storage that you must consider:
		a.  What data is being stored
		b.  How quickly do you need to read/write (performance)
		c.  How much data is there
		d.  How are you querying the data
		e.  How long and reliable the data needs to be stored
	-  There are trade offs for each type of storage that you may choose.
	-  The simplest form of storage is in-memory storage
		-  In-memory storage is just the use of variables within the application
		-  When the application or server is restarted, in-memory storage is lost.
	-  The second form of storage is storing data in a filesystem (this is also simple)
		-  Steps:
			a.  Provide a way to read data from disk
				-  If the file exists, simply read the data, stringify it, and then parse it into JSON
				-  If the file doesn't exist, create the file with empty data (in this case, an empty array)
			b.  Provide a way to list the data (from the file above).  This should simply loop through the array and print it out.
			c.  Provide a way to store the data using fs.writeFile(file, someData)
			d.  Provide a way to add a new piece of data to the file.  This uses the store data function from step c.
		-  Recap: Be able to read the data from file and store new data to the file.
	-  RDBMS


	-  NoSQL DB's
		-  Redis


		-  MongoDB
			Mongo is a general-purpose db alternitive to a RDBMS.
			Mongo has a flexible schema - you can add columns to any document whenever you please
			Mongo stores documents inside of collections:
			>  Collection
				>  Document
					Name: 'Rick'
					Age: 23
				>  Document
					ItemId: 12
					Amount: 45
				...
		
			Installing Mongo-node module
				-  npm install mongodb

			Connecting to MongoDB
				var mongo = require('mongodb'),
					server = new mongo.Server('127.0.0.1', 27017, {});
				var client = new mongo.Db('mtest', server);  // params: nameOfDB, instanceOfServer (from line above)

			Accessing a collection
				client.open(function (err) {
					if (err) throw err;
					client.collection('test_insert', function (err, collection) {
						if (err) throw err;
						console.log('We are now able to perform queries');  // Put mongo query code here
					});
				});

			Inserting a document into a collection



Chapter 6


Chapter 7


Chapter 8


Chapter 9


Chapter 10


Chapter 11



