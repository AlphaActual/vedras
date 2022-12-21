<template>
    <section class="user-section">
        <div class="user-info">
            <div>
                <img class="user-image" :src="userInfo.picture">
                <p><span :class="`user-attribute ${userInfo.gender}`">Title:</span> {{userInfo.title}}</p>
                <p><span :class="`user-attribute ${userInfo.gender}`">First Name:</span> {{userInfo.firstName}}</p>
                <p><span :class="`user-attribute ${userInfo.gender}`">Last Name:</span> {{userInfo.lastName}}</p>
                <p><span :class="`user-attribute ${userInfo.gender}`">Gender:</span> {{userInfo.gender}}</p>
                <p><span :class="`user-attribute ${userInfo.gender}`">Email:</span> <a :class="`user-link-${userInfo.gender}`" :href="`mailto:${userInfo.email}`">{{userInfo.email}}</a></p>
                <p><span :class="`user-attribute ${userInfo.gender}`">Date of birth:</span> 
                    <span v-if="$fetchState.pending">...</span>
                    <span v-else-if="$fetchState.error">Error</span>
                    <span v-else>{{userInfo.dateOfBirth | convertDate}}</span></p>
                <p><span :class="`user-attribute ${userInfo.gender}`">Register date:</span>
                    <span v-if="$fetchState.pending">...</span>
                    <span v-else-if="$fetchState.error">Error</span>
                    <span v-else>{{userInfo.registerDate | convertDate}}</span></p>
                <p><span :class="`user-attribute ${userInfo.gender}`">Phone: </span><a :class="`user-link-${userInfo.gender}`" :href="`tel:${userInfo.phone}`">{{userInfo.phone}}</a></p>
                    
                <p><span :class="`user-attribute ${userInfo.gender}`">Location:</span> {{userInfo.location?.street}},</p> 
                <p>{{userInfo.location?.city}}, {{userInfo.location?.state}}</p>                  
                <p>{{userInfo.location?.country}}</p> 
                
                <p><span :class="`user-attribute ${userInfo.gender}`">Time zone:</span> {{userInfo.location?.timezone}} UTC</p>
            </div>
        </div>
        <nuxt-link class="back-link pt-md" to="/users" >Go back</nuxt-link>
    </section>
</template>
<script>
import axios from 'axios';
export default {
    data () {
        return {
            userInfo: {}
        }
    },
    async fetch () {
        const config = {
            headers: {
                'Accept': 'application/json',
                'app-id': '63943e0e85c0263aa117e1a8'
            }
        }
        try {
            // If the object is empty get fresh data
            if (Object.keys(this.userInfo).length === 0){
                const res = await(axios.get(`https://dummyapi.io/data/v1/user/${this.$route.params.id}`,config))
                this.userInfo = res.data;
            }
  
        } catch (err) {
            console.log(err)
        }
        
    }   
}
</script>
<style scoped>
p {
    padding:0;
    margin:0;
}
.user-section {
    display:flex;
    height:100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.user-info {
    width:70%;
    min-height:40rem;
    background-color: #ffd700;
    font-size:1.5rem;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    transition:all .5s;
    
}
@media screen and (max-width: 700px){
    .user-info {
        width:95%;
    } 
}
@media screen and (max-width: 470px){
    .user-info {
      font-size: 1.2rem;
    } 
}
.user-link-female {
    color:#027FC1;
    transition: all .5s;
}
.user-link-female:hover {
    color:#002b42;
}
.user-link-male {
    color:#dd6076;
    transition: all .5s;
}
.user-link-male:hover {
    color:#002b42;
}
.user-image {
    width: 80px;
    border-radius: 10px;
    margin-bottom:1rem;
}
.user-attribute {
    font-weight: bold;
}
.female {
    color:#dd6076;
}
.male {
    color:#027FC1;
}

.back-link {
    font-size: 1.2rem;
    color:#5c5c5c;
    
}
.back-link:hover {
    color:#a5a5a5;
    text-decoration: none;
}




</style>