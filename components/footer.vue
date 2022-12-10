<template>
    <footer class="footer ptb-xl plr-xxl">
        <p class="">Za više informacija pišite nam na mail:</p> 
        <div class="footer-wrapper">
            <a href="mailto:info@vedras.hr"><b>info@vedras.hr</b></a> 
            <p class="plr-xs"> ili nazovite broj </p> 
            <a href="tel:385989608920"><b>+385 98 9608 920</b></a>
        </div>
    </footer>
</template>


<!-- <template>
    <footer class="footer ptb-xl plr-xxl">
        <p class="contact-text">Za više informacija pišite nam na mail:</p> 
        <div class="div-footer u-flex u-flex-fd--r">
            <a href="mailto:info@vedras.hr" class="contact-text grey-hover"><b>info@vedras.hr</b></a> 
            <p class="contact-text plr-xs fromBottom below-viewport in-viewport">ili nazovite broj</p> 
            <a href="tel:385989608920" class="contact-text grey-hover bold fromBottom in-viewport">+385 98 9608 920</a>
        </div>
    </footer>
</template> -->

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