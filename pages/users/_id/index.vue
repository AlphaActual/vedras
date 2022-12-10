<template>
    <section class="user-section">
        <div class="user-info">
            <p>Title:</p>
            <p>First Name:</p>
            <p>Last Name:</p>
            <p>Gender:</p>
            <p>Email:</p>
            <p>Date of birth:</p>
            <p>Register date:</p>
            <p>Phone</p>
            <img src="https://randomuser.me/api/portraits/med/women/89.jpg">
            <p>Location:</p>
        </div>
        <a class="back-link pt-md" href="/">Go back</a>
        <!-- {{$route.params.id}} -->
    </section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
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
.back-link {
    font-size: 1.2rem;
    color:#5c5c5c;
    
}
.back-link:hover {
    color:#a5a5a5;
    text-decoration: none;
}
    
</style>