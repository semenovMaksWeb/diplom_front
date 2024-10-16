import { api } from "@/api";
import { useCookies } from "vue3-cookies";
import { createStore } from "vuex";

const { cookies } = useCookies();

export default createStore({
  state: {
    profile: null
  },
  getters: {
    getProfile(state) {
      return state.profile;
    }
  },
  mutations: {
    saveProfile(context, profile) {
      context.profile = profile;
    }
  },
  actions: {
    async acitonProfile(context) {
      const profile = await api.getProfile(cookies.get("token"));
      context.commit("saveProfile", profile)
    }
  },
  modules: {},
});
