<template>
    <section class="offer-section plr-xxl ptb-lg">
        <div class="txt-column new-div pr-lg">
            <h3 class="header3 pb-sm">New in our offer!</h3>
            <p>Secure robot disinfection and sterilization with applications in: </p>
            <ul>
                <li class="list-item">Tourism (hotels, apartments, holiday homes, mobile homes ...)</li>
                <li class="list-item">Industry (factories, warehouses, plants ...) </li>
                <li class="list-item">Public places (health centers, kindergartens, schools, colleges, offices, airports, stations, fitness gyms, shopping centers ...)</li>
            </ul> 
            <p class="p-styled ptb-sm">Robots designed to clean operating rooms and laboratories are now disinfecting your business and private spaces.</p> 
            <a target="_blank" href="http://www.uvd-robots.com/" ><b>More details about UVD Robots</b>  </a>
        </div> 
        
        <div class="image-column mr-lg delay-50 fade-in"></div>
    </section>
</template>
<script>
export default {
    name:'OfferSection_en'
    
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