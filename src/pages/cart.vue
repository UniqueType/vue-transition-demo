<template>
    <div class="home-page">
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
    methods: {},
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

</style>
