<script setup>
import {useCounterStore} from '@/store/counter';
const counterStore = useCounterStore()
</script>

<template>
    <div>
        我是Son1组件 - {{ counterStore.count }}
        <button @click="counterStore.addCount">+</button>
    </div>

</template>

<style>

</style>
