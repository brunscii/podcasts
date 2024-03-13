## Podcasts

This is a small notebook project for analyzing some podcast infor through rss feeds. 
The goal is to see if we can successfully extract podcasts from a csv file containing their name and link to their feed. 

### The React App

This is a small toy project that will replicate some of the podcast 1.0 features of google podcast and other apps.

The basics are that it should have a home screen with a feed of all of the user's subscribed podcasts. It should have the ability to add to the list( subscribe ).
It should also have the ability to view a rss feed and show all episodes.

#### TODO: 
- add a download button.
- add a already played state to hide played eps
- add a feed aggregate page ( home page )
- add a downloads page ( for a desktop/mobile version of app )
- add a episode overlay that shows info on each episode once they are clicked
- fix CORS error


### The Node App

This is the backend for the podcast app. It reveals the file contents for the list of podcasts. It also handles adding, removing, and updating to the file. 

Possible uses of the server 
- Managing downloads for the desktop app
- Managing the RSS subscription list
- Managing the played and qeued list
- Possibly handling reading the rss for CORS issue