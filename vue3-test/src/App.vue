<script setup>
import Son1Com from '@/components/Son1Com.vue';
import Son2Com from '@/components/Son2Com.vue';
import {useCounterStore} from '@/store/counter';
const counterStore = useCounterStore()


</script>

<template>
  <div>
    <h3>
      APP.vue根组件 - {{ counterStore.count }} - {{ counterStore.double }}
    </h3>
    <Son1Com></Son1Com>
    <Son2Com></Son2Com>
  </div>
</template>

<style>

</style>
