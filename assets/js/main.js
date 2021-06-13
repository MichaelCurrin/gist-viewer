/**
 * Main app module.
 */
import { createApp } from "https://unpkg.com/vue@3.0.7/dist/vue.esm-browser.js";
import Gists from "./Gists.js";
import GitHubCorner from "./GitHubCorner.js";

const USERNAME = "MichaelCurrin";
const REPO_NAME = "gist-viewer";

const app = createApp({
  components: {
    Gists,
    GitHubCorner,
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
    gistsUrl() {
      return `https://gist.github.com/${this.profileUrl}`
    }
  },
  template: `
    <GitHubCorner :repoUrl="repoUrl"></GitHubCorner>

    <h2>User links</h2>
    <p>Username: <b>@{{ username }}</b></p>
    <p>
      <a :href="profileUrl">GitHub profile</a>
      {{ }}
      <a :href="gistsUrl">Gists</a>
    </p>

    <h2>List of Gists</h2>
    <p>
      <i>Every time you load or refresh this page, the latest info will be pulled in.</i>
    </p>
    <Gists id="gist-list" :username="username"></Gists>
  `,
});

app.mount("#app");
