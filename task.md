# An app for managing and viewing films and TV series

### About the application: 

The Films and Series Administration and Review application allows visitors to search for films and 
view their information, select their favourites and comment on them. Admin can manage genres and movie/series data.
 # Functional requirements
### Users and roles
- Administrator: Responsible for the management of movies/series and genres.
- User: Can search for films, view them, add them to favourites, comment on them.

### Administrator can manage genres of movies/series
Administrator can:
1. Create a genre by entering a unique genre name. If the genre already exists, the system 
reports an error.
2. Edit the genre.
3. Remove the genre.

### Administrator can manage films/serials
The administrator can:
1. Create a film/serial by specifying:
* Title
* Description
* Image
* Thumbnail
* Year
* Genre
* Rating
2. Edit a film/series.
3. Remove a film/series.

### Users can access the application
1. Register by entering username, email address and password.
2. Login/logout.

### Users can search for movies/series
1. Search by title.

### Users can view information about films/series
1. See full movie/series information (description, genre, rating, etc.).

### Online users can add a film/series to their favourites
1. Add a movie/series to your favourites list.
2. Remove from favourites list.

### Logged-in users can comment on movies/series
1. Add a comment after a movie/series.
2. See other users' comments.

### Users can filter movies/series by genre
1. Select a genre and see all the movies/series in it.

## Non-functional requirements

### System technology

1. Backend: Spring (Java) or Node.js (JavaScript).
2. Frontend: React.
3. Relational database (e.g. MySQL/PostgreSQL).

### Interface requirements

1. The system must be suitable for both mobile devices and desktop computers.

### The system shall be accompanied by documentation on the installation and use of the system

1. The installation documentation shall describe how to install and run the system.