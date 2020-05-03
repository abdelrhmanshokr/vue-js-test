//a component is a reusable piece of code
//to create it we use Vue.component('component name', {object of parameters});
Vue.component('greetings', {
    template: '<p>hi from the greetings component, this is {{name}}. <button v-on:click="changeName">change name</button></p>',

    //we can pass data to this component as well but it's not an object directly it must be a function then that function will return a data object  
    data: function(){
        return {
            name: 'shokr'
        }
    },

    //we can pass methods just like we use them in a vue object 
    methods: {
        changeName: function(){
            this.name = 'abdelrhman';
        }
    }
});

let one = new Vue({
    el:'#vue-app-one',

    data:{
        title: 'vue app one'
    },

    mehtods:{

    },

    computed:{
        greet: function(){
            return 'hello from app one';
        }
    }
});


let two = new Vue({
    el:'#vue-app-two',

    data:{
        title: 'vue app two'
    },

    methods:{
        changeAppOnTitle: function(){
            one.title = 'title one changed';
        }
    },

    computed:{
        greet: function(){
            return 'hello from app two';
        }
    }
});


let ref = new Vue({
    el: '#ref',

    data:{
        output: ''
    },

    methods:{
        readRefs: function(){
            console.log(this.$refs.input.value);
            this.output = this.$refs.input.value;
        }
    }
});