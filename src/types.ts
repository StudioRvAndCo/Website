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
