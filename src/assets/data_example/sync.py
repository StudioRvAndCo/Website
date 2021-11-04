import os
import requests
import json

# Crontab command
# */10 * * * * python3 /path/to/sync.py >/dev/null 2>&1

# Script path
__location__ = os.path.realpath(os.path.join(os.getcwd(), os.path.dirname(__file__)))

# --- Get statistics ---
statistics = requests.get("https://youtube.googleapis.com/youtube/v3/channels" +
                          "?part=statistics&id=########################" +
                          "&alt=json&fields=items&prettyPrint=true" +
                          "&key=#######################################").json()
statistics = statistics["items"][0]["statistics"]

# --- Get content creators ---
sections = requests.get("https://youtube.googleapis.com/youtube/v3/channelSections" +
                        "?part=contentDetails&channelId=########################" +
                        "&alt=json&fields=items&prettyPrint=true" +
                        "&key=#######################################").json()
sections = sections["items"][len(sections["items"]) - 1]["contentDetails"]["channels"]

content_creators_ids = ''
for channelId in sections:
    content_creators_ids += "&id=" + channelId

content_creators_request = requests.get("https://youtube.googleapis.com/youtube/v3/channels" +
                                        "?part=snippet" + content_creators_ids +
                                        "&alt=json&fields=items&prettyPrint=true" +
                                        "&key=#######################################").json()
content_creators = []

for i in range(len(content_creators_request["items"])):
    content_creators.append({
        "id": content_creators_request["items"][i]["id"],
        "name": content_creators_request["items"][i]["snippet"]["title"],
        "picture": content_creators_request["items"][i]["snippet"]["thumbnails"]["default"]["url"]
    })

# --- Get playlists ---
# playlists_requests = requests.get("https://youtube.googleapis.com/youtube/v3/playlists" +
#                                   "?part=snippet&part=contentDetails&channelId=########################" +
#                                   "&alt=json&fields=items&prettyPrint=true" +
#                                   "&key=#######################################").json()
#
# playlists = []
#
# for playlistId in playlists_requests["items"]:
#     playlists_items_requests = requests.get("https://youtube.googleapis.com/youtube/v3/playlistItems" +
#                                             "?part=snippet&part=contentDetails&playlistId=" + playlistId["id"] +
#                                             "&alt=json&fields=items&prettyPrint=true&maxResults=25" +
#                                             "&key=#######################################").json()
#
#     playlists_items = []
#     items_ids = ''
#
#     for playlistItem in playlists_items_requests["items"]:
#         playlists_items.append({
#             "id": playlistItem["snippet"]["resourceId"]["videoId"],
#             "thumbnails": playlistItem["snippet"]["thumbnails"]
#         })
#         items_ids += "&id=" + playlistItem["snippet"]["resourceId"]["videoId"]
#
#     del items_ids
#     infos = ''
#
#     if playlistId["id"] == "##################################":
#         infos = {
#             "title": "example_title",
#             "description": "example_description",
#             "banner": "example_banner.jpg"
#         }
#     elif playlistId["id"] == "##################################":
#         infos = {
#             "title": "example_title",
#             "description": "example_description",
#             "banner": "example_banner.jpg"
#         }
#
#     playlists.append({
#         "playlistId": playlistId["id"],
#         "infos": infos,
#         "thumbnail": playlistId["snippet"]["thumbnails"],
#         "videos": playlists_items
#     })

# --- Get Instagram posts ---
posts = requests.get("https://graph.instagram.com/v11.0/me/media" +
                     "?fields=id,caption,media_type,media_url,permalink,thumbnail_url,username,timestamp" +
                     "&access_token=####################################################################" +
                     "###########################################################################").json()
posts = posts["data"]

# --- Write statistics to file ---
file = open(os.path.join(__location__, "statistics.json"), 'w')
file.write(json.dumps(statistics, indent=2))
file.close()

# --- Write content creators to file ---
file = open(os.path.join(__location__, "content_creators.json"), 'w')
file.write(json.dumps(content_creators, indent=2))
file.close()

# --- Write playlists to file ---
# file = open(os.path.join(__location__, "playlists.json"), 'w')
# file.write(json.dumps(playlists, indent=2))
# file.close()

# # --- Write posts to file ---
file = open(os.path.join(__location__, "posts.json"), 'w')
file.write(json.dumps(posts, indent=2))
file.close()
