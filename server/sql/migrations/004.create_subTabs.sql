create table if not exists subTabs (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	tabId int NOT NULL,
	title VARCHAR NOT NULL,
	content text NOT NULL,
	foreign key(tabId) REFERENCES tabs(id)
);

