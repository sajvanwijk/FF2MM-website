export default {
    name: 'homepage_banner',
    type: 'document',
    title: 'Homepagina banner',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Titel',
            description: 'De welkomsttekst van de website, gevolgd door de logotekst \'Feel Free 2 Make Music!\'',
            validation: Rule => Rule.required()
        },
        {
            name: 'subtitle',
            type: 'string',
            title: 'Ondertitel',
            description: 'De ondertitel van de welkomsttekst',
            validation: Rule => Rule.required()
        },
        {
            name: 'button',
            type: 'string',
            title: 'Knop',
            description: 'De knop onder de welkomsttekst',
            validation: Rule => Rule.required()
        },
        {
            name: 'hero_image',
            type: 'image',
            options: {
                hotspot: true
            },
            title: 'Achtergrondafbeelding',
            description: 'De achtergrondafbeelding van de \'banner\'/spandoek bovenaan de homepagina',
            validation: Rule => Rule.required()
        }
    ]
}