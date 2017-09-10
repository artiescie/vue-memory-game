<template>
  <div class="container" v-on:click="flip">
    <div class="card" v-bind:class="{ flipped: option.flipped }">
      <img class="front" draggable="false" :src="getCardImage(option)"/>
      <img class="back" draggable="false" src="../../../static/back.png"/>
    </div>
  </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import store from '../../vuex/store';

    export default {
        props: {
            option: {
                type: Object,
                default() {
                    return {
                        flipped: false,
                        cardName: ''
                    };
                }
            }
        },
        methods: {
            ...mapActions([
                'flipCard'
            ]),
            flip() {
                if (this.option.flipped) {
                    return;
                }
                this.flipCard(this.option);
                this.$emit('flipped', this.option);
            },
            getCardImage(option) {
                return require("../../../static/" + option.cardName + ".jpg")
            }
        },

        components: {}
    }
</script>

<style scoped>
  .container {
    width: 130px;
    height: 130px;
    margin-right: 3px;
    margin-top: 3px;
    cursor: pointer;
    position: relative;
    perspective: 800px;
  }

  .card {
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .card img {
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }

  .card .back {
    background: blue;
    transform: rotateY(0deg);
  }

  .card .front {
    background: blue;
    transform: rotateY(180deg);
  }

  @media screen and (max-width: 450px) {
    .container {
      width: 92px;
      height: 92px;
      margin-right: 1px;
    }
  }

  @media screen and (max-width: 380px) {
    .container {
      width: 85px;
      height: 85px;
      margin-right: 1px;
    }
  }

  @media screen and (max-width: 360px) {
    .container {
      width: 70px;
      height: 70px;
      margin-right: 1px;
    }
  }
</style>
