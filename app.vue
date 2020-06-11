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
         ]}
})