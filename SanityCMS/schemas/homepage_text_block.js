import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default {
    name: 'homepage_text_block',
    type: 'document',
    title: 'Homepagina tekstblok',
    ordering: [orderRankOrdering],
    fields: [
        orderRankField({ type: 'homepage_text_block' }),
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