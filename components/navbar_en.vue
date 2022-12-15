<template lang="">
    <div class="container">
        <div class="row justify-content-end">
            <nav class="d-flex">
                <b class="d-none d-sm-inline">Contact us</b> 
                <a class="email px-2" href="mailto:info@vedras.hr">info@vedras.hr</a> 
                <a class="tel pr-5" href="tel: +385 98 9608 920">+385 98 9608 920</a>
                <nuxt-link to="/"><b>HR</b></nuxt-link>
            </nav>   
        </div>
    </div>
</template>
<script>
export default {
    name : 'Navbar_en'
}
</script>
<style scoped>
    .container {
        position: absolute;
        top:0;
        right:0;
        padding-right:10vw;
    }
    nav {
        padding:32px 10px 20px 0;
    }
    
    @media screen and (max-width: 700px){
        .container {
            padding-right:0;
            margin-right:20px;
        }
    }
    @media screen and (max-width: 400px){
        .email, .tel {
            font-size: 13px;
         }
    }
    
</style>