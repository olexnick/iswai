$(document).ready(function(){

  let reducerHead = '.home';
  let reducerBottom = '.home-bottom';

  $('.li-home').bind('click', function(){
    if(reducerHead != '.home'){
      $(reducerHead).slideUp(3000);
      setTimeout (function(){
        $('.home').slideDown(3000);
      }, 3010);
      setTimeout (function(){
        $(reducerBottom).fadeOut(1000);
      }, 3500);
      setTimeout (function(){
        $('.home-bottom').fadeIn('slow','linear');
      }, 3550);
      setTimeout (function(){
        reducerHead = '.home';
        reducerBottom='.home-bottom';
      }, 3800);
    }
  });

    $('.li-product').bind('click', function(){
      if(reducerHead != '.product'){
        $(reducerHead).slideUp(3000);
        setTimeout (function(){
          $('.product').slideDown(3000);
        }, 3010);
        setTimeout (function(){
          $(reducerBottom).fadeOut(1000);
        }, 3500);
        setTimeout (function(){
          $('.product-bottom').fadeIn('slow','linear');
        }, 3550);
        setTimeout (function(){
          reducerHead = '.product';
          reducerBottom='.product-bottom';
        }, 3800);
      }
    });

    $('.li-blog').bind('click', function(){
      if(reducerHead !='.blog'){
        $(reducerHead).slideUp(3000);
        setTimeout (function(){
          $('.blog').slideDown(3000);
        }, 3010);
        setTimeout (function(){
          $(reducerBottom).fadeOut(1000);
        }, 3500);
        setTimeout (function(){
          reducerHead = '.blog';
          reducerBottom='.blog';
        }, 3800);
      }
    });

  $('.li-single').bind('click', function(){
    if(reducerHead !='.single-product'){

      setTimeout (function(){
        $(reducerHead).fadeOut('slow','linear');
      }, 1500);
      setTimeout (function(){
        $('.single-product').fadeIn('slow','linear');
      }, 1550);
      setTimeout (function(){
        $(reducerBottom).fadeOut(1000);
      }, 3500);
      setTimeout (function(){
        reducerHead = '.single-product';
        reducerBottom='.single-product';
      }, 3800);
    }
  });

  $('.homePage').bind('click', function(){
    if(reducerHead != '.home'){
      setTimeout (function(){
        $(reducerHead).hide();
        $(reducerBottom).hide();
      }, 200);
      setTimeout (function(){
        $('.home').show();
        $('.home-bottom').show();
      }, 200);
      setTimeout (function(){
        reducerHead = '.home';
        reducerBottom='.home-bottom';
      }, 1000);
    }
  });
  $('.productPage').bind('click', function(){
    if(reducerHead != '.product'){
      setTimeout (function(){
        $(reducerHead).hide();
        $(reducerBottom).hide();
      }, 200);
      setTimeout (function(){
        $('.product').show();
        $('.product-bottom').show();
      }, 200);
      setTimeout (function(){
        reducerHead = '.product';
        reducerBottom='.product-bottom';
      }, 1000);
    }
  });
  $('.blogPage').bind('click', function(){
    if(reducerHead != '.blog'){
      setTimeout (function(){
        $(reducerHead).hide();
        $(reducerBottom).hide();
      }, 200);
      setTimeout (function(){
        $('.blog').show();
      }, 200);
      setTimeout (function(){
        reducerHead = '.blog';
        reducerBottom='.blog';
      }, 1000);
    }
  });
  $('.singlePage').bind('click', function(){
    if(reducerHead != '.single-product'){
      setTimeout (function(){
        $(reducerHead).hide();
        $(reducerBottom).hide();
      }, 200);
      setTimeout (function(){
        $('.single-product').show();
      }, 200);
      setTimeout (function(){
        reducerHead = '.single-product';
        reducerBottom='.single-product';
      }, 1000);
    }
  });
});
