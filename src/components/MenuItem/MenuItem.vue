<template>
    <div class="w-full h-full pt-8">
        <template v-for="item in data" :key="item.name">
            <template v-if="item.children">
                <!-- 有子节点 -->
                <template v-for="value in item.children" :key="value.en_name">
                    <div :id="value.en_name" class="mb-8 cursor-pointer">
                        <div
                            v-if="value.web"
                            class="text-lg font-bold text-indigo-700 flex items-center h-10"
                        >
                            <el-icon>
                                <price-tag />
                            </el-icon>
                            <h1>{{ value.name }}</h1>
                        </div>
                        <div class="shadow rounded-md">
                            <ul class="flex justify-start flex-wrap md:py-4 md:pl-4">
                                <template v-for="item in value.web" :key="item.en_name">
                                    <li class="lg:w-1/4 md:w-1/2 w-full h-20">
                                        <a
                                            :href="item.url"
                                            class="block ml-8 md:ml-0 md:w-full h-full flex md:justify-center items-center cursor-pointer hover:bg-gray-50 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow transition-all"
                                            target="_blank"
                                        >
                                            <div class="logo w-8 h-8 flex-shrink-0">
                                                <img class="w-full" :src="item.logo" alt />
                                            </div>
                                            <div class="ml-2 flex-shrink">
                                                <p class="text-base leading-4">{{ item.title }}</p>
                                                <p
                                                    class="w-60 md:w-48 h-8 leading-8 text-sm font-thin break-all truncate"
                                                >{{ item.desc }}</p>
                                            </div>
                                        </a>
                                    </li>
                                </template>
                            </ul>
                        </div>
                    </div>
                </template>
            </template>
            <div v-else :id="item.en_name" class="mb-8 cursor-pointer">
                <!-- 无子节点 -->
                <div
                    v-if="item.web"
                    class="text-lg font-bold text-indigo-700 flex items-center h-10"
                >
                    <el-icon>
                        <price-tag />
                    </el-icon>
                    <h1>{{ item.name }}</h1>
                </div>
                <div class="shadow rounded-md">
                    <ul class="flex justify-start flex-wrap md:py-4 md:pl-4">
                        <template v-for="value in item.web" :key="value.url">
                            <li class="lg:w-1/4 md:w-1/2 w-full h-20">
                                <a
                                    :href="value.url"
                                    class="block ml-8 md:ml-0 md:w-full h-full flex md:justify-center items-center cursor-pointer hover:bg-gray-50 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow transition-all"
                                    target="_blank"
                                >
                                    <div class="logo w-8 h-8 flex-shrink-0">
                                        <img class="w-full" :src="value.logo" alt />
                                    </div>
                                    <div class="ml-2 flex-shrink">
                                        <p class="text-base leading-4">{{ value.title }}</p>
                                        <p
                                            class="w-60 md:w-48 h-8 leading-8 text-sm font-thin break-all truncate"
                                        >{{ value.desc }}</p>
                                    </div>
                                </a>
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
        </template>
    </div>
</template>
<script setup>
import { PriceTag } from "@element-plus/icons-vue";
import { nextTick, toRefs, watch } from "@vue/runtime-core";
import { useStore } from 'vuex'
const store = useStore()
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})
const { data } = toRefs(props)
watch(() => store.state.menuName, (newVal, oldVal) => {
    nextTick(() => {
        let scroll = document.getElementById(newVal).offsetTop - 80
        document.documentElement.scrollTop = document.body.scrollTop = scroll;
    })
})

</script>
<style>
/* 设置滚动条的样式 */
::-webkit-scrollbar {
    width: 0px !important;
    height: 1px !important;
}
</style>