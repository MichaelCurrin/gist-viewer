/**
 * Main app module.
 */
import { createApp } from "https://unpkg.com/vue@3.0.7/dist/vue.esm-browser.js";
import Gists from "./Gists.js";

const app = createApp({
  components: {
    Gists,
  },
  data() {
    return {
      username: "MichaelCurrin",
    };
  },
  template: `
    <h2>GitHub username</h2>
    <p>
      <a href="https://github.com/MichaelCurrin">
        @{{ username }}
      </a>
    </p>

    <h2>Gists</h2>
    <Gists></Gists>
  `,
});

app.mount("#app");
