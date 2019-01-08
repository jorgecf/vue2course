<template>
    <div>
        <slot name="title"></slot>
        <span>
            <slot name="subtitle">
                Default subtitle (replaced by data being passed here)
            </slot>
        </span>
        <slot name="quote"></slot>
    </div>
</template>

<script>

    export default {
        
    }
</script>

<style scoped>

    div {
        border: 1px solid #d3d3d3;
        box-shadow: 1px 1px 2px black;
        margin: 30px auto;
        text-align: center;
        padding: 30px;
    }

</style>
