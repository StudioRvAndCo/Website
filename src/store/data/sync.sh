#!/bin/bash

# Statistics
curl -s 'https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=UCbTaxj24z8viOFR6NXMKurQ&alt=json&fields=items&prettyPrint=true&key=AIzaSyCLWuAoSdikH2e-fgBIykXy5hWhJSJBPDk' --header 'Accept: application/json' --compressed > statistics.json

# Sections
curl -s 'https://youtube.googleapis.com/youtube/v3/channelSections?part=contentDetails&channelId=UCbTaxj24z8viOFR6NXMKurQ&alt=json&fields=items&prettyPrint=true&key=AIzaSyCLWuAoSdikH2e-fgBIykXy5hWhJSJBPDk' --header 'Accept: application/json' --compressed > sections.json

# Content creators
curl -s 'https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UCYl-DuOSdkMfsIbLmVPiPOA&id=UC9ZVyJocXPlUCiwggkHsmDg&alt=json&fields=items&prettyPrint=true&key=AIzaSyCLWuAoSdikH2e-fgBIykXy5hWhJSJBPDk' --header 'Accept: application/json' --compressed > content_creators.json

# Playlists
curl -s 'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&part=contentDetails&channelId=UCbTaxj24z8viOFR6NXMKurQ&alt=json&fields=items&prettyPrint=true&key=AIzaSyCLWuAoSdikH2e-fgBIykXy5hWhJSJBPDk' --header 'Accept: application/json' --compressed > playlists.json

# Playlists items
curl -s 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=contentDetails&playlistId=PL6VuKkKwjE2Gfmj5gKlQIHvaFHqoq0sq1&alt=json&fields=items&prettyPrint=true&key=AIzaSyCLWuAoSdikH2e-fgBIykXy5hWhJSJBPDk' --header 'Accept: application/json' --compressed > PL6VuKkKwjE2Gfmj5gKlQIHvaFHqoq0sq1.json
curl -s 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=contentDetails&playlistId=PL6VuKkKwjE2EmFu61Pvn39yP5RvYVpIGB&alt=json&fields=items&prettyPrint=true&key=AIzaSyCLWuAoSdikH2e-fgBIykXy5hWhJSJBPDk' --header 'Accept: application/json' --compressed > PL6VuKkKwjE2EmFu61Pvn39yP5RvYVpIGB.json

# Playlists videos
curl -s 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&part=contentDetails&id=cv358WI8LJ4&id=RAmWSDmg0so&alt=json&fields=items&prettyPrint=true&key=AIzaSyCLWuAoSdikH2e-fgBIykXy5hWhJSJBPDk' --header 'Accept: application/json' --compressed > PL6VuKkKwjE2Gfmj5gKlQIHvaFHqoq0sq1_videos.json
