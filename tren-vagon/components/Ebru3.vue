<template>
  <section class="contact-header w-100 d-flex flex-column justify-content-center align-items-center font-size-12 mt-4 rounded-circle pb-3 pt-2 mb-3">
    <b-container fluid="sm mt-3 ">
      <div class="d-flex flex-row justify-content-around mt-3">
        <router-link to="./gizlilik-ve-kisisel-verileri-koruma-politikası" tag="button" class="button-style privacy-policy-breadcrumbs-button3 rounded-30 py-2 px-3 border-0 mb-3">
          <span class="button-style font-weight-14 border-0 font-weight-bold text-white">Gizlilik ve Kişisel Verilerin Korunması Politikası</span>
        </router-link>
        <router-link to="./aydinlatma-ve-riza-metni" tag="button" class="button-style privacy-policy-breadcrumbs-button rounded-30 py-2 px-3 border-0 mb-3">
          <span class="button-style font-weight-14 border-0 font-weight-bold text-white">Aydınlatma ve Rıza Metni</span>
        </router-link>
        <router-link to="./cerez-politikasi" tag="button" class="button-style privacy-policy-breadcrumbs-button4 rounded-30 py-2 px-3 border-0 mb-3">
          <span class="button-style font-weight-14 border-0 font-weight-bold text-white">Çerez Politikası</span>
        </router-link>
        <router-link to="./assets/images/basvuru-formu.pdf" tag="button" class="button-style privacy-policy-breadcrumbs-button2 rounded-30 py-2 px-3 border-0 mb-3">
          <span class="button-style font-weight-14 border-0 font-weight-bold text-white">Başvuru Formu</span>
        </router-link>
      </div>
    </b-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      tabIndex: 0,
    };
  },
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ['bg-primary', 'text-light'];
      } else {
        return ['bg-light', 'text-info'];
      }
    },
  },
};
</script>
<style scoped>
.privacy-policy-breadcrumbs-button {
  background-color: #36b257 !important;
}
.privacy-policy-breadcrumbs-button2 {
  background-color: #3665f3 !important;
}
.privacy-policy-breadcrumbs-button3 {
  background-color: #ffce00 !important;
}
.privacy-policy-breadcrumbs-button4 {
  background-color: #9b59b6 !important;
}
.button-style {
  width: 275px;
}
.active {
  background: #36b257 !important;
  color: white !important;
  border: 1px dotted white !important;
}
</style>