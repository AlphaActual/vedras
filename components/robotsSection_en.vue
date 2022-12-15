<template lang="en">
        <section class="robot-section plr-xxl">
            <div class="d-flex column-text fade-from-bottom">
                <p class="p1">In the midst of the current situation with Co-vid19, our “event” industry is completely stopped. It is really hard to predict the start of big gatherings and coffee parties that are close to the summer we are used to. Despite the temporary pause of the entire event industry, Vedras does not want to stand aside and wait for this pandemic to end on its own, but as we always do, we are embarking on new ventures and victories. This time around, we are introducing something completely new, something unrelated to our usual business. We present something that will help us combat this pandemic and make everyone return to normal as soon as possible.</p>
                <img class="logos robots-logo" src="~/assets/images/UVD-Robots-logo-tagline-black-website.png" alt="UVD Robots logo">
                <img class="logos boston-logo" src="~/assets/images/boston-medical-logo-color-jpg.png" alt="Boston medical logo">
                <p class="p2">We want to inform you of the availability of a new autonomous UV disinfection robot from the Blue Ocean Robotics company.</p>

            </div>

            <div class="d-flex robot-column">
                <img class="robot-image fade-in" src="~/assets/images/kill-stroj.png" alt="fotografija robota čistača">
                <div class="blue-box delay-100 fade-in d-flex align-items-center"><span>kills 99,99% of microorganisms</span> </div>
            </div>
        </section>      
</template>
<script>
export default {
    name : 'RobotsSection_en'
}

</script>
<style scoped >

.robot-section {
    padding-top: 80px;
    padding-bottom: 80px; 
    display:flex;
    flex-direction: right;
    justify-content: space-between; 
    align-items:center; 
    
}
@media screen and (max-width: 800px) {
    .robot-section {
      flex-direction: column;
    }
}
.robot-image {
    margin-top: -50px;
    margin-bottom: 30px;
    max-width:100%;
}

@media screen and (max-width: 800px){
    .robot-image {
      margin-top: 30px;
    }
}
.robot-column {
    position:relative;
    width:50%;
    flex-direction: column;
}
.column-text {
    width:50%;
    flex-direction: column;
}
@media screen and (max-width: 800px){
    .robot-column, .column-text {
      width: 100%;
    }
}
.blue-box {
    text-transform: uppercase;
    height: 176px;
    width: 336px ;
    background-color: #027FC1;
    color:#FFFFFF;
    z-index: -1;
    
    padding: 0 30px 0 30px;
    margin-top: -150px;
    margin-left: 30px;
    
}
@media screen and (max-width: 1300px){
    .blue-box {
        margin-top: -130px;
    }
}
@media screen and (max-width: 1160px){
    .blue-box {
        margin-top: -100px;
    }
}
.blue-box span {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -.43px;
    line-height: 36px;
}
.p1 {
    padding-bottom: 30px;
}
.p2 {
    padding-top: 30px;
    padding-bottom: 0px;
}
.logos {
    margin-bottom:30px;
}
.robots-logo {   
  height: 161px;
  width: 303.42px;
}
.boston-logo {
    height: 64px;
    width: 366.81px;
}    
</style>