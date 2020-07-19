<template>
  <div class="form">
    <input v-model="value.password" v-on:input="validate('password')" placeholder="password" type="password">
    <span class="error">{{ error.password }}</span>
    <input v-model="value.username" v-on:input="validate('username')" placeholder="username" type="text">
    <span class="error">{{ error.username }}</span>
    <button class="submit">submit</button>
  </div>
</template>

<script>
import ValidatorChain from './Chain'
export default {
  name: 'ChainOfResponsibility',
  props: {
    msg: String
  },

  data() {
    return {
      password: new ValidatorChain.PasswordValidator(),
      username: new ValidatorChain.NameValidator(),
      value: {
        password: '',
        username: '',
      },
      error: {
        password: '',
        username: '',
      }
    }
  },

  created() {
    this.password.next(this.username)
  },

  methods: {
    validate(type) {
      const isValid = this[type].validate(this.value[type], type)

      return isValid ? this.error[type] = '' : this.error[type] = `invalid ${type}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
