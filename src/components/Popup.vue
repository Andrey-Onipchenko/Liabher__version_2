<template>
  <div class="popup-inner">
    <div class="popup-inner__container">
      <div class="popup" ref="popup">
        <button class="popup__close" @click="popupClose">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="1.50848"
              height="21.1188"
              rx="0.754242"
              transform="matrix(0.707106 -0.707107 0.707106 0.707107 0 1.06665)"
              fill="#B5CBDB"
            />
            <rect
              width="1.50848"
              height="21.1188"
              rx="0.754242"
              transform="matrix(0.707108 0.707106 -0.707108 0.707106 14.9331 9.15527e-05)"
              fill="#B5CBDB"
            />
          </svg>
        </button>
        <button class="popup__next" @click="chengeProduct('next')"></button>
        <button class="popup__back" @click="chengeProduct('back')"></button>
        <div class="popup__header">
          <img class="popup__header-img" :src="product.imgUrl" alt="" />
          <div class="popup__header-term">
            <div class="popup__header-days" v-if="days">
              <span class="popup__header-mindays"
                >{{ product.minDays }} {{ daysMin }}
              </span>
              <svg
                width="33"
                height="12"
                viewBox="0 0 33 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.3011 15.5657C26.0134 15.8574 25.5593 15.843 25.285 15.537C25.0108 15.231 25.0243 14.748 25.312 14.4563L30.8285 8.89034L0.719345 8.89034C0.323705 8.89034 7.88813e-08 8.54606 8.34725e-08 8.12526C8.80637e-08 7.70446 0.323705 7.36018 0.719345 7.36018L30.806 7.36018L25.312 1.7942C25.0243 1.50251 25.0153 1.01955 25.285 0.713515C25.4244 0.555717 25.6177 0.474426 25.8065 0.474426C25.9864 0.474426 26.1617 0.546153 26.3011 0.684824L32.5774 7.04458C32.8471 7.33149 33 7.71881 33 8.12526C33 8.53171 32.8516 8.91903 32.5639 9.22029L26.3011 15.5657Z"
                  fill="#BDD5E8"
                />
              </svg>
              <span class="popup__header-maxdays"
                >{{ product.maxDays }} {{ daysMax }}</span
              >
            </div>
          </div>
        </div>
        <div class="popup__content">
          <h3 class="popup__title">{{ product.title }}</h3>

          <ul
            :class="
              product.name === 'cake'
                ? 'popup__description_min'
                : 'popup__description'
            "
          >
            <li
              :class="description.normal ? 'popup__sub-text' : 'popup__text'"
              v-for="(description, index) in product.description"
              :key="index"
              v-html="description.text"
            ></li>
          </ul>
        </div>
        <button class="popup__more">Детальніше</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {
        return {};
      },
    },
  },
  computed: {
    days() {
      return this.product.minDays && this.product.maxDays;
    },
    daysMax() {
      return typeof this.product.maxDays === "number" ? "днів" : "тижні";
    },
    daysMin() {
      return typeof this.product.minDays === "number" ? "днів" : "тижні";
    },
  },
  methods: {
    popupClose() {
      this.$emit("popupClose");
    },
    chengeProduct(direction) {
      this.$emit("chengeProduct", direction);
    },
  },
};
</script>

<style lang="scss">
.popup-inner {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 2;
  &__container {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
}
.popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 360px;
  width: 100%;
  height: 600px;
  background: url("../assets/images/popup/popup__bg.png") center no-repeat;
  background-size: cover;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: $black;
  @include mobile {
    width: 90vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  @include min-mobile {
    width: 98vw;
    height: 98vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  &__close {
    position: absolute;
    top: 15px;
    right: 15px;
    background: transparent;
  }
  &__next {
    position: absolute;
    top: 10%;
    right: 5%;
    width: 50px;
    height: 50px;
    background: url("../assets/images/popup/right.svg") center no-repeat;
  }
  &__back {
    position: absolute;
    top: 10%;
    left: 5%;
    width: 50px;
    height: 50px;
    background: url("../assets/images/popup/left.svg") center no-repeat;
  }
  &__header {
    max-width: 200px;
    margin: 0 auto 50px;
    &-img {
      display: block;
      margin: 0 auto 10px;
      max-height: 100px;
      width: auto;
    }
    &-term {
      min-height: 18px;
    }
    &-days {
      font-size: 15px;
      line-height: 18px;
      color: $lightBlue;
      display: flex;
      align-items: center;
    }
  }
  &__content {
    height: 300px;
    margin-bottom: 10px;
  }
  &__title {
    margin-bottom: 10px;
  }
  &__description {
    height: 240px;
    overflow: auto;

    &_min {
      height: 240px;
      overflow: auto;
      @include mobile {
        height: 190px;
      }
    }
  }
  &__sub-text {
    font-size: 16px;
    line-height: 19px;

    margin-bottom: 5px;
  }
  &__text {
    padding: 0 5px 0 15px;
    position: relative;
    font-size: 16px;
    line-height: 19px;
    color: #272727;
    margin-bottom: 5px;
    &::before {
      content: "";
      position: absolute;
      top: 6px;
      left: 0px;
      width: 7px;
      height: 7px;
      background: $blue;
      border-radius: 50%;
    }
  }
  &__more {
    background: $lightBlue;
    border-radius: 5px;
    width: 100%;
    height: 44px;
    color: $white;
    padding: 12px 0;
  }
}
</style>
