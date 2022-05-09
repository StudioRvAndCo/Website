<?php

// Load APIs keys
define("CONFIG", parse_ini_file(__DIR__ . "/../../config.ini", true));

// Create HTTP requests
function request(string $url, array $headers = [])
{
    // Add header information
    if (empty($headers)) {
        $headers = array(
            "Content-type: application/x-www-form-urlencoded",
            "Cache-control: no-cache"
        );
    }

    // Init curl
    $curl = curl_init();

    // Curl params
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "GET");
    curl_setopt($curl, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_ENCODING, "");
    curl_setopt($curl, CURLOPT_MAXREDIRS, 10);
    curl_setopt($curl, CURLOPT_TIMEOUT, 30);
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($curl, CURLOPT_HEADER, false);

    // Return response and close curl
    $response = json_decode(curl_exec($curl), true);
    curl_close($curl);
    return $response;
}

// Create and write in files
function write(string $file, array|object $content)
{
    // Open or create file
    $file = fopen(__DIR__ . "/" . $file, 'w');

    // Write content
    fwrite(
        $file,
        json_encode($content)
    );

    // Close file
    fclose($file);
}

// Get statistics from YouTube API
write(
    "statistics.json",
    (request(
        "https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=UCbTaxj24z8viOFR6NXMKurQ&alt=json&fields=items&prettyPrint=true&key=" . CONFIG["youtube"]["api_key"]
    ))["items"][0]["statistics"] ?? (object) []
);

// Get stream status from Twith API
write(
    "stream.json",
    (request(
        "https://api.twitch.tv/helix/streams?user_login=" . CONFIG["twitch"]["target_user"],
        array(
            "Authorization: Bearer " . CONFIG["twitch"]["api_key"],
            "Client-Id: " . CONFIG["twitch"]["client_id"]
        )
    ))["data"][0] ?? (object) []
);

// Get posts from Instagram API
write(
    "posts.json",
    (request(
        "https://graph.instagram.com/v11.0/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,username,timestamp&access_token=" . CONFIG["instagram"]["api_key"]
    ))["data"] ?? (object) []
);