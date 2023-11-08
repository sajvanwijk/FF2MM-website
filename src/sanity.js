import {createClient} from '@sanity/client'
import imageURIBuilder from '@sanity/image-url'


export const client = createClient({
    projectId: 'oavoemrl',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-05-03',
})

// --- Image URL builder ---
const builder = imageURIBuilder(client)

export function urlFor(source) {
    return builder.image(source)
}

// --- GROQ query fetcher functions ---
export async function getHomepageTextBlock() {
    const query = `*[_type == "homepage_text_block"][0]`
    const result = await client.fetch(query)
    return result
}

export async function getHomepageBanner() {
    const query = `*[_type == "homepage_banner"][0]`
    const result = await client.fetch(query)
    return result
}

export async function getHighlightedPerformances() {
    const query = `*[_type == "highlighted_performances"][0]`
    const result = await client.fetch(query)
    return result
}

export async function getUpcomingPerformancesHeader() {
    const query = `*[_type == "upcoming_performances_header"][0]`
    const result = await client.fetch(query)
    return result
}

export async function getUpcomingPerformances() {
    const query = `*[_type == "upcoming_performances"][0]`
    const result = await client.fetch(query)
    return result
}

export async function getContactPage() {
    const query = `*[_type == "contact_page"][0]`
    const result = await client.fetch(query)
    return result
}