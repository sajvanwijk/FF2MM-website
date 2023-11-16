import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default {
    name: 'highlighted_performances',
    type: 'document',
    title: 'Uitgelichte optredens',
    ordering: [orderRankOrdering],
    fields: [
        orderRankField({ type: 'highlighted_performances' }),
        {
            name: 'picture',
            type: 'image',
            options: {
                hotspot: true
            },
            title: 'Afbeelding',
        },
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
        }
    ]
}