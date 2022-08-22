export const state = () => ({
  frontend_data: {},
  logo: '',
  banner: '',
  footer_logo: '',
})

export const mutations = {
  STORE_FRONTEND(state, data) {
    state.frontend_data = data;
  },

  STORE_LOGO(state, data) {
    state.logo = data;
  },

  STORE_BANNER(state, data) {
    state.banner = data;
  },

  STORE_FOOTER_LOGO(state, data) {
    state.footer_logo = data;
  },

}
export const actions = {
  storeFrontend({commit}, data) {
    commit('STORE_FRONTEND', data);
  },

  storeLogo({commit}, data) {
    commit('STORE_LOGO', data);
  },

  storeBanner({commit}, data) {
    commit('STORE_BANNER', data);
  },

  storeFooterLogo({commit}, data) {
    commit('STORE_FOOTER_LOGO', data);
  },
}
export const getters = {
  getFrontend(state) {
    return state.frontend_data;
  },

  getLogo(state) {
    return state.logo;
  },

  getBanner(state) {
    return state.banner;
  },

  getFooterLogo(state) {
    return state.footer_logo;
  }
}

export const strict = false;
