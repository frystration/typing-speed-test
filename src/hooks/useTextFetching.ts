import {Ref, ref, watch} from "vue";
import axios from "axios";
import fixFetchedText from "../utils/fixFetchedText.ts";
import {Language, LanguageValue} from "../types";
import jsonData from '../API/package.json';

export const useTextFetching = () => {
    const selectedLanguage: Ref<LanguageValue | ""> = ref("");
    const text: Ref<string> = ref("");
    const isLoading: Ref<boolean> = ref(true);

    // const fetchingMock = async () => {
    //     try {
    //         const response = await axios.get('/src/API/package.json')
    //         text.value = fixFetchedText(response.data.text);
    //     } catch (e) {
    //         alert("Ошибка API");
    //     } finally {
    //         setTimeout(() => {
    //             isLoading.value = false;
    //         }, 500)
    //     }
    // };
    const fetchingMock = async () => {
        try {
            const getDataFromServer = async ():Promise<{text: string}> => {
                return await new Promise((resolve) => {
                    setTimeout(() => resolve(jsonData), 1000);
                });
            };
            const response = await getDataFromServer()
            text.value = fixFetchedText(response.text);
        } catch (e) {
            alert("Ошибка API");
        } finally {
            isLoading.value = false;
        }
    };

    const fetchingRu = async () => {
        try {
            const response = await axios.get("https://fish-text.ru/get", {
                params: {
                    format: "json",
                    type: "paragraph",
                    number: "1"
                }
            });
            text.value = fixFetchedText(response.data.text);
        } catch (e) {
            alert("Ошибка API");
        } finally {
            isLoading.value = false;
        }
    };

    const fetchingEn = async () => {
        try {
            const response = await axios.get(
                "https://baconipsum.com/api/?type=all-meat&paras=1"
            );
            text.value = fixFetchedText(response.data[0]);
        } catch (e) {
            alert("Ошибка API");
        } finally {
            isLoading.value = false;
        }
    };

    const fetchingData = () => {
        if (selectedLanguage.value === Language.RU) {
            fetchingRu();
        } else if (selectedLanguage.value === Language.EN) {
            fetchingEn();
        } else if (selectedLanguage.value === Language.MOCK) {
            fetchingMock();
        }
    };

    watch(
        () => selectedLanguage.value,
        () => {
            isLoading.value = true;
            fetchingData();
        }
    );

    return {
        selectedLanguage,
        text,
        isLoading
    };
};