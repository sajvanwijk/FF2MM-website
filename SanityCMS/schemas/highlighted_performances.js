export default {
    name: 'highlighted_performances',
    type: 'document',
    title: 'Uitgelichte optredens',
    fields: [
        {
            name: 'picture',
            type: 'image',
            options: {
                hotspot: true
            },
            title: 'Afbeelding',
            validation: Rule => Rule.required()
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