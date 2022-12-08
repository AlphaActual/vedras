<template lang="">
    <header class="header">
        <Navbar/>
        <section>
            <div class="text-light">
                <img src="~/assets/images/Group 4.svg" alt="logo">
                <hr>
                <h1>ON HOLD</h1>
                <div class="row justify-content-center icon-container ">
                    <!-- icons -->
                    <i class="fa-brands fa-instagram align-middle social-icons"></i>
                    <i class="fa-brands fa-facebook-f align-middle social-icons"></i>
                    <i class="fa-brands fa-linkedin-in align-middle social-icons"></i>
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

.header {
    background-image: url('~assets/images/Group 6.jpg');
    background-size: cover;
}
.icon-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    margin: 1em;
}
.social-icons {
     
    width: 1.5em;
    height: 1.5em;
    background-color: white;
    color: black;
    border-radius: 50%;
    
}
    
</style>