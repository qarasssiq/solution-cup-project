<template>
  <div class="sc-expenses">
    <h2>Expenses</h2>
    <button v-if="!isAddFormVisible" type="button" class="btn" @click="showAddForm">
      Add expense
    </button>
    <button v-else type="button" class="btn" @click="closeAddForm">
      Close
    </button>

    <form v-show="isAddFormVisible" class="add-form">
      <ul>
        <li>
          <label for="type">Type:</label>
          <select name="type" id="type" v-model="type">
            <option v-for="expenseType in types" :key="expenseType" :value="expenseType">{{ expenseType }}</option>
          </select>
        </li>
        <li>
          <label for="date">Date:</label>
          <input type="date" id="date" name="date" class="form-input" v-model="date" />
        </li>
        <li>
          <label for="amount">Amount:</label>
          <input type="text" id="amount" name="amount" class="form-input" v-model="amount" />
        </li>
        <li>
          <label for="description">Description:</label>
          <textarea id="description" name="description" v-model="description"></textarea>
        </li>
      </ul>
      <button type="button" class="btn" @click="addExpense">Confirm</button>
    </form>

    <div class="filter">
      <h2 class="filter-text">Filter</h2>
      <div class="filter__types">
        <h3 class="filter__heading">Type: </h3>
        <div class="filter__options">
          <template v-for="(expenseType, index) in types" :key="index">
            <input type="checkbox" :value="expenseType" class="filter-checkbox" v-model="selectedTypes">{{ expenseType }}
          </template>
        </div>
      </div>
      <div class="filter__btns">
        <button type="button" class="filter__btn" @click="applyFilter">Apply</button>
        <button type="button" class="filter__btn" @click="resetFilter">Reset</button>
      </div>
    </div>

    <div class="sc-expenses__list">
      <scExpensesItem v-for="(expense, index) in filteredExpenses" :key="index" :expenses_item_data="expense"
        @deleteFromExpenses="deleteFromExpenses(index)" />
    </div>
  </div>
</template>

<script>
import scExpensesItem from './sc-expenses-item.vue'
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'sc-expenses',
  components: {
    scExpensesItem
  },
  props: {},
  data() {
    return {
      isAddFormVisible: false,
      types: [
        'General expenses',
        'Housing',
        'Vehicles and transportation costs',
        'Groceries',
        'Debt payments',
      ],

      selectedTypes: [],

      filteredExpenses: [],

      type: '',
      date: '',
      amount: '',
      description: '',

      expenses: [],
    }
  },
  computed: {
    ...mapGetters([
      'EXPENSES'
    ]),
  },
  methods: {
    ...mapActions([
      'GET_EXPENSES_FROM_API'
    ]),

    showAddForm() {
      this.isAddFormVisible = true;
    },

    closeAddForm() {
      this.isAddFormVisible = false;
    },

    addExpense() {
      const expenseToAdd = {
        type: this.type,
        date: this.date,
        amount: this.amount,
        description: this.description
      }

      this.expenses.push(expenseToAdd);

      this.clearForm();
      this.isAddFormVisible = false;
    },

    clearForm() {
      this.type = '';
      this.date = '';
      this.amount = '';
      this.description = '';
    },

    deleteFromExpenses(index) {
      this.expenses.splice(index, 1);
    },

    applyFilter() {
      this.filteredExpenses = this.expenses.filter(item => this.selectedTypes.includes(item.type));
    },

    resetFilter() {
      this.selectedTypes = [];
      this.filteredExpenses = this.expenses;
    }
  },
  mounted() {
    this.GET_EXPENSES_FROM_API()
      .then((response) => {
        if (response.data) {
          this.expenses = response.data;
          this.filteredExpenses = this.expenses;
        }
      })
  }
}
</script>

<style lang="scss">
.sc-expenses {
  margin-bottom: 100px;
}

form {
  margin: 0 auto;
  width: 400px;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

form li+li {
  margin-top: 1em;
}

label {
  display: inline-block;
  width: 90px;
  text-align: right;
  padding-right: 5px;
}

select,
.form-input,
textarea {
  font: 1em sans-serif;

  width: 300px;
  box-sizing: border-box;

  border: 1px solid #999;
}

input:focus,
textarea:focus {
  border-color: #000;
}

textarea {
  vertical-align: top;
  height: 5em;
}

.btn {
  margin: 10px;
}

.filter {
  padding: 20px;
  margin: 20px 0;
  border: 1px solid;
}

.filter-text {
  margin: 0 0 10px 0;
  text-align: start;
}

.filter__heading {
  margin: 0;
  text-align: start;
}

.filter__types {
  display: flex;
  margin-bottom: 10px;
}

.filter__btns {
  display: flex;
}

.filter__btn {
  margin-right: 10px;
}
</style>