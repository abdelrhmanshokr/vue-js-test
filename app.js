//first things first we need to create a vuejs instanse and we pass an object to it and it either controls the whole app or some part of it 
new Vue({
    //first proprety is the el which tells the instanse which element to control if it's controling the whole app we pass a key element (big element)
    el: '#vue-app',
    //the second proprety is the data which tells the instanse what to output 
    data: {
        name: '',
        
        //this link is used in the href attribute in a link so we need to bind it to take its value in the html page as shown in the html page 
        link: 'https://www.google.com',
        inputValue: 'text',
        
        //we also can write html in here and bind it in the html page link so 
        linkTag: '<a href="https://www.google.com"> google.com </a>',

        //events data 
        age: '',
        x: 0,
        y: 0,

        //dynamic CSS data 
        available: true,
        nearby: false,

        //conditionals data
        error: false,
        success: false,
        
        //v-for data
        chars: ['abdelrhman', 'shokr', 'adel', 'diaa'],
        ninjas: [
            {name: 'abdelrhman', age: 22},
            {name: 'shokr', age: 25},
            {name: 'adel', age: 60}
        ]

    },
    //we can add methods to any element also 
    //the arrow function does not support this notation
    methods: {
        greet: function(name){
           return 'hello' + ' ' + name + ' ' + this.name;
        },

        //events methods 
        addAge: function(inc){
            this.age += inc;
        },
        subAge: function(dec){
            this.age -= dec;
        },

        updateXandY: function(event){ 
            //when we create a new event we get an event object automatically called event
            this.x = event.offsetX;
            this.y = event.offsetY;
        },

        //keyboard events
        logName: function(){
            console.log('name')
        },
        logAge: function(){
            console.log('age')
        },

        //dynamic CSS methods 
        availableInverse: function(){
            this.available = !this.available;
        }
        
        //v-for mehtods 
        
    }
});