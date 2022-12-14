<template>
    <section class="ptb-xxl plr-xxl covid-section">
        <div class="covid-image fade-in mr-xs"></div>
        <div class="covid-text delay-50 fade-from-bottom ml-xs plr-lg ptb-md">
            <h3 class="covid-title">#covidfree</h3>
            <p class="ptb-sm">Primjenom Ultraljubičastog svjetla, (ultravioletnog, UV-c), UVD-robot uništava strukturu DNA u svim mikroorganizmima.</p> 
            <p>Pružamo uslugu čišćenja velikih i malih prostora, uz pomoć robota, koji u najkraćem mogućem roku i autonomno dezinficiraju zatvorene prostore gdje sigurnost i “osjećaj čistoće” mora biti na prvom mjestu.</p>
        </div>
    </section>
</template>
<script>
export default {
    name: 'CovidFree'
}
</script>
<style scoped>
.covid-section {
    display:flex;
    align-items: center;
    justify-content: center;
}
@media screen and (max-width: 1000px){
    .covid-section {
        flex-direction:column-reverse;
    }
}

.covid-image { 
    background-image: url('~assets/images/1_9JdjVS0SJanGma8Nt63dGw (1).jpg');
    background-size: cover;
    height: 464px;
    width: 695.13px;
}
@media screen and (max-width: 1000px){
    .covid-image {
      width: 100%;
      height: 42.96vh;
      min-height: 300px;
      background-position-y: 100%;
    }
}

.covid-text {
    height: 464px;
    width: 695px;
    box-shadow: 0 2px 32px 0 rgba(0,0,0,.14);
    display:flex;
    flex-direction: column;
    justify-content: center;
}
@media screen and (max-width: 1000px){
    .covid-text {
      width: 100%;
      height: auto;
      margin-bottom: 50px;
      margin-left: 0;
    }
}
.covid-text p {
    margin:0;
}
.covid-title {
  color: #5c5c5c;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -.64px;
  line-height: 48px;
}
@media screen and (max-width: 700px){
    .covid-title{
      font-size: 25px;
      line-height: 32px;
    }
}
    
</style>