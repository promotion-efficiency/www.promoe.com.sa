export const state = () => ({
    jsonData: {},
    testcounter : 1,
})

export const mutations = {
	async setJson(state, data) {
        state.jsonData = data;
        //console.log(state.jsonData)
        console.log('hello from set')
	},
}

export const actions ={
    async nuxtServerInit({commit}){
        const myresult = await this.$axios.$get('http://dev.promoe.com.sa/db.json')
        console.log('hi from store')
        //console.log(myresult)
        commit('setJson', myresult);
    }
}