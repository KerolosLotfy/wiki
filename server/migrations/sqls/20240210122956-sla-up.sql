create table if not exists sla (
	id serial primary key,
	cases VARCHAR NOT NULL ,
	normal VARCHAR NOT NULL,
	delay VARCHAR NOT NULL
);
ALTER SEQUENCE questions_id_seq RESTART;

