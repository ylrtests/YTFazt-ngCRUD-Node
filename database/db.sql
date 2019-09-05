CREATE DATABASE ng_games_db;
USE ng_games_db;

CREATE TABLE games(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE games;


INSERT INTO games (games.title, games.description, games.image) 
VALUES ('Grand Theft Auto V', 
'Grand Theft Auto V is an action-adventure video game developed by Rockstar North and published by Rockstar Games',
'https://i.blogs.es/17900b/gta_v_00-1/450_1000.jpg');

INSERT INTO games (games.title, games.description, games.image) 
VALUES ('FIFA 19', 
'FIFA 19 delivers a champion-caliber experience on and off the pitch',
'https://www.ktronix.com/media/KTRONIX/contenido/Accesorios-videojuegos/ps4/fifa19land_.jpg');

INSERT INTO games (games.title, games.description, games.image) 
VALUES ('Call of Duty', 
'Call of Duty. Call of Duty is a first-person shooter video game based on id Tech 3, and was released on October 29, 2003.',
'https://www.geek.com/wp-content/uploads/2018/02/Call-of-Duty-Black-Ops-4.jpg');

INSERT INTO games (games.title, games.description, games.image) 
VALUES ('Age of Empires 2 HD', 
'Age of Empires II is the sequel to the award-winning, best-selling real-time strategy game Age of Empires.',
'https://http2.mlstatic.com/age-of-empires-2-hd-edition-steam-D_NQ_NP_620015-MLM26489216581_122017-F.jpg');

INSERT INTO games (games.title, games.description, games.image) 
VALUES ('Rise of Nations', 
'Rise of Nations is a real-time strategy video game, developed by Big Huge Games and published by Microsoft Game Studios in May 2003.',
'https://fontmeme.com/images/Rise-of-Nations-Game.jpg');