<template>
    <div style="width: 300px">
        <p3>想比而言，组合式API</p3>
        <ul>
            <li>来源十分清晰，</li>
            <li>不存在命名空间冲突，可以通过解构任意命名</li>
            <li>不再需要仅为逻辑复用而创建的组件实例</li>
        </ul>
        <div>鼠标的位置x:{{x}}</div>
        <div>鼠标的位置Y：{{y}}</div>
    </div>

</template>

<script>
    import  {userMousePosition} from './index.js'
    export default {
        name: "index",
        setup(){
            const {x,y} = userMousePosition()
            return{
                x,
                y
            }
        }
    }
</script>

<style scoped>

</style>
<!--
ref的弊端
1,增加了心智负担
2，更冗余
而只使用reactive 的问题是，实用组合函数时必须始终保持对这个所返回对象的引用以保持响应式，
toRefs api用来提供解决此约束的办法，将响应式对象的每个property都转成啦响应的ref
function useMousePosition() {
  const pos = reactive({
    x: 0,
    y: 0,
  })

  // ...
  return toRefs(pos)
}

// x & y 现在是 ref 形式了!
const { x, y } = useMousePosition()
编写有组织的javascript代码的技能直接转化了编写有组织的vue代码的技能
接纳策略

-->