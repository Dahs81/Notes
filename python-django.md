## Python Django

#### Setup



#### Creating a Project



#### Best Practices for Directory Structure
Project/
	manage.py
	root_of_site/
		__init__.py
		settings.py // This could be a directory
		settings/   // Settings should be same as requirements/
			__init__.py
			dev.py
			common.py
			prod.py
			test.py
		urls.py
		wsgi.py
		apps/
			__init__.py // For apps directory
			blog/              // This is a first option
				__init__.py
				models.py
				tests.py
				views.py
				templates/     // This may be the same as site_media below
					// some template files
			news/              // This is a second option
				module_name/   // This could be news/ from line above ???
					__init__.py
					models.py
					tests.py
					views.py
				site_media/
					module_name/
				docs/
		lib/
			management/
				__init__.py
				models.py
				tests.py
				views.py
	requirements/
		common.txt
		dev.txt      // -r common.txt ??
		prod.txt     // -r common.txt ??
		test.txt     // -r common.txt ??
	requirements.txt // Not a directory - This file contains: -r requirements/prod.txt

