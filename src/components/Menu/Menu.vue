<template>
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
            <template v-for="item in data" :key="item.en_name">
              <el-sub-menu v-if="item.children" :index="item.en_name">
                <template #title>
                  <el-icon>
                    <tools />
                  </el-icon>
                  <span>{{ item.name }}</span>
                </template>
                <template v-for="item in item.children" :key="item.en_name">
                  <el-menu-item :index="item.en_name" @click="handleClick(item.en_name)">
                    <span>{{ item.name }}</span>
                  </el-menu-item>
                </template>
              </el-sub-menu>
              <el-menu-item v-else :index="item.en_name" @click="handleClick(item.en_name)">
                <el-icon>
                  <tools />
                </el-icon>
                <span>{{ item.name }}</span>
              </el-menu-item>
            </template>
          </el-menu>
        </el-col>
      </el-row>
</template>
<script setup>
import { toRefs } from "@vue/reactivity"
import { useStore } from 'vuex'
import { Tools, Fold, ArrowUpBold, Expand } from "@element-plus/icons-vue";
const store = useStore()
const props = defineProps({
    data: {
        type: Object,
        required: true
    },
    isCollapse: {
        type: Boolean,
        required: true
    }
})
const { data, isCollapse } = toRefs(props)
const handleClick = (value) => {
    store.commit('saveMenuName', value)
}
</script>
