// @ts-ignore
import {createStore} from "vuex";
import {languageModule} from "@/store/languageModule.ts";

export default createStore({
    modules: {
        text: languageModule
    }
})