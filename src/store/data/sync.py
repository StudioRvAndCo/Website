import os
import requests
import json

# TODO: Remove stats for playlists and videos

# Crontab command
# */20 * * * * python3 /home/web/rvandco/Website/src/store/data/sync.py >/dev/null 2>&1

# Script path
__location__ = os.path.realpath(os.path.join(os.getcwd(), os.path.dirname(__file__)))

# --- Get statistics ---
statistics = requests.get('https://youtube.googleapis.com/youtube/v3/channels'
                          '?part=statistics&id=UCbTaxj24z8viOFR6NXMKurQ'
                          '&alt=json&fields=items&prettyPrint=true'
                          '&key=AIzaSyCLWuAoSdikH2e-fgBIykXy5hWhJSJBPDk').json()
statistics = statistics['items'][0]['statistics']

# --- Get content creators ---
sections = requests.get('https://youtube.googleapis.com/youtube/v3/channelSections'
                        '?part=contentDetails&channelId=UCbTaxj24z8viOFR6NXMKurQ'
                        '&alt=json&fields=items&prettyPrint=true'
                        '&key=AIzaSyCLWuAoSdikH2e-fgBIykXy5hWhJSJBPDk').json()
sections = sections['items'][len(sections['items']) - 1]['contentDetails']['channels']

content_creators_ids = ''
for channelId in sections:
    content_creators_ids += '&id=' + channelId

content_creators_request = requests.get('https://youtube.googleapis.com/youtube/v3/channels'
                                        '?part=snippet' + content_creators_ids +
                                        '&alt=json&fields=items&prettyPrint=true'
                                        '&key=AIzaSyCLWuAoSdikH2e-fgBIykXy5hWhJSJBPDk').json()
content_creators = []

for i in range(len(content_creators_request['items'])):
    content_creators.append({
        'id': content_creators_request['items'][i]['id'],
        'name': content_creators_request['items'][i]['snippet']['title'],
        'picture': content_creators_request['items'][i]['snippet']['thumbnails']['default']['url']
    })

# --- Get playlists ---
playlists_requests = requests.get('https://youtube.googleapis.com/youtube/v3/playlists'
                                  '?part=snippet&part=contentDetails&channelId=UCbTaxj24z8viOFR6NXMKurQ'
                                  '&alt=json&fields=items&prettyPrint=true'
                                  '&key=AIzaSyCLWuAoSdikH2e-fgBIykXy5hWhJSJBPDk').json()

playlists = []

for playlistId in playlists_requests['items']:
    playlists_items_requests = requests.get('https://youtube.googleapis.com/youtube/v3/playlistItems'
                                            '?part=snippet&part=contentDetails&playlistId=' + playlistId['id'] +
                                            '&alt=json&fields=items&prettyPrint=true&maxResults=25'
                                            '&key=AIzaSyCLWuAoSdikH2e-fgBIykXy5hWhJSJBPDk').json()

    playlists_items = []
    items_ids = ''

    for playlistItem in playlists_items_requests['items']:
        playlists_items.append({
            'id': playlistItem['snippet']['resourceId']['videoId'],
            'thumbnails': playlistItem['snippet']['thumbnails']
        })
        items_ids += '&id=' + playlistItem['snippet']['resourceId']['videoId']

    playlists_videos_requests = requests.get('https://youtube.googleapis.com/youtube/v3/videos'
                                             '?part=statistics' + items_ids +
                                             '&prettyPrint=true&fields=items'
                                             '&key=AIzaSyCLWuAoSdikH2e-fgBIykXy5hWhJSJBPDk').json()

    del items_ids

    view_count = like_count = dislike_count = 0

    for i in range(len(playlists_items)):
        playlists_items[i]['statistics'] = playlists_videos_requests['items'][i]['statistics']
        view_count += int(playlists_videos_requests['items'][i]['statistics']['viewCount'])
        like_count += int(playlists_videos_requests['items'][i]['statistics']['likeCount'])
        dislike_count += int(playlists_videos_requests['items'][i]['statistics']['dislikeCount'])

    stats = {'viewCount': view_count, 'likeCount': like_count, 'dislikeCount': dislike_count}

    infos = ''

    if playlistId['id'] == 'PL6VuKkKwjE2Gfmj5gKlQIHvaFHqoq0sq1':
        infos = {'title': 'star_wars_quest_justice_title', 'description': 'star_wars_quest_justice_description'}
    elif playlistId['id'] == 'PL6VuKkKwjE2EmFu61Pvn39yP5RvYVpIGB':
        infos = {'title': 'summer_among_friends_title', 'description': 'summer_among_friends_description'}

    playlists.append({
        'playlistId': playlistId['id'],
        'infos': infos,
        'thumbnail': playlistId['snippet']['thumbnails'],
        'videos': playlists_items,
        'statistics': stats
    })

# --- Get Instagram posts ---
posts = requests.get('https://graph.instagram.com/v11.0/me/media' +
                     '?fields=id,caption,media_type,media_url,permalink,thumbnail_url,username,timestamp' +
                     '&access_token=IGQVJXUWdCREJPZAHNPY3VzUzlhSWF3eDI2TVVXcU5UaXlYOXhGUXhyZA0ZAKbTZAlZA' +
                     'ktQNHAzZA2h0OU9hVm9VWHdlMDBsaHJNdG0xQ0s0MzFEYnVxWDJkak5HRVM1cnUxWkFYLU0zRU5hQlpvRG' +
                     'pxUC04egZDZD').json()
posts = posts['data']

# --- Write statistics to file ---
file = open(os.path.join(__location__, 'statistics.json'), 'w')
file.write(json.dumps(statistics, indent=4))
file.close()

# --- Write content creators to file ---
file = open(os.path.join(__location__, 'content_creators.json'), 'w')
file.write(json.dumps(content_creators, indent=4))
file.close()

# --- Write playlists to file ---
file = open(os.path.join(__location__, 'playlists.json'), 'w')
file.write(json.dumps(playlists, indent=4))
file.close()

# --- Write posts to file ---
file = open(os.path.join(__location__, 'posts.json'), 'w')
file.write(json.dumps(posts, indent=4))
file.close()
