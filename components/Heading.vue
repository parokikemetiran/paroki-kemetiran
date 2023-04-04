<template>
  <Component
    :is="as"
    class="font-semibold leading-tight tracking-tight md:leading-tight"
    :class="{
      'text-4xl md:text-5xl': size === 'xl',
      'text-2xl md:text-4xl': size === 'lg',
      'text-xl md:text-2xl': size === 'md',
      'text-lg md:text-xl': size === 'sm',
    }"
  >
    <slot />
  </Component>
</template>

<script>
export default {
  props: {
    as: {
      type: [String, Object, Function],
      default: 'h1'
    },
    size: {
      type: String,
      default: 'lg'
    }
  }
}
</script>
