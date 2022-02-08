const app = Vue.createApp({
    data() {
        return {
            // title: 'One Piece',
            // number: 1,
            showTitle: true,
            islands: [
                { title: "orange town", number: 1, isgood: true},
                { title: "wanokuni", number: 2, isgood: false},
                { title: "alabasta", number: 3, isgood: true},
            ],
            // x: 0,
            // y: 0
            url: 'http://www.thenetninja.co.uk'
        }
    },
    methods: {
        toggleShowTitle() {
            this.showTitle = !this.showTitle
        },
        // handleEvent(e, number){
        //     console.log(e, e.type)
        //     if(number)
        //         console.log(number)
        // },
        // handleMousemove(e) {
        //     this.x = e.offsetX
        //     this.y = e.offsetY
        // },
        arcIsClicked(e, title){
            title.isgood = !title.isgood
        },
    },
    computed: {
        filteredIslands(){
            return this.islands.filter(island => island.isgood);
        }
    }
})

app.mount('#app')