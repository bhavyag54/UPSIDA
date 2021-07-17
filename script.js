const dropdowns = document.getElementsByClassName('dropdown');
const y = document.body.offsetWidth;
console.log(y);

for(let i =0; i < dropdowns.length;i++)
{
    dropdowns[i].addEventListener('click', () => {

        for(let j =0; j < dropdowns.length;j++)
        {
            if(dropdowns[j].childNodes[3].classList[1] === 'show' && j !== i)
            {
                console.log("run");
                dropdowns[j].childNodes[3].click();
            }
        }

        dropdowns[i].childNodes[3].style.left = `-${(document.documentElement.scrollWidth - window.innerWidth)*2}px`;
    })
}

// scroll part
jQuery.fn.liScroll = function(settings) {
    settings = jQuery.extend({
      travelocity: 0.03}, settings);		
      return this.each(function(){
          var $strip = jQuery(this);
          $strip.addClass("newsticker")
          var stripHeight = 1;
          $strip.find("li").each(function(i){
            stripHeight += jQuery(this, i).outerHeight(true);
          });
          var $mask = $strip.wrap("<div class='mask'></div>");
          var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");								
          var containerHeight = $strip.parent().parent().height();	//a.k.a. 'mask' width 	
          $strip.height(stripHeight);			
          var totalTravel = stripHeight;
          var defTiming = totalTravel/settings.travelocity;	// thanks to Scott Waye		
          function scrollnews(spazio, tempo){
          $strip.animate({top: '-='+ spazio}, tempo, "linear", function(){$strip.css("top", containerHeight); scrollnews(totalTravel, defTiming);});
          }
          scrollnews(totalTravel, defTiming);				
          $strip.hover(function(){
          jQuery(this).stop();
          },
          function(){
          var offset = jQuery(this).offset();
          var residualSpace = offset.top + stripHeight;
          var residualTime = residualSpace/settings.travelocity;
          scrollnews(residualSpace, residualTime);
          });			
      });	
  };
   
  $(function(){
      $("ul#ticker01").liScroll();
  });
  //scroll part ends