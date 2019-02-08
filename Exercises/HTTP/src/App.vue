<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http connection</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input class="form-control" type="text" v-model="user.username">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input class="form-control" type="text" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit3">Submit data</button>
                <hr>
                <input class="form-control" type="text" v-model="dest">
                <hr>
                <button class="btn btn-primary" @click="retrieve2">Retrieve data</button>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users">
                        {{u.username}} / {{u.email}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                username: "",
                email: ""
            },
            users: [],
            resourceHandler: null,
            dest: "data"
        }
    },
    created() { // created hook
        // create a new resource
        const customActions = {
            // calculate, getpdf...
            save2: { method: 'POST', url: 'alternative.json' },
            getData: { method: 'GET' }
        }
        this.resourceHandler = this.$resource('{dest}.json', {}, customActions);
    },
    methods: {
        submit() {
            // use $http from vue-resource
            // POST
            this.$http.post('data.json', this.user) // we could add /sendXYZ and it would be added to the root
                .then(response => { // it returns a js promise
                    console.log(response);
                },
                error => {
                    console.log(error);
                }); 
        },
        submit2() {
            // save resource from vue-resource
            this.resource.save({}, this.user);
        },
        submit3() {
            // same thing but with custom actions
            this.resourceHandler.save2(this.user);
        },
        retrieve() {
            // GET
            this.$http.get('data.json')
                .then(response => { // it returns a js promise
                    return response.json(); // return the response parsed to json
                })
                .then(data => { // now we have the data
                    this.users = data;
                }); 
        },
        retrieve2() {
            this.resourceHandler.getData({ dest: this.dest }) // DYNAMIC URL generation
                .then(response => { // it returns a js promise
                        return response.json(); // return the response parsed to json
                })
                .then(data => { // now we have the data
                        this.users = data;
                }); 
        }   
    }
};
</script>

<style>
</style>
