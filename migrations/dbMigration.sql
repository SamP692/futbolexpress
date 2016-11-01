DROP DATABASE IF EXISTS futbolexpress;
CREATE DATABASE futbolexpress;

\c futbolexpress

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255)
);
