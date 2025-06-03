<script setup>
import Son1Com from '@/components/Son1Com.vue';
import Son2Com from '@/components/Son2Com.vue';
import {useCounterStore} from '@/store/counter';
import { useChannelStore } from '@/store/channel';
import { storeToRefs } from 'pinia';
const counterStore = useCounterStore()


const channelStore = useChannelStore()
const {channelList} = storeToRefs(channelStore)
const {getList} = channelStore

</script>

<template>
  <div>
    <h3>
      APP.vue根组件 - {{ counterStore.count }} - {{ counterStore.double }}
    </h3>
    <Son1Com></Son1Com>
    <Son2Com></Son2Com>
    <hr>
    <button @click="getList">获取频道数据</button>
    <ul>
      <li v-for="item in channelList" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<style>

</style>
