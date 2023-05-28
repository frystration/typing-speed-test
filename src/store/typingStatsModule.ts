// @ts-ignore
import {ActionContext} from "vuex";
import roundToTwoDecimals from "@/utils/roundToTwoDecimals.ts";

interface State {
    error: boolean;
    errorCount: number;
    selected: number;
    time: number;
    typingSpeed: number;
    typingAccuracy: number;
    intervalId: number | null;
}

export const typingStatsModule = {
    state: () => ({
        error: false,
        errorCount: 0,
        selected: 0,
        time: 0,
        typingSpeed: 1000,
        typingAccuracy: 100,
        intervalId: null
    }),
    getters: {
        getError: (state: State): boolean => state.error,
        getErrorCount: (state: State): number => state.errorCount,
        getSelected: (state: State): number => state.selected,
        getTime: (state: State): number => state.time,
        getTypingAccuracy: (state: State): number => state.typingAccuracy,
        getTypingSpeed: (state: State): number => state.typingSpeed,
    },
    mutations: {
        setError(state: State, bool: boolean) {
            state.error = bool;
        },
        incrementErrorCount(state: State): void {
            state.errorCount += 1;
        },
        incrementSelected(state: State): void {
            state.selected += 1;
        },
        setTime(state: State, newTime: number): void {
            state.time = newTime;
        },
        setIntervalId(state: State, id: number) {
            state.intervalId = id;
        },
        setTypingAccuracy(state: State, accuracy: number) {
            state.typingAccuracy = accuracy;
        },
        setTypingSpeed(state: State, speed: number) {
            state.typingSpeed = speed;
        },
        resetState(state: State) {
            state.error = false;
            state.selected = 0;
            state.errorCount = 0;
            state.time = 0;
            state.intervalId = null;
        }
    },
    actions: {
        startTimer(context: ActionContext<State, any>) {
            const startTime = Date.now();
            const intervalId = setInterval(() => {
                const time = Date.now() - startTime;
                context.commit("setTime", time);
            }, 400);

            // Сохраняем идентификатор интервала в состоянии модуля, чтобы его можно было очистить позже
            context.commit("setIntervalId", intervalId);
        },
        stopTimer(context: ActionContext<State, any>) {
            // Получаем идентификатор интервала из состояния модуля и очищаем его
            const intervalId = context.state.intervalId;
            clearInterval(intervalId);
        },
        calculateAccuracy(context: ActionContext<State, any>) {
            const {errorCount, selected} = context.state;
            let accuracy = 100;

            if (selected + errorCount > 0) {
                accuracy = roundToTwoDecimals((selected / (selected + errorCount)) * 100);
            }

            context.commit("setTypingAccuracy", accuracy);
        },
        calculateSpeed(context: ActionContext<State, any>) {
            const { selected, time } = context.state;
            let speed = 1000;

            if (time > 0) {
                speed = Math.ceil((selected / time) * 60000);
            }

            context.commit("setTypingSpeed", speed);
        },

    }
};
