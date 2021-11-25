/**
 * Gists module.
 *
 * Note that `v-for` and `v-if` cannot be used in one line. And using `span`
 * together with `tr` breaks the appearance of the table, so `v-if` is done on
 * each `tr`.
 */

/**
 * Build API URL for getting all gists for a user.
 *
 * The API sets a max of up to 100 items per page. This can be overcome by
 * extending this with paging, if you have over 100 gists.
 */
function gistsUrl(username, limit = 100) {
  return `https://api.github.com/users/${username}/gists?per_page=${limit}`;
}

async function requestJson(url) {
  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error(`${resp.status} ${resp.statusText}`);
  }

  return resp.json();
}

const Gists = {
  name: "Gists",
  props: {
    username: { type: String, required: true },
    filter: { type: String, required: true },
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
    async renderGists(url) {
      try {
        this.gists = await requestJson(url);
      } catch (err) {
        const msg = `Unable to fetch Gists API data. Error: ${err}`;
        console.error(msg);

        this.gists = null;
        this.errored = true;
        this.errorMsg = msg;
      } finally {
        this.loading = false;
      }
    },
    sortBy(field) {
      if (!this.gists) {
        return;
      }
      this.gists.sort((a, b) => (a[field] > b[field] ? 1 : -1));
    },
    async render() {
      const url = gistsUrl(this.username);

      console.debug(`Fetching gists: ${url}`);
      await this.renderGists(url);

      this.sortBy("description");
    },
    contains(value, filter) {
      if (filter === "") {
        return true;
      }
      if (typeof value !== "string") {
        throw new Error(`Expected value as string but got: ${typeof value}`);
      }

      return value.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    },
  },
  mounted() {
    this.render();
  },
  template: `
    <section>
      <div v-if="errored">
        <p>
          <b>⚠️ Failed to fetch gists data.</b>
        </p>
        <p>
          <i>{{ errorMsg }}</i>
        </p>
        <p>
          Tip - check your network connection, that the GitHub username is valid, or if the API limit has been reached.
      </p>
      </div>

      <div v-else>
        <p v-if="loading">
          ⏳ Loading...
        </p>

        <table v-else>
          <tr>
            <th>
              Description
            </th>
            <th>
              Files
            </th>
            <th>
              Updated
            </th>
            <th>
              Created
            </th>
          </tr>

          <tr v-for="gist in gists" :key="gist.description">
            <td v-if="contains(gist.description, filter)">
              <a :href="gist.html_url">
                {{ gist.description }}
              </a>
            </td>
            <td v-if="contains(gist.description, filter)">
              {{ Object.keys(gist.files).length }}
            </td>
            <td v-if="contains(gist.description, filter)">
              {{ gist.updated_at.slice(0, 10) }}
            </td>
            <td v-if="contains(gist.description, filter)">
              {{ gist.created_at.slice(0, 10) }}
            </td>
          </tr>
        </table>
      </div>
    </section>
  `,
};

export default Gists;
