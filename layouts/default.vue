<template>
    <div class="main-wrapper">
        <nuxt/>
    </div>
</template>
<script>
export default {
    
}
</script>
<style >

body {
    font-family: 'Titillium Web', sans-serif;
    color:#5C5C5C;
}
.transition1 {
    
    transition: all 1s cubic-bezier(.36,.69,.3,.64);
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0.36, 0.69, 0.3, 0.64);
    transition-delay: 0s;
    transition-property: all;
}
.delay-100 {
  transition-delay: 1s;
}

/* * {
    outline: 1px solid red;
} */


    
</style>