<template>
    <section class="call-section">
        <div class="call-image"></div>

        <div class="call-text plr-md ptb-md">
            <p class="plr-md">You want to provide a secure place to stay or work for your costumers or employees. Search no more and contact us now. Let your spaces be #covidfree</p>
        </div>
    </section>
</template>
<script>
export default {
    name: 'CallSection_en'
}
</script>
<style scoped>
    .call-section {
        display:flex;
    }
    
    .call-image {
        background-image: url('~/assets/images/Group 7.jpg');
        background-size: cover;
        height: 631px;
        width: 50%;
    }
    .call-text {
        display:flex;
        align-items: center;
        width: 50%;
        background-color: #027fc1;
    }
    @media screen and (max-width: 1010px){
        .call-section{
          flex-direction: column-reverse;
        }
        .call-image {
            width: 100%;
            height: 55vh;
            min-height: 300px;
        }
        .call-text {
            width: 100%;
        }
    }
    @media screen and (max-width: 1540px){
        .call-image {
          background-position-x: 100%;
        }
    }
    .call-text p {
        font-size: 36px;
        font-weight: 700;
        letter-spacing: -.64px;
        line-height: 55px;
        color: #fff;
    }
    @media screen and (max-width: 700px){
        .call-text p {
        font-size: 25px;
        padding-left: 0;
        padding-right: 0;
        line-height: 32px;
        }

    }

</style>