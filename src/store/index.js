import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import kyc from "./modules/kyc";
import statistics from "./modules/statistics";
import net from "./modules/net";
import messages from "./modules/messages";
import providers from "./modules/providers";
import sender from "./modules/sender";
import tokens from "./modules/tokens";

Vue.use(Vuex);

const debug = false;

export default new Vuex.Store({
  modules: {
    kyc,
    statistics,
    net,
    messages,
    providers,
    sender,
    tokens
  },
  strict: true, // debug,
  plugins: debug ? [createLogger()] : []
});