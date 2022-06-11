# [Rv & Co Website](https://rvandco.fr)
Website of the association Rv & Co promoting the productions and social networks.  
![screenshot.png](assets/example/screenshot.png)

## Features
* Synchronization with the YouTube API
  * Retrieve statistics, playlists and videos
* Synchronization with the Instagram API
  * Retrieval of images published on the association's account
* Dynamic display of playlists
* Carousel for smaller projects
* Presentation of the association and its members
* 100% Responsive design
* Data in JSON format

## Dependencies
* [PHP 8.1](https://www.php.net/)
* [Crontab](https://en.wikipedia.org/wiki/Cron)

## Installation
### Web server
The website is compatible with [Nginx](https://www.nginx.com/) and [Apache](https://httpd.apache.org/). You can find the Nginx server configuration in the file [nginx_vhost.txt](https://github.com/studiorvandco/Website/blob/v2/assets/example/nginx_vhost.txt).

### Crontab
The website also requires the [Crontab](https://en.wikipedia.org/wiki/Cron) utility to allow automatic synchronization with the Youtube and Instagram APIs. You can find an example of configuration in the file [crontab.txt](https://github.com/studiorvandco/Website/blob/v2/assets/example/crontab.txt).