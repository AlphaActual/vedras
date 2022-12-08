<template lang="">
    <div class="container">
        <div class="row justify-content-end">
            <nav class="d-flex">
                <b class=" d-none d-sm-inline">Kontaktirajte nas</b> 
                <a class="email px-2" href="mailto:info@vedras.hr">info@vedras.hr</a> 
                <a class="tel pr-5" href="mailto:info@vedras.hr">+385 98 9608 920</a>
                <a href="/"><b>EN</b></a>
            </nav>   
        </div>
    </div>
</template>
<script>
export default {
    name : 'Navbar'
}
</script>
<style scoped>
    nav {
        padding:30px 0 20px 0;
    }
    a {
        text-decoration: none;
        color: #FFFFFF;
    }
    a:hover {
        color:#d8d2d2;
        text-decoration:underline;
    }
    
</style>