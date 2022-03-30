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

// Change config.ini content
function write(string $section, string $key, string $content)
{
    $config_data                 = parse_ini_file(__DIR__ . "/../../config.ini", true);
    $config_data[$section][$key] = $content;
    $new_content                 = '';

    foreach ($config_data as $section => $section_content) {
        $section_content = array_map(
            function ($value, $key) {
                return "$key='$value'";
            },
            array_values($section_content),
            array_keys($section_content));

        $section_content  = implode("\n", $section_content);
        $new_content     .= "[$section]\n$section_content\n";
    }

    file_put_contents(__DIR__ . "/../config.ini", $new_content);
}

// Renew instagram token
write(
    "APIs", "instagram",
    (request(
        "GET",
        "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=" . CONFIG["instagram"]
    ))[0]["access_token"]
);