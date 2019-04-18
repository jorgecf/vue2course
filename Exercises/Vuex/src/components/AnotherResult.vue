<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of clicks: {{ stringCounter }} </p>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex'; // mapGetters utility
    import * as types from '../store/types.js';

    export default {
        computed:{
            ...mapGetters({
                doubleCounter: types.DOUBLE_COUNTER,
                clickCounter: types.CLICK_COUNTER
            }),
            otherComputed() {
                return "hola";
            }
        } 
    }
</script>