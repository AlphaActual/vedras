<template>
    <section class="users-section plr-xxl ptb-lg">
        <h1 class="users-header ptb-lg">Current users</h1>
        <div class="users-box pb-lg">
            <User v-for="user in users" :key="user.id" :user="user" />
        </div>

        <div class="spinner" v-show="showSpinner"><div class="lds-facebook"><div></div><div></div><div></div></div></div>
        <nuxt-link class="back-link" to="/">
            <i class="fa-solid fa-arrow-left-long"></i>
        </nuxt-link>
        <button class="btn-load" @click="loadMoreUsers">Load more</button>
    </section>
</template>
<script>
import axios from "axios";
export default {
    data () {
        return {
            users:[],
            currentPage : '0',
            showSpinner : false
        }
    },
    async created () {
        const config = {
            headers: {
                'Accept': 'application/json',
                'app-id': '63943e0e85c0263aa117e1a8'
            }
        }
        try {

            if(this.users.length === 0){
                this.showSpinner = true;
                const res = await(axios.get('https://dummyapi.io/data/v1/user?limit=10',config))
                this.users = [...res.data.data];
                this.showSpinner = false;
            }
            
        } catch (err) {
            console.log(err)
        }
        
    },
    head (){
        return {
            title : 'User list',
            meta : [
                {
                    hid: 'users',
                    name: 'user list',
                    content: 'List of all users'
                }
            ]
        }
    },
    methods : {
        async loadMoreUsers() {
            this.showSpinner = true;

            const config = {
                headers: {
                    'Accept': 'application/json',
                    'app-id': '63943e0e85c0263aa117e1a8'
                }
            }
            try {
                const res = await(axios.get(`https://dummyapi.io/data/v1/user?page=${this.currentPage+1}&limit=10`,config));
                this.currentPage = res.data.page;
                const fetchedData = [...res.data.data];
                this.users = this.users.concat(fetchedData);
            
            } catch (err) {
                console.log(err)
            }
            this.showSpinner = false;
            
        }
    }
}
</script>
<style scoped>

    .users-section {
        display:flex;
        flex-direction: column;
        
    }
    .users-header {
        text-align: center;
        font-size: 5rem;
        font-weight: bold;
        color: #DD6076;
        text-shadow: 3px 2px 2px #C8C8C8;
    }
    @media screen and (max-width: 800px){
        .users-header {
        font-size: 4rem;
        } 
    }
    @media screen and (max-width: 480px){
        .users-header {
        font-size: 3.2rem;
        } 
    }
    .users-box {
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 3rem;
        justify-content: center;
        
    }
    .spinner {
        align-self: center;
    }
    
    .lds-facebook {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    .lds-facebook div {
        display: inline-block;
        position: absolute;
        left: 8px;
        width: 16px;
        background: #DD6076;
        animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }
    .lds-facebook div:nth-child(1) {
        left: 8px;
        animation-delay: -0.24s;
    }
    .lds-facebook div:nth-child(2) {
        left: 32px;
        animation-delay: -0.12s;
    }
    .lds-facebook div:nth-child(3) {
        left: 56px;
        animation-delay: 0;
    }
    @keyframes lds-facebook {
        0% {
            top: 8px;
            height: 64px;
        }
        50%, 100% {
            top: 24px;
            height: 32px;
        }
    }
    .back-link {
        color:#5c5c5c;
        font-size: 2rem;
        transition: all .5s;
        width: 3rem;
        
    }
    .btn-load {
        width:7rem;
        align-self: center;
        text-decoration: none;
        border:none;
        background-color: #FFFFFF;
        transition:all .5s;
        font-size: 1.2rem;
    }
    .back-link:hover ,.btn-load:hover {
        color:#b7b7b7;
    }

</style>

