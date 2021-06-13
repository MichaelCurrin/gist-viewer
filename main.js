/**
 * Main app module.
 */
import { createApp } from "https://unpkg.com/vue@3.0.7/dist/vue.esm-browser.js";
import Gists from "./Gists.js";

const USERNAME = "MichaelCurrin";
const REPO_NAME = "gist-viewer";

const app = createApp({
  components: {
    Gists,
  },
  data() {
    return {
      username: USERNAME,
    };
  },
  computed: {
    profileUrl() {
      return `https://github.com/${this.username}`;
    },
    repoUrl() {
      return `${this.profileUrl}/${REPO_NAME}`;
    },
  },
  template: `
    <h2>GitHub username</h2>
    <p>
      <a :href="profileUrl">
        @{{ username }}
      </a>
    </p>

    <h2>Gists</h2>
    <Gists></Gists>
  `,
});

app.mount("#app");