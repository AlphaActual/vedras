<template>
    <section class="offer-section plr-xxl ptb-lg">
        <div class="txt-column new-div pr-lg">
            <h3 class="header3 pb-sm">{{ $t('offer-title') }}</h3>
            <p>{{ $t('desinfection-p') }}</p>
            <ul>
                <li class="list-item">{{ $t('turism-li') }}</li>
                <li class="list-item">{{ $t('industry-li') }}</li>
                <li class="list-item">{{ $t('public-li') }}</li>
            </ul> 
            <p class="p-styled ptb-sm">{{ $t('robots-p') }}</p> 
            <a target="_blank" href="http://www.uvd-robots.com/" ><b>{{ $t('robots-details') }}</b></a>
        </div> 
        
        <div class="image-column mr-lg delay-50 fade-in"></div>
    </section>
</template>
<script>
export default {
    name:'OfferSection'
    
}
</script>
<style scoped>
.offer-section{
    display:flex;
    background-color: #027FC1;
    color:#FFFFFF;
    justify-content: space-between;
    align-items:center;
}
.image-column {
    background-image: url('~assets/images/offer.png');
    background-size: cover;
    height: 574px;
    width: 42.96vw;
    transition: all .5s;
    background-position-x: 50%;
}
.txt-column {
    width:40%;
    display:flex;
    flex-direction: column;
}
ul {
    padding-left: 20px;
}
.list-item {
  font-weight: 700;
  color: #fff;
  font-size: 16px;
  letter-spacing: -.29px;
  line-height: 32px;
  transition: all .3s; 
} 
@media screen and (max-width: 700px){
    .list-item {
      line-height: 25px;
    } 
}

@media screen and (min-width: 1065px){
    .offer-section {
      padding-right: 0;
    }
}
@media screen and (max-width: 1065px){
    .offer-section {
      flex-direction: column;
    }
    .txt-column {
      width: 100%;
      padding-right: 0;
    }
    .image-column {
      width: 100%;
      margin-right: 0;
      margin-top: 50px;
      height: 36.2vh;
      min-height: 300px;
    }
}
</style>