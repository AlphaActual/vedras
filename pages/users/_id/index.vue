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
                <p><span :class="`user-attribute ${userInfo.gender}`">Date of birth:</span> {{userDates.dateOfBirth?.day}}.{{userDates.dateOfBirth?.month}}.{{userDates.dateOfBirth?.year}}.</p>
                <p><span :class="`user-attribute ${userInfo.gender}`">Register date:</span> {{userDates.registerDate?.day}}.{{userDates.registerDate?.month}}.{{userDates.registerDate?.year}}.</p>
                <p><span :class="`user-attribute ${userInfo.gender}`">Phone: </span><a :class="`user-link-${userInfo.gender}`" :href="`tel:${userInfo.phone}`">{{userInfo.phone}}</a></p>
                    
                <p><span :class="`user-attribute ${userInfo.gender}`">Location:</span> {{userInfo.location?.street}},</p> 
                <p>{{userInfo.location?.city}}, {{userInfo.location?.state}}</p>                  
                <p>{{userInfo.location?.country}}</p> 
                
                <p><span :class="`user-attribute ${userInfo.gender}`">Time zone:</span> {{userDates.location?.timezone}} UTC</p>
            </div>
        </div>
        <a class="back-link pt-md" href="/users">Go back</a>
    </section>
</template>
<script>
import axios from 'axios';
export default {
    data () {
        return {
            userInfo: {},
            userDates: {}
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
            const res = await(axios.get(`https://dummyapi.io/data/v1/user/${this.$route.params.id}`,config))
            console.log(res)

            //////////    SIMULACIJA KASNJENJA PODATAKA
            // function sendData() {
            //     return new Promise(resolve => {
            //         setTimeout(() => {
            //             resolve({"id":"60d0fe4f5311236168a109cb","title":"miss","firstName":"Edita","lastName":"Vestering","picture":"https://randomuser.me/api/portraits/med/women/89.jpg","gender":"female","email":"edita.vestering@example.com","dateOfBirth":"1956-04-09T00:10:35.555Z","phone":"(019)-646-0430","location":{"street":"1371, Dilledonk-Zuid","city":"Den Bommel","state":"Gelderland","country":"Netherlands","timezone":"-5:00"},"registerDate":"2021-06-21T21:02:07.533Z","updatedDate":"2021-06-21T21:02:07.533Z"});
            //         }, 4000);
            //     });
            // }
            // const res = await sendData();
            // this.userInfo = res;

               
            this.userInfo = res.data;
            
            


            //this.userInfo = {"id":"60d0fe4f5311236168a109cb","title":"miss","firstName":"Edita","lastName":"Vestering","picture":"https://randomuser.me/api/portraits/med/women/89.jpg","gender":"female","email":"edita.vestering@example.com","dateOfBirth":"1956-04-09T00:10:35.555Z","phone":"(019)-646-0430","location":{"street":"1371, Dilledonk-Zuid","city":"Den Bommel","state":"Gelderland","country":"Netherlands","timezone":"-5:00"},"registerDate":"2021-06-21T21:02:07.533Z","updatedDate":"2021-06-21T21:02:07.533Z"};
            
            this.convertDates('dateOfBirth',this.userInfo.dateOfBirth)
            this.convertDates('registerDate',this.userInfo.registerDate)
            this.convertDates('updatedDate',this.userInfo.updatedDate)
            
        } catch (err) {
            console.log(err)
        }
        
    },
    methods: {
        convertDates (attribute, isoStrDate) {
            const dateObj = new Date(isoStrDate);

            const str_year = dateObj.getUTCFullYear();
            const str_month = ('0' + (dateObj.getUTCMonth()+1)).slice(-2);
            const str_day = ('0' + dateObj.getUTCDate()).slice(-2);

            this.userDates[attribute] = {
                day: str_day,
                month : str_month,
                year : str_year
            }; 
             
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