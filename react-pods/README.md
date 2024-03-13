# Podcast App
This is a small react app that is designed 
- give details about a podcasts rss
- allow a user to sub to a podcast
- show a feed of the aggregate of the podcasts the user subbed to
- download podcasts
- play episodes
- give information on each episode from a given feed

This is meant to be a small no-frills app to manage podcasts and subs

The goal is to allow someone to subscribe to a set of podcasts based on their rss feeds and aggregate those feeds. 

Possible feature improvements
- sorting by genre/category that is listed in the rss feed
- mark played --> removes from feed
- google/apple/spotify auth and imports
- Automatic downloader
- Notifications
- video streams
- live streams
- boosts
- sharing subscriptions lists
- add a color/shading to show what is selected in the nav --> like a selected class and darker bg
- audio player for pods
    - add controls
        - play/pause button
        - fast forward/skip 30
        - rewind/back 10
        - next in queue button
    - save current play time in local storage to save state periodically
    - timer shows current play time and time remainig as well as total runtime
    - tracker style slider for play location

Bug Fixes
- Check for duplicates on loading of rss list
- check for updates to the list or signal an update to the home screen when adding a rss feed to the list (clicking sub or + button)
- fix the input box in rss lookup moving when changing nav selection