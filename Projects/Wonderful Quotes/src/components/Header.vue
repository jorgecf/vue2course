<template>


    <div class="row">

        <div class="col-12">
            <h3>Quoted added</h3>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                    :style="{ width: (quotesCount / maxQuotes) * 100 +'%' }">
                    {{ quotesCount }} of {{ maxQuotes }}
                </div>
            </div>	
        </div>

    </div>

</template>

<script>
export default {
        props: ['quotesCount', 'maxQuotes']
}
</script>

<style scoped>

</style>
