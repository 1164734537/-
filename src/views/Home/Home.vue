<template>
    <div class="wrap md:pl-48">
        <div class="nav hidden fixed top-0 left-0 md:block md:left-48 w-full h-20 bg-yellow-200">
            nav
        </div>
        <div class="menu hidden fixed top-0 left-0 md:block w-48 h-screen bg-blue-800">
            <div>
                <!-- <img src="" alt=""> -->
                <span>图片</span>
                <h1>导航</h1>
            </div>
            <Menu :data="itemsData" @on-click-name="changeName"></Menu>
        </div>
        <div class="main pt-11 md:pt-24 md:pl-4">
            <div class="content bg-gray-100">
                <MenuItem 
                :data="itemsData" 
                :name ="selectName" 
                ></MenuItem>
            </div>
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
    // import Search from '@/components/Search/Search.vue'
    import Menu from '@/components/Menu/Menu.vue'
    import MenuItem from '@/components/MenuItem/MenuItem.vue'
    import itemsData from '@/assets/data.json'
    console.log(itemsData)
    const scrollTop = ref(0)
    const selectName = ref(null)
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
    const changeName = (name) => {
        // console.log(name)
        selectName.value = name
    }
</script>
<style lang='scss' scoped>
</style>
