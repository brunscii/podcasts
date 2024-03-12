## Server Side of Podcast app
This is the Node Server for the podcast app


### The database/data

The data that we will need for the podcast app is
- Podcast
    - rss_link
    - name
    - link
    - category
    - pubDate
- Application Specific
    - played
    - list of Podcasts ( subscriptions )
    - qeued
    - downloaded

Should there be a background task on the server to process the rss data and store the results/rss data for each subbed podcast? 

if so, where do we store that information? 

- in a separate db?
- in a single file?
- dl the rss data directly?
- json file to load as an object?

If so, should it have a timer to do updates to the data? What time interval? 
- 30 min?
- 1 hour?
- on demand?
- Depends on the server cost and compute time?

### Routes

>/

for the page itself

> /api

begining of api access

> /api/feed-data

pulls feed data for user using authentication -- or for the only user in case of a standalone app?

Puts can add a rss channel to the feed for that user with auth

... To be expanded on
