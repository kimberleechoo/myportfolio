const app = Vue.createApp({
    data(){
        return{
            userInput: '',
            userName: '',
        };
    },

    methods:{
        submitButton(){
            alert("Yay, I've got your message!")
        },

        setInput(event){
            this.userInput = event.target.value;
        },

        setUserName(event){
            this.userName = event.target.value;
        }
    }
});

app.mount('#submitQueries');
