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

const userInfo = ref({
  name:'zs',
  age:18
})
const setUserInfo = () =>{
  // userInfo.value.age++
  // userInfo.value.name = 'ls'
  userInfo.value.age++  
}
//3 .深度监听
// watch(userInfo,(newValue)  =>{
//   console.log(newValue)
// },{
//   deep:true
//   immediate:true
// })


// watch(count,(newValue,oldValue) =>{
//   console.log(newValue,oldValue)
// })

// watch([count,name],(newArr,oldArr) => {
//   console.log(newArr,oldArr)
// },{
//   immediate:true
// }
// )
//4 监听单个属性
watch(() => userInfo.value.age,(newValue,oldValue) =>{
  console.log(newValue,oldValue)
})

</script>

<template>
  <div>{{ count }}</div>
  <button @click="changeCount">改数字</button>
  <div>{{ name }}</div>
  <button @click="changeName">改名字</button>

  <hr>
  <div>{{ userInfo }}</div>
  <button @click="setUserInfo">修改用户数据</button>
</template>


<style scoped>

</style>
