<template>
  <h3 class="operating-modes__title">
    В холодильнику Liebherr продукти зберігаються довше завдяки спеціальним
    режимам та зонам
  </h3>
  <div class="operating-modes">
    <div class="slider">
      <div class="slider__content">
        <div class="slider__content-wrap" ref="content">
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
        </div>
        <div class="slider__bullets" ref="bullets">
          <div
            class="slider__bullets-item"
            v-for="(bullet, index) in slides"
            :key="bullet.name"
            :class="index === 0 && 'slider__active'"
            @click="chengeSlide(bullet, $event)"
          >
            {{ bullet.name }}
          </div>
        </div>
      </div>
      <div class="slider__images" ref="sliderImage">
        <img
          class="slider__img"
          :src="activeSlide.img"
          :alt="activeSlide.title"
        />
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
          id: 0,
          name: "01",
          title: "BioFresh",
          img: "https://liebherr.korrespondent.net/slider/slide_1.jpg",
          description: [
            "Зона свіжості BioFresh – це запатентована технологія від Liebherr. Вона являє собою окрему кліматичну секцію в холодильній камері, де підтримується стабільна температура близько 0°C. Тоді як у звичайному холодильнику стандартною є температура 4°C-5°C.",
            "Розміщення продуктів в зоні BioFresh – трохи вище точки замерзання – дозволяє їм набагато довше зберігати свої смакові властивості, привабливий зовнішній вигляд і корисні компоненти.",
            "Ще одна перевага кліматичної зони BioFresh – це оптимальний рівень вологості, який можна регулювати в залежності від продуктів.",
          ],
        },
        {
          id: 1,
          name: "02",
          title: "HydroSafe",
          img: "https://liebherr.korrespondent.net/slider/slide_2.jpg",
          subtitle: "режим із високою вологістю",
          description: [
            "Цей режим оптимальний для тривалого збереження свіжості розпакованих фруктів, овочів і салатів. Достатньо лише максимально відкрити заслонку контейнера.",
            "Температура близька до 0°С та висока вологість продовжать термін зберігання продуктів з високим вмістом вологи, захистить їх від зневоднення та максимально збереже поживні речовини в них.",
          ],
        },
        {
          id: 2,
          name: "03",
          title: "DrySafe",
          img: "https://liebherr.korrespondent.net/slider/slide_3.jpg",
          subtitle: "режим із пониженою вологістю",
          description: [
            "Режим, що ідеально підійде для зберігання риби, м'яса і молочних продуктів. Адже саме у сухому кліматі вони зберігають свій смак, аромат і корисні властивості значно довше, ніж в звичайній холодильній камері. Для активації режиму DrySafe достатньо лише закрити заслонку контейнера. Тоді рівень вологості знизиться і утворяться оптимальні умови для тих продуктів, для яких надмірна волога є згубною.",
            "Продукти в цьому режимі варто зберігати герметично упакованими, аби запобігти їхньому висиханню.",
            "Порада: 0°C – температура оптимальна для збереження продуктів, але не для споживання. Тому перед безпосереднім вживанням чи приготуванням, продукти необхідно дістати з холодильнику заздалегідь. Аромат і смакові якості, таким чином, відкриються у повній мірі.",
          ],
        },
        {
          id: 3,
          name: "04",
          title: "BioFresh-Plus",
          img: "https://liebherr.korrespondent.net/slider/slide_4.jpg",
          description: [
            "Зона свіжості, яка складається з 2-х незалежних, одна від другої, кліматичних зон (контейнерів). Температура, що підтримується в першій – 0°C, а температуру другої – можна варіювати від – 0°C до -2°C.",
            "Зона з нульовою температурою ідеально підійде для зберігання сирів, охолодженого м'яса, м'ясних делікатесів, овочів, фруктів та молочних продуктів. А в зоні з температурою -2°C розмістіть рибу та морепродукти. Адже саме при -2°C дари моря зможуть зберігатися аж вдвічі довше.",
          ],
        },
        {
          id: 4,
          name: "05",
          title: "BioFresh Professional",
          img: "https://liebherr.korrespondent.net/slider/slide_5.jpg",
          description: [
            "Відсік у холодильнику, де застосована технологія HydroBreeze – це подавання холодного туману кожні 90 хвилин. Холодний туман, що покриває розміщені у відсіку фрукти та овочі, забезпечує хрусткість і свіжість, покращуючи структуру продуктів.",
            "Завдяки HydroBreeze продукти виглядають привабливими та надовго залишаються такими за своєю суттю.",
          ],
        },
      ],
      activeSlide: {},
      activeId: 0,
    };
  },
  mounted() {
    this.activeSlide = this.slides[0];
    // setInterval(() => {
    //   this.autoPlaySlider();
    // }, 1000);
  },
  methods: {
    chengeSlide(bullet, event) {
      if (!(bullet === this.activeSlide)) {
        this.$refs.content.style.opacity = "0";
        this.$refs.sliderImage.style.opacity = "0";
        setTimeout(() => {
          this.activeSlide = bullet;
          this.activeId = bullet.id;
          this.$refs.content.style.opacity = "1";
          this.$refs.sliderImage.style.opacity = "1";
          this.chengeBullet(event.target);
        }, 500);
      }
    },
    chengeBullet(bullet) {
      this.$refs.bullets
        .querySelector(".slider__active")
        .classList.remove("slider__active");
      bullet.classList.add("slider__active");
    },
    // autoPlaySlider() {
    // console.log(document.querySelector('.slider__bullets-item'));
    // this.activeId += 1;
    // if (this.activeId >= this.slides.length) {
    //   this.activeId = 0;
    // }
    // this.chengeBullet("bullets");
    // this.activeSlide = this.slides[this.activeId];
    // },
  },
};
</script>

<style lang="scss">
.operating-modes {
  height: 550px;
  color: $black;
  display: flex;
  align-items: flex-start;
  position: relative;
  @include tablet {
    position: relative;
    height: auto;
    padding: 120px 0 30px;
  }
  @include mobile {
    position: relative;
    height: auto;
    padding: 80px 0 20px;
  }
  &__title {
    color: #000;
    width: 100%;
    text-align: center;
    font-size: 36px;
    line-height: 44px;
    padding: 50px 10%;
    @include mobile {
      font-size: 18px;
      line-height: 24px;
      padding: 15px 15px 0;
    }
  }
}
.slider {
  height: 560px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include tablet {
    flex-direction: column-reverse;
    height: auto;
  }

  &__content {
    margin-left: 5%;
    transition: all 500ms ease-in-out;
    @include mobile {
      margin: 0 5%;
    }
    &-wrap {
      min-height: 370px;
      @include tablet {
        min-height: 300px;
      }
    }
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
    @include tablet {
      position: absolute;
      top: 20px;
      left: 20px;
    }
    @include mobile {
      font-size: 16px;
      line-height: 20px;
    }
  }
  &__subtitle {
    margin-bottom: 20px;
    @include tablet {
      position: absolute;
      top: 60px;
    }
    @include mobile {
      position: absolute;
      top: 40px;
    }
  }
  &__text {
    color: #747474;
    margin-bottom: 20px;
    &:nth-last-child(1) {
      margin-bottom: 60px;
      @include mobile {
        margin-bottom: 30px;
      }
    }
    @include mobile {
      font-size: 16px;
      line-height: 19px;
    }
  }
  &__images {
    transition: all 500ms ease-in-out;
  }
  &__img {
    width: 40vw;
    @include tablet {
      width: 100vw;
      margin-bottom: 15px;
    }
  }
  &__bullets {
    max-width: 365px;
    display: flex;
    justify-content: space-between;

    @include mobile {
      max-width: 100%;
      margin: 0 auto;
    }
    &-item {
      width: 65px;
      border-top: 2px solid #d7d7d7;
      padding-top: 10px;
      cursor: pointer;
      @include mobile {
        width: 45px;
      }
    }
  }
  &__active {
    color: $blue;
    border-top: 2px solid $blue;
  }
}
</style>
