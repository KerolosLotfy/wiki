create table if not exists tabs (
	id serial primary key,
	navId INTEGER NOT NULL,
	title VARCHAR NOT NULL,
	mainTitle VARCHAR NOT NULL,
	foreign key(navId) REFERENCES nav(id)
);