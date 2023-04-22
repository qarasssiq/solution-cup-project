<template>
  <div class="sc-expenses-item">
    <div class="sc-expenses-item__info">
      <p>Type: {{expenses_item_data.type}}</p>
      <p>Date: {{expenses_item_data.date }}</p>
      <p>Amount: {{expenses_item_data.amount}}</p>
      <p>Description: {{expenses_item_data.description}}</p>
    </div>
    <button @click="deleteFromExpenses">Delete</button>
  </div>
</template>

<script>
  export default {
    name: 'sc-expenses-item',
    props: {
      expenses_item_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
      }
    },
    methods: {
      deleteFromExpenses() {
        this.$emit('deleteFromExpenses')
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss">
  @import './src/assets/styles/variables.scss';

  .sc-expenses-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
    &__image {
      max-width: 50px;
    }
  }
</style>