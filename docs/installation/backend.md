## Setup Environment
 - Install [Python >= 3.10](https://www.python.org/downloads/release/python-3100/){:target="_blank"}
 - Clone this repository: 
    ```
    git clone https://github.com/ehsan18t/unilink-server.git
    ```
 - Open project folder in terminal
    ```
    cd unilink-server
    ```
 - Create `.venv` 
    ```
    python -m venv .venv
    ```
 - Activate `venv` 
    ```
    .venv\Scripts\activate.bat
    ```
 - Install required packages
    ```
    pip install -r requirements.txt
    ```
 - success "add `.env.local` file with following environment variables"
   ```.env title=".env.local"
   DJANGO_SECRET_KEY={==<Django Secret Key>==}
   DEBUG=True
   DOMAIN=localhost:3000
   SERVER=http://localhost:8000
   SITE_NAME=UniLink
   EMAIL_HOST_USER={==<Email That will be responsible for sending emails>==}
   EMAIL_HOST_PASSWORD={==<App Password of the Email>==}
   AUTH_COOKIE_SECURE=False
   ```
      <center> [Obtain Django Secret Key](#obtain-django-secret-key){ .md-button } <gap-l> [Obtain Gmail App Passwords](#obtain-gmail-app-password){ .md-button } </gap-l> </center>
 - Migrate database
    ```
    python manage.py makemigrations
    ```
    ```
    python manage.py migrate
    ```
 - Create admin account
    ```
    python manage.py createsuperuser
    ```
 - Run the server
    ```
    python manage.py runserver
    ```
 - Now you should be able to see the server at [http://localhost:8000](http://localhost:8000)

<br>

## Obtain Django Secret Key

!!! example "Ways to Obtain Django Secret Key"

    === "New Django Project"
        * Create a django project and copy the secret key from `settings.py`

    === "Online Generator"
        * Go to [Django Secret Key Generator](https://djecrety.ir/){:target="_blank"} and click generate.

    === "Python Script"
        * Secret key can also be generated using following python script
         ```python title="django_secret_generator.py"
         from django.core.management.utils import get_random_secret_key
         get_random_secret_key()
         ```

<br>

## Obtain Gmail App Password
You can follow the steps below to obtain the app password

   - Go to [Google Account > Security](https://myaccount.google.com/security){:target="_blank"}
   - Turn on `2-Step Verification`
   - Go to [Google Account > Security > App Passwords](https://myaccount.google.com/apppasswords){:target="_blank"}
   - It may ask you to enter password to verify your identity
   - Now you should see a page like this,
   ![App Passwords](/assets/uploads/images/App_Passwords.png)
   - Now, select `app` and `device` and click `Generate` (it doesn't matter what you select)
   ![App Passwords](/assets/uploads/images/App_Passwords_2.png)
