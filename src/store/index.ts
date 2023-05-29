import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import {languageModule, LanguageState} from "./languageModule.ts";
import {typingStatsModule, TypingStatsState} from "./typingStatsModule.ts";


export interface RootState {
    typingStats: TypingStatsState;
    language: LanguageState;
}
export const key: InjectionKey<Store<RootState>> = Symbol()
export const store = createStore<RootState>({
    modules: {
        text: languageModule,
        typingStats: typingStatsModule
    }
})

