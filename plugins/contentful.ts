import { createClient } from 'contentful';
import { defineNuxtPlugin, useRuntimeConfig } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();

  const client = createClient({
    space: runtimeConfig.CONTENTFUL_SPACE_ID,
    accessToken: runtimeConfig.CONTENTFUL_ACCESS_TOKEN,
  });

  nuxtApp.provide('contentfulClient', client);
});
