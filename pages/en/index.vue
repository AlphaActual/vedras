<template>
  <div> 
    <AppHeader_en />
    <RobotsSection_en />
    <OfferSection_en />
    <CovidFree_en />
    <CallSection_en />
    <ServiceSection_en />
    <Footer_en />
    <nuxt-link class="users-link" to="/users"><button>Users</button></nuxt-link>
  </div>
</template>

<script>
import AppHeader_en from '~/components/appHeader_en.vue';
import RobotsSection_en from '~/components/robotsSection_en.vue';
import OfferSection_en from '~/components/offerSection_en.vue';
import CovidFree_en from '~/components/covidFree_en.vue';
import CallSection_en from '~/components/callSection_en.vue';
import ServiceSection_en from '~/components/serviceSection_en.vue';
import Footer_en from '~/components/footer_en.vue';

export default {
  name: 'IndexPage_en',
  components: {
    AppHeader_en,
    RobotsSection_en,
    OfferSection_en,
    CovidFree_en,
    CallSection_en,
    ServiceSection_en,
    Footer_en
  },
  methods : {
    setupObserver(observedClass, classToBeAdded) {
      const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add(classToBeAdded);
          };                   
        })
      })
      const elementsToObserve = document.querySelectorAll(`.${observedClass}`);
      elementsToObserve.forEach(el => observer.observe(el));
    },
    removeClass(removeFromClass ,classToRemove){
      const elements = document.querySelectorAll(`.${removeFromClass}`);
      elements.forEach(el => el.classList.remove(classToRemove));
    }
  },
  mounted () {
      this.setupObserver('fade-from-bottom','visible');
      this.setupObserver('fade-in','visible');
  },
  activated() {
    this.removeClass('fade-from-bottom','visible');
    this.removeClass('fade-in','visible');
  }
  
}
</script>

<style scoped>
.users-link {
  display:block;
  position:fixed;
  bottom:40px;
  right:60px;
  width:40px;

}
button {
    color: #FFFFFF;
    background-color: #027fc1;
    box-shadow:none;
    border:none;
    transition: all .15s ease-in-out;
    padding:.5rem 1rem;
}
button:hover {
    color: #027fc1;
    background-color: #FFFFFF;
    outline: 1px solid #027fc1;
    
}

</style>
