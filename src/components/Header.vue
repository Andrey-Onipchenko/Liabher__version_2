<template>
  <header class="header">
    <div class="header__container">
      <div class="header__content">
        <div class="header__logo">
          <a href="#"
            ><img
              class="header__logo-liabherr"
              src="../assets/images/header/logo__liabherr.png"
              alt="Логотип Liabherr"
          /></a>
          <a href="#"
            ><img
              class="header__logo-korrespondent"
              src="../assets/images/header/logo__korrespondent.png"
              alt="Логотип Корреспондент"
          /></a>
        </div>
        <h2 class="header__title">ЯК ЗБЕРІГАТИ ПРОДУКТИ ДОВШЕ</h2>
        <p class="header__text">
          Свідоме споживання – не капризний тренд, а вимушена необхідність з
          огляду на екологічні проблеми людства та раціональне ставлення до
          власного бюджету. Але світ цікавий, хочеться встигнути якомога більше,
          а не витрачати час на щоденні закупки.
        </p>
        <p class="header__text">
          Є рішення, які дозволять ходити рідше до магазину та при цьому завжди
          мати вдома свіжі продукти.
        </p>
        <p class="header__text header__text_blue">
          Просто оберіть правильний холодильник — такий, де продукти
          зберігаються ДОВШЕ, ніж в звичайному!
        </p>
        <button class="header__bnt">
          <img
            class="header__bnt-arrow"
            src="../assets/images/header/header__arrow.svg"
            alt="Обрати холодильник"
          />
        </button>
      </div>
      <div class="header__products">
        <img
          class="header__products-img"
          src="../assets/images/header/header__products.png"
          alt=""
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
@import "../assets/scss/mixin.scss";
.header {
  height: 100vh;
  max-width: 100vw;
  background: linear-gradient(73.84deg, #333232 0.29%, #0f0c0a 33.42%);
  @include flex(center, center, nowrap);
  &__container {
    width: 90%;
    @include flex(space-between, flex-start, nowrap);
    margin: 0 auto;
  }
  &__content {
    max-width: 480px;
    width: 100%;
  }
  &__logo {
    margin-bottom: 90px;
    &-liabherr {
      display: inline-block;
      margin-right: 50px;
    }
  }
  &__title {
    @include font(bold, 48px, 52px);
    letter-spacing: 0.05em;
    margin-bottom: 30px;
  }
  &__text {
    margin-bottom: 18px;
    &_blue {
      margin-bottom: 35px;
      color: $blue;
    }
  }
  &__bnt {
    width: 104px;
    height: 98px;
    border-radius: 30%;
    background: url("../assets/images/header/header__btn-bg.png") center
      no-repeat;
    background-size: contain;
    @include flex(center, center, nowrap);
    &-arrow {
    }
  }
}
</style>
