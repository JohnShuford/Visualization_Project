CREATE TABLE categories(
	category_id INT NOT NULL,
	Category_name VARCHAR NOT NULL,
	PRIMARY KEY (category_id));

CREATE TABLE CA_videos(
	channel_title VARCHAR NOT NULL,
	no_of_vids INT NOT NULL,
	trending_date VARCHAR NOT NULL,
	title VARCHAR NOT NULL,
	category_id INT NOT NULL,
	publish_time VARCHAR NOT NULL,
	tags VARCHAR NOT NULL,
	views INT NOT NULL,
	likes INT NOT NULL,
	dislikes INT NOT NULL,
	comment_count INT NOT NULL,
	comments_disabled BOOLEAN NOT NULL,
	PRIMARY KEY (title),
	FOREIGN KEY (category_id)REFERENCES categories (category_id));
	
CREATE TABLE DE_videos(
	channel_title VARCHAR NOT NULL,
	no_of_vids INT NOT NULL,
	trending_date VARCHAR NOT NULL,
	title VARCHAR NOT NULL,
	category_id INT NOT NULL,
	publish_time VARCHAR NOT NULL,
	tags VARCHAR NOT NULL,
	views INT NOT NULL,
	likes INT NOT NULL,
	dislikes INT NOT NULL,
	comment_count INT NOT NULL,
	comments_disabled BOOLEAN NOT NULL,
	PRIMARY KEY (title),
	FOREIGN KEY (category_id)REFERENCES categories (category_id));
	
CREATE TABLE FR_videos(
	channel_title VARCHAR NOT NULL,
	no_of_vids INT NOT NULL,
	trending_date VARCHAR NOT NULL,
	title VARCHAR NOT NULL,
	category_id INT NOT NULL,
	publish_time VARCHAR NOT NULL,
	tags VARCHAR NOT NULL,
	views INT NOT NULL,
	likes INT NOT NULL,
	dislikes INT NOT NULL,
	comment_count INT NOT NULL,
	comments_disabled BOOLEAN NOT NULL,
	PRIMARY KEY (title),
	FOREIGN KEY (category_id)REFERENCES categories (category_id));
	
CREATE TABLE GB_videos(
	channel_title VARCHAR NOT NULL,
	no_of_vids INT NOT NULL,
	trending_date VARCHAR NOT NULL,
	title VARCHAR NOT NULL,
	category_id INT NOT NULL,
	publish_time VARCHAR NOT NULL,
	tags VARCHAR NOT NULL,
	views INT NOT NULL,
	likes INT NOT NULL,
	dislikes INT NOT NULL,
	comment_count INT NOT NULL,
	comments_disabled BOOLEAN NOT NULL,
	PRIMARY KEY (title),
	FOREIGN KEY (category_id)REFERENCES categories (category_id));
	
CREATE TABLE IN_videos(
	channel_title VARCHAR NOT NULL,
	no_of_vids INT NOT NULL,
	trending_date VARCHAR NOT NULL,
	title VARCHAR NOT NULL,
	category_id INT NOT NULL,
	publish_time VARCHAR NOT NULL,
	tags VARCHAR NOT NULL,
	views INT NOT NULL,
	likes INT NOT NULL,
	dislikes INT NOT NULL,
	comment_count INT NOT NULL,
	comments_disabled BOOLEAN NOT NULL,
	PRIMARY KEY (title),
	FOREIGN KEY (category_id)REFERENCES categories (category_id));
	
CREATE TABLE JP_videos(
	channel_title VARCHAR NOT NULL,
	no_of_vids INT NOT NULL,
	trending_date VARCHAR NOT NULL,
	title VARCHAR NOT NULL,
	category_id INT NOT NULL,
	publish_time VARCHAR NOT NULL,
	tags VARCHAR NOT NULL,
	views INT NOT NULL,
	likes INT NOT NULL,
	dislikes INT NOT NULL,
	comment_count INT NOT NULL,
	comments_disabled BOOLEAN NOT NULL,
	PRIMARY KEY (title),
	FOREIGN KEY (category_id)REFERENCES categories (category_id));
	
CREATE TABLE KR_videos(
	channel_title VARCHAR NOT NULL,
	no_of_vids INT NOT NULL,
	trending_date VARCHAR NOT NULL,
	title VARCHAR NOT NULL,
	category_id INT NOT NULL,
	publish_time VARCHAR NOT NULL,
	tags VARCHAR NOT NULL,
	views INT NOT NULL,
	likes INT NOT NULL,
	dislikes INT NOT NULL,
	comment_count INT NOT NULL,
	comments_disabled BOOLEAN NOT NULL,
	PRIMARY KEY (title),
	FOREIGN KEY (category_id)REFERENCES categories (category_id));
	
CREATE TABLE MX_videos(
	channel_title VARCHAR NOT NULL,
	no_of_vids INT NOT NULL,
	trending_date VARCHAR NOT NULL,
	title VARCHAR NOT NULL,
	category_id INT NOT NULL,
	publish_time VARCHAR NOT NULL,
	tags VARCHAR NOT NULL,
	views INT NOT NULL,
	likes INT NOT NULL,
	dislikes INT NOT NULL,
	comment_count INT NOT NULL,
	comments_disabled BOOLEAN NOT NULL,
	PRIMARY KEY (title),
	FOREIGN KEY (category_id)REFERENCES categories (category_id));
	
CREATE TABLE RU_videos(
	channel_title VARCHAR NOT NULL,
	no_of_vids INT NOT NULL,
	trending_date VARCHAR NOT NULL,
	title VARCHAR NOT NULL,
	category_id INT NOT NULL,
	publish_time VARCHAR NOT NULL,
	tags VARCHAR NOT NULL,
	views INT NOT NULL,
	likes INT NOT NULL,
	dislikes INT NOT NULL,
	comment_count INT NOT NULL,
	comments_disabled BOOLEAN NOT NULL,
	PRIMARY KEY (title),
	FOREIGN KEY (category_id)REFERENCES categories (category_id));
	
CREATE TABLE US_videos(
	channel_title VARCHAR NOT NULL,
	no_of_vids INT NOT NULL,
	trending_date VARCHAR NOT NULL,
	title VARCHAR NOT NULL,
	category_id INT NOT NULL,
	publish_time VARCHAR NOT NULL,
	tags VARCHAR NOT NULL,
	views INT NOT NULL,
	likes INT NOT NULL,
	dislikes INT NOT NULL,
	comment_count INT NOT NULL,
	comments_disabled BOOLEAN NOT NULL,
	PRIMARY KEY (title),
	FOREIGN KEY (category_id)REFERENCES categories (category_id));