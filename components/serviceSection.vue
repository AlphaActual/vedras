<template>
    <section class="service-section ptb-xl plr-xxl">
        <div class="text-column delay-50 fade-in plr-md mr-lg ">
            <h3 class="header3">{{ $t('includes-h3') }}</h3> 
            <ul class="pt-sm pb-md">
                <li class="li-service">{{ $t('robot-transport-li') }}</li>
                <li class="li-service">{{ $t('mapping-li') }}</li>
                <li class="li-service">{{ $t('control-li') }}</li> 
                <li class="li-service">{{ $t('removal-li') }}</li>
            </ul> 
            <a href="http://vedras.hr/download/Vedras_dezinfekcija_UVD_Robotima.pdf" target="_blank">
                <Button  />
            </a>
        </div>

        <div class="image-column delay-20 fade-from-bottom"></div>
    </section>
</template>
<script>
export default {
    name : 'ServiceSection',
    
}
</script>
<style scoped>
.service-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
@media screen and (max-width: 1010px) {
    .service-section {
      flex-direction: column;
    }
}
.text-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 2px 32px 0 rgba(0,0,0,.14);
    width: 39vw;
    height: 64.26vh;
}
@media screen and (max-width: 1010px){
    .text-column {
      width: 100%;
      height: auto;
      margin-bottom: 50px;
      padding-top: 50px;
      padding-bottom: 50px;
      margin-right: 0;
    }
}
.text-column .header3 {
  color: #5c5c5c;
  font-size: 36px;
  font-weight: 700;
  line-height: 50px;
}
.text-column ul {
    padding-left: 20px;
}
.image-column {
    background-image: url('~assets/images/91448396_10158792383403455_4586978351473754112_n-1 (1).jpg');
    background-size: cover;
    height: 64.26vh;
    width: 30.21vw;
    background-position-y: 80%;
}
@media screen and (max-width: 1360px){
    .image-column {
      background-position-x: 50%;
    }

}
@media screen and (max-width: 1010px){
    .image-column {
      width: 50%;
    }
}
@media screen and (max-width: 700px){
    .image-column {
      width: 100%;
    }
}
    
</style>