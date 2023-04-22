<template>
  <div class="sc-expenses-item">
    <div class="sc-expenses-item__info">
      <p><span class="sc-expenses-item__field">Type: </span>{{expenses_item_data.type}}</p>
      <p><span class="sc-expenses-item__field">Date: </span>{{expenses_item_data.date }}</p>
      <p><span class="sc-expenses-item__field">Amount: </span>{{expenses_item_data.amount}}</p>
      <p><span class="sc-expenses-item__field">Description: </span>{{expenses_item_data.description}}</p>
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
    &__info {
      margin: $margin 0;
      text-align: start;
    }
    &__field {
      font-weight: bold;
    }
  }
</style>