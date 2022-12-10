<template>
    <div>
        <p>{{user.title}}</p>
        <p>{{user.firstName}}</p>
        <p>{{user.lastName}}</p>
        <img :src="user.picture" alt="user photo">
        <hr>
        
    </div>
</template>
<script>
export default {
    name: 'User',
    props: {
        user: Object
    }
}
</script>
<style scoped >
    
</style>