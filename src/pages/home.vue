<template>
    <div class="home-page">
        <h1 class="home-page-title">首页</h1>
        <div class="button" @click='goToUrl("find")'>to Find</div>
        <div class="button" @click='goToUrl("login")'>to Login</div>
        <div class="button" @click='goToUrl("register")'>to Register</div>
        <div class="button" @click='goToUrl("mine")'>to Mine</div>
    </div>
</template>
<script>
/* eslint no-undef: "off" */
/* eslint no-plusplus: "error" */
/* eslint new-cap: "off" */
export default {
    name: '',
    data() {
        return {};
    },
    components: {},
    methods: {
        goToUrl(name) {
            this.$router.push(name);
        }
    },
    mounted() {},
    created() {},
    activated() {},
    props: {}
};

</script>
<style lang="css">
@import '../common/css/common.css';
@component-namespace home {
    @component page {
        width: 100%;
        min-height: 100%;
        background-color: #eee;
        font-size: 18px;
        @descendent title {
            font-size: 28px;
        }
    }
}

.home-page .button{
    margin-bottom: 10px;
}

</style>
