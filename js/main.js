$(function(){
  wow = new WOW(
    {
      animateClass: 'animated fadeInUp',
      offset:       50,
      mobile:       true,  // false
      callback: function(box){ }
    }
  );
  wow.init();

});
