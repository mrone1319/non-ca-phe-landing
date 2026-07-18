export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Photos')
        .id('siteImages')
        .child(
          S.document()
            .schemaType('siteImages')
            .documentId('siteImages')
        ),
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
        (item) => !['businessHours', 'siteImages'].includes(item.getId())
      ),
    ]);
