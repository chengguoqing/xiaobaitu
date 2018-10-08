<template>
<view class="dx_row dfdf_eert" :style="{'margin-left':-(gutter/2)+'px','margin-right':-(gutter/2)+'px'}" >
    <slot :gutter="gutter"></slot>
</view>
</template>
<script>
    export default {
        props: {
            gutter: ""
        },
        data() {
            return {

            }
        },
        components: {

        },

    }

</script>
<style>


</style>
<style scoped>
    .dx_row {
        display: block;
     
    }

    .dx_row::after {
        content: "";
        display: table;
        clear: both;
    }

</style>
