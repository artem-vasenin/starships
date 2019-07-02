<template>
  <v-app>
    <Header/>
    <v-content>
      <router-view/>
    </v-content>
    <Footer/>
    <Dialog/>
  </v-app>
</template>

<script>
import Footer from './components/footer/Footer.vue'
import Header from './components/header/Header.vue'
import Dialog from './components/dialog/Dialog.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Header,
    Dialog
  }
}
</script>
