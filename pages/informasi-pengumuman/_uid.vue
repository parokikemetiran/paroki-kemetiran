<template>
  <SliceZone :slices="page.data.slices" :components="components" />
</template>

<script>
import { components } from '~/slices'

export default {
  async asyncData ({ $prismic, params, store }) {
    const page = await $prismic.api.getByUID('informasi', params.uid)
    await store.dispatch('prismic/load')
    return {
      page
    }
  },
  data () {
    return { components }
  },
  head () {
    return {
      title: `${this.$prismic.asText(this.page.data.title)} | ${this.$prismic.asText(this.$store.state.prismic.settings.data.siteTitle)}`
    }
  }
}
</script>
