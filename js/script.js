const app = new Vue({
    el : '#app',
    data:{
        mails:[],
    },
    methods:{
        getData(){
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                     .then((resp)=>{
                     this.mails.push(resp.data.response);
                     console.log(resp.data.response);
    
                }) .catch((error)=>{
                    console.log(error)
                })
            }
        }
    },
    created(){
        setTimeout(this.getData, 3000)
    }
});