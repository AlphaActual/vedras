<template>
    <nuxt-link class="nuxt-l" :to="'users/' + user.id">
        <div class="user-box box-shadow ptb-md plr-md">
            <img class="user-image" :src="user.picture" alt="user photo">
            <p :class="`${gender} title-paragraph`">{{user.title}}</p>
            <p>{{user.firstName}}</p>
            <p>{{user.lastName}}</p>    
        </div>
    </nuxt-link>    
</template>
<script>
export default {
    name: 'User',
    data () {
        return {
            gender: 'female'
        }     
    },
    props: {
        user: Object,    
    },
    created (){
        this.checkGender()
    },
    methods : {
        checkGender () {
            if(this.user.title === 'mr') this.gender = 'male';
            else this.gender = 'female';
        }
    },
}
</script>
<style scoped >
    .user-box {
        min-width:15rem;
        height:auto;
        background-color: #ffd700;
        font-size:1.5rem;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        transition:all .5s;
        
    }
    .user-box:hover {
        transform: scale(1.1);
    }
    .user-image {
        width: 70%;
        border-radius: 10px;
        margin-bottom: 1rem;
    }
    .box-shadow {
        -webkit-box-shadow: 9px 9px 14px 0px rgba(171,171,171,1);
        -moz-box-shadow: 9px 9px 14px 0px rgba(171,171,171,1);
        box-shadow: 9px 9px 14px 0px rgba(171,171,171,1);
    }
    p {
        padding:0;
        margin:0;
    }
    .nuxt-l {
        text-decoration: none;
        color:#5C5C5C;
    }
    .title-paragraph {
        font-weight: bold;
    }
    .female {
        color:#dd6076;
    }
    .male {
        color:#027FC1;
    }
</style>