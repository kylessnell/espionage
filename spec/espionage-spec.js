beforeEach(function() {
  $("<a href='#' id='click-me' data-track='next-brand-button'></a>").appendTo('body');
  $("<script> var _gaq = _gaq || []; </script>").appendTo('body');
});

describe('clicking an anchor with a data-track attributes', function() {
  it('adds the click event to the GA event tracking queue', function() {
    $('a[data-track]').trigger('click');
    expect(_gaq[0]).toEqual(['_trackEvent', 'next-brand-button', 'click']);
  });
});
