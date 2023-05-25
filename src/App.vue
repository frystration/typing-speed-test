<template>
    <div class="app">
        <Header/>
        <TypingTest :text-value="text"/>
    </div>
</template>

<script lang="ts">
import Header from "./components/Header.vue";
import TypingTest from "./components/TypingTest.vue";
import axios from "axios";
import fixedFetchedText from "./utils/fixFetchedText.ts";

export default {
    components: {
        Header,
        TypingTest
    },
    data() {
        return {
            text: ""
        }
    },
    methods: {
        async fetchText() {
            try {
                const response = await axios.get('https://fish-text.ru/get',
                    {
                        params:
                            {
                                format: "json",
                                type: "paragraph",
                                number: "1"
                            }
                    })
                const text = response.data.text
                this.text = fixedFetchedText(text)

                // const response = await axios.get('https://baconipsum.com/api/?type=all-meat&paras=1')
                // const text = response.data[0]
                // this.text = fixedFetchedText(text)
            } catch (e) {
                alert("Ошибка API")
            }
        }
    },
    mounted() {
        this.fetchText()
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: steelblue;
    overflow: auto;
}
</style>


