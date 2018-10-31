<template>
    <div class="find-page">
        <h1 class="login-page-title">Find</h1>
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

@component-namespace find {
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

.find-page .button{
    margin-bottom: 10px;
}

</style>
