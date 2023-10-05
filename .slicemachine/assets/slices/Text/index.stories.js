import MyComponent from '../../../../slices/Text';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Text'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":"flight","subtitle":"thousand","text":[{"type":"paragraph","text":"Irure pariatur ea incididunt nisi laborum ad ea dolore et magna labore magna. Officia commodo officia ex ad fugiat tempor occaecat aliquip qui. Minim officia tempor incididunt nisi eu.","spans":[]},{"type":"paragraph","text":"Enim aute nisi est sit culpa deserunt veniam Lorem tempor aute et officia. Ad elit nulla consectetur nisi dolor ad aliquip enim. Culpa cupidatat in anim anim.","spans":[]},{"type":"paragraph","text":"Aute aute quis proident excepteur eiusmod. Irure deserunt eiusmod sint officia et fugiat.","spans":[]},{"type":"paragraph","text":"Ex voluptate occaecat dolore aliqua do do sit laboris sunt sunt ea laboris elit qui culpa. Commodo qui ullamco proident ipsum sint mollit voluptate in velit nostrud fugiat aute reprehenderit. Ullamco irure commodo nostrud Lorem sunt officia adipisicing exercitation ea dolore.","spans":[]}]},"slice_type":"text","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

export const _TwoColumns = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"twoColumns","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"text":[{"type":"paragraph","text":"Anim excepteur labore est magna labore.","spans":[]}]},"slice_type":"text","id":"_TwoColumns"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TwoColumns.storyName = ''
