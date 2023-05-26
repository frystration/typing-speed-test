<template>
    <div>
        <Header/>
        <TypingTest v-if="!isLoading" :text-value="text"/>
        <Dialog v-model:show="isLoading" v-else>
            <div></div>
            <Loader/>
            <div></div>
        </Dialog>
    </div>
</template>

<script lang="ts">
import Header from "../components/Header.vue";
import TypingTest from "../components/TypingTest.vue";
import axios from "axios";
import fixedFetchedText from "../utils/fixFetchedText.ts";
import Dialog from "../components/Dialog.vue";
import Loader from "../components/Loader.vue";

export default {
    components: {
        Loader,
        Dialog,
        Header,
        TypingTest
    },
    data() {
        return {
            text: "",
            isLoading: false
        }
    },
    methods: {
        async fetchText() {
            try {
                this.isLoading = true;
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

                // this.text = fixedFetchedText('питер'
                //     // + 'паркер веном я мешаю с айрн брю \n' +
                //     // 'она не понимает о чём я щас говорю \n' +
                //     // 'мери джейн мне похуй таких как ты много шлюх \n' +
                //     // 'детка да я только для себя и живу эй'
                // )


                // const response = await axios.get('https://baconipsum.com/api/?type=all-meat&paras=1')
                // const text = response.data[0]
                // this.text = fixedFetchedText(text)
            } catch (e) {
                alert("Ошибка API")
            } finally {
                this.isLoading = false;
            }
        }
    },
    mounted() {
        this.fetchText()
    }
}
</script>

<style>
</style>