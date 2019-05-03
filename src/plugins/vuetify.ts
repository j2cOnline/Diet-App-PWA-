import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  iconfont: "md",
  theme: {
    primary: "#b21a16",
    secondary: "#eaeaea",
    accent: "#fecd49",
    error: "#ff8c8c"
  }
});
