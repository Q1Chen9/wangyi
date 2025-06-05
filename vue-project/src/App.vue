<script setup>
import {ref, watch} from 'vue'


const count = ref(100)
const changeCount = () =>{
  count.value++
}
const name = ref('zhangsan')
const changeName = () =>{
  name.value = 'lishi'
}

// watch(count,(newValue,oldValue) =>{
//   console.log(newValue,oldValue)
// })

watch([count,name],(newArr,oldArr) => {
  console.log(newArr,oldArr)
},{
  immediate:true
}
)


</script>

<template>
  <div>{{ count }}</div>
  <button @click="changeCount">改数字</button>
  <div>{{ name }}</div>
  <button @click="changeName">改名字</button>
</template>


<style scoped>

</style>
