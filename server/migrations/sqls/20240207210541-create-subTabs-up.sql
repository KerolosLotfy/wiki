create table if not exists subTabs (
	id serial primary key,
	tabId int NOT NULL,
	title VARCHAR NOT NULL,
	content text NOT NULL,
	foreign key(tabId) REFERENCES tabs(id)
);

