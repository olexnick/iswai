$(document).ready(function(){

  let reduserHead = '.home';
  let reduserBotton = '.home-botton';

  $('.li-home').bind('click', function(){
    if(reduserHead == '.home'){
      console.log( 'равно');

    }else{
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
      console.log( 'не равно');
    }
  });

    $('.li-product').bind('click', function(){
      // if(reduserHead == '.product' ){
      //   console.log("dhdhdhd");
      // } else {
      //   $(reduserHead).slideUp(3000);
      //   setTimeout (function(){
      //     $('.product').slideDown(3000);
      //   }, 3010);
      //   setTimeout (function(){
      //     $(reduserBotton).fadeOut(1000);
      //   }, 3500);
      //   setTimeout (function(){
      //     $('.product-bottom').fadeIn('slow','linear');
      //   }, 3550);
      //   setTimeout (function(){
      //     reduserHead = '.product';
      //     reduserBotton='.product-bottom';
      //   }, 3800);
      // }


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
    if(reduserHead !='.single'){

      setTimeout (function(){
        $(reduserHead).fadeOut('slow','linear');
      }, 1500);
      setTimeout (function(){
        $('.single').fadeIn('slow','linear');
      }, 1550);


      // $(reduserHead).slideUp(3000);
      // setTimeout (function(){
      //   $('.single').slideDown(3000);
      // }, 3010);
      setTimeout (function(){
        $(reduserBotton).fadeOut(1000);
      }, 3500);

      setTimeout (function(){
        reduserHead = '.single';
        reduserBotton='.single';
      }, 3800);
    }
});








// setInterval (function(){
//     console.log(reduserHead,'reduserHead');
//     console.log(reduserBotton,'reduserBotton');
// }, 10000);
});
