# API

<!-- For full documentation visit [mkdocs.org](https://www.mkdocs.org). -->


## ***Create User***

**Brief**


To create a user one needs to send the the information in a jason format and depending on that our system will 
register that  as a profile.

    Used Api : http://127.0.0.1:8000/api/users/
    
**Request Header**

    Content-Type : application/json

 **Body [Raw (json)]**

    

    {
    "first_name": "Ehsan",
    "last_name": "Khan",
    "username": "ehsan",
    "email": "ehsan18t@gmail.com",
    "password": "myTestPass123.",
    "re_password": "myTestPass123."
    }





## **JWT User Create**

**Brief**


To create a user one needs to send the the information in a jason format and depending on that our system will 
register that  as a profile.

    Used Api :http://127.0.0.1:8000/api/jwt/create/
   

**Request Header**

    Content-Type : application/json

**Body [Raw (json)]**

    {
        "email": "ehsan18t@gmail.com",
        "password": "myTestPass123."
    }


## ***Create User (With University)***    

**Brief**

To create a user one needs to send the the information in a jason format and depending on that our system will 
register that  as a profile.

     Used Api : http://127.0.0.1:8000/api/users/

**Request Header**

    Content-Type : application/json

**Body [Raw (json)]**

    {
    "first_name": "Ehsan",
    "last_name": "Khan",
    "username": "ehsanUni",
    "email": "xcarl3t@gmail.com",
    "university": "1",
    "password": "myTestPass123.",
    "re_password": "myTestPass123."
    }  

     


## ***JWT User Create (Site Admin)***
**Brief**

To create a user one needs to send the the information in a jason format and depending on that our system will 
register that  as a profile.    

    Used Api : http://127.0.0.1:8000/api/jwt/create/

**Request Header**

    Content-Type : application/json    

**Body [Raw (json)]**

    {
    "email": "nobody.ahsan@gmail.com",
    "password": "asxzasxz"
    }



## ***Account Activiton***

**Brief**

To activate the registered account a token will be generated and sent to the corrosponding e-mail to verfiy the
owner. After verfying the account will be registered.

    Used Api : http://127.0.0.1:8000/api/users/activation/

**Request Header**

    Content-Type : application/json       

**Body [Raw (json)]**   

    {
    "uid":"NQ",
    "token":"br5ds7-38480a3770236a3c5ae4056c5798d152"
    }


## ***JWT User Refreash***

    Used Api : http://127.0.0.1:8000/api/jwt/refresh/

## ***JWT User Verify***    

    Used Api : http://127.0.0.1:8000/api/jwt/verify/

## ***Retrive User***     

    Used Api : http://127.0.0.1:8000/api/users/me/

## ***Request Reset Password***     

    Used Api : http://127.0.0.1:8000/api/users/reset_password/

**Request Header**

    Content-Type : application/json   

**Body [Raw (json)]**   

    {
    "email": "ehsan18t@gmail.com"
    }

## ***Reset Password Confirmation***  

**Brief**

To reset the password of an account this api is being used.

    Used Api: http://127.0.0.1:8000/api/users/reset_password_confirm/

**Request Header**

    Content-Type : application/json   

**Body [Raw (json)]**   

    {
    "uid":"NQ",
    "token":"br5f9q-9e13c10052139803dd3713ca30a85c50",
    "new_password": "mynewpass",
    "re_new_password": "mynewpass"
    }


## ***Logout***  

    Used Api : http://127.0.0.1:8000/api/logout/