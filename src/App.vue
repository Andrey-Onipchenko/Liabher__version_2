<template>
  <v-header />
  <v-main />
  <!-- <v-about-company />
  <v-operating-modes /> -->
</template>
<script>
import VHeader from "@/components/Header.vue";
import VMain from "@/components/Main.vue";
// import VAboutCompany from "@/components/AboutCompany.vue";
// import VOperatingModes from "@/components/OperatingModes.vue";
export default {
  components: {
    VHeader,
    VMain,
    // VAboutCompany,
    // VOperatingModes,
  },
};
</script>
