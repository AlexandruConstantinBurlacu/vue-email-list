const { createApp } = Vue

createApp({
    data() {
        return {
            arrayEmails: [],
        }
    },
    mounted() {
        for(let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((risultato) => {
                this.arrayEmails.push(risultato.data.response)
            })
        }
    },
}).mount("#app");