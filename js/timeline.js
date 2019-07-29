const data = [
  { dateLabel: 'June 2015', title: 'Business Idea' },
  { dateLabel: 'August 2015', title: 'Company Registered In UK' },
  { dateLabel: 'May 2016', title: 'Deploy Beta-version' },
  { dateLabel: 'October 2016', title: 'Company Registered In Estonia' },
  { dateLabel: 'April 2017', title: 'Consolidation Development team' },
  { dateLabel: 'May 2017', title: 'Whitepaper and Business plan V1.01' },
  { dateLabel: '2018', title: 'Whitepaper Evolution V2.0' },
  { dateLabel: '2nd Apr - 2nd May, 2019', title: 'Pre-Sale whitelist' },
  { dateLabel: '3rd May - 15th May, 2019', title: 'Private sale' },
  { dateLabel: '17th May - 17th Jun, 2019', title: 'Public sale whitelist' },
  { dateLabel: '17th May - 17th Jun, 2019', title: 'Public sale' },
  { dateLabel: 'Q2 2019', title: 'Full-feature of Centralize Exchange' },
  { dateLabel: 'Q2 2019', title: 'Launch the Full-version cryptocurrency exchange' },
  { dateLabel: 'Q3 2019', title: 'Launch the WOX Blockchain Laboratory' },
  { dateLabel: 'Q3 2019', title: 'Start MainNet and DApp Development' },
  { dateLabel: 'Q4 2019', title: 'Itegrate WOX TestNet with BTCBear DEX' },
  { dateLabel: 'Q1 2020', title: 'DEPS Development Beginning' },
];

new Vue({
  el: '#app', 
  data: {
    steps: data,
  },
  mounted() {
    var swiper = new Swiper('.swiper-container', {
      //pagination: '.swiper-pagination',
      slidesPerView: 4,
      paginationClickable: true,
      grabCursor: true,
      paginationClickable: true,
      nextButton: '.next-slide',
      prevButton: '.prev-slide',
    });    
  }
})