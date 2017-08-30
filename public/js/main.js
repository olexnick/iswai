$(document).ready(function(){

  let reduserHead = '.home';
  let reduserBotton = '.home-botton';

  $('.li-home').bind('click', function(){
    if(reduserHead != '.home'){
      $(reduserHead).slideUp(3000);
      setTimeout (function(){
        $('.home').slideDown(3000);
      }, 3010);
      setTimeout (function(){
        $(reduserBotton).fadeOut(1000);
      }, 3500);
      setTimeout (function(){
        $('.home-botton').fadeIn('slow','linear');
      }, 3550);
      setTimeout (function(){
        reduserHead = '.home';
        reduserBotton='.home-botton';
      }, 3800);
    }
  });

    $('.li-product').bind('click', function(){
      if(reduserHead != '.product'){
        $(reduserHead).slideUp(3000);
        setTimeout (function(){
          $('.product').slideDown(3000);
        }, 3010);
        setTimeout (function(){
          $(reduserBotton).fadeOut(1000);
        }, 3500);
        setTimeout (function(){
          $('.product-bottom').fadeIn('slow','linear');
        }, 3550);
        setTimeout (function(){
          reduserHead = '.product';
          reduserBotton='.product-bottom';
        }, 3800);
      }
    });

    $('.li-blog').bind('click', function(){
      if(reduserHead !='.blog'){
        $(reduserHead).slideUp(3000);
        setTimeout (function(){
          $('.blog').slideDown(3000);
        }, 3010);
        setTimeout (function(){
          $(reduserBotton).fadeOut(1000);
        }, 3500);
        setTimeout (function(){
          reduserHead = '.blog';
          reduserBotton='.blog';
        }, 3800);
      }
    });

  $('.li-single').bind('click', function(){
    if(reduserHead !='.single-product'){

      setTimeout (function(){
        $(reduserHead).fadeOut('slow','linear');
      }, 1500);
      setTimeout (function(){
        $('.single-product').fadeIn('slow','linear');
      }, 1550);
      setTimeout (function(){
        $(reduserBotton).fadeOut(1000);
      }, 3500);
      setTimeout (function(){
        reduserHead = '.single-product';
        reduserBotton='.single-product';
      }, 3800);
    }
  });

  $('.homePage').bind('click', function(){
    if(reduserHead != '.home'){
      setTimeout (function(){
        $(reduserHead).hide();
        $(reduserBotton).hide();
      }, 1500);
      setTimeout (function(){
        $('.home').show();
        $('.home-botton').show();
      }, 1500);
      setTimeout (function(){
        reduserHead = '.home';
        reduserBotton='.home-botton';
      }, 3800);
    }
  });
  $('.productPage').bind('click', function(){
    if(reduserHead != '.product'){
      setTimeout (function(){
        $(reduserHead).hide();
        $(reduserBotton).hide();
      }, 1500);
      setTimeout (function(){
        $('.product').show();
        $('.product-bottom').show();
      }, 1500);
      setTimeout (function(){
        reduserHead = '.product';
        reduserBotton='.product-bottom';
      }, 3800);
    }
  });
  $('.blogPage').bind('click', function(){
    if(reduserHead != '.blog'){
      setTimeout (function(){
        $(reduserHead).hide();
        $(reduserBotton).hide();
      }, 1500);
      setTimeout (function(){
        $('.blog').show();
      }, 1500);
      setTimeout (function(){
        reduserHead = '.blog';
        reduserBotton='.blog';
      }, 3800);
    }
  });
  $('.singlePage').bind('click', function(){
    if(reduserHead != '.single-product'){
      setTimeout (function(){
        $(reduserHead).hide();
        $(reduserBotton).hide();
      }, 1500);
      setTimeout (function(){
        $('.single-product').show();
      }, 1500);
      setTimeout (function(){
        reduserHead = '.single-product';
        reduserBotton='.single-product';
      }, 3800);
    }
  });

// setInterval (function(){
//     console.log(reduserHead,'reduserHead');
//     console.log(reduserBotton,'reduserBotton');
// }, 10000);
});
