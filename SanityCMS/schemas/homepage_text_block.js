export default {
    name: 'homepage_text_block',
    type: 'document',
    title: 'Homepagina tekstblok',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Titel',
        },
        {
            name: 'text',
            type: 'array',
            of: [{type: 'block'}],
            title: 'Tekst',
        },
        {
            name: 'picture',
            type: 'image',
            options: {
                hotspot: true
            },
            title: 'Afbeelding',
        }
    ]
}