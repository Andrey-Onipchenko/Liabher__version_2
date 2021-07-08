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
        { name: "сheese", class: "product__сheese" },
        { name: "caviar", class: "product__caviar" },
        { name: "milk", class: "product__milk" },
        { name: "eggs", class: "product__eggs" },
        { name: "salad", class: "product__salad" },
        { name: "pan", class: "product__pan" },
        { name: "biofrechSafe", class: "product__biofrech-safe" },
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
      biofrechSafe: this.$refs.biofrechSafe,
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
          case "сheese":
            this.changeImageProduct("biofrech-safe-cheese.png", "сheese");
            break;
          case "meat":
            this.changeImageProduct("biofrech-safe-meat.png", "meat");
            break;
          default:
            this.defoultImageVegetable();
        }
      }
    },
    changeImageProduct(imgName, name) {
      if (name === "сheese" || name === "meat") {
        this.$refs.biofrechSafe.style.background = `url('https://liebherr.korrespondent.net/products/${imgName}') center no-repeat`;
        this.$refs.biofrechSafe.style.backgroundSize = "contain";
      } else {
        this.$refs.vegetable.style.background = `url('https://liebherr.korrespondent.net/products/${imgName}') center no-repeat`;
        this.$refs.vegetable.style.backgroundSize = "contain";
      }
    },
    defoultImageVegetable() {
      this.$refs.vegetable.style.background =
        "url('https://liebherr.korrespondent.net/products/vegetable.png') center no-repeat";
      this.$refs.vegetable.style.backgroundSize = "contain";

      this.$refs.biofrechSafe.style.background =
        "url('https://liebherr.korrespondent.net/products/biofrech-safe.png') center no-repeat";
      this.$refs.biofrechSafe.style.backgroundSize = "contain";
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
  &__сheese {
    z-index: 1;
    @include product(false, 490px, 90px, 70px, 60px);
    @include mobile {
      @include product(false, 310px, 55px, 40px, 35px);
    }
  }
  &__caviar {
    @include product(
      "../assets/images/product/caviar.png",
      188px,
      90px,
      55px,
      70px
    );
    @include mobile {
      @include product(
        "../assets/images/product/caviar.png",
        137px,
        50px,
        40px,
        40px
      );
    }
  }
  &__milk {
    @include product(
      "../assets/images/product/milk.png",
      158px,
      180px,
      50px,
      100px
    );
    @include mobile {
      @include product(
        "../assets/images/product/milk.png",
        117px,
        110px,
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
  &__biofrech-safe {
    @include product(
      "../assets/images/product/biofrech-safe.png",
      427px,
      27px,
      300px,
      145px
    );
    cursor: inherit;
    @include mobile {
      @include product(
        "../assets/images/product/biofrech-safe.png",
        271px,
        17px,
        177px,
        90px
      );
    }
  }
  &__meat {
    z-index: 1;
    @include product(false, 490px, 180px, 90px, 60px);
    @include mobile {
      @include product(false, 310px, 110px, 50px, 35px);
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
    @include product(false, 585px, 50px, 85px, 75px);
    @include mobile {
      @include product(false, 375px, 30px, 50px, 45px);
    }
  }
  &__beet {
    @include product(false, 570px, 135px, 75px, 50px);
    @include mobile {
      @include product(false, 365px, 80px, 50px, 30px);
    }
  }
  &__carrot {
    @include product(false, 620px, 135px, 80px, 45px);
    @include mobile {
      @include product(false, 395px, 80px, 50px, 25px);
    }
  }
  &__apple {
    @include product(false, 580px, 215px, 85px, 85px);
    @include mobile {
      @include product(false, 370px, 130px, 50px, 50px);
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
  &__cake,
  &__lemon,
  &__caviar,
  &__milk,
  &__eggs,
  &__salad,
  &__pan,
  &__dumplings,
  &__berries {
    &:hover {
      filter: drop-shadow(2px 2px 0px #00a1fd)
        drop-shadow(-2px -2px 0px #00a1fd);
    }
  }
}
.current .product {
  display: block;
}
</style>
