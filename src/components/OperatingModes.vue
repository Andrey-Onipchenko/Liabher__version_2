<template>
  <div class="operating-modes">
    <div class="slider">
      <div class="slider__content" ref="content">
        <h3
          class="slider__title"
          :class="activeSlide?.subtitle ? '' : 'slider__subtitle'"
        >
          {{ activeSlide.title }}
        </h3>
        <h4 class="slider__subtitle" v-if="activeSlide?.subtitle">
          {{ activeSlide.subtitle }}
        </h4>
        <div class="slider--description">
          <p
            class="slider__text"
            v-for="(description, index) in activeSlide.description"
            :key="index"
          >
            {{ description }}
          </p>
        </div>
        <div class="slider__bullets">
          <div
            class="slider__bullets-item"
            v-for="bullet in slides"
            :key="bullet.name"
            @click="chengeSlide(bullet)"
          >
            {{ bullet.name }}
          </div>
        </div>
      </div>
      <div class="slider__images" ref="sliderImage">
        <img class="slider__img" :src="activeSlide.img" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          name: "01",
          title: "BioFresh",
          img: "https://liebherr.korrespondent.net/slider/slide_1.png",
          description: [
            "Зона свіжості BioFresh - це запатентована технологія від Liebherr. Вона являє собою окрему кліматичну секцію в холодильній камері, де підтримується стабільна температура близько 0 ° C. Тоді як у звичайному холодильнику стандартною є температура 4°C — 5°C. ",
            "Розміщення продуктів в зоні BioFresh - трохи вище точки замерзання - дозволяє їм набагато довше зберігати свої смакові властивості, привабливий зовнішній вигляд і корисні компоненти. ",
            "Ще одна перевага кліматичної зони BioFresh це оптимальний рівень вологості, який можна регулювати в залежності від продуктів. ",
          ],
        },
        {
          name: "02",
          title: "HydroSafe",
          img: "https://liebherr.korrespondent.net/slider/slide_2.png",
          subtitle: "режим із високою вологістю",
          description: [
            "Цей режим оптимальний для тривалого збереження свіжості розпакованих фруктів, овочів і салатів. Достатньо лише максимально відкрити заслонку контейнера. ",
            "Температура близька до 0 °С та висока вологість подовжать термін зберігання продуктів з високим вмістом вологи, захистить їх від зневоднення та максимально збереже поживні речовини в них. ",
          ],
        },
        {
          name: "03",
          title: "DrySafe",
          img: "https://liebherr.korrespondent.net/slider/slide_1.png",
          subtitle: "режим із пониженою вологістю",
          description: [
            "Режим, що ідеально підійде для зберігання риби, м'яса і молочних продуктів. Адже саме у сухому кліматі вони зберігають свій смак, аромат і корисні властивості значно довше, ніж в звичайній холодильній камері. Для активації режиму DrySafe достатньо лише закрити заслонку контейнера. Тоді рівень вологості знизиться і утворяться оптимальні умови для тих продуктів, для яких надмірна волога є згубною.",
            "Продукти в цьому режимі варто зберігати герметично упакованими, аби запобігти їхньому висиханню.",
            "Порада. 0°C - температура оптимальна для збереження продуктів, але не для споживання. Тому перед безпосередньо вживанням чи приготуванням продукти треба дістати з холодильнику заздалегідь. Аромат і смакові якості таким чином проявляться в повній мірі.",
          ],
        },
        {
          name: "04",
          title: "BioFresh-Plus",
          img: "https://liebherr.korrespondent.net/slider/slide_2.png",
          description: [
            "Зона свіжості, яка складається з 2-х незалежних одна від другої кліматичних зон (контейнерів). Температура, що підримуєьться в першій, - 0°C, а температуру другої можна варіювати від - 0°C до -2°C. ",
            "Зона з нульовою температурою ідеально підійде для зберігання сирів, охолодженого м'яса, м'ясних делікатесів, овочів, фруктів та молочних продуктів. А в зоні з температурою -2°C розмістіть рибу та морепродукти. Адже саме при -2°C дари моря зможуть зберігатися аж вдвічі довше. ",
          ],
        },
        {
          name: "05",
          title: "BioFresh Professional",
          img: "https://liebherr.korrespondent.net/slider/slide_1.png",
          description: [
            "Відсік в холодильнику  де застосована технологія HydroBreeze - подавання холодного туману кожні 90 хвилин. Холодний туман, що покриває розміщені у відсіку фрукти та овочі, забезпечує хрусткість и свіжість, а такоже покращує структуру продуктів.",
            "Завдяки HydroBreeze продукти виглядають привабливими та надовго залишаються такими за своєю суттю. ",
          ],
        },
      ],
      activeSlide: {},
    };
  },
  mounted() {
    this.activeSlide = this.slides[0];
  },
  methods: {
    chengeSlide(bullet) {
      console.log(this.activeSlide);
      this.$refs.content.style.opacity = "0";
      this.$refs.sliderImage.style.opacity = "0";
      setTimeout(() => {
        this.activeSlide = bullet;
        this.$refs.content.style.opacity = "1";
        this.$refs.sliderImage.style.opacity = "1";
        console.log(this.activeSlide);
      }, 500);
      //
    },
  },
};
</script>

<style lang="scss">
.operating-modes {
  height: 668px;
  color: $black;
  display: flex;

  align-items: center;
}
.slider {
  height: 560px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__content {
    margin-left: 5%;
    transition: all 500ms ease-in-out;
  }
  &__title,
  &__subtitle {
    font-weight: bold;
    font-size: 48px;
    line-height: 52px;
    text-transform: uppercase;
    @include notebook {
      font-size: 40px;
      line-height: 44px;
    }
  }
  &__subtitle {
    margin-bottom: 20px;
  }
  &__text {
    color: #747474;
    margin-bottom: 20px;
    &:nth-last-child(1) {
      margin-bottom: 60px;
    }
  }
  &__images {
    transition: all 500ms ease-in-out;
  }
  &__img {
    width: 40vw;
  }
  &__bullets {
    max-width: 365px;
    display: flex;
    justify-content: space-between;
    &-item {
      width: 65px;
      border-top: 2px solid #d7d7d7;
      padding-top: 10px;
      cursor: pointer;
    }
  }
}
</style>
