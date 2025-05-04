export interface Root {
    page: Page[]
    contents: Content[]
    languages: Language[]
    websites: Website[]
    announcements: Announcement[]
    metatags: Metatag[]
    blogs: Blog[]
}

export interface Page {
    name: string
    website_id: number
    id: number
}

export interface Content {
    id: number
    page: string
    website: string
    language_code: string
    title: string
    body: string
    cover_image: string
}

export interface Language {
    code: string
    name: string
    website_id: number
}

export interface Website {
    name: string
    domain_url: string
    favicon_image: string
}

export interface Announcement {
    id: number
    title: string
    body: string
    cover_image: string
    start_date: string
    end_date: string
    created_at: string
    page_id: number
    website_id: number
    language_code: string
}

export interface Metatag {
    title: string
    description: string
    keywords: string
    page_id: number
    website_id: number
    language_code: string
    id: number
}

export interface Blog {
    website_id: number
    page_id: number
    language_code: string
    body: string
    id: number
}


export interface ContentStore {
    pageContents: Root | undefined;
    pageContentError: boolean;
    pageContentLoading: boolean;
    getPageContents: (website_id: number, language_code: string) => Promise<void>;
}