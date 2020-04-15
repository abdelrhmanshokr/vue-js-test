//first things first we need to create a vuejs instanse and we pass an object to it and it either controls the whole app or some part of it 
new Vue({
    //first proprety is the el which tells the instanse which element to control if it's controling the whole app we pass a key element (big element)
    el: '#vue-app',
    //the second proprety is the data which tells the instanse what to output 
    data: {
        name: 'name',
        age: 'number',
        address: 'address',
        //this link is used in the href attribute in a link so we need to bind it to take its value in the html page as shown in the html page 
        link: 'https://www.google.com',
        inputValue: 'text',
        //we also can write html in here and bind it in the html page link so 
        linkTag: '<a href="https://www.google.com"> google.com </a>'
    },
    //we can add methods to any element also 
    //the arrow function does not support this notation
    methods: {
        greet: function(name){
           return 'hello' + ' ' + name + ' ' + this.name;
        }
    }
});