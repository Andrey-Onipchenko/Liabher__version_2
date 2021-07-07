<template>
  <v-header />
  <v-main />
  <v-operating-modes />
  <v-about-company />
  <v-footer />
</template>
<script>
import VHeader from "@/components/Header.vue";
import VMain from "@/components/Main.vue";
import VAboutCompany from "@/components/AboutCompany.vue";
import VOperatingModes from "@/components/OperatingModes.vue";
import VFooter from "@/components/Footer.vue";
export default {
  components: {
    VHeader,
    VMain,
    VAboutCompany,
    VOperatingModes,
    VFooter,
  },
};
</script>
