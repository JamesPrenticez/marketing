
https://www.youtube.com/watch?v=eU1csuRrb_w&list=PLx-q4INfd95Fywdod81OsM47ve7Uyw9fn&index=2

# Backend
- pip install virtualenv
- virtualenv venv <= create
- ``` source venv/Scripts/activate ``` <= run
- pip install django djangorestframework markdown django-filter <= https://www.django-rest-framework.org/
- django-admin startproject {name} .
- ``` python manage.py runserver ``` <= run server
- python manage.py startapp {name} <= create app?
- add app to copy name from campaigns/apps.py and add to cmbackend/settings.py under INSTALLED_APPS

- pip install python-dotenv

- pip install cloudinary <= Cloudinary 

- python manage.py makemigrations 
- python manage.py migrate 

- create serializers.py <= to validate incoming input for users and to specify output for your different responces <= https://www.django-rest-framework.org/api-guide/fields/

- create campaigns/urls.py <= for routing
- http://127.0.0.1:8000/api/campaigns

- python manage.py createsuperuser
  - user: prent
  - email: jamesprenticez@gmail.com
  - pass: kj
- http://127.0.0.1:8000/api/admin
- Register Model in cmbackend/admin.py

- pip install -U drf-yasg <= https://drf-yasg.readthedocs.io/en/stable/readme.html

# Frontend
- clo <= snippits shortcut for console.log()

- SEO
<head>
og:{propertice} <= enable previews of our site details when a link is shared on social meadia sites like twitter and facebook - [https://ogp.me/]
</head>

- NextSEO - [https://www.npmjs.com/package/next-seo]