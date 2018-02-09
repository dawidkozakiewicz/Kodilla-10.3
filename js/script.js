$(function() {
  var carouselList = $("#carousel ul");
  setInterval(function() {
    carouselList.animate({
      marginLeft: -800
    }, 2000, function() {
      var firstItem = carouselList.find("li:first");
      var lastItem = carouselList.find("li:last");
      lastItem.after(firstItem);
      carouselList.css({
        marginLeft: 0
      });
    });
  });
});
