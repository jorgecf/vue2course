<template>
   <div class="row">

       <!-- form -->
       <form>
            <div class="col-xs-12 col-sm-8 col-md-6">
                <label></label>
                <textarea class="form-control" rows="3" v-model="quote"></textarea>
            </div>

             <div class="col-xs-12 col-sm-8 col-md-6">
                <button class="btn btn-primary" @click.prevent="addQuote"></button>
            </div>

       </form>

    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                quote: ''
            }
        },
        methods: {
            addQuote() {

            }
        }
    }
</script>

<style scoped>
   
</style>
