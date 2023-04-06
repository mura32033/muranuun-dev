<script setup lang="ts">
  useHead({
    title: 'About'
  })
  // Get data via Contentful
  const { data } = await useAsyncData('about', async (nuxtApp) => {
    const { $contentfulClient } = nuxtApp
    return await $contentfulClient.getEntries()
  })
  const item = data.value.items
  let about = []
  let award = []
  let certification = []
  let history = []
  let presentation = []
  let publication = []
  let skill = []

  item.forEach((i) => {
    if(i.sys.contentType.sys.id === 'award') {
      award.push(i.fields)
    } else if(i.sys.contentType.sys.id === 'certification') {
      certification.push(i.fields)
    } else if(i.sys.contentType.sys.id === 'history') {
      history.push(i.fields)
    } else if(i.sys.contentType.sys.id === 'presentation') {
      presentation.push(i.fields)
    } else if(i.sys.contentType.sys.id === 'publication') {
      publication.push(i.fields)
    } else if(i.sys.contentType.sys.id === 'skill') {
      skill.push(i.fields)
    }
  })
  about.push({
    'award': award,
    'certification': certification,
    'history': history,
    'presentation': presentation,
    'publication': publication,
    'skill': skill
  })
</script>

<template>
  <div>
    <Pagetitle title="About" />
    <about-Award :content="about[0].award" />
  </div>
</template>