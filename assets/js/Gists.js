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
    };
  },
  methods: {
    async fetchGists() {
      const url = gistsUrl(this.username);

      try {
        const resp = await fetch(url);
        const gists = await resp.json();
        this.gists = gists;
      } catch (err) {
        console.error(`Unable to fetch Gists API data. Error: ${err}`);
        this.errored = true;
      } finally {
        this.loading = false;
      }
    },
    sortBy(field) {
      this.gists.sort((a, b) => (a[field] > b[field] ? 1 : -1));
    },
    async render() {
      await this.fetchGists();
      this.sortBy("description");
    }
  },
  async mounted() {
    this.render()
  },
  template: `
    <section>
      <p v-if="errored">
        Failed to fetch gists data - check your network connection and that the GitHub username is valid.
      </p>

      <div v-else>
        <p v-if="loading">
          Loading...
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
