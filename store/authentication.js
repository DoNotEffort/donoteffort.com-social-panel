import jwtDecode from "jwt-decode";
export const state = () => ({
	user: null,
	decodedJWT: null,
})
// export const getters = {
// 	geUser(state) {
// 		return state.user
// 	},
// }

export const getters = {
  getUser: state => state.user
}


export const mutations = {
	decodeJwtToken(_, str) {
		try {
			state.decodedJWT = jwtDecode(str);
			
		} catch (error) {
			console.log("not valid token")
		}
	},
	setUser(state,payload){
		state.user=payload
 }
}
export const actions = {
	decodeJwtToken({ commit }, payload) {
		commit('decodeJwtToken', payload)
		return state.decodedJWT
	},
	async setUser({ commit }, payload) {
		await commit('setUser', payload)
		return state.user
	}
}