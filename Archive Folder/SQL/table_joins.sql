CREATE VIEW us_Join AS 
SELECT c.category_id, 
		c.Category_name, 
		u.index, 
		u.trending_date, 
		u.title, 
		u.channel_title, 
		(u.category_id) as us, 
		u.publish_time, 
		u.tags, 
		u.views, 
		u.likes, 
		u.dislikes, 
		u.comment_count, 
		u.comments_disabled
FROM categories AS c
JOIN us_videos AS u
ON (c.category_id = u.category_id);

SELECT * FROM us_join

CREATE VIEW ru_join AS 
SELECT c.category_id, 
		c.Category_name, 
		u.index, 
		u.trending_date, 
		u.title,
		u.en_title,
		u.channel_title,
		u.en_channel_title,
		(u.category_id) as ru, 
		u.publish_time, 
		u.tags, 
		u.en_tags,
		u.views, 
		u.likes, 
		u.dislikes, 
		u.comment_count, 
		u.comments_disabled
FROM categories AS c
JOIN ru_videos AS u
ON (c.category_id = u.category_id);

SELECT * FROM ru_join