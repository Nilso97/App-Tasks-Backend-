CREATE SCHEMA app;

CREATE TABLE app.tasks (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    complete BOOLEAN NOT NULL,
    date TIMESTAMP DEFAULT NOW()
);

SELECT * FROM app.tasks;