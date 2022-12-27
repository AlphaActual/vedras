<template>
    <footer class="footer ptb-xl plr-xxl">
        <p class="">{{ $t('more-info-p') }}</p> 
        <div class="footer-wrapper">
            <a :href="`mailto:${$t('email')}`"><b class="fade-from-bottom">{{ $t('email') }}</b></a> 
            <p class="plr-xs fade-from-bottom"> {{ $t('or-call-p') }} </p> 
            <a href="tel:385989608920"><b class="fade-from-bottom">+385 98 9608 920</b></a>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>
<style scoped>
.footer {
    background-color:#027FC1;
    color:#FFFFFF;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.footer-wrapper {
    display:flex;
    flex-direction: row;
}
@media screen and (max-width: 855px) {
    .footer-wrapper {
      flex-direction: column;
    }
}
.footer {
    color: #ffffff;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
    
}
@media screen and (max-width: 700px) {
    .footer {
      font-size: 25px;
      line-height: 32px;
    }
}
footer p {
    margin:0;
}

</style>