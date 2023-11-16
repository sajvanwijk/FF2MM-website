import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list"

export default {
    name: 'upcoming_performances',
    type: 'document',
    title: 'Aankomende optredens',
    ordering: [orderRankOrdering],
    fields: [
        orderRankField({ type: 'upcoming_performances' }),
        {
            name: 'date',
            type: 'date',
            title: 'Datum',
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