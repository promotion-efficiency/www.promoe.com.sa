export const state = () => ({
    jsonData: {},
    testcounter : 1,
})

export const mutations = {
	async setJson(state, data) {
        state.jsonData = data;
	},
}

export const actions ={
    async nuxtServerInit({commit}){
        const myresult = await this.$axios.$get('https://dev.promoe.com.sa/db.json')
        commit('setJson', myresult);
    }
}