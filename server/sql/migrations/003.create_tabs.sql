create table if not exists tabs (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	navId INTEGER NOT NULL,
	title VARCHAR NOT NULL,
	mainTitle VARCHAR NOT NULL,
	foreign key(navId) REFERENCES nav(id)
);