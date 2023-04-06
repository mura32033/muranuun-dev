import * as contentful from 'contentful'

export default defineNuxtPlugin((nuxtApp) => {
  const createClientFunc = contentful.createClient ? contentful.createClient : contentful.default.createClient
  const client = createClientFunc({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    space: process.env.CONTENTFUL_SPACE_ID
  });

  return {
    provide: {
      contentfulClient: client,
    },
  };
});