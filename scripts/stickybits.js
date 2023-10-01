$(document).ready(function(){
  // get viewport width / height
  var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight-100||e.clientHeight||g.clientHeight,
      pages = $('.sticky-wrapper'),
      pagesCache = {};
   
  // prevent body from collapsing when pages are pinned by explicitly setting height after page has loaded but before we reposition the pages
  $('body').css({'height' : $('body').height() })
  // reverse loop so offsets aren't affected by repositioned pages
  for (var i = pages.length; i--; ) {
    var _this = pages.eq(i),
        top = _this.offset().top
    // layer z-index properly
    _this.css({
      'z-index' : 10*i+100,
      'height' : y + 'px',
      'top' : top + 'px',
      'position' : 'absolute'
    })    
    // cache it
    pagesCache[i] = { "node": _this, "offset": top }
  }
   
  $(w).scroll(function() {
    // what the y position of the scroll is
    var scrollPos = e.scrollTop
    // compare to cached objects
    for (obj in pagesCache) {
      if (scrollPos >= pagesCache[obj].offset) {
        pagesCache[obj].node.addClass('wrapper-fixed')
      } else {
        pagesCache[obj].node.removeClass('wrapper-fixed')
      }
    }
  });  
});