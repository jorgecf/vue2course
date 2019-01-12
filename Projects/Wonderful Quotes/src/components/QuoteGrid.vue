<template>
    <div class="row">
        
        <!-- slotted component, send quote with a slot -->
        <!-- click.native responds to clicks in the child component and processes it in the 
        parent -->
        <app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)" :key="quote"> 
            {{ quote }}
        </app-quote>
    
    </div>
</template>

<script>
    
    import Quote from './Quote.vue';

    export default {
        components: {
            "app-quote": Quote
        },
        props: ["quotes"], // this isnt two way binding!!
        methods: {
            deleteQuote(index) {
                this.$emit("quoteDeleted", index);
            }
        }
    }

</script>

<style>

</style>
