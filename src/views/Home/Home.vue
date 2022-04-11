<template>
  <div
    class="wrap transition-all duration-1000 overflow-hidden"
    :class="isCollapse === true ? 'md:pl-16' : 'md:pl-48'"
  >
    <!-- PC端nav -->
    <div
      class="nav hidden fixed top-0 left-0 md:block md:left-48 w-full h-20 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-1000 z-10"
      :class="isCollapse === true ? 'md:left-16' : 'md:left-48'"
    >
      <div class="h-full w-8 flex items-center justify-center">
        <el-icon @click="handleCollapse" class="ml-4 cursor-pointer">
          <fold />
        </el-icon>
      </div>
    </div>
    <!-- menu区域 -->
    <div
      class="menu hidden fixed top-0 left-0 md:block h-screen bg-white transition-all duration-1000 overflow-hidden"
      :class="isCollapse === true ? 'w-16' : 'w-48'"
    >
      <el-row class="w-full">
        <el-col>
          <div class="flex flex-col items-center justify-center">
            <img
              class="w-28 rounded-sm"
              src="@/assets/images/logo.jpg"
              alt
              :class="
                isCollapse === true
                  ? 'animate__animated animate__jello'
                  : 'animate__animated animate__wobble'
              "
            />
            <h1
              class="font-bold text-xl"
              :class="
                isCollapse === true
                  ? 'animate__animated animate__fadeOutLeftBig'
                  : 'animate__animated animate__rubberBand'
              "
            >陈叔叔导航</h1>
          </div>
          <el-menu class="h-96 overflow-y-auto overscroll-contain mt-4" default-active="Recommended" :collapse="isCollapse" collapse-transition unique-opened="true">
            <template v-for="item in itemsData" :key="item.en_name">
              <el-sub-menu v-if="item.children" :index="item.en_name">
                <template #title>
                  <el-icon>
                    <tools />
                  </el-icon>
                  <span>{{ item.name }}</span>
                </template>
                <template v-for="item in item.children" :key="item.en_name">
                  <el-menu-item :index="item.en_name" @click="handclick(item.en_name)">
                    <span>{{ item.name }}</span>
                  </el-menu-item>
                </template>
              </el-sub-menu>
              <el-menu-item v-else :index="item.en_name" @click="handclick(item.en_name)">
                <el-icon>
                  <tools />
                </el-icon>
                <span>{{ item.name }}</span>
              </el-menu-item>
            </template>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <!-- 主区域内容块 -->
    <div class="main pt-11 md:pt-24 md:pl-4 shadow-inner">
      <div class="content shadow-inner md:px-4">
        <MenuItem :data="itemsData" :name="selectName"></MenuItem>
      </div>
    </div>
    <!-- 回到顶部 -->
    <div
      v-show="scrollTop >= 300"
      class="toTop fixed right-10 bottom-36 md:right-26 p-2 rounded animate__animated bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer"
      :class="scrollTop >= 300 ? 'animate__rollIn' : ''"
      @click="backTop()"
    >
      <div class="flex items-center justify-center w-16 text-white text-opacity-80">
        回到顶部
        <el-icon class="flex-1 text-base ml-2">
          <arrow-up-bold />
        </el-icon>
      </div>
    </div>
    <!-- 移动端展示 -->
    <div
      class="moblie_nav block md:hidden fixed top-0 left-0 h-10 w-full bg-gradient-to-r from-green-400 to-blue-500 z-10"
    >
      <div class="h-full px-4 flex justify-between items-center">
        <div>路由</div>
        <div @click="handledown" class="cursor-pointer text-slate-200">
          <el-icon>
            <expand />
          </el-icon>
        </div>
      </div>
      <div
        v-show="isShow"
        class="w-full h-96 animate__animated animate__slideInUp animate__faster bg-gradient-to-r from-green-400 to-blue-500 border-t border-teal-200/25 overscroll-contain overflow-y-auto"
      >
        <ul class="w-full px-4 cursor-pointer">
          <template v-for="item in itemsData" :key="item.en_name">
            <template v-if="item.web">
              <li
                class="w-full border-b border-teal-200/25"
                @click="handclick(item.en_name, 'moblie_nav')"
              >
                <div class="flex items-center w-full h-10 text-slate-200 ">
                  <el-icon>
                    <tools />
                  </el-icon>
                  <h1 class="ml-4">{{ item.name }}</h1>
                </div>
              </li>
            </template>
            <template v-else-if="item.children">
              <template v-for="value in item.children" :key="value.en_name">
                <li
                  class="w-full border-b border-teal-200/25"
                  @click="handclick(value.en_name, 'moblie_nav')"
                >
                  <div class="flex items-center w-full h-10 text-slate-200">
                    <el-icon>
                      <tools />
                    </el-icon>
                    <h1 class="ml-4">{{ value.name }}</h1>
                  </div>
                </li>
              </template>
            </template>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
// import MenuItem from "@/components/MenuItem/MenuItem.vue";
import { Tools, Fold, ArrowUpBold, Expand } from "@element-plus/icons-vue";
import api from "@/api"
const scrollTop = ref(0);
const selectName = ref(null);
const isCollapse = ref(false);
const isShow = ref(false)
const itemsData = ref([])
// 监听滚动条高度
onMounted(() => {
  console.log("mounted");
  // 滚动条, 注册监听事件
  document.addEventListener("scroll", isScrollTop, true);
  // api.getMenuList()
  getMenuList()
});

// 获取菜单列表信息
const getMenuList = async () => {
  const list = await api.getMenuList()
  // console.log(list)
  if(list.length > 0){
    itemsData.value = list
  }
}

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
  selectName.value = name;
};
const handclick = (value, nav) => {
  console.log(value);
  selectName.value = value;
  if (nav === 'moblie_nav') {
    isShow.value = false
  }
};
const handleCollapse = () => {
  isCollapse.value = !isCollapse.value;
};
const handledown = () => {
  isShow.value = !isShow.value;
}
</script>
<style lang='scss' scoped>
.menu :deep(.el-menu) {
  border-right: solid 1px transparent;
}
</style>
