<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">

                <!-- Select component to render -->
                <button @click="selectedComponent = 'quote'">Quote</button>
                <button @click="selectedComponent = 'author'">Author</button>
                <hr>

                <!-- Dynamic component -->
                <keep-alive>
                    <component :is="selectedComponent">
                        <!-- Slot (styles from Quote child apply here) -->
                        <h1 slot="title">Title:</h1>
                        <p slot="quote">{{ quote }}</p>
                    </component>
                </keep-alive>

                <!-- Normal component -->
                <quote>
                    <!-- Slot (styles from Quote child apply here) -->
                    <h1 slot="title">Title:</h1>
                    <p slot="quote">{{ quote }}</p>
                </quote>

                <author></author>

            </div>
        </div>
    </div>
</template>

<script>

    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';

    export default {
        data: function() {
            return {
                quote: "Some quote",
                selectedComponent: "quote"
            }
        },
        components: {
            "quote": Quote,
            "author": Author
        }
    }
</script>

<style>
</style>
