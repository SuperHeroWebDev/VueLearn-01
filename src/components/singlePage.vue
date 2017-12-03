<template>
  <div id="singlePage">
        <router-link to="/" exact class="goBack">Go back</router-link>
        <div class="center">
            <p>Click on image for article</p>
            <a v-bind:href="'https://nyti.ms/' + this.$route.params.id" target="_blank">
            <img src="https://picsum.photos/600/300"></a>
        </div>
        
</object>
  </div>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style lang="scss">
#singlePage{
    margin: 3rem;
    padding: 1.5rem;
    border: 1px solid hsl(0, 0%, 87%);
    .goBack {
        text-decoration: underline;
        &:hover {
            color: hsl(153, 65%, 52%);
        }
    }
    .center {
        text-align: center;
        margin-top: 3rem;
    }
    a {
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
       max-width: 600px;
       padding: 0.25rem;
       border: 1px solid hsl(0, 0%, 67%);
    }
    p {
        color:hsl(153, 65%, 52%);
    }
}

</style>

