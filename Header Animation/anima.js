$(
  function() {
  $('.shape').addClass("shape-border");
  $('.svg-wrapper').click(function() {
    $('.shape').toggleClass('shape-border');
  });
}
);
