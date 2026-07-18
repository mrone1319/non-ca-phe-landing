export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Business Hours')
        .id('businessHours')
        .child(
          S.document()
            .schemaType('businessHours')
            .documentId('businessHours')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'businessHours'
      ),
    ]);
