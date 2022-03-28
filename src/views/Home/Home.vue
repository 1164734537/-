<template>
    <div class="wrap md:pl-48">
        <div class="nav hidden fixed top-0 left-0 md:block md:left-48 w-full h-20 bg-yellow-200">nav</div>
        <div class="menu hidden fixed top-0 left-0 md:block w-48 h-screen bg-gray-700">menu</div>
        <div class="main pt-11 md:pt-24 md:pl-6">
            main内容区域
        </div>
        <div 
            v-if="scrollTop >= 300"
            class="toTop fixed right-10 bottom-36 md:right-26"
            @click="backTop()"
        >
            回到顶部
        </div>
        <!-- 移动端展示 -->
        <div class="moblie_nav block md:hidden fixed top-0 left-0 h-10 w-full bg-yellow-200">移动端nav</div>
    </div>
</template>
<script setup>
    import { ref, onMounted } from 'vue'
    const scrollTop = ref(0)
    // 监听滚动条高度
    onMounted(()=>{
        console.log('mounted')
        // 滚动条, 注册监听事件
        document.addEventListener('scroll', isScrollTop, true)
    })
    // 实时滚动条高度
    const isScrollTop = () => {
        let scroll = document.documentElement.scrollTop || document.body.scrollTop;
        scrollTop.value = scroll
        console.log(scrollTop.value)
    }
    // 返回顶部
    const backTop = () => {
         document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
</script>
<style lang='scss' scoped>
    .main{
        height: 2000px;
    }
</style>
