// JavaScript Document
$(document).ready(function() {

  var pageCount = 1
	  ,items = 10
	  ,_url = 'http://www.stellarbiotechnologies.com/media/press-releases/json'
	  ,feedEnd = false
	  ,$loader = $('.loader img');
  
  var page = function(){
	this.offset = Math.abs(items * pageCount);
	$.ajax({
	  dataType: 'json',
	  url: _url+'?limit='+items+'&offset='+this.offset
	}).done(function(data) {
	  var arrayLength = data.news.length;
	  if( arrayLength == 0 ) feedEnd = true;
	  if(!feedEnd){
		$loader.fadeIn(600, function(){
		  for (var i = 0; i < arrayLength; i++){
			var title = data.news[i].title
			,publishedDate = data.news[i].published
			,displayDate = moment(publishedDate).format('MMMM Do YYYY');
			$('.list').append('<div class="item"><h2>'+title+'</h2><div>'+displayDate+'</div></div>');
		  }
		  $loader.fadeOut(600);
		});
	  }
	}).fail(function() {
	  alert('Could not retrieve AJAX data');
	});
	pageCount++;
  };
  
  page();
  
  setInterval(function(){
	var totalPercentage = 99;
	var scrollTo = $(window).scrollTop(),
	  docHeight = $(document).height(),
	  winHeight = $(window).height();
	  scrollPercent = (scrollTo / (docHeight-winHeight)) * 100;
	  scrollPercent = scrollPercent.toFixed(1);
	if(scrollPercent > totalPercentage) {
	  page();
	}
  }, 1000);

});