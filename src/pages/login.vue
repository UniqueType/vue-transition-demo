<template>
    <div class="login-page">
        <h1 class="login-page-title">Login</h1>
        <div class="button" @click='goToUrl("find")'>to Find</div>
        <div class="button" @click='goToUrl("register")'>to Register</div>
        <div class="button" @click='goToUrl("mine")'>to Mine</div>
    </div>
</template>
<script>
/* eslint no-undef: "off" */
/* eslint no-plusplus: "error" */
/* eslint new-cap: "off" */
import filters from '../filter';

export default {
    name: '',
    filters,
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

@component-namespace login {
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

.login-page .button{
    margin-bottom: 10px;
}

</style>
