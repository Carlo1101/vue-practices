<template>
  <h1>{{ title }}</h1>
  <p>Welcome</p>
  <teleport to=".modals" v-if="showModal">
    <Modal @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Hi</h1>
      <p>This is a paragraph</p>
    </Modal>
  </teleport>
  <teleport to=".modals" v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h1>Login Now!</h1>
    </Modal>
  </teleport>
  <button @click="toggleModal">Show Modal</button>
  <button @click="toggleModalTwo">Show Login</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  data() {
    return {
      title: "My First Vue App",
      showModal: false,
      showModalTwo: false
    }
  },
  components: { Modal },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
