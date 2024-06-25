CREATE DATABASE  influence;

\c influence

CREATE TABLE registrados (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    direction VARCHAR(200) NOT NULL,
    email VARCHAR(100) NOT NULL,
    instagram VARCHAR(100) NOT NULL
);

