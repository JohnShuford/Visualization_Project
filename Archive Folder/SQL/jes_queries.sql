-- US Stats
SELECT AVG(likes) AS avg_likes
FROM us_videos;

SELECT AVG(dislikes) AS avg_dislikes
FROM us_videos;

SELECT AVG(comment_count) AS avg_comment_count
FROM us_videos;

SELECT AVG(views) AS avg_views
FROM us_videos;

-- Most liked video US
SELECT MAX(likes) AS max_likes
FROM us_videos;

SELECT channel_title, title, likes, dislikes, comment_count
FROM us_videos
WHERE likes = (SELECT MAX(likes) FROM us_videos);

-- Most disliked video US
SELECT MAX(dislikes) AS max_dislikes
FROM us_videos;

SELECT channel_title, title, dislikes, likes, comment_count
FROM us_videos
WHERE dislikes = (SELECT MAX(dislikes) FROM us_videos);

-- Most commented video US
SELECT MAX(comment_count) AS max_comment_count
FROM us_videos;

SELECT channel_title, title, comment_count, dislikes, likes
FROM us_videos
WHERE comment_count = (SELECT MAX(comment_count) FROM us_videos);

-- Russia Stats
SELECT AVG(likes) AS avg_likes
FROM ru_videos;

SELECT AVG(dislikes) AS avg_dislikes
FROM ru_videos;

SELECT AVG(comment_count) AS avg_comment_count
FROM ru_videos;

SELECT AVG(views) AS avg_views
FROM ru_videos;

-- Most liked video RU
SELECT MAX(likes) AS max_likes
FROM ru_videos;

SELECT channel_title, en_channel_title, title, en_title, likes, dislikes, comment_count
FROM ru_videos
WHERE likes = (SELECT MAX(likes) FROM ru_videos);

-- Most disliked video RU
SELECT channel_title, en_channel_title, title, en_title, likes, dislikes, comment_count
FROM ru_videos
WHERE dislikes = (SELECT MAX(dislikes) FROM ru_videos);

-- Most commented video RU
SELECT channel_title, en_channel_title, title, en_title, likes, dislikes, comment_count
FROM ru_videos
WHERE comment_count = (SELECT MAX(comment_count) FROM ru_videos);

-- Categorie Queries
-- Most popular channel & category (measured by number of times they had a video trending)
SELECT channel_title, en_channel_title, category_name, COUNT(*) AS channel_count
FROM ru_join
GROUP BY channel_title, en_channel_title, category_name
ORDER BY channel_count DESC;

SELECT channel_title, category_name, COUNT(*) AS channel_count
FROM us_join
GROUP BY channel_title, category_name
ORDER BY channel_count DESC;

-- Most viewed video and channel name per category (for 5 top categories), US
SELECT DISTINCT channel_title, category_name, title, views
FROM us_join
WHERE category_name = 'Entertainment'
ORDER BY views DESC;

SELECT DISTINCT channel_title, category_name, title, views
FROM us_join
WHERE category_name = 'Music'
ORDER BY views DESC;

SELECT DISTINCT channel_title, category_name, title, views
FROM us_join
WHERE category_name = 'Film & Animation'
ORDER BY views DESC;

SELECT DISTINCT channel_title, category_name, title, views
FROM us_join
WHERE category_name = 'Comedy'
ORDER BY views DESC;

SELECT DISTINCT channel_title, category_name, title, views
FROM us_join
WHERE category_name = 'People & Blogs'
ORDER BY views DESC;

-- Most viewed video and channel name per category (for 5 top categories), RU
SELECT DISTINCT channel_title, en_channel_title, title, en_title, category_name, views
FROM ru_join
WHERE category_name = 'Entertainment'
ORDER BY views DESC;

SELECT DISTINCT channel_title, en_channel_title, title, en_title, category_name, views
FROM ru_join
WHERE category_name = 'Music'
ORDER BY views DESC;

SELECT DISTINCT channel_title, en_channel_title, title, en_title, category_name, views
FROM ru_join
WHERE category_name = 'People & Blogs'
ORDER BY views DESC;

SELECT DISTINCT channel_title, en_channel_title, title, en_title, category_name, views
FROM ru_join
WHERE category_name = 'Comedy'
ORDER BY views DESC;

SELECT DISTINCT channel_title, en_channel_title, title, en_title, category_name, views
FROM ru_join
WHERE category_name = 'News & Politics'
ORDER BY views DESC;
