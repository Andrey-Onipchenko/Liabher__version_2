<template>
  <div class="footer">
    <div class="footer__item-center">© 2021 UMH. All Rights Reserved.</div>
    <a
      class="footer__fb"
      href="https://www.facebook.com/korrespondent.net"
      @click="analiticsShare"
      target="_blank"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Facebook"
        role="img"
        viewBox="0 0 512 512"
      >
        <rect width="512" height="512" rx="15%" fill="#1877f2" />
        <path
          d="M355.6 330l11.4-74h-71v-48c0-20.2 9.9-40 41.7-40H370v-63s-29.3-5-57.3-5c-58.5 0-96.7 35.4-96.7 99.6V256h-65v74h65v182h80V330h59.6z"
          fill="#fff"
        /></svg
    ></a>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    analiticsShare() {
      this.$gtag.event("click", {
        event_category: "huawei",
        event_label: "cher",
      });
    },
  },
};
</script>
<style lang="scss">
.footer {
  height: 60px;
  width: 100%;
  background: linear-gradient(73.84deg, #333232 0.29%, #0f0c0a 33.42%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &__fb {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10%;
  }
}
</style>
