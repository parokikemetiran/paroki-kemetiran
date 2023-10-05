<template>
  <Bounded as="section" class="bg-white leading-relaxed">
    <div class="lg:text-center">
      <span class="text-base font-semibold leading-7 text-indigo-600">{{slice.primary.subtitle}}</span>
      <span class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{slice.primary.title}}</span>
      <PrismicRichText
        :field="slice.primary.text"
        class="mt-6 text-lg leading-8 text-gray-600"
        :class="{
          'md:columns-2 md:gap-6': slice.variation === 'twoColumns'
        }"
        wrapper="div"
      />
    </div>
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context'])
}
</script>
