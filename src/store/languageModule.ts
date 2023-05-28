interface State {
    selectedLanguage: string;
}

export const languageModule = {
    state: () => ({
        selectedLanguage: 'ru'
    }),
    getters: {
        getSelectedLanguage: (state: State) => {
            return state.selectedLanguage;
        }
    },
    mutations: {
        setSelectedLanguage: (state: State, language: string) => {
            state.selectedLanguage = language;
        }
    }
};
