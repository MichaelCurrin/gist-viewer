/**
 * Gists module.
 */

/**
 * Build API URL for getting all gists for a user.
 *
 * The API sets a max of up to 100 items per page. This can be overcome by extending this with paging, if you have over 100 gists.
 */
function gistsUrl(username, limit = 100) {
  return `https://api.github.com/users/${username}/gists?per_page=${limit}`;
}

const Gists = {
  name: "Gists",
  props: {
    username: { type: String, required: true },
  },
  data() {
    return {
      gists: null,
      loading: true,
      errored: false,
      errorMsg: "",
    };
  },
  methods: {
    async fetchGists(url) {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error(`${resp.status} ${resp.statusText}`);
        }
        const gists = await resp.json();
        this.gists = gists;
      } catch (err) {
        const msg = `Unable to fetch Gists API data. Error: ${err}`;
        console.error(msg);
        this.errored = true;
        this.errorMsg = msg;
      } finally {
        this.loading = false;
      }
    },
    sortBy(field) {
      if (!this.gists) {
        console.error("Nothing to sort");
        return;
      }
      this.gists.sort((a, b) => (a[field] > b[field] ? 1 : -1));
    },
    async render() {
      const url = gistsUrl(this.username);

      console.debug(`Fetching gists: ${url}`);
      await this.fetchGists(url);

      console.debug("Sorting");
      this.sortBy("description");
    },
  },
  async mounted() {
    this.render();
  },
  template: `
    <section>
      <div v-if="errored">
        <p>
          <b>⚠️ Failed to fetch gists data.</b>
        </p>
        <p>
          Check your network connection, that the GitHub username is valid, or if the API limit has been reached.</b>
        </p>
        <p>
          <i>{{ errorMsg }}</i>
        </p>
      </div>

      <div v-else>
        <p v-if="loading">
          ⏳ Loading...
        </p>

        <table v-else>
          <tr>
            <th>
              Created
            </th>
            <th>
              Updated
            </th>
            <th>
              Description
            </th>
            <th>
              Files
            </th>

          </tr>
          <tr v-for="gist in gists">
              <td>
                {{ gist.created_at.slice(0, 10) }}
              </td>
              <td>
              {{ gist.updated_at.slice(0, 10) }}
              </td>
              <td>
                <a :href="gist.html_url">
                  {{ gist.description }}
                </a>
              </td>
              <td>
                {{ Object.keys(gist.files).length }}
              </td>
          </tr>
        </table>
      </div>
    </section>
  `,
};

export default Gists;
