<template>
  <div class="about-company">
    <img
      class="about-company__img"
      src="../assets/images/aboutCompany/aboutCompany__left.png"
      alt=""
    />
    <div class="about-company__content">
      <h3 class="about-company__title">Про компанію LIEBHERR</h3>
      <p class="about-company__text">
        Liebher – бренд, що почав свою історію ще в 1949 році. Талановитий
        інженер-винахідник Ганс Лібхер створив інноваційну конструкцію
        мобільного крану. Він міг працювати на невеликих ділянках і був
        доступний за ціною, що було дуже актуальним для післявоєнних часів.
        Згодом потужності компанії розширилися до випуску лінійки будівельної
        техніки, авіаційних комплектуючих, а також висококласної побутової і
        професійної холодильної техніки.
      </p>
      <p class="about-company__text">
        Зараз в структурі Liebherr-International AG 130 виробничих компаній з
        головним офісом в Швейцарії. Холдинг донині залишається сімейним
        бізнесом. І саме традиції, запроваджені Гансом Лібхером, обумовлюють її
        успіх: жорсткий контроль, фінансовий консерватизм, уважний підхід до
        потреб клієнтів.
      </p>
      <p class="about-company__text">
        Перша фабрика з випуску холодильної техніки була відкрита в 1954 році у
        німецькому Оксенгаузені. Наразі в лінійці переважають моделі побутових
        холодильників і морозильників преміум-класу, а також професійна
        холодильна техніка для бізнесу HoReCa, пекарень, супермаркетів та
        медичної галузі.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about-company {
  height: 668px;
  background: #3674bd;
  padding: 50px 0;
  display: flex;

  @include tablet {
    padding: 110px 0 0;
    height: auto;
    flex-direction: column;
    position: relative;
  }
  &__img {
    margin-right: 180px;
    width: 40vw;
    height: auto;
    object-fit: cover;
    @include notebook {
      margin-right: 100px;
    }
    @include tablet {
      width: 100vw;
      margin: 0 0 25px;
    }
  }
  &__content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 780px;
  }
  &__title {
    font-weight: bold;
    font-size: 48px;
    line-height: 52px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    max-width: 400px;
    margin-bottom: 40px;
    @include tablet {
      position: absolute;
      top: 20px;
      left: 20px;
      font-size: 32px;
      line-height: 36px;
    }
  }
  &__text {
    margin-bottom: 20px;
    &:nth-last-child(1) {
      margin-bottom: 0;
    }
    @include tablet {
      padding: 0 15px 25px;
      margin-bottom: 0;
      font-size: 16px;
      line-height: 19px;
    }
  }
}
</style>
