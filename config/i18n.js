// english locale
import header_en from '../locales/en/appHeader.json'
import navbar_en from '../locales/en/navbar.json'
import robots_en from '../locales/en/robotsSection.json'
import offer_en from '../locales/en/offerSection.json'
import covidFree_en from '../locales/en/covidFree.json'
import call_en from '../locales/en/callSection.json'
import service_en from '../locales/en/serviceSection.json'
import footer_en from '../locales/en/footer.json'


const en = {...header_en, ...navbar_en, ...robots_en, ...offer_en, ...covidFree_en, ... call_en, ...service_en, ...footer_en}

// croatian locale
import header_hr from '../locales/hr/appHeader.json'
import navbar_hr from '../locales/hr/navbar.json'
import robots_hr from '../locales/hr/robotsSection.json'
import offer_hr from '../locales/hr/offerSection.json'
import covidFree_hr from '../locales/hr/covidFree.json'
import call_hr from '../locales/hr/callSection.json'
import service_hr from '../locales/hr/serviceSection.json'
import footer_hr from '../locales/hr/footer.json'


const hr = {...header_hr, ...navbar_hr, ...robots_hr, ...offer_hr, ...covidFree_hr, ...call_hr, ...service_hr, ...footer_hr}



export default {

  locale: 'hr',

  fallbackLocale: 'en',

  messages: { en, hr }

}

// https://phrase.com/blog/posts/nuxt-js-tutorial-i18n/?fbclid=IwAR1RoRJu60LrD_jGVGkMMtv9DrF3KCdsDWm_NcQHp_XbZuNMaig6Fz3s69E