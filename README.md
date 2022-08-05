
https://www.youtube.com/watch?v=eU1csuRrb_w&list=PLx-q4INfd95Fywdod81OsM47ve7Uyw9fn&index=2


# Django
https://blog.logrocket.com/using-react-django-create-app-tutorial/
### Backend Setup (Windows)
0. cd backend
1. python -m venv venv
2. . venv/Scripts/activate
3. pip install -r requirements.txt
4. python manage.py runserver <= run server

### Frontend Setup
0. cd frontend
1. npm i / npm audit fix
2. npm run dev
3. http://localhost:3000/

### Requirements File
- To create a requirement file using pipreqs run the following command:
  - ``` pip install pipreqs ```
  - ``` pipreqs /path/to/project ``` (or . for root directory)
  - ``` pipreqs . --force ``` (rewrite exisiting)

# Setup
- pip install 
  django
  djangorestframework
  django-filter <- https://www.django-rest-framework.org/
  django-cors-headers <- https://pypi.org/project/django-cors-headers/
  markdown 
  python-dotenv
  cloudinary
  drf-yasg <- https://drf-yasg.readthedocs.io/en/stable/readme.html

- django-admin startproject {name} .
- python manage.py startapp {name} <= create app

INSTALLED_APPS
- add app to copy name from campaigns/apps.py and add to cmbackend/settings.py under 

MIGRATE DATABASE
- python manage.py makemigrations 
- python manage.py migrate 

SERIALIZERS
- create serializers.py <= to validate incoming input for users and to specify output for your different responses <= https://www.django-rest-framework.org/api-guide/fields/

ROUTES/API
- create campaigns/urls.py <= for routing
- http://127.0.0.1:8000/api/campaigns

- python manage.py createsuperuser
  - user: prent
  - email: jamesprenticez@gmail.com
  - pass: kj
- http://127.0.0.1:8000/api/admin
- Register Model in cmbackend/admin.py

# Frontend
- npm i / npm audit fix
- npm run dev


- SEO
<head>
  og:{propertice} <= enable previews of our site details when a link is shared on social meadia sites like twitter and facebook - [https://ogp.me/]
</head>
- NextSEO - [https://www.npmjs.com/package/next-seo]
- Date Formate - [https://www.npmjs.com/package/dateformat] <= I like m oment more
- Images lazy load AKA only when they are in view 
- Links prefetch 