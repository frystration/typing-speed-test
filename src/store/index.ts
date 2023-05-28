// @ts-ignore
import {createStore} from "vuex";
import {languageModule} from "@/store/languageModule.ts";
import {typingStatsModule} from "@/store/typingStatsModule.ts";

export default createStore({
    modules: {
        text: languageModule,
        typingStats: typingStatsModule
    }
})