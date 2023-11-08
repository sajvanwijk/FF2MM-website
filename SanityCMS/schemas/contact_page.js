export default {
    name: 'contact_page',
    type: 'document',
    title: 'Contactpagina',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Header contactpagina',
            description: 'De tekst bovenaan de contactpagina'
        },
        {
            name: 'msgbox_header',
            type: 'string',
            title: 'Titel \'stuur een bericht\' box',
        },
        {
            name: 'msgbox_btn',
            type: 'string',
            title: 'Verzendknop \'stuur een bericht\' box',
        },
        {
            name: 'email_address',
            type: 'email',
            title: 'E-mailadres',
        },
        {
            name: 'facebook_link',
            type: 'url',
            title: 'Link naar Facebookpagina',
        }
    ]
}