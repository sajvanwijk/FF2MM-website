import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export const structure = (S, context) =>
  S.list()
    .title('Content')
    .showIcons(false)
    .items([
      S.listItem()
        .title('Homepagina banner')
        .child(
          S.editor()
            .id('homepage_banner')
            .schemaType('homepage_banner')
            .documentId('homepage_banner')
            .title('Homepagina banner')
        ),
      orderableDocumentListDeskItem({type: 'homepage_text_block', title: 'Homepagina tekstblokken', S, context}),
      orderableDocumentListDeskItem({type: 'highlighted_performances', title: 'Onze optredens/eerdere optredens', S, context}),
      S.divider(),
      S.listItem()
        .title('Aankomende optredens introductietekst')
        .child(
          S.editor()
            .id('upcoming_performances_header')
            .schemaType('upcoming_performances_header')
            .documentId('upcoming_performances_header')
            .title('Aankomende optredens pagina')
        ),
        orderableDocumentListDeskItem({type: 'upcoming_performances', title: 'Aankomende optredens', S, context}),
        S.divider(),
        S.listItem()
        .title('Contactpagina')
        .child(
          S.editor()
            .id('contact_page')
            .schemaType('contact_page')
            .documentId('contact_page')
            .title('Contactpagina')
        ),
    ])
