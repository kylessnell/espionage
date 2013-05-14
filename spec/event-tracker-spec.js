beforeEach(function() {
  $("<a href='#' data-track='next-brand-button'></a>").appendTo('body');
  $("<script> var _gaq = _gaq || []; </script>").appendTo('body');
  this.addMatchers({
    toBeTracked: function(trackingLabel) {
      var isTracked = _gaq[0] == ['_trackEvent', trackingLabel, 'click'];
    }
  });
});

describe('googleAnalyticsTrackClick', function() {
  it('adds events to the GA event tracking queue when elements with a data-track attribute are clicked', function() {
   var trackableLink = $("a[data-track='next-brand-button']");
   trackableLink.on('click', function() {
     expect($(trackableLink)).toBeTracked('next-brand-button');
   });
  });
});
