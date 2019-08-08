    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        },
        methods: {
            setMessage: function(event) {
                this.message = event.target.value;
            }
        }
    });

    var app2 = new Vue({
        el: '#app-2',
        data: {
            message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
        }
    });

    var app3 = new Vue({
        el: '#app-3',
        data: {
            seen: true
        }
    });

    var app4 = new Vue({
        el: '#app-4',
        data: {
            todos: [
                { text: 'Изучить JavaScript' },
                { text: 'Изучить Vue' },
                { text: 'Создать что-нибудь классное' }
            ]
        }
    });


    var app6 = new Vue({
        el: '#app-6',
        data: {
            message: 'Привет, Vue!'
        }
    });