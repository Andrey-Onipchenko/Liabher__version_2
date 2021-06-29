<template>
  <div class="main" ref="main" >
    <a class="main__link" href=""
      >В магазин
      <svg
        width="34"
        height="14"
        viewBox="0 0 34 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.4517 15.9406C26.164 16.2323 25.7099 16.2179 25.4356 15.9119C25.1614 15.6059 25.1749 15.1229 25.4626 14.8312L30.9791 9.26525L0.86998 9.26525C0.474339 9.26525 0.150634 8.92097 0.150634 8.50017C0.150634 8.07937 0.474339 7.73509 0.869979 7.73509L30.9566 7.73509L25.4626 2.1691C25.1749 1.87742 25.1659 1.39446 25.4356 1.08842C25.575 0.930626 25.7683 0.849335 25.9572 0.849335C26.137 0.849335 26.3124 0.921061 26.4517 1.05973L32.728 7.41949C32.9978 7.70639 33.1506 8.09372 33.1506 8.50017C33.1506 8.90662 33.0023 9.29394 32.7145 9.59519L26.4517 15.9406Z"
          fill="white"
        />
      </svg>
    </a>
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
        <v-products @chooseProduct="openPopup" />
      </div>
    </div>
    <v-popup
      @popupClose="popupClose"
      v-if="popup"
      :product="productData"
      :position="popupPosition"
    />
  </div>
</template>

<script>
import VProducts from "@/components/Products.vue";
import VPopup from "@/components/Popup.vue";
export default {
  data() {
    return {
      currentIcebox:
        "https://liebherr.korrespondent.net/img/icebox-black__open.png",
      products: null,
      popup: false,
      popupPosition: 0,
      index: null,
      productData: {},
    };
  },
  components: {
    VProducts,
    VPopup,
  },
    created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    changeIcebox(event) {
      let selected = event.target.getAttribute("data-icebox");
      this.chengeActiveIcebox(selected);
      this.chengeActiveListIcebox(event.target.parentElement);
    },
    chengeActiveIcebox(selected) {
      switch (selected) {
        case "white":
          this.currentIcebox =
            "https://liebherr.korrespondent.net/img/icebox-white2__open.png";
          this.$refs.main.style.background =
            'url("https://liebherr.korrespondent.net/img/white__bg.svg") center no-repeat';
          break;
        case "grey":
          this.currentIcebox =
            "https://liebherr.korrespondent.net/img/icebox-grey__open.png";
          this.$refs.main.style.background =
            'url("https://liebherr.korrespondent.net/img/grey__bg.svg") center no-repeat';
          break;
        default:
          this.currentIcebox =
            "https://liebherr.korrespondent.net/img/icebox-black__open.png";
          this.$refs.main.style.background =
            'url("https://liebherr.korrespondent.net/img/black__bg.svg") center no-repeat';
          break;
      }
    },
    chengeActiveListIcebox(icebox) {
      this.$refs.iceboxList
        .querySelector(".main__icebox-active")
        .classList.remove("main__icebox-active");
      icebox.classList.add("main__icebox-active");
    },
    openPopup(productName, positionY) {
      this.productData = this.products.filter(
        (el) => el.name === productName
      )[0];
      this.popupPosition = positionY;
      this.index = this.productData.position;
      this.popup = true;
    },
    popupClose() {
      this.popup = false;
    },
    handleScroll(){
      console.dir(event.target);
    }
  },
  mounted() {
    this.products = this.$store.getters.getProduct;
  },
};
</script>

<style lang="scss">
.main {
  height: 1400px;
  background: url("https://liebherr.korrespondent.net/img/black__bg.svg") center
    no-repeat;
  background-size: cover;
  @include flex(center, center, nowrap);
  position: relative;
  &__link {
    position: absolute;
    top: 10px;
    right: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 44px;
    background: $blue;
    border-radius: 5px;
  }
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
