create table if not exists questions (
	id serial primary key,
	question TEXT NOT NULL ,
	answer VARCHAR NOT NULL
);
ALTER SEQUENCE questions_id_seq RESTART;

