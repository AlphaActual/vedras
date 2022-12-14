<template>
    <header class="header container-fluid">
        <Navbar/>
        <section class="row justify-content-center section">
            <div class="col text-light text-center ">
                <img class="vedras-logo" src="~/assets/images/Group 4.svg" alt="logo">
                <hr class="divider text-light  px-1">
                <h1 class="fade-from-bottom">on hold</h1>
                <div class="row justify-content-center icon-container ">
                    <!-- icons -->
                    <a target="_blank" href="https://www.instagram.com/vedrasgroup/?hl=en">
                        <img class="social-icon" width="18px" height="18px" src="~/static/logo-instagram.svg" alt="instagram icon">
                    </a>
                    
                    <a target="_blank" href="https://www.facebook.com/vedrasevents/">
                        <img class="social-icon" width="18px" height="18px" src="~/static/401-facebook.svg" alt="facebook icon">
                    </a>

                    <a target="_blank" href="https://www.linkedin.com/company/42940956/">
                        <img class="social-icon" width="18px" height="18px" src="~/static/459-linkedin2.svg" alt="linkedin icon">
                    </a>
                </div>
            </div>
        </section>
    </header>
</template>
<script>


export default {
    name : 'AppHeader'  
}
</script>
<style scoped>

.section {
    padding-top:55px;
}
.header {
    background-image: url('~assets/images/Group 6.jpg');
    background-size: auto;
    background-position: center;
    color: #FFFFFF;
    height:347px;
    
}
.divider {
    /*  */
    height:1px;
    background-color:white;
    width: 437px;
    margin-top:24px;
    margin-bottom: 24px;
    
    
}
h1 {
    font-weight: 700;
    font-size: 36px;
    text-transform: uppercase;
}
.social-icon {
    background-color:white;
    padding:3px;
    margin:10px;
    border-radius:50%;
    font-size: 20px;
    transition: all .5s;
}
.social-icon:hover {
    background-color:#d8d2d2;
}

@media screen and (max-width: 700px){
    .section {
    padding-top:30px;
}
    .vedras-logo {
        padding-top: 50px;
    }
    .divider {
        width: 90%;
        margin-top:30px;
        margin-bottom:30px;
        
    }

}
</style>