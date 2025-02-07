CREATE TABLE users (
id SERIAL PRIMARY KEY,
first_name VARCHAR(20) NOT NULL,
last_name VARCHAR(20) NOT NULL,
email VARCHAR(50) NOT NULL,
username VARCHAR(20) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP); 

CREATE TABLE users_roles (
  id SERIAL PRIMARY KEY,
  role_name varchar(20) NOT NULL);

  CREATE TABLE category(
id SERIAL PRIMARY KEY,
category_type VARCHAR(20) NOT NULL );

CREATE TABLE users_secrets (
  id SERIAL PRIMARY KEY,
  userId INT NOT NULL,
  roleId INT NOT NULL,
  password varchar(30) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users (id),
  FOREIGN KEY (roleId) REFERENCES users_roles (id));

CREATE TABLE product ( 
id SERIAL PRIMARY KEY, 
title VARCHAR(50) NOT NULL, 
description VARCHAR(800) NOT NULL, 
img_url VARCHAR(300) NOT NULL, 
categoryId INT NOT NULL, 
price INT NULL, 
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
FOREIGN KEY (categoryId) REFERENCES category (id)); 

CREATE TABLE comments (
id SERIAL PRIMARY KEY, 
comment VARCHAR(200) NOT NULL, 
userId INT NOT NULL, 
productId INT NOT NULL, 
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
FOREIGN KEY (userId) REFERENCES users (id), 
FOREIGN KEY (productId) REFERENCES product (id)); 
CREATE TABLE favourites ( 
id SERIAL PRIMARY KEY, 
userId INT NOT NULL, 
productId INT NOT NULL, 
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
FOREIGN KEY (userId) REFERENCES users (id), 
FOREIGN KEY (productId) REFERENCES product (id));

INSERT INTO users_roles (role_name) 
VALUES ('user'), ('admin'); 
INSERT INTO category (category_type) 
VALUES ('clothes'), ('cars'), ('appliances'), ('electronics'); 
INSERT INTO users (first_name, last_name, email, username) 
VALUES ('user', 'user', 'user@user.com', 'user'), ('admin', 'admin', 'admin@admin.com', 'admin'); 
INSERT INTO users_secrets (userId, password, roleId) 
VALUES (1, 'User@user1', 1), (2, 'Admin@admin1', 2); 
INSERT INTO product (title, description, img_url, categoryId, price) 
VALUES ('Dress', 'Nauja, tik nukirptos etiketės, Kaspinėlis nusisega, Tampri medžiaga, Ilgis 85cm, liemuo 36cm +tempiasi, Tinka M ir mažesniam L, Puikiai tiktų artėjančiai Valentino dienai (ir ne tik)', 'https://images1.vinted.net/t/03_00768_NiJ7nnhymGK3gXnpDxVHB49i/f800/1738860960.jpeg?s=2e8eff668abc0f1eac8966e30f0cfccc6a2fa681', 1,  20), ('Instead Mini 12 white', 'Instead Mini 12 without inserts. White color. Fully functional equipment, purchased last year. Ideal for use in a guest book for a wedding and other celebrations.', 'https://images1.vinted.net/t/04_00b7a_Zsxwb7FW5PtRiRPjSJdPUU1w/f800/1738915424.jpeg?s=5a4c8e1d49bf7c68ef290806fe1ae13e175decc9', 4, 100); 

