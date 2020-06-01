
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
            { text: 'Learn js'},
            { text: 'Learn Vue'},
            { text: 'Build something awesome'}
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