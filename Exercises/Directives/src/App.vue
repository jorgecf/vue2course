<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>

                <p v-text="'Text binding'"></p>
                <p v-html="'<b>Text</b> binding'"></p>

            </div>
        </div>

        <hr>

         <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>

                <p v-highlight:background="'red'">This should be colored!</p>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        // local directives
        directives: {
            "highlight": {
                bind(el, binding, vnode) {

                    if(binding.modifiers['dark']) {
                         if(binding.arg == 'background') { // arg
                            el.style.backgroundColor = "#000000";
                         }
                    }
                    else {
                        if(binding.arg == 'background') { // arg
                            el.style.backgroundColor = binding.value; //value
                        } else {
                            el.style.color = binding.value;
                        }
                    }

                }
            }
        }
    }
</script>

<style>

</style>
