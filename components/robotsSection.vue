<template lang="">
        <section class="robot-section plr-xxl">
            <div class="d-flex column-text">
                <p class="p1">U jeku trenutne situacije sa Co-vid19, naša je “event” branša potpuno zaustavljena. Zaista teško predviđamo početak velikih okupljanja i zabava kave priliče ljetu na kakvog smo navikli. Unatoč privremenoj stanci cijele event industrije, Vedras ne želi stajati po strani i čekati da se ova pandemija sama od sebe završi, već smo kao što to uvijek činimo, krenuli u nove pothvate i pobjede. Ovoga puta predstavljamo nešto sasvim novo, nešto što nije povezano sa našim uobičajenim poslovanjem. Predstavljamo nešto što će nam pomoći u borbi protiv ove pandemije i učiniti da se svi što prije vratimo normalnom životu.</p>
                <img class="logos robots-logo" src="~/assets/images/UVD-Robots-logo-tagline-black-website.png" alt="UVD Robots logo">
                <img class="logos boston-logo" src="~/assets/images/boston-medical-logo-color-jpg.png" alt="Boston medical logo">
                <p class="p2">Vedras d.o.o. Vas ovim putem želi informirati o dostupnosti autonomnog UV-dezinfekcijskog robota tvrtke Blue Ocean Robotics.</p>

            </div>

            <div class="d-flex robot-column">
                <img class="robot-image" src="~/assets/images/kill-stroj.png" alt="robot photo">
                <div class="blue-box delay-100 d-flex align-items-center"><span>ubija 99,99% mikroorganizama</span> </div>
            </div>
        </section>      
</template>
<script>
export default {
    name : 'RobotsSection'
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