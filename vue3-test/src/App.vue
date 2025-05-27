<script setup>
// import { reactive } from 'vue'
// const state = reactive({count: 100})

import {ref} from 'vue'
const state = ref(100)
const plus1 = () =>{
  state.value++
}
</script>

<template>
  <div>
    <div>{{ state.count }}</div>
    <button @click="plus1">+1</button>
  </div>
</template>

<style>

</style>
