
### Server runing on
 http://localhost:3000

* status 200
```
{
    "status": 200,
    "msg": "SERVER HOME PAGE..."
}
```
---
### MOVIES CRUD
---
#### movies get 
 http://localhost:3000/api/movies 
 * status 200
 ```
{
    "status": "ok",
    "msg": "Get all tvshows list",
    "data": [
          {
            "id": 3,
            "title": "as",
            "description": "afasfs",
            "img_url": "imgU11",
            "thumbnail_url": "thumbU11",
            "year": 2020,
            "genreid": 4,
            "rating": 6,
            "created_at": "2024-12-15T11:43:01.150Z",
            "updated_at": "2024-12-15T11:43:01.150Z"
            }...
        ]
},
 ```
* status 500
```
{ status: 'err', 
msg: "Can't get movies data" }
```

#### movies get by id

http://localhost:3000/api/movies/:id

* status 200

```
{
    "status": "ok",
    "msg": "movie found",
    "data": [
        {
            "id": 23,
            "title": "title",
            "description": "descr",
            "img_url": "img",
            "thumbnail_url": "thumb",
            "year": 2025,
            "genreid": 1,
            "rating": 3,
            "created_at": "2024-12-18T07:57:23.693Z",
            "updated_at": "2024-12-18T07:57:23.693Z"
        }
    ]
}
```

* status 404

```
{
   status: 'err',
   msg: 'Movie not found',
}
```




#### movies post
http://localhost:3000/api/movies 

* body
```
    {                      
        "title": "title",
        "description": "descr",
        "img_url": "img",
        "thumbnail_url": "thumb",
        "year": 2025,
        "genreid": 1,
        "rating": 3
    }
```

* status 200

```
{
    "status": "ok",
    "msg": "Create movie success",
    "data": {
        "title": "reer1",
        "description": "sferfer1",
        "img_url": "asfas1",
        "thumbnail_url": "asfasf1",
        "year": 2025,
        "genre_type": "horror"
        "rating": 3
    }
}
```
* status 409
```
{
    "status": "err",
    "msg": "field cannot be empty"
}

{
    "status": "err",
    "msg": "year must be number, year must be 1888-2025 digits"
}

{
    "status": "err",
    "msg": "wrong genre"
}

{
    "status": "err",
    "msg": "rating must be number from 1-10"
}

```
#### movies put
http://localhost:3000/api/movies/:id

* body
```
    {                      
        "title": "title",
        "description": "descr",
        "img_url": "img",
        "thumbnail_url": "thumb",
        "year": 2025,
        "genreid": 1,
        "rating": 3
    }
```

* status 404
```
{
    status:'err',
    msg:'movie not found'
}
```
* status 200
```
{
    status:'ok',
    msg:'movie updated success'
}
```
#### movies delete
http://localhost:3000/api/movies/:id

* status 200
```
{
    status:'ok',
    msg:'movie deleted success'
}
```
* status 400
```
{
    status:'err', 
    msg:'movie cannot be deleted' 
}
```
---
### TV_SHOWS CRUD
---
#### tvshows get 
 http://localhost:3000/api/tvshows 
 * status 200
 ```
{
    "status": "ok",
    "msg": "Get all tvshows list",
    "data": [
          {
            "id": 3,
            "title": "as",
            "description": "afasfs",
            "img_url": "imgU11",
            "thumbnail_url": "thumbU11",
            "year": 2020,
            "genreid": 4,
            "rating": 6,
            "created_at": "2024-12-15T11:43:01.150Z",
            "updated_at": "2024-12-15T11:43:01.150Z"
            }...
        ]
},
 ```

* status 500
```
{ status: 'err', 
msg: "Can't get tvshows data" }

```

#### tvshow get by id

http://localhost:3000/api/tvshows/:id

* status 200

```
{
    "status": "ok",
    "msg": "tvShow found",
    "data": [
        {
            "id": 23,
            "title": "title",
            "description": "descr",
            "img_url": "img",
            "thumbnail_url": "thumb",
            "year": 2025,
            "genreid": 1,
            "rating": 3,
            "created_at": "2024-12-18T07:57:23.693Z",
            "updated_at": "2024-12-18T07:57:23.693Z"
        }
    ]
}
```

* status 404

```
{
   status: 'err',
   msg: 'tvShow not found',
}
```

#### tvshows post
http://localhost:3000/api/tvshows 

* body
```
    {                      
        "title": "title",
        "description": "descr",
        "img_url": "img",
        "thumbnail_url": "thumb",
        "year": 2025,
        "genreid": 1,
        "rating": 3
    }
```



* status 200

```
{
    "status": "ok",
    "msg": "Create tvshow success",
    "data": {
        "title": "reer1",
        "description": "sferfer1",
        "img_url": "asfas1",
        "thumbnail_url": "asfasf1",
        "year": 2025,
        "genre_type": "horror"
        "rating": 3
    }
}
```
* status 409
```
{
    "status": "err",
    "msg": "field cannot be empty"
}

{
    "status": "err",
    "msg": "year must be number, year must be 1888-2025 digits"
}

{
    "status": "err",
    "msg": "wrong genre"
}

{
    "status": "err",
    "msg": "rating must be number from 1-10"
}

```
#### tvshow put
http://localhost:3000/api/tvshows/:id

* body

```
    {                      
        "title": "title",
        "description": "descr",
        "img_url": "img",
        "thumbnail_url": "thumb",
        "year": 2025,
        "genreid": 1,
        "rating": 3
    }
 ```

* status 404
```
{
    status:'err',
    msg:'tvshow not found'
}
```
* status 200
```
{
    status:'ok',
    msg:'tvshow updated success'
}
```
#### tvshow delete
http://localhost:3000/api/tvshows/:id



* status 200
```
{
    status:'ok',
    msg:'tvshow deleted success'
}
```
* status 400
```
{
    status:'err', 
    msg:'movie cannot be deleted' 
}
```
---
### USER LOGIN
---


#### login user

http://localhost:3000/api/users/login

* body

```
   {                      
            "email": "testas@testas1",
            "password": "testas@testas1"
    }
```

* status 200

```
{
    "status": "ok",
    "msg": "user loged in"
}
```

* status 404

```
{
    "status": "err",
    "msg": "check your email and password"
}
```

-------
### USER REGISTER
---

#### register user 

http://localhost:3000/api/users/register

* body
```
   {          
            "first_name": "asfs",
            "last_name": "asfas",            
            "email": "testas@testas31",
            "username": "asfsasfas",
            "password": "testas@testas2",
    }
 ```

* status 200 
```
{
    "status": "ok",
    "msg": "user created success"
}
```
* status 409

```
{
    "status": "err",
    "msg": "user with this credentials already exsist"
}
```

* status 500

```
{
    status: 'err', 
    msg:'DB connection error'
}
```
-------
### Genre CRUD
---

#### genre get

http://localhost:3000/api/genre

* body
```
{          
    "genre":"classic"    
}
 ```

* status 200 
```
{
    "status": "ok",
    "msg": "all genre data received",
    "data": [
        {
            "id": 1,
            "genre_type": "comedy"
        },
        {
            "id": 2,
            "genre_type": "thriller"
        },
        {
            "id": 3,
            "genre_type": "horror"
        },
        {
            "id": 4,
            "genre_type": "romance"
        }
    ]
}
```
#### genre post
http://localhost:3000/api/genre

* status 200

```
{
    "status": "ok",
    "msg": "genre is created "
}
```

* status 409

```
{
    "status": "err",
    "msg": "genre already exists"
}
```

#### genre delete
http://localhost:3000/api/genre

* status 200 
```
{
    "status": "ok",
    "msg": "Genre completely deleted"
}
```
* status 404

```
{
    "status": "err",
    "msg": "No data to delete"
}
```



