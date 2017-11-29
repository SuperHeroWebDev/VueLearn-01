<template>
    <div id="filters">
        <div class="nav-button" v-on:click="openNav = !openNav; navBtn = !navBtn;" v-bind:class="{navBtnActive: navBtn}"></div>
        <div class="filters-area" v-bind:class="{openNav: openNav}">
            <select name="" id="">
                <option value="">select category</option>
            </select>
            <input type="text" placeholder="search blogs">
        </div>
    </div>
</template>

<script>
export default {
  data() {
      return {
          openNav: true,
          navBtn: false
      }
  }
}
</script>


<style lang="scss">
#filters {
    width: 100%;
    position: relative;
    margin-bottom: 3rem;
    .nav-button {
        height: 20px;
        width: 80px;
        background-color: hsl(0, 0%, 87%);
        border-radius: 0 0 4px 4px;
        position: absolute;
        bottom: -20px;
        left: 50%;
        margin-left: -40px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
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
        transform: scaleY(0);
        visibility: hidden;
        position: absolute;
        width: 100%;
        z-index: -1;
    }
}
</style>

