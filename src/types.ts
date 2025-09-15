interface Translation {
    fr: string
    en: string
}

export interface Member {
    name: string
    picture?: string
    link?: string
}

export interface Production {
    name: Translation
    description: Translation
    picture: string
    link: string
}

export interface Project extends Production {}

export interface YouTubeStatistics {
    viewCount: string
    subscriberCount: string
    hiddenSubscriberCount: boolean
    videoCount: string
}

export enum InstagramMediaType {
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    CAROUSEL_ALBUM = "CAROUSEL_ALBUM"
}

export interface InstagramPost {
    media_type: InstagramMediaType
    media_url?: string
    thumbnail_url?: string
    permalink: string
    id: string
}

export function decodeHTMLEntities(text: string): string {
    return text.replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec))
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'")
}
