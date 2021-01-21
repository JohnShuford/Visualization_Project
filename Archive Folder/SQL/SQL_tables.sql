-- DROP TABLE us_videos CASCADE;
-- DROP TABLE ru_videos CASCADE;
-- DROP TABLE us_categories;
-- DROP TABLE ru_categories;

CREATE TABLE RU_videos(
	index INT NOT NULL,
	trending_date VARCHAR NOT NULL,
	title VARCHAR NOT NULL,
	en_title VARCHAR,
	channel_title VARCHAR NOT NULL,
	en_channel_title VARCHAR,
	category_id INT NOT NULL,
	publish_time VARCHAR NOT NULL,
	tags VARCHAR NOT NULL,
	en_tags VARCHAR,
	views INT NOT NULL,
	likes INT NOT NULL,
	dislikes INT NOT NULL,
	comment_count INT NOT NULL,
	comments_disabled BOOLEAN NOT NULL,
	PRIMARY KEY (index),
	FOREIGN KEY (category_id)REFERENCES categories (category_id));
	
CREATE TABLE categories(
	category_id INT NOT NULL,
	Category_name VARCHAR NOT NULL,
	PRIMARY KEY (category_id));

CREATE TABLE US_videos(
	index INT NOT NULL,
	trending_date VARCHAR NOT NULL,
	title VARCHAR NOT NULL,
	channel_title VARCHAR NOT NULL,
	category_id INT NOT NULL,
	publish_time VARCHAR NOT NULL,
	tags VARCHAR NOT NULL,
	views INT NOT NULL,
	likes INT NOT NULL,
	dislikes INT NOT NULL,
	comment_count INT NOT NULL,
	comments_disabled BOOLEAN NOT NULL,
	PRIMARY KEY (index),
	FOREIGN KEY (category_id)REFERENCES categories (category_id));

SELECT * FROM categories

SELECT * FROM ru_videos

SELECT * FROM us_videos
