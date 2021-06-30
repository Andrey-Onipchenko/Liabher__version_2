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
        <!-- <img src="../assets/images/header/header__products-mob.png" alt="" /> -->
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
        <a href="#main" class="header__bnt">
          <img
            class="header__bnt-arrow"
            src="../assets/images/header/header__arrow.svg"
            alt="Обрати холодильник"
          />
        </a>
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
  background: url("../assets/images/header/header__bg.png") center no-repeat;
  background-size: cover;
  @include flex(center, center, nowrap);
  @include mobile {
    background: linear-gradient(18.34deg, #313131 16.42%, #040404 44.54%);
  }
  &__container {
    width: 90%;
    @include flex(space-between, flex-start, nowrap);
    margin: 0 auto;
  }
  &__content {
    max-width: 480px;
    width: 100%;
    @include mobile {
      max-width: 100%;
      background: url("../assets/images/header/header__products-mob.png") center
        10% no-repeat;
      background-size: contain;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
  &__logo {
    margin-bottom: 90px;
    @include mobile {
      display: flex;
      margin-bottom: 40%;
      padding-top: 15px;
    }
    @include min-mobile {
      padding-top: 0;
      margin-bottom: 100px;
    }
    &-liabherr {
      display: inline-block;
      margin-right: 50px;
      @include min-mobile {
        max-width: 70%;
      }
    }
  }
  &__title {
    @include font(bold, 48px, 52px);
    letter-spacing: 0.05em;
    margin-bottom: 30px;
    @include mobile {
      @include font(bold, 32px, 36px);
    }
    @include min-mobile {
      @include font(bold, 28px, 30px);
    }
  }
  &__text {
    margin-bottom: 18px;
    @include mobile {
      @include font(normal, 16px, 19px);
    }
    @include min-mobile {
      @include font(normal, 14px, 15px);
    }
    &_blue {
      margin-bottom: 35px;
      color: $blue;
      @include mobile {
        margin-bottom: 15px;
      }
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
    @include mobile {
      width: 70px;
      height: 70px;
      margin: 0 auto 10%;
    }
    @include min-mobile {
      margin: 0 auto 2%;
    }
  }
}
</style>
