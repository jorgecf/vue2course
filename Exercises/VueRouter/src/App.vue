<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <hr>

                <app-header></app-header>

                <transition name="slide" mode="out-in">
                    <!-- where the current route is going to be rendered  -->
                    <router-view></router-view>
                </transition>

            </div>
        </div>
    </div>
</template>

<script>

    import Header from './components/Header.vue'

    export default {
        components: {
            appHeader: Header
        }
    }
</script>

<style>

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