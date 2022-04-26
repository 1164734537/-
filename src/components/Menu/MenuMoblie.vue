<template>
    <ul class="w-full px-4 cursor-pointer">
        <template v-for="item in data" :key="item.en_name">
            <template v-if="item.web.length > 0">
                <li
                    class="w-full border-b border-teal-200/25"
                    @click="handleClick(item.en_name, 'moblie_nav')"
                >
                    <div class="flex items-center w-full h-10 text-slate-200">
                        <el-icon>
                            <tools />
                        </el-icon>
                        <h1 class="ml-4">{{ item.name }}</h1>
                    </div>
                </li>
            </template>
            <template v-else>
                    <!-- {{item.children}} -->
                    <template v-for="value in item.children" :key="value.en_name">
                        <li
                        class="w-full border-b border-teal-200/25"
                        @click="handleClick(value.en_name, 'moblie_nav')"
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
    }
})
const { data } = toRefs(props)
const emit = defineEmits(['on-click-show'])
const handleClick = (value) => {
    // console.log(value)
    store.commit('saveMenuName', value)
    // 触发事件，修改isShow
    emit('on-click-show', '')
}
</script>