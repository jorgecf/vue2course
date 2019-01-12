<template>
   <div class="row">

       <!-- form -->
       <form>
            <div class="col-xs-12 col-sm-8 col-md-6">
                <label>Quote</label>
                <textarea class="form-control" rows="3" v-model="quote"></textarea>
            </div>

             <div class="col-xs-12 col-sm-8 col-md-6">
                 <!-- we use click.prevent so the form is not sent and the page is not reloaded -->
                <button class="btn btn-primary" @click.prevent="addQuote">Add a new quote</button>
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
                this.$emit("newQuote", this.quote);
                this.quote = "";
            }
        }
    }
</script>

<style scoped>
   
</style>
