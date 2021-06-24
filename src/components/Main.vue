<template>
  <div class="main" ref="main">
    <div class="main__wrap">
      <div class="main__icebox-list" ref="iceboxList">
        <div class="main__icebox-item main__icebox-active">
          <img
            class="main__icebox-img"
            src="../assets/images/main/black/icebox-black__close.png"
            alt="Чорний Liabherr"
            data-icebox="black"
            @click="changeIcebox"
          />
        </div>
        <div class="main__icebox-item">
          <img
            class="main__icebox-img"
            src="../assets/images/main/white/white-close.png"
            alt="Білий Liabherr"
            data-icebox="white"
            @click="changeIcebox"
          />
        </div>
        <div class="main__icebox-item">
          <img
            class="main__icebox-img"
            src="../assets/images/main/grey/grey-close.png"
            alt="Сірий Liabherr"
            data-icebox="grey"
            @click="changeIcebox"
          />
        </div>
      </div>
      <div class="main__current-icebox">
        <img
          class="main__current-icebox-img"
          :src="currentIcebox"
          alt="Холодильник Liabherr"
        />
        <v-products />
      </div>
    </div>
  </div>
</template>

<script>
import VProducts from "@/components/Products.vue";
export default {
  data() {
    return {
      currentIcebox: "http://localhost:8080/img/icebox-black__open.png",
    };
  },
  components: {
    VProducts,
  },
  methods: {
    changeIcebox(event) {
      let selected = event.target.getAttribute("data-icebox");
      this.chengeActiveIcebox(selected);
      this.chengeActiveListIcebox(event.target.parentElement);
      this.chengeBackground();
    },
    chengeActiveIcebox(selected) {
      switch (selected) {
        case "white":
          this.currentIcebox =
            "http://localhost:8080/img/icebox-white2__open.png";
          this.$refs.main.style.background = "white";
          break;
        case "grey":
          this.currentIcebox =
            "http://localhost:8080/img/icebox-grey__open.png";
          this.$refs.main.style.background = "grey";
          break;
        default:
          this.currentIcebox =
            "http://localhost:8080/img/icebox-black__open.png";
          this.$refs.main.style.background = "#232222";
          break;
      }
    },
    chengeActiveListIcebox(icebox) {
      this.$refs.iceboxList
        .querySelector(".main__icebox-active")
        .classList.remove("main__icebox-active");
      icebox.classList.add("main__icebox-active");
    },
    chengeBackground() {
      this.$refs.main;
    },
  },
};
</script>

<style lang="scss">
.main {
  height: 200vh;
  background: #232222;
  @include flex(center, center, nowrap);
  &__wrap {
    height: 100%;
    padding: 50px 0;
    @include flex(center, flex-start, nowrap);
  }
  &__current-icebox {
    height: 100%;
    position: relative;
    &-img {
      height: 100%;
    }
  }
  &__icebox {
    &-list {
      margin-top: 50px;
    }
    &-item {
      margin-right: 100px;
      max-width: 120px;
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      &:nth-last-child(1) {
        margin-bottom: 0;
      }
    }
    &-active {
      background: url("../assets/images/main/icebox__active.svg") center
        no-repeat;
    }
    &-img {
      max-height: 220px;
      cursor: pointer;
    }
  }
}
</style>
