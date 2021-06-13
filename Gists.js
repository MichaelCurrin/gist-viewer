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
  props: {
    username: { type: String, required: true }
  },
  data() {
    return {
      gists: null,
      loading: true,
      errored: false,
    };
  },
  async mounted() {
    const url = gistsUrl(this.username)

    try {
      const resp = await fetch(url);
      this.gists = await resp.json();
    } catch (err) {
      console.error(`Unable to fetch currency data. Error: ${err}`);
      this.errored = true;
    } finally {
      this.loading = false;
    }
  },
  template: `
    <section v-if="errored">
      <p>
        Failed to fetch gists data - check your network connection and that the GitHub username is valid.
      </p>
    </section>

    <section v-else>
      <div v-if="loading">
        Loading...
      </div>

      <div v-else v-for="gist in gists" class="gist">
        {{ gist }}
      </div>
    </section>
  `,
};

export default Gists;
