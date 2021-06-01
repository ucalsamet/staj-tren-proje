export default {
  state: {
    tren: {},
  },
  mutations: {
    setPassenger(state, payload) {
      state.tren = payload;
    }
  },
  actions: {
    addPassenger(vuexContext, payload) {
      this.$axios
        .post("/add-passenger", {
          Tren: {
            Ad: payload.name,
            vagon: payload.vagon,
            Vagonlar: [
              { Ad: "Vagon 1", Kapasite: 100, DoluKoltukAdet: 50 },
              { Ad: "Vagon 2", Kapasite: 90, DoluKoltukAdet: 80 },
              { Ad: "Vagon 3", Kapasite: 80, DoluKoltukAdet: 80 }
            ],
            RezervasyonYapilacakKisiSayisi: payload.count,
            KisilerFarkliVagonlaraYerlestirilebilir: payload.status
          }
        })
        .then(response => {
          console.log(response.data);
          vuexContext.commit("setPassenger",response.data)
        });
    }
  },
  getters: {
      getTren(state){
          return state.tren
      }
  }
};
