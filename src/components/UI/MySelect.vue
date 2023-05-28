<template>
    <div class="select-container">
        <select class="select" :value="modelValue" @change="changeOption">
            <option class="select_option_title" disabled value="">Выберите из списка</option>
            <option class="select_option" v-for="option in options" :key="option.value" :value="option.value">
                {{ option.name }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'my-select',
    props: {
        modelValue: {
            type: String,
        },
        options: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        changeOption(event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
};
</script>

<style scoped>
.select-container {
    position: relative;
    display: inline-block;
}

.select {
    width: fit-content;
    height: 50px;
    padding: 10px 15px;
    margin: 10px;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    border-color: transparent;
    color: whitesmoke;
}

.select::-ms-expand {
    display: none;
}

.select:after {
    content: '';
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0;
    border-color: #333 transparent transparent transparent;
    pointer-events: none;
}

.select_option_title{
    background: plum;
    color: whitesmoke;
}

.select_option{
    background: slateblue;
    color: whitesmoke;
}
</style>
