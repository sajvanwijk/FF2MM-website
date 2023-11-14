export default {
    name: 'upcoming_performances',
    type: 'document',
    title: 'Aankomende optredens',
    fields: [
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
            validation: Rule => Rule.required()
        }
    ]
}