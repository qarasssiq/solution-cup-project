<template>
  <div class="sc-main-wrapper">
    <h1>{{ title }}</h1>
    <scExpenses/>
  </div>
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
</style>