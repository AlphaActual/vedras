<template>
    <button>{{ $t('download-btn')}}</button>
</template>
<script>
export default {
    name: 'ButtonPrimary',
    
}
</script>
<style scoped>
button {
    height: 57px;
    width: 216px;
    font-size: 16px;
    letter-spacing: -.29px;
    line-height: 36px;
    color: #FFFFFF;
    background-color: #027fc1;
    box-shadow:none;
    border:none;
    transition: all .15s ease-in-out;
}
button:hover {
    color: #027fc1;
    background-color: #FFFFFF;
    outline: 1px solid #027fc1;
}
    
</style>