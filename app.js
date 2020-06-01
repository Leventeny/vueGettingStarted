
var app = new Vue({
    el: '#app',
    data: {
        message1: 'Szevasz he!',
        message2: 'https://www.youtube.com/watch?v=Wy9q22isx3U&t=1800s',
        message3: 'https://www.youtube.com/watch?v=4deVCNJq3qc',
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'GettingStarted Guide'},
            { text: 'VueBook'},
            { text: '2 youtube vids'},
            { text: 'Vue learning vids'},
            { text: 'CS50 courses'}
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello darkness my old friend'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vuejs!'
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Veges'},
            { id: 1, text: 'Cheese'},
            { id: 2, text: 'Whateva'}
        ]
    }
})