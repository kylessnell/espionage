(function ($) {
  $.fn.googleAnalyticsTrackClick = function() {
    var trackableLink = $('a[data-track]')
    trackableLink.on('click', function(e) {
      var trackingLabel = $(e.currentTarget).attr('data-track')
      _gaq.push(['_trackEvent', trackingLabel, 'click'])
    });
  };
})(jQuery);
