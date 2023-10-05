import MyComponent from '../../../../slices/TextWithImage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TextWithImage'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":"grown","subtitle":"has","text":[{"type":"heading1","text":"Atomic","spans":[]},{"type":"paragraph","text":"Officia Lorem est reprehenderit esse irure. Reprehenderit nulla proident duis velit aute ad laborum. Elit anim nisi excepteur in pariatur eu.","spans":[]}],"image":{"dimensions":{"width":1000,"height":1200},"alt":null,"copyright":null,"url":"https://images.prismic.io/nextjs-starter-prismic-multi-page/fcb2333d-d2b2-4cdc-acdd-f9558703472d_anders-jilden-Sc5RKXLBjGg-unsplash.jpg"}},"slice_type":"text_with_image","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

export const _WithButton = () => ({
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
      mock: {"variation":"withButton","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"text":[{"type":"paragraph","text":"Laborum aute pariatur culpa reprehenderit minim aliqua. Laboris eu in velit dolor tempor proident.","spans":[]}],"buttonLink":{"link_type":"Web","url":"https://slicemachine.dev"},"buttonText":"slow","image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b"}},"slice_type":"text_with_image","id":"_WithButton"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_WithButton.storyName = ''
