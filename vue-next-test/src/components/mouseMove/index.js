import {ref,onMounted,onUnmounted } from 'vue'

export function userMousePosition(){
    const x= ref(x)
    const y = ref(y)
    function update(e) {
        x.value = e.pageX
        y.value = e.pageY
    }
    onMounted(()=>{
        window.addEventListener('mousemove',update)
    })
    onUnmounted(()=>{
        window.removeEventListener('mousemove',update)
    })
    return {
        x,
        y
    }
}