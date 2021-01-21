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

--least views in us table 
SELECT * FROM us_join
ORDER BY views
LIMIT 50;

--title with least views 
SELECT category_name, title, views
FROM us_join
WHERE views = (SELECT MIN(views) FROM us_join);

--how many times each category occurs
SELECT category_name, COUNT(category_name) AS "category name count" 
FROM us_join
GROUP BY category_name
ORDER BY "category name count" DESC;

--how many videos are in each category 
SELECT category_name, COUNT (DISTINCT title) AS "title count" 
FROM us_join
GROUP BY category_name
ORDER BY "title count" DESC;

--total views per category
SELECT category_name, SUM (views) AS "total views" 
FROM us_join
GROUP BY category_name
ORDER BY "total views" DESC;

--title with most likes
SELECT category_name, title, channel_title, likes
FROM us_join
WHERE likes = (SELECT MAX(likes) FROM us_join);

--title with most dislikes
SELECT category_name, title, channel_title, dislikes, views
FROM us_join
WHERE dislikes = (SELECT MAX(dislikes) FROM us_join);

--title with most comments
SELECT category_name, title, comment_count
FROM us_join
WHERE comment_count = (SELECT MAX(comment_count) FROM us_join);

--titles with views and likes
SELECT title, views, likes FROM us_join
ORDER BY views DESC, likes DESC;

--titles with views and dislikes
SELECT title, views, dislikes FROM us_join
ORDER BY views DESC, dislikes DESC;

--avg views in dataset
SELECT ROUND(AVG(views)) AS "average views"
FROM us_join;

--avg views, likes and dislikes per title 
SELECT title, ROUND(AVG(views)) AS "average views", ROUND(AVG(likes)) AS "average likes", 
	ROUND(AVG(dislikes)) AS "average dislikes" 
FROM us_join
GROUP BY title
ORDER BY "average views" DESC, "average likes" DESC, "average dislikes" DESC

--percent of likes & dislikes per views of most watched videos
SELECT title, en_title, views, likes, dislikes,
	ROUND(likes * 100.0 / views, 3) AS percent_likes,
	ROUND(dislikes * 100.0 / views, 3) AS percent_dislikes
FROM ru_join
ORDER BY percent_likes DESC

--percent of likes & dislikes per views of least watched videos
SELECT title, views, likes, dislikes,
	ROUND(dislikes * 100.0 / views, 3) AS dislikes_percent,
	ROUND(likes * 100.0 / views, 3) AS likes_percent
FROM us_join
ORDER BY views 