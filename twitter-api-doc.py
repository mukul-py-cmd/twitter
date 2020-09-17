create tweet api[PUSH]
headers{
	"Authorization":"Token 0b26247231851c198b59fd6a5a13b5ae2ac20e61"
}
https://twitter-clone-mukul.herokuapp.com/mytweet/

request
{
	"content":"I am batman!@"
}

response
{}


get my tweets[GET]
headers{
	"Authorization":"Token 0b26247231851c198b59fd6a5a13b5ae2ac20e61"
}
https://twitter-clone-mukul.herokuapp.com/mytweet/

response
[
    {
        "id": 1,
        "content": "I am batman!@",
        "likes": 0,
        "updation_date": "2020-09-16T19:12:32.284778Z",
        "user": {
            "id": 2,
            "username": "qwdwqwq"
        }
    }
]

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
        "id": 1,
        "content": "my name is",
        "likes": 4,
        "updation_date": "2020-09-14T15:35:43.301382Z",
        "user": {
            "id": 10,
            "username": "pablo"
        }
    },
    {
        "id": 2,
        "content": "my name is pablo",
        "likes": 7,
        "updation_date": "2020-09-15T04:33:04.130059Z",
        "user": {
            "id": 10,
            "username": "pablo"
        }
    },
]