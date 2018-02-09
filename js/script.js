//JS
$(function(){ // czekanie na załadowanie DOM
  var carouselList = $("#carousel ul"); // pobieramy listę elementów i przypisujemy do zmiennej
	/*var timeChangeSlides = */setInterval(function(){ // funkcja 'setInterval' jest wykonywana co pewien okres czasu (a nie tylko raz po pewnym okresie czasu).
		carouselList.animate({marginLeft:-800}, 2000, function(){ // animacja/właściwości css animowanego elementu/czas animacji/funkcja która wykona się na końcu animacji ('callback') = animujemy wartość lewego marginesu.
			var firstItem = carouselList.find("li:first");
      var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
      // $(this).find("li:last").after($(this).find("li:first")); - również działa zamiast :6 :7 :8
			  carouselList.css({marginLeft:0});
		});
  });
});