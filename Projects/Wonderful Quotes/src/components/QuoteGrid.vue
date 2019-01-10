<template>
    <div class="row">
        
        <!-- slotted component, send quote with a slot -->
        <app-quote v-for="quote in quotes" :key="quote"> 
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
        props: ["quotes"]
    }

</script>

<style>

</style>
