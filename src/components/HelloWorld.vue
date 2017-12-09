<template>
  <div>
    <div :class="{ invalid: isInvalid }">
      {{message}}
    </div>
    <ul>
      <li v-for='element in elements'>
        {{element}}
      </li>
    </ul>
    <button :disabled='isInvalid'>Submit!</button>
    <div>{{reversedMessage}}</div>
    <input v-model="message" placeholder="Type something...">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    message: 'Hello Vue!',
    elements: ['yellow', 'red', 'green'],
  }),
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    },
    isInvalid: function () {
      return this.message.length < 3
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
.invalid {
  color: red
}
</style>
