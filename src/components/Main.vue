<template>
  <div class="main" id="main" ref="main">
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
      @chengeProduct="chengeProductPopup"
      v-if="popup"
      :product="productData"
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
      index: null,
      productData: {},
    };
  },
  components: {
    VProducts,
    VPopup,
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
    openPopup(productName) {
      this.productData = this.products.filter(
        (el) => el.name === productName
      )[0];
      this.index = this.productData.position;
      console.log(this.index);
      this.popup = true;
      document.documentElement.style.overflow = "hidden";
    },
    popupClose() {
      this.popup = false;
      document.documentElement.style.overflow = "auto";
    },
    chengeProductPopup(direction) {
      if (direction === "next") {
        this.index += 1;
        if (this.index >= this.products.length) {
          this.index = 0;
        }
      } else if (direction === "back") {
        if (this.index <= 0) {
          this.index = this.products.length;
        }
        this.index -= 1;
      }
      this.productData = this.products[this.index];
    },
  },
  mounted() {
    this.products = this.$store.getters.getProduct;
  },
};
</script>

<style lang="scss">
.main {
  height: 1400px;
  background: #333232
    url("https://liebherr.korrespondent.net/img/black__bg.svg") center no-repeat;
  background-size: cover;
  @include flex(center, center, nowrap);
  position: relative;
  @include mobile {
    height: 1000px;
  }
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
    @include mobile {
      top: auto;
      bottom: 30px;
      left: 0;
      right: 0;
      margin: 0 auto;
      z-index: 1;
    }
  }
  &__wrap {
    height: 100%;
    padding: 70px 0;
    @include flex(center, flex-start, nowrap);
    @include mobile {
      flex-direction: column;
    }
  }
  &__current-icebox {
    height: 100%;
    position: relative;
    &-img {
      height: 100%;
      @include mobile {
        object-fit: contain;
        width: 320px;
        height: 800px;
      }
    }
    @include mobile {
      display: flex;
      justify-content: center;
    }
  }
  &__icebox {
    &-list {
      margin-top: 50px;
      @include mobile {
        display: flex;
        justify-content: space-around;
        width: 90%;
        margin: 0 auto;
      }
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
      @include mobile {
        margin-right: 0;
      }
    }
    &-active {
      background: url("../assets/images/main/icebox__active.svg") center
        no-repeat;
      @include mobile {
        background-size: 68px;
      }
    }
    &-img {
      max-height: 220px;
      cursor: pointer;
      @include mobile {
        max-height: 105px;
      }
    }
  }
}
</style>
