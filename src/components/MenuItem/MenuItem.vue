<template>
    <div class="w-full h-full">
        <template v-for="item in data" :key="item.name">
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
                            <div class="mt-20">
                                <div>{{ item.desc }}</div>
                                <div>{{ item.logo }}</div>
                                <div>{{ item.title }}</div>
                                <div>{{ item.url }}</div>
                            </div>
                        </template>
                    </div>
                </template>
            </template>
            <div v-else :id="item.en_name">
                <div v-if="item.web" class="text-lg font-bold text-indigo-700 flex items-center">
                    <el-icon>
                        <price-tag />
                    </el-icon>
                    <h1>{{ item.name }}</h1>
                </div>
                <template v-for="value in item.web" :key="value.url">
                    <div class="mt-20">
                        <div>{{ value.desc }}</div>
                        <div>{{ value.logo }}</div>
                        <div>{{ value.title }}</div>
                        <div>{{ value.url }}</div>
                    </div>
                </template>
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
        // console.log(newVal)
        // console.log(document.getElementById(newVal))
        nextTick(() => {
            let scroll = document.getElementById(newVal).offsetTop - 80
            document.documentElement.scrollTop = document.body.scrollTop = scroll;
        })
    }
)
</script>
<style scoped>
</style>