DROP TABLE IF EXISTS flower;

CREATE TABLE IF NOT EXISTS flower (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    photo VARCHAR(255),
    info VARCHAR(10000)
);
