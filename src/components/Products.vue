<template>
  <div class="product">
    <button
      v-for="product in products"
      :key="product.name"
      :class="product.class"
      :data-product="product.name"
      @click="chooseProduct"
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
        // { name: "mushrooms", class: "product__mushrooms" },
        // { name: "beet", class: "product__beet" },
        // { name: "carrot", class: "product__carrot" },
        // { name: "apple", class: "product__apple" },
        { name: "dumplings", class: "product__dumplings" },
        { name: "berries", class: "product__berries" },
      ],
    };
  },
  methods: {
    chooseProduct(event) {
      console.dir(event.target.offsetTop);
      console.dir(event);
      this.$emit(
        "chooseProduct",
        event.target.dataset.product,
        event.target.offsetTop
      );
    },
  },
};
</script>

<style lang="scss">
.product {
  //   display: none;

  &__cake {
    @include product("../assets/images/product/cake.png", 80px, 60px);
    @include hover("../assets/images/product/cake__hover.png");
  }
  &__lemon {
    @include product("../assets/images/product/lemon.png", 88px, 212px);
    @include hover("../assets/images/product/lemon__hover.png");
  }
  &__blueCheese {
    @include product(
      "../assets/images/product/blueCheese.png",
      200px,
      50px,
      70px,
      70px
    );
    @include hover("../assets/images/product/blueCheese__hover.png");
  }
  &__сheese {
    @include product(
      "../assets/images/product/cheese.png",
      195px,
      115px,
      70px,
      70px
    );
    @include hover("../assets/images/product/cheese__hover.png");
  }
  &__caviar {
    @include product(
      "../assets/images/product/caviar.png",
      195px,
      180px,
      55px,
      70px
    );
    @include hover("../assets/images/product/caviar__hover.png");
  }
  &__milk {
    @include product(
      "../assets/images/product/milk.png",
      165px,
      230px,
      50px,
      100px
    );
    @include hover("../assets/images/product/milk__hover.png");
  }
  &__eggs {
    @include product(
      "../assets/images/product/eggs.png",
      147px,
      275px,
      190px,
      149px
    );
    @include hover("../assets/images/product/eggs__hover.png");
  }
  &__salad {
    @include product(
      "../assets/images/product/salad.png",
      293px,
      65px,
      80px,
      80px
    );
    @include hover("../assets/images/product/salad__hover.png");
  }
  &__pan {
    @include product(
      "../assets/images/product/pan.png",
      267px,
      140px,
      160px,
      100px
    );
    @include hover("../assets/images/product/pan__hover.png");
  }
  &__meat {
    @include product(
      "../assets/images/product/meat.png",
      438px,
      28px,
      308px,
      155px
    );
    @include hover("../assets/images/product/meat__hover.png");
  }
  &__mushrooms {
    @include product(
      "../assets/images/product/mushrooms.png",
      260px,
      40px,
      40px,
      40px
    );
    @include hover("../assets/images/product/mushrooms__hover.png");
  }
  &__beet {
    @include product(
      "../assets/images/product/beet.png",
      255px,
      70px,
      35px,
      35px
    );
    @include hover("../assets/images/product/beet__hover.png");
  }
  &__carrot {
    @include product(
      "../assets/images/product/carrot.png",
      273px,
      85px,
      35px,
      23px
    );
    @include hover("../assets/images/product/carrot__hover.png");
  }
  &__apple {
    @include product(
      "../assets/images/product/apple.png",
      260px,
      113px,
      35px,
      35px
    );
    @include hover("../assets/images/product/apple__hover.png");
  }
  &__dumplings {
    @include product(
      "../assets/images/product/dumplings.png",
      855px,
      28px,
      308px,
      155px
    );
    @include hover("../assets/images/product/dumplings__hover.png");
  }
  &__berries {
    @include product(
      "../assets/images/product/berries.png",
      973px,
      28px,
      308px,
      155px
    );
    @include hover("../assets/images/product/berries__hover.png");
  }
}
.current .product {
  display: block;
}
</style>
