import {Module} from "vuex";
import {RootState} from "./index.ts";
import {Language, LanguageValue} from "../types";

export interface LanguageState {
    selectedLanguage: LanguageValue
}

export const languageModule: Module<LanguageState, RootState> = {
    state: () => ({
        selectedLanguage: Language.RU
    }),
    getters: {
        getSelectedLanguage: (state: LanguageState) => {
            return state.selectedLanguage;
        }
    },
    mutations: {
        setSelectedLanguage: (state: LanguageState, language: LanguageValue) => {
            state.selectedLanguage = language;
        }
    }
};
