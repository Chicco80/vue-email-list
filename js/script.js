const app = new Vue({
    el : '#app',
    data:{
        mails:[],
    },
    methods:{
            

    },
    created(){
         for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((resp)=>{
                this.mails.push(resp.data.response);
                console.log(resp.data.response);

            })
             .catch((error)=>{
                console.log(error)
            });
         }
    }
    
});