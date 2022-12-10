<template>
    <section class="users-section plr-xxl ptb-lg pb-lg">
        <h1 class="users-header ptb-lg">Current users</h1>
        <div class="users-box pb-lg">
            <User v-for="user in users" :key="user.id" :user="user" />
        </div>
        <nuxt-link to="/"><button>Back</button></nuxt-link>
        <button>Load more</button>
    </section>
</template>
<script>
import axios from "axios";
export default {
    data () {
        return {
            users:[
            {
                id: '60d0fe4f5311236168a109ca',
                title: 'ms',
                firstName: 'Sara',
                lastName: 'Andersen',
                picture: 'https://randomuser.me/api/portraits/women/58.jpg'
            },
            {
                id: '60d0fe4f5311236168a109cb',
                title: 'miss',
                firstName: 'Edita',
                lastName: 'Vestering',
                picture: 'https://randomuser.me/api/portraits/med/women/89.jpg'
            },
            {
                id: '60d0fe4f5311236168a109cc',
                title: 'ms',
                firstName: 'Adina',
                lastName: 'Barbosa',
                picture: 'https://randomuser.me/api/portraits/med/women/28.jpg'
            },
            {
                id: '60d0fe4f5311236168a109cd',
                title: 'mr',
                firstName: 'Roberto',
                lastName: 'Vega',
                picture: 'https://randomuser.me/api/portraits/med/men/25.jpg'
            }
            ]
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
            // const res = await(axios.get('https://dummyapi.io/data/v1/user?',config))
            // console.log(res)
            // this.users = [...res.data.data];
            
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
        color: #027FC1;
        text-shadow: 3px 2px 2px #C8C8C8;
    }
    .users-box {
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 5rem;
        justify-content: center;
        
    }
</style>

<!-- 63943e0e85c0263aa117e1a8 -->

<!-- users: [                                                                                                                                                     10:49:49
  {
    id: '60d0fe4f5311236168a109ca',
    title: 'ms',
    firstName: 'Sara',
    lastName: 'Andersen',
    picture: 'https://randomuser.me/api/portraits/women/58.jpg'
  },
  {
    id: '60d0fe4f5311236168a109cb',
    title: 'miss',
    firstName: 'Edita',
    lastName: 'Vestering',
    picture: 'https://randomuser.me/api/portraits/med/women/89.jpg'
  },
  {
    id: '60d0fe4f5311236168a109cc',
    title: 'ms',
    firstName: 'Adina',
    lastName: 'Barbosa',
    picture: 'https://randomuser.me/api/portraits/med/women/28.jpg'
  },
  {
    id: '60d0fe4f5311236168a109cd',
    title: 'mr',
    firstName: 'Roberto',
    lastName: 'Vega',
    picture: 'https://randomuser.me/api/portraits/med/men/25.jpg'
  }
] -->