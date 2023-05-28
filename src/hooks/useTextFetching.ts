import fixFetchedText from "@/utils/fixFetchedText.ts";
import {ref, watch} from "vue";
import axios from "axios";

export const useTextFetching = () => {
    const selectedLanguage = ref("");
    const text = ref("");
    const isLoading = ref(true);

    const fetchingMock = async () => {
        try {
            const response = await axios.get('http://localhost:5173/src/API/package.json')
            text.value = fixFetchedText(response.data.text);
        } catch (e) {
            alert("Ошибка API");
        } finally {
            setTimeout(() => {
                isLoading.value = false;
            }, 500)
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
        if (selectedLanguage.value === "ru") {
            fetchingRu();
        } else if (selectedLanguage.value === "en") {
            fetchingEn();
        } else {
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