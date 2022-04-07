<template>
    <ul>
        <template v-for="item in data" :key="item.name">
            <li @click="handleClick(item.en_name)">
                {{ item.name }}
            </li>
        </template>
    </ul>
</template>
<script setup>
import { toRefs } from "@vue/reactivity"
    const props = defineProps({
        data: {
            type: Array,
            required: true
        }
    })
    const { data } = toRefs(props)
    const emit = defineEmits(['on-click-name'])
    const handleClick = (name) => {
        emit('on-click-name', name)
    }
</script>
