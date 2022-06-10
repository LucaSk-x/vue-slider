const slide = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];


let app = new Vue (
    {
        el: '#app',

        data: {
            data: slide,
            indice: 0,
            isActive1: true,
            isActive2: false,
            isActive3: false,
            isActive4: false,
            isActive5: false,

        },

        methods: {
            increment: function () {
                this.indice++
                if (this.indice > 4) {
                    this.indice--
                }
            },

            decrement: function () {
                this.indice--
                if (this.indice < 0) {
                    this.indice++
                }
            },

            immagine1: function() {
                this.indice = 0
                this.isActive1 = true
                this.isActive2 = false
                this.isActive3 = false
                this.isActive4 = false
                this.isActive5 = false
            },

            immagine2: function() {
                this.indice = 1
                this.isActive1 = false
                this.isActive2 = true
                this.isActive3 = false
                this.isActive4 = false
                this.isActive5 = false
            },

            immagine3: function() {
                this.indice = 2
                this.isActive1 = false
                this.isActive2 = false
                this.isActive3 = true
                this.isActive4 = false
                this.isActive5 = false
            },

            immagine4: function() {
                this.indice = 3
                this.isActive1 = false
                this.isActive2 = false
                this.isActive3 = false
                this.isActive4 = true
                this.isActive5 = false
            },

            immagine5: function() {
                this.indice = 4
                this.isActive1 = false
                this.isActive2 = false
                this.isActive3 = false
                this.isActive4 = false
                this.isActive5 = true
            },
        },
    }
)

