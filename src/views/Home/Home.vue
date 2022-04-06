<template>
  <div 
    class="wrap"
    :class="isCollapse === true ? 'md:pl-16' : 'md:pl-48'"
  >
    <div
      class="
        nav
        hidden
        fixed
        top-0
        left-0
        md:block md:left-48
        w-full
        h-20
        bg-gradient-to-r
        from-green-400
        to-blue-500
      "
      :class="isCollapse === true ? 'md:left-16' : 'md:left-48'"
    >
    <el-button type="primary" @click="handleCollapse">收起</el-button>
    </div>
    <div 
        class="menu hidden fixed top-0 left-0 md:block h-screen bg-white"
        :class="isCollapse === true ? 'w-16' : 'w-48'"
    >
      <el-row class="mt-4 w-full">
        <el-col>
          <div class="flex flex-col items-center justify-center">
            <img
              class="w-28 rounded-sm"
              src="@/assets/images/logo.jpg"
              alt=""
            />
            <h1 
                class="font-bold text-xl"
                v-if="!isCollapse"
            >陈叔叔导航</h1>
          </div>
          <el-menu 
            default-active="Recommended"
            :collapse="isCollapse"
            collapse-transition
            >
            <template v-for="item in itemsData" :key="item.en_name">
              <el-menu-item
                :index="item.en_name"
                @click="handclick(item.en_name)"
              >
                <span>{{ item.name }}</span>
              </el-menu-item>
            </template>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="main pt-11 md:pt-24 md:pl-4 shadow-inner">
      <div class="content bg-gray-100">
        <MenuItem :data="itemsData" :name="selectName"></MenuItem>
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
    <div
      class="
        moblie_nav
        block
        md:hidden
        fixed
        top-0
        left-0
        h-10
        w-full
        bg-yellow-200
      "
    >
      移动端nav
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import MenuItem from "@/components/MenuItem/MenuItem.vue";
import itemsData from "@/assets/data.json";
console.log(itemsData);
const scrollTop = ref(0);
const selectName = ref(null);
const isCollapse = ref(false)
// 监听滚动条高度
onMounted(() => {
  console.log("mounted");
  // 滚动条, 注册监听事件
  document.addEventListener("scroll", isScrollTop, true);
});
// 实时滚动条高度
const isScrollTop = () => {
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;
  scrollTop.value = scroll;
  console.log(scrollTop.value);
};
// 返回顶部
const backTop = () => {
  document.documentElement.scrollTop = document.body.scrollTop = 0;
};
const changeName = (name) => {
  // console.log(name)
  selectName.value = name;
};
const handclick = (value) => {
  console.log(value);
  selectName.value = value;
};
const handleCollapse = () =>{
    isCollapse.value = !isCollapse.value
}
</script>
<style lang='scss' scoped>
    // .collapse{
    //    width: 64; 
    // }
</style>
