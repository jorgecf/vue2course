<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    

                    <app-full-name :fn="userData.firstName" :ln="userData.lastName"></app-full-name>
                   
                    <!-- Mail -->
                    <div class="form-group">
                        <label for="mail">Mail</label>
                        <input
                                type="text"
                                id="mail"
                                class="form-control"
                                v-model="userData.mail">
                    </div>

                    <!-- Password -->
                    <div class="form-group">
                        <label for="pwd">Password</label>
                        <input
                                type="password"
                                id="pwd"
                                class="form-control"
                                v-model="userData.pwd">
                    </div>
                    <!-- Store Data? Yes/No -->
                     <div class="form-group">
                          <label for="pwd">Store data</label>
                        <input
                                type="radio"
                                id="store"
                                value="true"
                                v-model="userData.storeData">

                        <label for="pwd">Don't store data</label>
                        <input
                                type="radio"
                                id="noStore"
                                value="false"
                                v-model="userData.storeData">
                     </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
               
               
                </div>
            </div>

        <!-- submit -->
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <button class="btn btn-primary" @click.prevent="submitForm">
                Submit form
            </button>
        </div>

        </form>
        <hr>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.firstName }} {{ userData.lastName }}</p>
                        <p>Mail: {{ userData.mail }}</p>
                        <p>Password: {{ userData.pwd }}</p>
                        <p>Store in Database?: {{ userData.storeData }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import FullName from './components/FullName.vue';

    export default {
        data() {
            return {
                userData: {
                    "firstName": "",
                    "lastName": "",
                    "mail": "",
                    "pwd": "",
                    "storeData": ""
                },
                submitted: false
            }
        },
        methods: {
            submitForm() {
                this.submitted = true;
            }
        },
        components: {
            "app-full-name": FullName
        }
    }
</script>

<style>
</style>
