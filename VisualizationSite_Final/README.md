Visualization Project: Global Analysis of Trending YouTube Data
-----
![small_YouTube-logo-play-icon](https://user-images.githubusercontent.com/69160361/106512655-20e65900-648f-11eb-8900-1df5ec5f7fdb.png)

Project Overview
------
### Dataset

The data used for this project 
can be found [here](https://www.kaggle.com/datasnaek/youtube-new). The final dataset included the data for 10 counties (*N*= 45,698). Individual CSVs were downloaded, cleaned, and merged together for analysis. The original CSV files for each country can be found in the 'Data' folder, and the cleaned CSVs used for analysis can be found in the 'CSVs' folder. The Jupyter Notebooks used to clean and transform the data can be found in the 'Notebooks' folder.

**Countries Analyzed**
- US
- Russia
- Canada
- Great Britain
- France
- Germany
- Japan
- South Korea
- India
- Mexico

### Specific Project Requirements 

1) We built on a previous project where we used SQL/PGAdmin to extract, transform, and load data for US and Russia YouTube Statistics. We added eight more countries to our analysis. The schemas created to load our data into the database can be found in the 'SQL' folder.
2) We chose to create a custom, creative visualization project using JavaScript and D3. 
3) We used [three.js](https://threejs.org/) as our new JavaScript library to create a 3D representation of four of the trending YouTube videos.
4) Our final dataset included 45,698 records from a total of 10 countries.
5) Our final website include multiple forms of user driven interaction, such as a **dropdown** menu on the main page dashboard and on our bubble chart to navigate through and view the different data for each country. We incorporated multiple interactive visualizations where the user can select what countries data to view, or which statistics to see. Our website itself also has an interactive **menu**/navigation bar where the user can navigate through the website/different visualizations.
6) Our final project includes **four unique visualizations, and one dashboard** of different video metrics for each country. Our bubble chart visualization as well as our dashboard of country metrics include 10 different views, one for each country. Our bubble chart visualization also includes two different views for each country, one that includes every video, and one that seperates the videos into categories. Our interactive bar chart allows the user to navigate between three different metrics (average likes, dislikes, and views) and see the data displayed for each country.

### Source Codes

For three of our visualizations, we adapted publically available code libraries for use with our own data/styling. 
- The code used for creating our bubble chart can be found [here](https://vallandingham.me/vis/gates/).
- The code used for our map can be found [here](https://d3-geomap.github.io/).
- The code used for our 3D Box can be found [here](link).
- The final project can be found [here](https://johnshuford.github.io/Visualization_Project/index.html).

### Team Members

- Fereshteh Aghaei 
- Jen Mahon 
- Julia Squeri
- John Shuford