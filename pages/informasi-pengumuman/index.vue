<template>
  <div class="container relative mx-auto max-w-6xl">
    <div class="mx-auto max-w-6xl overflow-hidden py-32 sm:py-48">
      <div class="text-center z-10">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Informasi & Pengumuman
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Informasi & Pengumuman terkait Paroki Kumetiran
        </p>
      </div>
    </div>
    <ArticleListItem
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<script>
import { components } from '~/slices'

export default {
  async asyncData ({ $prismic, params, store }) {
    const { results: articles } = await $prismic.api.query(
      $prismic.predicate.at('document.type', 'informasi'),
      {
        orderings: `[${[
          { field: 'my.article.publishDate', direction: 'desc' },
          { field: 'document.first_publication_date', direction: 'desc' }
        ]
          .map(({ field, direction }) => `${field} ${direction}`)
          .join(', ')}]`,
        pageSize: 10
      }
    )
    await store.dispatch('prismic/load')
    return {
      articles
    }
  },
  data () {
    return { components }
  }
}
</script>
