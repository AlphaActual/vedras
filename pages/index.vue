<template>
  <div>
    <AppHeader/>
    <RobotsSection />
    <OfferSection />
    <CovidFree />
    <CallSection />
    <ServiceSection />
    <Footer />
    <nuxt-link class="users-link" to="/users"><button>Users</button></nuxt-link>
  </div>
</template>

<script>
 

export default {
  name: 'IndexPage',
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
