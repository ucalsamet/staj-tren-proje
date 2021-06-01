<template>
  <b-container>
    <div class="d-flex flex-column mt-4">
      <span class="title1">Yolcu Kayıt</span>
      <hr />
      <div class="w-100 h-auto p-4 border bgColor">
        <div class="d-flex flex-column">
          <b-alert
            v-model="showAlert"
            variant="danger"
            dismissible
            class="mb-2 mt-1"
          >
            Lütfen Bütün Alanları Doldurduğunuzdan Emin Olun!
          </b-alert>
          <b-alert
            v-model="showAlert3"
            variant="danger"
            dismissible
            class="mb-2 mt-1"
          >
            <div class="d-flex flex-column">
              <span
                >Rezervasyon Yapilabilir =
                {{ getTren.RezervasyonYapilabilir }}</span
              >
              <span>
                Yerleştirilen Yolcular = {{ getTren.YerlesimAyrinti }}
              </span>
            </div>
          </b-alert>
          <b-alert
            v-model="showAlert2"
            variant="success"
            dismissible
            class="mb-2 mt-1"
          >
            <div class="d-flex flex-column">
              <span
                >Rezervasyon Yapilabilir =
                {{ getTren.RezervasyonYapilabilir }}</span
              >
              <span>
                Yerleştirilen Yolcular = {{ getTren.YerlesimAyrinti }}
              </span>
            </div>
          </b-alert>
          <b-form-input
            placeholder="Tren Adı"
            v-model="tren.name"
            trim
            class="mb-2"
          ></b-form-input>
          <div class="d-flex flex-row">
            <b-form-select
              v-model="tren.vagon"
              trim
              class="mr-2"
              :options="options"
            ></b-form-select>
            <b-form-input
              placeholder="Yolcu Sayısı"
              v-model="tren.count"
              trim
              type="number"
              class="ml-2"
            ></b-form-input>
          </div>
          <b-form-checkbox
            class="ml-auto mt-3"
            v-model="tren.status"
            value="true"
            unchecked-value="false"
          >
            Kisiler Farkli Vagonlara Yerlestirilebilir
          </b-form-checkbox>
          <b-button
            block
            class="mt-2"
            variant="dark"
            size="md"
            @click="addPassenger()"
            >Kaydet</b-button
          >
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      showAlert3: false,
      showAlert2: false,
      showAlert: false,
      tren: {
        name: null,
        vagon: null,
        count: 0,
        status: false
      },
      options: [
        { value: null, text: "Vagon" },
        { value: "Vagon 1", text: "Vagon 1" },
        { value: "Vagon 2", text: "Vagon 2" },
        { value: "Vagon 3", text: "Vagon 3" }
      ]
    };
  },
  methods: {
    addPassenger() {
      if (
        this.tren.name !== null &&
        this.tren.count > 0 &&
        this.tren.vagon !== null
      ) {
        this.showAlert = false;

        if (this.getTren.RezervasyonYapilabilir === false) {
          this.showAlert3 = true;
          this.showAlert2 = false;
        } else {
          this.showAlert2 = true;
          this.showAlert3 = false;
        }

        this.$store.dispatch("addPassenger", this.tren);
      } else {
        this.showAlert = true;
      }
    }
  },
  computed: {
    getTren() {
      return this.$store.getters.getTren;
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title1 {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 700;
  font-size: 25px;
  color: #35495e;
  letter-spacing: 0.5px;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 17px;
  color: #35495e;
  letter-spacing: 0px;
}

.links {
  padding-top: 15px;
}
</style>
