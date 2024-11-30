import { api } from "@/api";
import { useCookies } from "vue3-cookies";
import { createStore } from "vuex";

const { cookies } = useCookies();

export default createStore({
  state: {
    profile: null,
    activeRowTask: null,
    openModal: false,
  },

  getters: {
    getProfile(state) {
      return state.profile;
    },
    getActiveRowTask(state) {
      return state.activeRowTask;
    },
    getOpenModal(state) {
      return state.openModal;
    }
  },

  mutations: {
    saveProfile(context, profile) {
      context.profile = profile;
    },
    saveActiveRowTask(context, activeRowTask) {
      context.activeRowTask = activeRowTask;
    },
    saveOpenModal(context, value) {
      context.openModal = value;
    }
  },

  actions: {
    async acitonProfile(context) {
      const profile = await api.getProfile(cookies.get("token"));
      context.commit("saveProfile", profile)
    },
    deleteProfile(context) {
      context.commit("saveProfile", null);
    }
  },

  modules: {},
});
