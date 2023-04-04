<template>
  <li
    class="grid grid-cols-1 items-start gap-6 sm:gap-8 mb-4"
  >
    <PrismicLink :field="article" tab-index="-1">
      <!-- <div class="aspect-w-4 aspect-h-3 relative bg-gray-100">
        <PrismicImage
          v-if="featuredImage.url"
          :field="featuredImage"
          class="object-cover"
        />
      </div> -->
      <div class="grid gap-3">
        <Heading as="h3">
          {{ $prismic.asText(article.data.title) }}
        </Heading>
        <p class="font-serif italic tracking-tighter text-slate-500">
          {{ formattedDate }}
        </p>
        <p v-if="excerpt" class="font-serif leading-relaxed md:text-lg md:leading-relaxed">
          {{ excerpt }}
        </p>
        <a class="font-serif leading-relaxed md:text-base md:leading-relaxed text-right">
          Baca selanjutnya
        </a>
      </div>
    </PrismicLink>
  </li>
</template>

<script>
const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
})

export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    featuredImage () {
      if (this.article.data.featuredImage.url) {
        return this.article.data.featuredImage
      }

      const imageSlice = this.article.data.slices.find(slice => slice.slice_type === 'image')
      if (imageSlice && imageSlice.primary.image.url) {
        return imageSlice.primary.image
      }
      return null
    },
    formattedDate () {
      const date = this.$prismic.asDate(this.article.data.publishDate || this.article.first_publication_date)

      return dateFormatter.format(date)
    },
    excerpt () {
      const text = this.article.data.slices
        .filter(slice => slice.slice_type === 'text')
        .map(slice => this.$prismic.asText(slice.primary.text))
        .join(' ')
      const excerpt = text.substring(0, 300)
      if (text.length > 300) {
        return excerpt.substring(0, excerpt.lastIndexOf(' ')) + '…'
      } else {
        return excerpt
      }
    }
  }
}
</script>
