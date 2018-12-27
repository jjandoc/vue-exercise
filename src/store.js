import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const fetchData = url => fetch(url).then(resp => resp.json());

export default new Vuex.Store({
  state: {
    humans: []
  },
  mutations: {
    setHumans(state, payload) {
      state.humans = payload;
    }
  },
  actions: {
    async fetchHumans({ commit }) {
      const { people } = await fetchData("https://swapi.co/api/species/1/");
      const peopleData = (await Promise.all(
        people.map(url => fetchData(url))
      )).map(response => {
        const { name, gender, height, mass, birth_year } = response;
        return {
          name,
          gender,
          birthYear: birth_year,
          height: height ? parseInt(height, 10) : null,
          mass: mass ? parseInt(mass, 10) : null
        };
      });
      commit("setHumans", peopleData);
    }
  },
  getters: {
    getHumans(state) {
      return () => state.humans;
    }
  }
});
