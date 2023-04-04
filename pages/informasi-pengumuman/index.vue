<template>
  <div class="container mx-auto">
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
          { field: 'document.first_publication_date', direction: 'desc' },
        ]
          .map(({ field, direction }) => `${field} ${direction}`)
          .join(', ')}]`,
        pageSize: 10,
      }
    );
    await store.dispatch('prismic/load')
    return {
      articles
    }
  },
  data () {
    return { components }
  },
}
</script>
