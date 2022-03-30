<?php

// Load APIs keys
define("CONFIG", parse_ini_file(__DIR__ . "/../../config.ini"));

// Create HTTP requests
function request(string $method, string $url, array $body = []): array
{
    // Add header information
    $headers = array(
        "Content-type: application/x-www-form-urlencoded",
        "Cache-control: no-cache"
    );

    // Init curl
    $curl = curl_init();

    // Curl params
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_ENCODING, "");
    curl_setopt($curl, CURLOPT_MAXREDIRS, 10);
    curl_setopt($curl, CURLOPT_TIMEOUT, 30);
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($curl, CURLOPT_HEADER, false);

    if ($method == "POST" || $method == "PUT") {
        if ($method == "POST") {
            curl_setopt($curl, CURLOPT_POST, true);
        }
        curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($body));
    }

    // Return response and close curl
    $response[] = json_decode(curl_exec($curl), true);
    $response[] = curl_getinfo($curl);
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
        "GET",
        "https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=UCbTaxj24z8viOFR6NXMKurQ&alt=json&fields=items&prettyPrint=true&key=" . CONFIG["youtube"]
    ))[0]["items"][0]["statistics"]
);

write(
    "posts.json",
    (request(
        "GET",
        "https://graph.instagram.com/v11.0/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,username,timestamp&access_token=" . CONFIG["instagram"]
    ))[0]["data"]
);