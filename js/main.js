//연결확인용
//alert('a');

$(function(){
  //alert('a');



/////////////////////변수모음//////////////////
var $window = $(window);

//gnb이벤트
var $gnbMenu = $('#gnb').find('>li');
var $gnbBox = $('#gnb2');


//gnb고정
var $header = $('#main_header');
var $header2 = $header.contents().clone();
var $headerContainer = $('<div class="header2"></div>');

//메인기획전 이벤트
var $con1 = $('#content1');
var $con1Box1 = $con1.find('>div>.wrapper>div').eq(0);
var $con1Box2 = $con1.find('>div>.wrapper>div').eq(1);
var $con1Box3 = $con1.find('>div>.wrapper>div').eq(2);
var $con1Box4 = $con1.find('>div>.wrapper>div').eq(3);
var $c1ot = $con1Box1.offset().top;
var $c2ot = $con1Box2.offset().top;
var $c3ot = $con1Box3.offset().top;
var $c4ot = $con1Box4.offset().top;
//alert($c1ot); //1200
//alert($c2ot);

//인스타움직이는 배경
var $instabg = $('#content5').find('>div').eq(0);

//탑버튼
var $topBtn = $('#topbtn').find('>.wrapper>div');
var $tot = $topBtn.offset().top;
var $topBtnTop = $topBtn.css('top');

//new||best 마우스오버이벤트
var $newImg = $('#content3').find('>.wrapper>div:nth-child(2)>div');
var $bestImg = $('#content4').find('>.wrapper>div:nth-child(2)>div');


/////////////////////////////////////////////////
//메인 GNB
/////////////////////////////////////////////////


//gnb이벤트
$('#gnb,#gnb2').on('mouseenter',function(){
  //alert('a');
  $gnbBox.stop().animate({
    'height':'390px'
  },200,'linear');
}).on('mouseleave',function(){
  //alert('a');
  $gnbBox.stop().animate({
    'height':'0px'
  },200,'linear');
});

//gnb메뉴위에 빨간 원 생기는 이벤트
$gnbMenu.on('mouseover',function(){
  //alert('a');
  $(this).find('>div').stop().animate({
    'opacity':'1'
  },100,'linear');
}).on('mouseout',function(){
  //alert('a');
  $(this).find('>div').stop().animate({
    'opacity':'0'
  },100,'linear');
});



var $lnb = $('.lnb');
var $userIcon = $lnb.find('>li:nth-child(1)');
var $cartIcon = $lnb.find('>li:nth-child(2)');
var $searchIcon = $lnb.find('>li:nth-child(3)');
var $search = $lnb.find('>li:nth-child(3)>a');


$searchIcon.addClass('open'); //일단클래스+

$search.on('click',function(){
  //alert('a');
  if($searchIcon.hasClass('open')){
    $searchIcon.find('>div').stop().animate({
      'opacity':1,
      'width':180
    },300,'linear');
    $userIcon.stop().animate({
      'right':345
    },300,'linear');
    $cartIcon.stop().animate({
      'right':280
    },300,'linear');
    $searchIcon.removeClass('open');
  }else{
    $searchIcon.find('>div').stop().animate({
      'opacity':0,
      'width':0
    },300,'linear');
    $userIcon.stop().animate({
      'right':165
    },300,'linear');
    $cartIcon.stop().animate({
      'right':100
    },300,'linear');
    $searchIcon.addClass('open');
  }
});

$searchDefault = $('.gnb_search').val();

$('.gnb_search').on('focus',function(){
  
  if($(this).val() == $searchDefault){
  $(this).val('');
}
}).on('blur',function(){
  if($(this).val() == ''){
  $(this).val($searchDefault);
}
});

/*var $lnb2 = $('.header2').find('.lnb');
var $userIcon2 = $lnb2.find('>li:nth-child(1)');
var $cartIcon2 = $lnb2.find('>li:nth-child(2)');
var $searchIcon2 = $lnb2.find('>li:nth-child(3)');
var $search2 = $lnb2.find('>li:nth-child(3)>a');


$searchIcon2.addClass('open'); //일단클래스+

$search2.on('click',function(){
  alert('a');
  if($searchIcon2.hasClass('open')){
    $searchIcon2.find('>div').stop().animate({
      'opacity':1,
      'width':180
    },300,'linear');
    $userIcon2.stop().animate({
      'right':345
    },300,'linear');
    $cartIcon2.stop().animate({
      'right':280
    },300,'linear');
    $searchIcon2.removeClass('open');
  }else{
    $searchIcon2.find('>div').stop().animate({
      'opacity':0,
      'width':0
    },300,'linear');
    $userIcon2.stop().animate({
      'right':165
    },300,'linear');
    $cartIcon2.stop().animate({
      'right':100
    },300,'linear');
    $searchIcon2.addClass('open');
  }
});*/ //2021-01-10 sticky헤더에 검색창 수정


// $gnbBox.find('ul').on('mouseover',function(){
//   var $index = $(this).index();
//   //alert($index);
//   $gnbMenu.eq($index).find('>div').stop().animate({
//     'opacity':'1'
//   },100,'linear');
// }).on('mouseout',function(){
//   var $index = $(this).index();
//   //alert($index);
//   $gnbMenu.eq($index).find('>div').stop().animate({
//     'opacity':'0'
//   },100,'linear');
// });
//지엔비 하위메뉴에 마우스오버시 상위메뉴에 빨간원 표시되는 기능




/////////////////////////////////////////////////
//scroll
/////////////////////////////////////////////////


// var header2LnbUser = $('.header2').find('.lnb>li').eq(0).find('>a');
// var header2LnbCart = $('.header2').find('.lnb>li').eq(1).find('>a');
// var header2LnbSearch = $('.header2').find('.lnb>li').eq(2).find('>a');

//스크롤시 헤더clone 초기세팅//
$headerContainer.append($header2);
$('body').append($headerContainer);

var $headerHeight = $header.outerHeight();

$window.on('scroll',function(){

  //스크롤시 gnb2나타나는 이벤트
  var $scroll = $window.scrollTop();

  if($headerHeight < $scroll){
    $headerContainer.addClass('visible');
  }else{
    $headerContainer.removeClass('visible');
  }

  var $gnbMenu2 = $('.header2').find('#gnb > li');
  var $gnbBox2 = $('.header2').find('#gnb2');
  var $gnbBoxMenu2 = $('.header2').find('#gnb2>div>ul');
  var $lnbMenu2 = $('.header2').find('.lnb > li').eq(0);


  $gnbMenu2.on('mouseenter',function(){
    //alert('a');
    $gnbBox2.css({'display':'block'});
  }).on('mouseout',function(){
    $gnbBox2.css({'display':'none'});
  });

$gnbBox2.on('mouseover',function(){
  $(this).css({'display':'block'});
}).on('mouseout',function(){
  $(this).css({'display':'none'});
});

$gnbBoxMenu2.on('mouseover',function(){
  $(this).css({'display':'block'});
}).on('mouseout',function(){
  $(this).css({'display':'none'});
});

$lnbMenu2.on('mouseover',function(){
  $gnbBox2.css({'display':'block'});
}).on('mouseout',function(){
  $gnbBox2.css({'display':'none'});
});


// header2LnbUser.find('img').attr('src','./img/main/user_b.png');
//12/29스크롤시 헤더2 생성되면 lnb이미지 바꾸려고 했는데 안됨ㅜ => 되긴 하는데 크기가 조절 안됨 => 12/30 css에서 원 생기는걸로 해결함

  //content1-1 박스들 가운데로 모이는 이벤트
  if($window.scrollTop() >= $c1ot/6){
    //alert('a');
    $con1Box1.find('>div:nth-child(1)').stop().animate({
      'top':'100px',
      'left':'400px'
    },300,'linear');
    $con1Box1.find('>div:nth-child(2)').stop().animate({
      'top':'-50px',
      'right':'400px'
    },300,'linear');
  }else{
    $con1Box1.find('>div:nth-child(1)').stop().animate({
      'top':'150px',
      'left':'200px'
    },300,'linear');
    $con1Box1.find('>div:nth-child(2)').stop().animate({
      'top':'-100px',
      'right':'200px'
    },300,'linear');
  }

  //content1-2 박스들 가운데로 모이는 이벤트
  if($window.scrollTop() >= $c2ot/5){
    $con1Box2.find('>div:nth-child(1)').stop().animate({
      'bottom':'100px',
      'right':'400px'
    },300,'linear');
    $con1Box2.find('>div:nth-child(2)').stop().animate({
      'bottom':'-50px',
      'left':'400px'
    },300,'linear');
  }else{
    $con1Box2.find('>div:nth-child(1)').stop().animate({
      'bottom':'150px',
      'right':'200px'
    },300,'linear');
    $con1Box2.find('>div:nth-child(2)').stop().animate({
      'bottom':'-100px',
      'left':'200px'
    },300,'linear');
  }
  
  //content1-3 박스들 위로 올라오는 이벤트
  if($window.scrollTop() >= 1700){
    $con1Box3.find('>div:nth-child(1)').stop().animate({
      'top':'1100px'
    },300,'linear');
    $con1Box3.find('>div:nth-child(2)').stop().animate({
      'top':'1000px'
    },300,'linear');
  }else{
    $con1Box3.find('>div:nth-child(1)').stop().animate({
      'top':'1400px'
    },300,'linear');
    $con1Box3.find('>div:nth-child(2)').stop().animate({
      'top':'1300px'
    },300,'linear');
  }
  
  //content1-4 박스들 위로 올라오는 이벤트
  if($window.scrollTop() >= 2000){
    $con1Box4.find('>div:nth-child(1)').stop().animate({
      'top':'1600px'
    },300,'linear');
    $con1Box4.find('>div:nth-child(2)').stop().animate({
      'top':'1500px'
    },300,'linear');
  }else{
    $con1Box4.find('>div:nth-child(1)').stop().animate({
      'top':'1900px'
    },300,'linear');
    $con1Box4.find('>div:nth-child(2)').stop().animate({
      'top':'1800px'
    },300,'linear');
  }





  //스크롤시탑버튼 나타나는 이벤트
  if($window.scrollTop() >= $c1ot/4){
    $topBtn.css({'display':'block'})
  }else{
    $topBtn.css({'display':'none'});
  }

  //alert('a');


  //스크롤하면 인스타 배경 좌우로 움직이는 이벤트
  var $instaBg = $('#content5').find('>div').eq(0);
  var $scrollTop = $window.scrollTop();

  var $insta_ot = $('#content4').offset().top;
    //alert($insta_ot); //4700
  //var $con5ot2 = $con5ot-$window.height();
  //var $instascroll = $window.height()/$instaBg.height();
//alert($instascroll);

  var $nowScroll = $scrollTop-$insta_ot;
  //alert($scrollTop-$insta_ot);
  //alert($scrollTop);
  $instaBg.css({
    'background-position-x':$nowScroll
  });

});//scroll닫기


//////////////////////////////////////////////////////////
//bx 슬라이더
//////////////////////////////////////////////////////////


//메인슬라이더
$mainSlider = $('.bxslider').bxSlider({
  mode:'horizontal',
  auto:true,
  speed:1000,
  pause:7000,
});

$('#slider').on('mouseover',function(){
  $mainSlider.stopAuto();
}).on('mouseout',function(){
  $mainSlider.startAuto();
});



//////////////////////////////////////////////////
///마우스휠 이벤트
/////////////////////////////////////////////////

// 클래스 줘서
// $('#slider').on('mousewheel',function(event,delta){
//   event.preventDefault(); // 초기화
//
//   if(delta < 0){ //휠 내렸을때
//
//   if($('#main_header').height() == 110){
//     $('html,body').stop().animate({
//     scrollTop:$('#content1').offset().top-250
//   },500,'linear');
// }else if($('#main_header').height() == 0){
//   $('#main_header').stop().animate({
//     'height':'110px'
//   },200,'linear');
// }
// }
// });
//
// // }else if(delta > 0){ //휠 올렸을때
// //
//   $('html,body').stop().animate({
//   scrollTop:$('#slider').offset().top
//   },500,'linear');
//
// }
//}); //2021-01-18 실패해서 아래 방법으로 성공


$('#main_header').addClass('wheel');

$('#slider').on('mousewheel',function(event,delta){
  event.preventDefault();

if($('#main_header').hasClass('wheel')){
  
  if(delta < 0){ // 휠내렸을때
    $('#main_header').stop().animate({
        'height':'110px'
       },200,'linear');
  
   }else if(delta > 0){ // 휠올렸을때
     $('#main_header').stop().animate({
         'height':'0px'
        },200,'linear');
    
   }
   $('#main_header').removeClass('wheel');
}else{
  if(delta < 0){ // 휠내렸을때
    $('html,body').stop().animate({
         scrollTop:$('#content1').offset().top-150
       },500,'linear');
       
   }else if(delta > 0){ // 휠올렸을때
     $('html,body').stop().animate({
        scrollTop:$('#slider').offset().top
        },500,'linear');
   }
    $('#main_header').addClass('wheel');
}
});







/////////////////////////////////////////////////
//mouseover
/////////////////////////////////////////////////

//고정된(sticky) 헤더에 마우스오버시 이벤트발생
var $gnbMenu2 = $('.header2').find('#gnb>li');
var $gnbBox2 = $('.header2').find('#gnb2>div>ul');

$gnbMenu2.on('mouseover',function(){
  //alert('a');
  var $index = $(this).index();
  //alert($index);

  $(this).find('>div').stop().animate({
    'opacity':'1'
  },100,'linear');

  $gnbBox2.eq($index).css({'display':'block'});
  if($index == '3'){
    $gnbBox2.eq($index).css({'display':'none'});
  }else if($index == '4'){
    $gnbBox2.eq($index-1).css({'display':'block'});
  }
}).on('mouseout',function(){
  var $index = $(this).index();

  $(this).find('>div').stop().animate({
    'opacity':'0'
  },100,'linear');

  $gnbBox2.eq($index).css({'display':'none'});
  if($index == '4'){
    $gnbBox2.eq($index-1).css({'display':'none'});
  }
});

//gnb박스내 마우스 오버시 displayblock
$gnbBox2.on('mouseover',function(){
  $(this).css({'display':'block'});
}).on('mouseout',function(){
  $(this).css({'display':'none'});
});

//new||best 콘텐츠 이미지에 마우스오버 이벤트
// $newImg.on('mouseover',function(){
//   //alert('a');
//   $(this).find('>span').css({'display':'block'});
// }).on('mouseout',function(){
//   $(this).find('>span').css({'display':'none'});
// });
//
// $bestImg.on('mouseover',function(){
//   //alert('a');
//   $(this).find('>span').css({'display':'block'});
// }).on('mouseout',function(){
//   $(this).find('>span').css({'display':'none'});
// }); 1/16 css로 이벤트 대신함



///new 마우스무브
var $newCon = $('#content3').find('>.wrapper>div:nth-child(2)');

$newCon.on('mousemove',function(e){
  //alert('a');
  e.preventDefault();
  var $move1 = ($('.drag_view').width()-$('.drag_wrapper').width())/$('.drag_view').width();
  //alert($move1); //0.6

  $('.drag_wrapper').css({
    'left':340+(e.clientX * $move1)
  });

  $newIndi.css({
    'left':-200+(e.clientX * $move1)*($move1)
  });

});


var $newBar = $('#content3').find('>.wrapper>div:nth-child(4)>div');
var $newIndi = $('#content3').find('>.wrapper>div:nth-child(4)>span');


$newIndi.on('mousedown',function(e){
  //alert('a');
  e.preventDefault();

  if(e.clientX === undefined){
    e = e.originalEvent.touches[0];
  };
  
  // var $move1 = ($('.drag_view').width()-$('.drag_wrapper').width())/$('.drag_view').width();
  var new_startX = e.clientX; //포인터의 위치
  var new_offsetX = $newIndi.position().left; //인디 위치

  $(document).on('mousemove touchmove',function(e){
    e.preventDefault();
    new_delX = e.clientX - new_startX; //이동거리


    if($newIndi.position().left < 0){
      $newIndi.stop().animate({
          'left':'0px'
      },200,'linear');
      //$newIndi.off('mousemove');
    }else if($newIndi.position().left == 10){
      $newIndi.stop().animate({
          'left':'0px'
      },10,'linear');

    }else if($newIndi.position().left > $newBar.width()-$newIndi.width()){
      $newIndi.stop().animate({
          'left':($newBar.width()-$newIndi.width())
        },10,'linear');
        //$newIndi.off('mousemove');
    }else if($newIndi.position().left == 390){
      $newIndi.stop().animate({
          'left':$newBar.width()-$newIndi.width()
        },10,'linear');

    }else{
      $newIndi.css({
        'left':new_offsetX+new_delX
      });
    }

    $('.drag_wrapper').css({
      'left':-(340+new_delX)
    });


  }); //마우스무브 닫기

  $(document).on('mouseup touchend',function(){
    $(document).off('mousemove mouseup touchmove touchend');
  });


}); //뉴 마우스다운 닫기




///best 마우스무브
$('#content4').find('>.wrapper>div:nth-child(2)').on('mousemove',function(e){
  //alert('a');
  e.preventDefault();
  var $move2 = ($('.drag_view2').width()-$('.drag_wrapper2').width())/$('.drag_view2').width();

  $('.drag_wrapper2').css({
    'left':(e.clientX * $move2)+100
  });

  $newIndi2.css({
    'left':-100+(e.clientX * $move2)*($move2)
  });

});



var $newBar2 = $('#content4').find('>.wrapper>div:nth-child(4)>div');
var $newIndi2 = $('#content4').find('>.wrapper>div:nth-child(4)>span');


$newIndi2.on('mousedown',function(e){
  //alert('a');
  e.preventDefault();
  
  if(e.clientX === undefined){
    e = e.originalEvent.touches[0];
  };

  // var $move1 = ($('.drag_view').width()-$('.drag_wrapper').width())/$('.drag_view').width();
  var new2_startX = e.clientX; //포인터의 위치
  var new2_offsetX = $newIndi2.position().left; //인디 위치

  $(document).on('mousemove touchmove',function(e){
    e.preventDefault();
    new2_delX = e.clientX - new2_startX; //이동거리


    if($newIndi2.position().left < 0){
      $newIndi2.stop().animate({
          'left':'0px'
      },200,'linear');
      //$newIndi.off('mousemove');
    }else if($newIndi2.position().left == 10){
      $newIndi2.stop().animate({
          'left':'0px'
      },10,'linear');

    }else if($newIndi2.position().left > $newBar2.width()-$newIndi2.width()){
      $newIndi2.stop().animate({
          'left':($newBar2.width()-$newIndi2.width())
        },200,'linear');
        //$newIndi.off('mousemove');
    }else if($newIndi2.position().left == 390){
      $newIndi2.stop().animate({
          'left':$newBar2.width()-$newIndi2.width()
        },10,'linear');

    }else{
      $newIndi2.css({
        'left':(new2_offsetX+new2_delX)
      });
    }

    $('.drag_wrapper2').css({
      'left':-(340+new2_delX)
    });


  }); //마우스무브 닫기

  $(document).on('mouseup touchend',function(){
    $(document).off('mousemove mouseup touchmove touchend');
  });


}); //베스트 마우스다운 닫기







//스크롤시 insta배경 우->좌로 움직이는 이벤트
// $window.on('scroll',function(){
//   //alert($window.height());
//   if($window.scrollTop() >= 3500){
//     $instabg.css({'overflow':'hidden'}).stop().animate({
//     'left':'-500px'
//   },20000,'linear');
//   }else{
//     $instabg.css({'overflow':'hidden'}).stop().animate({
//     'left':'0px'
//   },20000,'linear');
//   }
//
// }); 안됨ㅜㅜ 스크롤 배워서 다시 할거임->1/14성공















/////////////////////////////////////////////////
//공통
/////////////////////////////////////////////////

//탑버튼 클릭시 상단으로 이동(공통)
$topBtn.on('click',function(){
  $('html,body').stop().animate({
    scrollTop:'0'
  },400,'easeOutSine');
});

//버튼 눌리는 귀여운 효과(공통)
$('button').on('mouseenter',function(){
  $(this).find('>span').stop().animate({
    'top':'4px',
    'left':'4px'
  },300,'linear');
}).on('mouseleave',function(){
  $(this).find('>span').stop().animate({
    'top':'0px',
    'left':'0px'
  },300,'linear');
});




});//jQuery닫기
