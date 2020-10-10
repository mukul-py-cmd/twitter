create tweet api[POST]
headers{
	"Authorization":"Token 0b26247231851c198b59fd6a5a13b5ae2ac20e61"
}
https://twitter-clone-mukul.herokuapp.com/mytweet/

request
{
	"content":"I am batman!@",
    "image":"FILE FORMAT"
}

response
{
    "id": 16,
    "content": "babuji",
    "likes": 0,
    "updation_date": "2020-10-09T19:48:01.309552Z",
    "user": {
        "id": 11,
        "username": "abc_1232"
    },
    "profile_image": "https://twitter-django-media.s3.amazonaws.com/profile_pics/user_11/Screenshot_92.png",
    "image": "https://twitter-django-media.s3.amazonaws.com/media_files/user_11/Screenshot_120.png"
}


get my tweets[GET]
headers{
	"Authorization":"Token 0b26247231851c198b59fd6a5a13b5ae2ac20e61"
}
https://twitter-clone-mukul.herokuapp.com/mytweet/

response
[
    {
        "id": 15,
        "content": "babuji",
        "likes": 0,
        "updation_date": "2020-10-09T19:46:49.831749Z",
        "user": {
            "id": 11,
            "username": "abc_1232"
        },
        "profile_image": "https://twitter-django-media.s3.amazonaws.com/profile_pics/user_11/Screenshot_92.png",
        "image": null
    },
    {
        "id": 16,
        "content": "babuji",
        "likes": 0,
        "updation_date": "2020-10-09T19:48:01.309552Z",
        "user": {
            "id": 11,
            "username": "abc_1232"
        },
        "profile_image": "https://twitter-django-media.s3.amazonaws.com/profile_pics/user_11/Screenshot_92.png",
        "image": "https://twitter-django-media.s3.amazonaws.com/media_files/user_11/Screenshot_120.png"
    }
]


update my tweet[PUT]
headers{
    "Authorization":"Token 0b26247231851c198b59fd6a5a13b5ae2ac20e61"
}
https://twitter-clone-mukul.herokuapp.com/mytweet/update/<int:id>/
id = Tweet id

request
{
    "content":"I am batman!@",
    "likes":"484"
}





delete my tweet[DELETE]
headers{
    "Authorization":"Token 0b26247231851c198b59fd6a5a13b5ae2ac20e61"
}
https://twitter-clone-mukul.herokuapp.com/mytweet/delete/<int:id>/
id = Tweet id



Get all tweets[GET]
#No token needed
https://twitter-clone-mukul.herokuapp.com/alltweets/
[
    {
        "id": 15,
        "content": "babuji",
        "likes": 0,
        "updation_date": "2020-10-09T19:46:49.831749Z",
        "user": {
            "id": 11,
            "username": "abc_1232"
        },
        "profile_image": "https://twitter-django-media.s3.amazonaws.com/profile_pics/user_11/Screenshot_92.png",
        "image": null
    },
    {
        "id": 16,
        "content": "babuji",
        "likes": 0,
        "updation_date": "2020-10-09T19:48:01.309552Z",
        "user": {
            "id": 11,
            "username": "abc_1232"
        },
        "profile_image": "https://twitter-django-media.s3.amazonaws.com/profile_pics/user_11/Screenshot_92.png",
        "image": "https://twitter-django-media.s3.amazonaws.com/media_files/user_11/Screenshot_120.png"
    }
]


Register user [POST]
https://twitter-clone-mukul.herokuapp.com/users/register/
{
    "first_name":"profile_1",
    "last_name":"agarwal",
    "username":"abc_1232",
    "email":"abc@gmail.com",
    "password":"abcd321"
}



Login user[POST]
https://twitter-clone-mukul.herokuapp.com/users/login/
{
    "username":"abc_1232",
    "password":"abcd321"
}

response
{
    "token": "675a0e23afb33f89dc4a1b405cd2f4b892ac7064"
}


Get Profile[GET]
https://twitter-clone-mukul.herokuapp.com/users/profile/:userid/
No token needed
{
    "user": {
        "first_name": "profile_1",
        "last_name": "agarwal",
        "username": "abc_1232",
        "email": "abc@gmail.com"
    },
    "image": "https://twitter-django-media.s3.amazonaws.com/profile_pics/Screenshot_92.png",
    "followers": 0,
    "following": 0,
    "bio": "First biologychn"
}

Update Profile[PUT]
https://twitter-clone-mukul.herokuapp.com/users/profile/:userid/
headers{
    "Authorization":"Token 0b26247231851c198b59fd6a5a13b5ae2ac20e61"
}

{
    "bio":"anything else",
    "image":"FILE FORMAT"
}