import {ComponentOptionsMixin} from "vue";

const toggleMixin: ComponentOptionsMixin = {
    props : {
        show : {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideDialog(): void {
            this.$emit('update:show', false)
        }
    },
    mounted(): void {

    }
}

export default toggleMixin;