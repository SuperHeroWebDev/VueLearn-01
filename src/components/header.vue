<template>
<header>
    <div>
        <h1>VUE JS BLOG</h1>
        <div class="quote-refresh" v-on:click="refresh">
            <q v-bind:class="{animated: this.on, fadeOutUp: this.on}">{{quote.quote}}</q>
        </div>
    </div>
</header>
</template>

<script>
export default {
  data() {
    return {
        quote: '',
        on: false,
    }
  },
  methods: {
      refresh: function(){
          this.axios.get('https://talaikis.com/api/quotes/')
          .then((response) => {
            this.on = true;
            var here = this;
            function isFalse() {
                here.on = false;
            };
            setTimeout(isFalse, 750);
            
            var array = response.data;
            var length = array.length;
            var random =  Math.floor(Math.random() * array.length);
            function newQuote() {
                here.quote = array[random];
            };
            setTimeout(newQuote, 750);
          });
      }
  },
  created() {
      this.axios.get('https://talaikis.com/api/quotes/')
      .then((response) => {
            var array = response.data;
            var length = array.length;
            var random =  Math.floor(Math.random() * array.length);
            this.quote = array[random];
      });
  }
}
</script>

<style lang="scss">
 
.quote-refresh:hover {
    animation-name: pulse;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
}

header, .quote-refresh {
    transition: all 1s ease-in-out;
}
</style>
