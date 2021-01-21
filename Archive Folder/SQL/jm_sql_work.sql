--us_join table
SELECT * FROM us_join

--ru_join table
SELECT * FROM ru_join

--most views in us table
SELECT * FROM us_join
ORDER BY views DESC
LIMIT 50;

--most views in ru table
SELECT * FROM ru_join
ORDER BY views DESC
LIMIT 50;

--title with most views us table 
SELECT category_name, title, views
FROM us_join
WHERE views = (SELECT MAX(views) FROM us_join);

--title with most views ru table
SELECT category_name, title, views
FROM ru_join
WHERE views = (SELECT MAX(views) FROM ru_join);

--least views in us 
SELECT * FROM us_join
ORDER BY views
LIMIT 50;

--least views in ru table 
SELECT * FROM ru_join
ORDER BY views
LIMIT 50;

--title with least views in us
SELECT category_name, title, views
FROM us_join
WHERE views = (SELECT MIN(views) FROM us_join);

--title with least views in ru
SELECT category_name, title, en_title, views
FROM ru_join
WHERE views = (SELECT MIN(views) FROM ru_join);

--how many times each category occurs in us
SELECT category_name, COUNT(category_name) AS "category name count" 
FROM us_join
GROUP BY category_name
ORDER BY "category name count" DESC;

--how many times each category occurs in ru
SELECT category_name, COUNT(category_name) AS "category name count" 
FROM ru_join
GROUP BY category_name
ORDER BY "category name count" DESC;

--how many videos are in each category in us
SELECT category_name, COUNT (DISTINCT title) AS "title count" 
FROM us_join
GROUP BY category_name
ORDER BY "title count" DESC;

--how many videos are in each category in ru
SELECT category_name, COUNT (DISTINCT title) AS "title count" 
FROM ru_join
GROUP BY category_name
ORDER BY "title count" DESC;

--total views per category in us
SELECT category_name, SUM (views) AS "total views" 
FROM us_join
GROUP BY category_name
ORDER BY "total views" DESC;

--total views per category in ru
SELECT category_name, SUM (views) AS "total views" 
FROM ru_join
GROUP BY category_name
ORDER BY "total views" DESC;

--title with most likes in us
SELECT category_name, title, channel_title, likes
FROM us_join
WHERE likes = (SELECT MAX(likes) FROM us_join);

--title with most likes in ru
SELECT category_name, title, channel_title, likes
FROM ru_join
WHERE likes = (SELECT MAX(likes) FROM ru_join);

--title with most dislikes in us
SELECT category_name, title, channel_title, dislikes, views
FROM us_join
WHERE dislikes = (SELECT MAX(dislikes) FROM us_join);

--title with most dislikes in ru
SELECT category_name, title, channel_title, dislikes, views
FROM ru_join
WHERE dislikes = (SELECT MAX(dislikes) FROM ru_join);

--title with most comments in us
SELECT category_name, title, comment_count
FROM us_join
WHERE comment_count = (SELECT MAX(comment_count) FROM us_join);

--title with most comments in ru
SELECT category_name, title, comment_count
FROM ru_join
WHERE comment_count = (SELECT MAX(comment_count) FROM ru_join);


--titles with views and likes in us
SELECT title, views, likes FROM us_join
ORDER BY views DESC, likes DESC;

--titles with views and likes in ru
SELECT title, en_title, views, likes FROM ru_join
ORDER BY views DESC, likes DESC;


--titles with views and dislikes in us
SELECT title, views, dislikes FROM us_join
ORDER BY views DESC, dislikes DESC;

--titles with views and dislikes in ru
SELECT title, en_title, views, dislikes FROM ru_join
ORDER BY views DESC, dislikes DESC;

--avg views in dataset for us
SELECT ROUND(AVG(views)) AS "average views"
FROM us_join;

--avg views in dataset for ru
SELECT ROUND(AVG(views)) AS "average views"
FROM ru_join;

--avg views, likes and dislikes per title  in us
SELECT title, ROUND(AVG(views)) AS "average views", ROUND(AVG(likes)) AS "average likes", 
	ROUND(AVG(dislikes)) AS "average dislikes" 
FROM us_join
GROUP BY title
ORDER BY "average views" DESC, "average likes" DESC, "average dislikes" DESC

--avg views, likes and dislikes per title in ru
SELECT title, en_title, ROUND(AVG(views)) AS "average views", ROUND(AVG(likes)) AS "average likes", 
	ROUND(AVG(dislikes)) AS "average dislikes" 
FROM ru_join
GROUP BY title, en_title
ORDER BY "average views" DESC, "average likes" DESC, "average dislikes" DESC

--percent of likes & dislikes per views of most watched videos in us
SELECT title, views, likes, dislikes,
	ROUND(likes * 100.0 / views, 3) AS percent_likes,
	ROUND(dislikes * 100.0 / views, 3) AS percent_dislikes
FROM us_join
ORDER BY percent_likes DESC

--percent of likes & dislikes per views of most watched videos in ru
SELECT title, en_title, views, likes, dislikes,
	ROUND(likes * 100.0 / views, 3) AS percent_likes,
	ROUND(dislikes * 100.0 / views, 3) AS percent_dislikes
FROM ru_join
ORDER BY percent_likes DESC

--percent of likes & dislikes per views of least watched videos in us
SELECT title, views, likes, dislikes,
	ROUND(dislikes * 100.0 / views, 3) AS dislikes_percent,
	ROUND(likes * 100.0 / views, 3) AS likes_percent
FROM us_join
ORDER BY views 

--percent of likes & dislikes per views of most watched videos in ru
SELECT title,en_title, views, likes, dislikes,
	ROUND(likes * 100.0 / views, 3) AS percent_likes,
	ROUND(dislikes * 100.0 / views, 3) AS percent_dislikes
FROM ru_join
ORDER BY percent_likes DESC