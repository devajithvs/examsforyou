<template>
<a>
  <Logo class="mr-3" style="width:40px; height: auto;"/>
  <LogoText style="width:200px; height: auto;"/>
</a>
</template>

<script>
import Logo from '@/components/icons/company_logo'
import LogoText from '@/components/icons/company_logo_text'
export default {
  name: 'App',
  components: { Logo, LogoText,},
  props: {
    isTextRequired: Boolean,
  },
  data () {
  }
}
</script>