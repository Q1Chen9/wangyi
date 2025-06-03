import { defineStore } from "pinia";
import { computed, ref } from "vue";


 export const useCounterStore= defineStore('counter', () => {
    const count =ref(100)

    const addCount = () =>count.value++
    const subCount = () =>count.value--

    const double = computed(() => count.value * 2)



    return{
        count,
        addCount,
        subCount,
        double
    }
},{
    persist: true
})