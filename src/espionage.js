$(function (){
  $('body').delegate('a[data-track]', 'click', function(e){
    var trackingLabel = $(e.currentTarget).attr('data-track');
    _gaq.push(['_trackEvent', trackingLabel, 'click']);
  });
})
