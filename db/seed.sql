CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic TEXT
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INTEGER REFERENCES users(id)
);

INSERT INTO posts
(title, img, content)
VALUES
('Sky 1', 'http://www.freeskybackgrounds.com/images/HD/FreeSkyBackground-14.jpg', 'This is a pretty pic of the sky. '), 
('Sky 2', 'http://www.freeskybackgrounds.com/images/HD/FreeSkyBackground-14.jpg', 'I like the sky'), 
('Sky 3', 'http://www.freeskybackgrounds.com/images/HD/FreeSkyBackground-14.jpg', 'Its totes super fabss!');

INSERT INTO users
(username, password, profile_pic)
VALUES
('Jake', 'pass', 'https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg'), 
('John', 'pass2', 'https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg'), 
('Joe', 'pass3', 'https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg');