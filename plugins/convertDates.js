import Vue from 'vue'

export default () => {
  Vue.filter('convertDate', function (isoStrDate) {
    const dateObj = new Date(isoStrDate);

    const str_year = dateObj.getUTCFullYear();
    const str_month = ('0' + (dateObj.getUTCMonth()+1)).slice(-2);
    const str_day = ('0' + dateObj.getUTCDate()).slice(-2);
    return `${str_day}.${str_month}.${str_year}`
     
  })
}

// Info o filterima
// https://akshit.dev/blog/implementing-filters-in-nuxt/