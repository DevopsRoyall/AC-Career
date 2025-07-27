-- database/init.sql

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL
);

-- You can add additional tables for progress tracking, e.g.:

CREATE TABLE progress (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  node_id INTEGER NOT NULL,
  unlocked BOOLEAN DEFAULT FALSE
);
