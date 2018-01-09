<template>
    <div id="filters">
        <div class="nav-button" v-on:click="openNav = !openNav; navBtn = !navBtn;" v-bind:class="{navBtnActive: navBtn}"></div>
        <div class="filters-area" v-bind:class="{openNav: openNav}">
            <select v-model="selectedSection">
                <option v-for="section in sendSelectionFun">{{section}}</option>
            </select>
            <input v-on="sendSearch" v-model="search" type="text" placeholder="search blogs">
        </div>
    </div>
</template>

<script>
import {bus} from '../main.js';

export default {
  data() {
      return {
          openNav: true,
          navBtn: false,
          search: '',
          selectedSection: 'home',
          sections: ['home', 'arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'insider', 'magazine', 'movies', 'national', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 'tmagazine', 'travel', 'upshot', 'world']
      }
  },
  computed: {
      sendSelectionFun: function() {
            bus.$emit('sendSectionEmit', this.selectedSection);

            return this.sections;
      },
      sendSearch: function() {
          bus.$emit('sendSearchEmit', this.search.toLowerCase());
      }
  }
}
</script>


<style lang="scss">
#filters {
    width: 100%;
    position: relative;
    .nav-button {
        height: 10px;
        width: 80px;
        background-color: #4C7F68;
        border-radius: 0 0 4px 4px;
        position: absolute;
        bottom: -12px;
        left: 50%;
        margin-left: -40px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        border: 1px solid hsl(0, 0%, 65%);
        border-top-color: transparent;
        &:hover {
        background-color: hsl(153, 65%, 72%);
        
        }
    }
    .navBtnActive {
        background-color: hsl(153, 65%, 72%);

    }

    .filters-area {
        transform-origin:top;
        text-align: center;
        border-bottom: 1px solid hsl(0, 0%, 87%);
        background-color: hsl(0, 0%, 87%);
        padding: 1rem;
        transition: all 0.3s ease-in-out;

    }
    select, input, option {
        font-family: 'Source Sans Pro', sans-serif;
        margin: 0 1rem;
        width: 200px;
        color: hsl(153, 95%, 32%);
        border: 1px solid hsl(0, 0%, 67%);
        padding: 5px;
    }

    input::-webkit-input-placeholder {
        color: hsl(153, 95%, 32%);
    }

    .openNav {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        width: 100%;
        z-index: -1;
        box-sizing: border-box;
    }
}
</style>

