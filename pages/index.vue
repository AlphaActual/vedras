<template>
  <div>
    <AppHeader/>
    <RobotsSection />
    <PonudaSection />
    <CovidFree />
    <CallSection />
    <p>Ok ovo je neki paragraph iz indexa</p>
  </div>
</template>

<script>
import RobotsSection from '../components/robotsSection.vue';
import PonudaSection from '../components/poundaSection.vue';
import CovidFree from '../components/covidFree.vue';
import CallSection from '../components/callSection.vue';

export default {
  name: 'IndexPage',
  components:{
    RobotsSection,
    PonudaSection,
    CovidFree,
    CallSection
  }
}
</script>

<style scoped>

</style>
