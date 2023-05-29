import {ActionContext, Module} from "vuex";
import roundToTwoDecimals from "../utils/roundToTwoDecimals.ts";
import {RootState} from "./index.ts";

export interface TypingStatsState  {
    error: boolean;
    errorCount: number;
    selected: number;
    time: number;
    typingSpeed: number;
    typingAccuracy: number;
    intervalId: number | null;
}

export const typingStatsModule: Module<TypingStatsState, RootState> = {
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
        getError: (state: TypingStatsState): boolean => state.error,
        getErrorCount: (state: TypingStatsState): number => state.errorCount,
        getSelected: (state: TypingStatsState): number => state.selected,
        getTime: (state: TypingStatsState): number => state.time,
        getTypingAccuracy: (state: TypingStatsState): number => state.typingAccuracy,
        getTypingSpeed: (state: TypingStatsState): number => state.typingSpeed,
    },
    mutations: {
        setError(state: TypingStatsState, bool: boolean) {
            state.error = bool;
        },
        incrementErrorCount(state: TypingStatsState): void {
            state.errorCount += 1;
        },
        incrementSelected(state: TypingStatsState): void {
            state.selected += 1;
        },
        setTime(state: TypingStatsState, newTime: number): void {
            state.time = newTime;
        },
        setIntervalId(state: TypingStatsState, id: number) {
            state.intervalId = id;
        },
        setTypingAccuracy(state: TypingStatsState, accuracy: number) {
            state.typingAccuracy = accuracy;
        },
        setTypingSpeed(state: TypingStatsState, speed: number) {
            state.typingSpeed = speed;
        },
        resetState(state: TypingStatsState) {
            state.error = false;
            state.selected = 0;
            state.errorCount = 0;
            state.time = 0;
            state.intervalId = null;
        }
    },
    actions: {
        startTimer(context: ActionContext<TypingStatsState, any>) {
            const startTime = Date.now();
            const intervalId = setInterval(() => {
                const time = Date.now() - startTime;
                context.commit("setTime", time);
            }, 400);

            // Сохраняем идентификатор интервала в состоянии модуля, чтобы его можно было очистить позже
            context.commit("setIntervalId", intervalId);
        },
        stopTimer(context: ActionContext<TypingStatsState, any>) {
            // Получаем идентификатор интервала из состояния модуля и очищаем его
            const intervalId = context.state.intervalId;
            clearInterval(intervalId);
        },
        calculateAccuracy(context: ActionContext<TypingStatsState, any>) {
            const {errorCount, selected} = context.state;
            let accuracy = 100;

            if (selected + errorCount > 1) {
                accuracy = roundToTwoDecimals((selected / (selected + errorCount)) * 100);
            }

            context.commit("setTypingAccuracy", accuracy);
        },
        calculateSpeed(context: ActionContext<TypingStatsState, any>) {
            const { selected, time } = context.state;
            let speed = 1000;

            if (time > 0) {
                speed = Math.ceil((selected / time) * 60000);
            }

            context.commit("setTypingSpeed", speed);
        },

    }
};
