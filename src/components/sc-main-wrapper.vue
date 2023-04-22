<template>
  <header class="yellow">
    <div class="header__title">
      <h1 class="title">{{ title }}</h1>
    </div>
  </header>
  <div class="sc-main-wrapper">
    <scExpenses />
  </div>
  <footer class="yellow">
    <div class="footer__text">
      <h3>Made by Andrey Gorelov</h3>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
import scExpenses from './sc-expenses.vue'

export default {
  name: 'sc-main-wrapper',
  components: {
    scExpenses
  },
  props: {},
  data() {
    return {
      title: 'Expenses tracking application'
    }
  },
  computed: {
    ...mapGetters([
    ]),
  },
  methods: {},
  watch: {},
  mounted() {
  }
}
</script>

<style>
.sc-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

body {
  margin: 0;
}

.header__title {
  max-width: 900px;
  margin: 0 auto;
}

.title {
  margin: 0;
  padding: 25px 0;
  text-align: start;
}

.yellow {
  background-color: #f8d81c;
}

.footer__text {
  padding: 10px 0;
}

.footer__text h3 {
  margin: 0;
}
</style>