<template>
    <div class="w-full h-full pt-8">
        <template v-for="item in data" :key="item.name">
            <!-- 有子节点 -->
            <template v-if="item.children">
                <template v-for="value in item.children" :key="value.en_name">
                    <div :id="value.en_name">
                        <div
                            v-if="value.web"
                            class="text-lg font-bold text-indigo-700 flex items-center"
                        >
                            <el-icon>
                                <price-tag />
                            </el-icon>
                            <h1>{{ value.name }}</h1>
                        </div>
                        <template v-for="item in value.web" :key="item.en_name">
                            <div class="">
                                <div>{{ item.desc }}</div>
                                <div>{{ item.logo }}</div>
                                <div>{{ item.title }}</div>
                                <div>{{ item.url }}</div>
                            </div>
                        </template>
                    </div>
                </template>
            </template>
            <!-- 无子节点 -->
            <div v-else :id="item.en_name" class="mb-8">
                <div v-if="item.web" class="text-lg font-bold text-indigo-700 flex items-center h-10">
                    <el-icon>
                        <price-tag />
                    </el-icon>
                    <h1>{{ item.name }}</h1>
                </div>
                <div class="shadow rounded-md">
                    <ul class="flex">
                        <template v-for="value in item.web" :key="value.url">
                                <!-- <div>{{ value.desc }}</div>
                                <div>{{ value.logo }}</div>
                                <div>{{ value.title }}</div>
                                <div>{{ value.url }}</div> -->
                            <!-- <div>
                                <div class="logo w-10 h-10">
                                    <img class="w-full" :src="value.logo" alt="">
                                </div>
                                <div class="">

                                </div>
                            </div> -->
                            <li class=" w-1/4">
                                <a :href="value.url" class="block flex justify-center items-center" target="_blank">
                                    <div class="logo w-10 h-10">
                                        <img class="w-full" :src="value.logo" alt="">
                                    </div>
                                    <div class="ml-2 w-full overflow-clip">
                                        <p class="text-base">{{ value.title }}</p>
                                        <p class="text-sm font-thin break-all">{{ value.desc }}</p>
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
const props = defineProps({
    data: {
        type: Object,
        required: true
    },
    name: {
        type: Object,
        default: null
    }
})
const { data, name } = toRefs(props)
watch(
    () => props.name,
    (newVal, oldVal) => {
        nextTick(() => {
            let scroll = document.getElementById(newVal).offsetTop - 80
            document.documentElement.scrollTop = document.body.scrollTop = scroll;
        })
    }
)
</script>
<style scoped>
</style>