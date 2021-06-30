<template>
  <div class="product" ref="product">
    <button
      v-for="product in products"
      :key="product.name"
      :class="product.class"
      @click="chooseProduct(product.name)"
      :style="product.name === 'meat' && 'z-index: 1;'"
      @mouseover="focusProduct(product.name)"
      :ref="product.name"
    ></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { name: "cake", class: "product__cake" },
        { name: "lemon", class: "product__lemon" },
        { name: "blueCheese", class: "product__blueCheese" },
        { name: "сheese", class: "product__сheese" },
        { name: "caviar", class: "product__caviar" },
        { name: "milk", class: "product__milk" },
        { name: "eggs", class: "product__eggs" },
        { name: "salad", class: "product__salad" },
        { name: "pan", class: "product__pan" },
        { name: "meat", class: "product__meat" },
        { name: "vegetable", class: "product__vegetable" },
        { name: "mushrooms", class: "product__mushrooms" },
        { name: "beet", class: "product__beet" },
        { name: "carrot", class: "product__carrot" },
        { name: "apple", class: "product__apple" },
        { name: "dumplings", class: "product__dumplings" },
        { name: "berries", class: "product__berries" },
      ],
      vegetable: this.$refs.vegetable,
    };
  },
  methods: {
    chooseProduct(productName) {
      this.$emit("chooseProduct", productName);
    },
    focusProduct(productName) {
      if (document.documentElement.clientWidth > 1024) {
        switch (productName) {
          case "mushrooms":
            this.changeImageProduct("vegetable__mashrooms-hover.png");
            break;
          case "beet":
            this.changeImageProduct("vegetable__beet-hover.png");
            break;
          case "carrot":
            this.changeImageProduct("vegetable__carrot-hover.png");
            break;
          case "apple":
            this.changeImageProduct("vegetable__apple-hover.png");
            break;
          default:
            this.defoultImageVegetable();
        }
      }
    },
    changeImageProduct(imgName) {
      this.$refs.vegetable.style.background = `url('https://liebherr.korrespondent.net/products/${imgName}') center no-repeat`;
      this.$refs.vegetable.style.backgroundSize = "contain";
    },
    defoultImageVegetable() {
      this.$refs.vegetable.style.background =
        "url('https://liebherr.korrespondent.net/products/vegetable.png') center no-repeat";
      this.$refs.vegetable.style.backgroundSize = "contain";
    },
  },
};
</script>

<style lang="scss">
.product {
  @include mobile {
  }
  &__cake {
    @include product("../assets/images/product/cake.png", 80px, 60px);
    @include hover("../assets/images/product/cake__hover.png");
    @include mobile {
      @include product(
        "../assets/images/product/cake.png",
        67px,
        35px,
        50px,
        50px
      );
    }
  }
  &__lemon {
    @include product("../assets/images/product/lemon.png", 85px, 200px);
    @include hover("../assets/images/product/lemon__hover.png");
    @include mobile {
      @include product(
        "../assets/images/product/lemon.png",
        72px,
        120px,
        50px,
        50px
      );
    }
  }
  &__blueCheese {
    @include product(
      "../assets/images/product/blueCheese.png",
      193px,
      50px,
      70px,
      70px
    );
    @include hover("../assets/images/product/blueCheese__hover.png");
    @include mobile {
      @include product(
        "../assets/images/product/blueCheese.png",
        140px,
        30px,
        45px,
        40px
      );
    }
  }
  &__сheese {
    @include product(
      "../assets/images/product/cheese.png",
      189px,
      115px,
      70px,
      70px
    );
    @include hover("../assets/images/product/cheese__hover.png");
    @include mobile {
      @include product(
        "../assets/images/product/cheese.png",
        140px,
        70px,
        40px,
        35px
      );
    }
  }
  &__caviar {
    @include product(
      "../assets/images/product/caviar.png",
      188px,
      180px,
      55px,
      70px
    );
    @include hover("../assets/images/product/caviar__hover.png");
    @include mobile {
      @include product(
        "../assets/images/product/caviar.png",
        137px,
        100px,
        40px,
        40px
      );
    }
  }
  &__milk {
    @include product(
      "../assets/images/product/milk.png",
      158px,
      230px,
      50px,
      100px
    );
    @include hover("../assets/images/product/milk__hover.png");
    @include mobile {
      @include product(
        "../assets/images/product/milk.png",
        117px,
        135px,
        30px,
        60px
      );
    }
  }
  &__eggs {
    @include product(
      "../assets/images/product/eggs.png",
      140px,
      268px,
      190px,
      150px
    );
    @include hover("../assets/images/product/eggs__hover.png");
    @include mobile {
      @include product(
        "../assets/images/product/eggs.png",
        101px,
        160px,
        112px,
        100px
      );
    }
  }
  &__salad {
    @include product(
      "../assets/images/product/salad.png",
      283px,
      65px,
      80px,
      80px
    );
    @include hover("../assets/images/product/salad__hover.png");
    @include mobile {
      @include product(
        "../assets/images/product/salad.png",
        196px,
        40px,
        50px,
        40px
      );
    }
  }
  &__pan {
    @include product(
      "../assets/images/product/pan.png",
      257px,
      140px,
      160px,
      100px
    );
    @include hover("../assets/images/product/pan__hover.png");
    @include mobile {
      @include product(
        "../assets/images/product/pan.png",
        180px,
        95px,
        85px,
        55px
      );
    }
  }
  &__meat {
    @include product(
      "../assets/images/product/meat.png",
      427px,
      27px,
      300px,
      145px
    );
    @include hover("../assets/images/product/meat__hover.png");
    @include mobile {
      @include product(
        "../assets/images/product/meat.png",
        271px,
        17px,
        177px,
        90px
      );
    }
  }
  &__vegetable {
    @include product(
      "../assets/images/product/vegetable.png",
      553px,
      36px,
      280px,
      125px
    );
    cursor: inherit;
    @include mobile {
      @include product(
        "../assets/images/product/vegetable.png",
        357px,
        22px,
        165px,
        70px
      );
    }
  }
  &__mushrooms {
    @include product("", 585px, 50px, 85px, 75px);
    @include mobile {
      @include product("", 375px, 30px, 50px, 45px);
    }
  }
  &__beet {
    @include product("", 570px, 135px, 75px, 50px);
    @include mobile {
      @include product("", 365px, 80px, 50px, 30px);
    }
  }
  &__carrot {
    @include product("", 620px, 135px, 80px, 45px);
    @include mobile {
      @include product("", 395px, 80px, 50px, 25px);
    }
  }
  &__apple {
    @include product("", 580px, 215px, 85px, 85px);
    @include mobile {
      @include product("", 370px, 130px, 50px, 50px);
    }
  }
  &__dumplings {
    @include product(
      "../assets/images/product/dumplings.png",
      833px,
      28px,
      300px,
      145px
    );
    @include hover("../assets/images/product/dumplings__hover.png");
    @include mobile {
      @include product(
        "../assets/images/product/dumplings.png",
        520px,
        14px,
        180px,
        90px
      );
    }
  }
  &__berries {
    @include product(
      "../assets/images/product/berries.png",
      949px,
      28px,
      300px,
      145px
    );
    @include hover("../assets/images/product/berries__hover.png");
    @include mobile {
      @include product(
        "../assets/images/product/berries.png",
        590px,
        14px,
        180px,
        90px
      );
    }
  }
}
.current .product {
  display: block;
}
</style>
