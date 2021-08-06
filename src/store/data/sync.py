import requests
import json

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
        title = playlistItem['snippet']['title'].split(' | ')
        playlists_items.append({
            'title': title[1],
            'id': playlistItem['snippet']['resourceId']['videoId'],
            'thumbnails': playlistItem['snippet']['thumbnails']
        })
        items_ids += '&id=' + playlistItem['snippet']['resourceId']['videoId']

    playlists_videos_requests = requests.get('https://youtube.googleapis.com/youtube/v3/videos'
                                             '?part=statistics' + items_ids +
                                             '&prettyPrint=true&fields=items'
                                             '&key=AIzaSyCLWuAoSdikH2e-fgBIykXy5hWhJSJBPDk').json()

    for i in range(len(playlists_items)):
        playlists_items[i]['statistics'] = playlists_videos_requests['items'][i]['statistics']

    items_ids = ''
    playlists.append({
        'playlistId': playlistId['id'],
        'videos': playlists_items
    })


# --- Write statistics to file ---
file = open('statistics.json', 'w')
file.write(json.dumps(statistics, indent=4))
file.close()

# --- Write content creators to file ---
file = open('content_creators.json', 'w')
file.write(json.dumps(content_creators, indent=4))
file.close()

# --- Write playlists to file ---
file = open('playlists.json', 'w')
file.write(json.dumps(playlists, indent=4))
file.close()
