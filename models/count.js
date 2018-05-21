export default {
    state: {
        size: 0
    },

    reducers: {
        // handle state changes with pure functions
        increment(state, size) {
            return { ...state, size };
        }
    },

    effects: {
        async incrementAsync(payload, rootState) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            this.increment(payload)
        }
    }
};
