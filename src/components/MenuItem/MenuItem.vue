<template>
    <div class="w-full h-full">
        <template v-for="item in data" :key="item.name">
            <div :id="item.en_name">
                <h1 class="text-lg font-bold text-indigo-600">{{ item.name }}</h1>
                <template v-for="value in item.web" :key="value.url">
                    <div class="mt-20">
                        <div>{{ value.desc }}</div>
                        <div>{{ value.logo }}</div>
                        <div>{{ value.title }}</div>
                        <!-- <div>{{ value.url }}</div> -->
                    </div>
                </template>
                <template  v-for="value in item.children" :key="value.url">

                </template>
            </div>
        </template>
    </div>
</template>
<script setup>
    import { nextTick, toRefs, watch } from 'vue'
    const props = defineProps({
        data : {
            type: Object,
            required: true
        },
        name : {
            type: Object,
            default: null
        }
    })
    const { data, name } = toRefs(props)
    console.log(name)
    watch(
        ()=> props.name,
        (newVal, oldVal) => {
            console.log(newVal)
            nextTick(()=>{
                let scroll = document.getElementById(newVal).offsetTop - 80
                document.documentElement.scrollTop = document.body.scrollTop = scroll;
            })
        }
    )
</script>
<style scoped>

</style>