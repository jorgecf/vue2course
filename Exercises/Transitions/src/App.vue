<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>

                <button class="btn btn-primary" @click="show = !show">Show alert</button>
                <br><br>
                <transition name="slide">
                    <div class="alert alert-info" v-if="show">The alert</div>
                </transition>
                 <br><br>
                 <!-- appear -> for onLoad animations -->
                <transition name="slide" appear>
                    <div class="alert alert-info" v-if="show">The alert</div>
                </transition>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true
            }
        }
    }
</script>

<style>
    .myFade-enter {
        opacity: 0;
    }

    .myFade-enter-active {
        transition: opacity 1s;
        opacity: 1;
    }

    .myFade-leave {
        opacity: 1;
    }

    .myFade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }


    .slide-enter {
       opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 1;
    }

    .slide-leave {
       opacity: 1;
    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
    }

    @keyframes slide-in {
        from { transform: translateY(100px); }
        to { transform: translateY(0px);} /* element actual position */
    }

      @keyframes slide-out {
        from { transform: translateY(0px);} /* element actual position */
        to { transform: translateY(100px); }
    }

</style>
