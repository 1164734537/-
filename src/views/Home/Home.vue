<template>
  <div class="wrap transition-all duration-1000" :class="isCollapse === true ? 'md:pl-16' : 'md:pl-48'" >
      <!-- PC端nav -->
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
        transition-all
        duration-1000
      "
      :class="isCollapse === true ? 'md:left-16' : 'md:left-48'"
    >
      <el-icon @click="handleCollapse" class="ml-4"><fold /></el-icon>
    </div>
    <!-- menu区域 -->
    <div
      class="
        menu
        hidden
        fixed
        top-0
        left-0
        md:block
        h-screen
        bg-white
        transition-all
        duration-1000
        overflow-hidden
      "
      :class="isCollapse === true ? 'w-16' : 'w-48'"
    >
      <el-row class="mt-4 w-full">
        <el-col>
          <div class="flex flex-col items-center justify-center">
            <img
              class="w-28 rounded-sm"
              src="@/assets/images/logo.jpg"
              alt=""
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
            >
              陈叔叔导航
            </h1>
          </div>
          <el-menu
            default-active="Recommended"
            :collapse="isCollapse"
            collapse-transition
          >
            <template v-for="item in itemsData" :key="item.en_name">
              <el-sub-menu
                v-if="item.children"
              >
                <template #title>
                  <el-icon><tools /></el-icon>
                  <span>{{ item.name }}</span>
                </template>
                <template
                  v-for="item in item.children"
                  :key="item.en_name"
                >
                  <el-menu-item
                    :index="item.en_name"
                    @click="handclick(item.en_name)"
                  >
                    <span>{{ item.name }}</span>
                  </el-menu-item>
                </template>
              </el-sub-menu>
              <el-menu-item
                v-else
                :index="item.en_name"
                @click="handclick(item.en_name)"
                >
                <el-icon><tools /></el-icon>
                <span>{{ item.name }}</span>
              </el-menu-item>

            </template>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <!-- 主区域内容块 -->
    <div class="main pt-11 md:pt-24 md:pl-4 shadow-inner">
      <div class="content bg-gray-100">
        <MenuItem :data="itemsData" :name="selectName"></MenuItem>
      </div>
    </div>
    <!-- 回到顶部 -->
    <div
      class="
        toTop
        fixed
        right-10
        bottom-36
        md:right-26
        p-2
        rounded
        animate__animated
        bg-gradient-to-r
        from-green-400
        to-blue-500
        hover:from-pink-500 hover:to-yellow-500
      "
      :class="scrollTop >= 300? 'animate__rollIn':'animate__fadeOutRight'"
      @click="backTop()"
    >
      <div class="flex items-center justify-center w-16 text-white text-opacity-80">
        回到顶部
        <el-icon class="flex-1 text-base ml-2"><arrow-up-bold /></el-icon>
      </div>
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
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import MenuItem from "@/components/MenuItem/MenuItem.vue";
import itemsData from "@/assets/data.json";
import { Tools, Fold, ArrowUpBold } from "@element-plus/icons-vue";

console.log(itemsData);
const scrollTop = ref(0);
const selectName = ref(null);
const isCollapse = ref(false);
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
  selectName.value = name;
};
const handclick = (value) => {
  console.log(value);
  selectName.value = value;
};
const handleCollapse = () => {
  isCollapse.value = !isCollapse.value;
};
</script>
<style lang='scss'>
  .menu :deep(.el-menu) {
    border-right: none;
  }
  /* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 2px !important;
  height: 1px !important;
}
</style>
