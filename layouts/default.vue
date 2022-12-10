<template>
    <div class="main-wrapper">
        <nuxt/>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

body {
    font-family: 'Titillium Web', sans-serif;
    color:#5C5C5C;
}

/* transitions */
.transition1 {
    
    transition: all 1s cubic-bezier(.36,.69,.3,.64);
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0.36, 0.69, 0.3, 0.64);
    transition-delay: 0s;
    transition-property: all;
}
.delay-100 {
  transition-delay: 1s;
}

/* * {
    outline: 1px solid;
    
} */


/* sizes */
.plr-xs {
  padding-left: 10px;
  padding-right: 10px;
}
.plr-md {
  padding-left: 50px;
  padding-right: 50px;
}
.plr-lg {
  padding-left: 80px;
  padding-right: 80px;
}
.plr-xxl {
    padding-left: 13.125vw;
    padding-right: 13.125vw;
}
@media screen and (max-width: 1679px) {
    .plr-xxl {
      padding-left: 10vw;
      padding-right: 10vw;
    }
}
@media screen and (max-width: 700px){
    .plr-xxl {
      padding-left: 20px;
      padding-right: 20px;
    }
    
}
.pr-lg {
  padding-right: 80px;
}
.mr-xs {
  margin-right: 10px;
}
.ml-xs {
  margin-left: 10px;
}
.mr-lg {
  margin-right: 80px;
}

.ptb-sm {
  padding-top: 30px;
  padding-bottom: 30px;
}
.ptb-md {
  padding-top: 50px;
  padding-bottom: 50px;
}

.ptb-lg {
  padding-top: 80px;
  padding-bottom: 80px;
}
.ptb-xl {
  padding-top: 120px;
  padding-bottom: 120px;
}
.ptb-xxl {
  padding-top: 160px;
  padding-bottom: 160px;
}
@media screen and (max-width: 600px){

  .ptb-xxl {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}
.ptb-sm {
  padding-top: 30px;
  padding-bottom: 30px;
}
.pt-sm {
  padding-top: 30px;
}
.pb-sm {
  padding-bottom: 30px;
}
.pb-md {
  padding-bottom: 50px;
}

/* headers */
.header3 {
  color: #fff;
  font-size: 36px;
  font-weight: 700;
  line-height: 48px;
}
@media screen and (max-width: 700px){
    .header3 {
    font-size: 25px;
    }
}
/* paragraphs */
.p-styled {
  color: #fff;
  font-size: 16px;
  letter-spacing: -.29px;
  line-height: 32px;

}
@media screen and (max-width: 700px){
    .p-styled {
      line-height: 25px;
    }
}
/* links */
a {
    text-decoration: none;
    color: #FFFFFF;
    transition: all .3s;
}
a:hover {
    color:#d8d2d2;
    text-decoration:underline;
}

/* sections */

/* divs */



    
</style>