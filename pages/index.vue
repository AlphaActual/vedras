<template>
  <div>
    <AppHeader/>
    <RobotsSection />
    <OfferSection />
    <CovidFree />
    <CallSection />
    <ServiceSection />
    <Footer />
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
      }
  },
  mounted () {
    if(process.browser){
      this.setupObserver('fade-from-bottom','visible');
      this.setupObserver('fade-in','visible');
    }
  }
  
}
</script>

<style scoped>

</style>
