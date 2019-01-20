<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <button v-myon:click="clickHandler">Directives Exercise</button>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            "myon": {
                bind(el, binding, vnode) {
                    el.addEventListener(binding.arg, binding.value);
                }
            }
        },
        methods: {
            clickHandler() {
                console.log("Clicked!");
            }
        }


    }
</script>

<style>
</style>
