self.addEventListener('fetch', (event) => {
    if (event.request.url.includes('/share-target/')) {
      event.respondWith(
        (async () => {
          const formData = await event.request.formData();
          const url = formData.get('url');
          return Response.redirect(`https://archive.is/submit/?${encodeURIComponent(url)}`);
        })()
      );
    }
  });