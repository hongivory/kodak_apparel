//연결확인용
//alert('a');

$(function(){
  //alert('a');


/////////////////////변수모음//////////////////
var $window = $(window);

var $headerSub = $('#sub_header');
var $hsot = $headerSub.offset().top;

//sticky 서브헤더
var $subHeader2 = $headerSub.contents().clone();
var $subHeaderContainer = $('<div class="sub_header2"></div>');

//gnb이벤트
var $subGnbMenu = $('#sub_gnb').find('>li');
var $subGnb = $('#sub_gnb2');
var $subGnbBox = $('#sub_gnb2').find('>div>ul');

//탑버튼
var $topBtn = $('#topbtn').find('>.wrapper>div');
var $tot = $topBtn.offset().top;
var $topBtnTop = $topBtn.css('top');

//상세페이지 탭기능
var $dTabList = $('#detail_tab').find('>.wrapper>.detail_tab_nav>span');
var $dTabAnchor = $dTabList.find('a');
var $dTabBorder = $dTabList.find('>span');




$subGnbMenu.on('mouseover',function(){
  //alert('a');
  $subGnb.css({'display':'block'});
}).on('mouseout',function(){
  $subGnb.css({'display':'none'});
});

$subGnb.on('mouseover',function(){
  //alert('a');
  $(this).css({'display':'block'});
}).on('mouseout',function(){
  //alert('a');
  $(this).css({'display':'none'});
});

$subGnbBox.on('mouseover',function(){
  //alert('a');
  $(this).css({'display':'block'});
}).on('mouseout',function(){
  //alert('a');
  $(this).css({'display':'none'});
});

var $sublnb = $('.lnb_list').find('>li').eq(0);

$sublnb.on('mouseover',function(){
  //alert('a');
  $subGnb.css({'display':'block'});
}).on('mouseout',function(){
  $subGnb.css({'display':'none'});
});



//gnb 이벤트 (메뉴위 빨간원+하위메뉴 나옴)
  $subGnbMenu.on('mouseover',function(){
  //alert('a');
  var $index = $(this).index();
  //alert($index);

  $(this).find('>div').stop().animate({
    'opacity':'1'
  },100,'linear');

  $subGnbBox.eq($index).css({'display':'block'});
  if($index == '3'){
    $subGnbBox.eq($index).css({'display':'none'});
  }else if($index == '4'){
    $subGnbBox.eq($index-1).css({'display':'block'});
  }//gnb메뉴 중 하위메뉴 없는건 건너뛰고 다음 메뉴의 하위메뉴 나오게 인덱스 순서 조정해줌 !
}).on('mouseout',function(){
  var $index = $(this).index();

  $(this).find('>div').stop().animate({
    'opacity':'0'
  },100,'linear');

  $subGnbBox.eq($index).css({'display':'none'});
  if($index == '4'){
    $subGnbBox.eq($index-1).css({'display':'none'});
  }
});



//sub페이지 헤더sticky
$subHeaderContainer.append($headerSub);
$('body').append($subHeaderContainer);

var $subHeaderHeight = $headerSub.outerHeight();

///////////////////////////////////////////////
//스크롤이벤트
//////////////////////////////////////////////

$window.on('scroll',function(){
  //alert('a');
  var $scroll = $window.scrollTop();

  //스크롤시 탑버튼 고정되어 나타나는 이벤트
  //alert('a');
  if($window.scrollTop() >= 600){
    $topBtn.css({'display':'block'})
  }else{
    $topBtn.css({'display':'none'});
  }


  if($subHeaderHeight+50 < $window.scrollTop()){
    //헤더 높이로 지정하면 헤더와 하위 컨텐츠 사이 공백이 보여서 +50으로 하이트값 추가해줌!
    $subHeaderContainer.addClass('visible');
    $('.sub_header2').css({'opacity':'0.9'});
  }else{
    $subHeaderContainer.removeClass('visible');
    $('.sub_header2').css({'opacity':'1'});
  }

  //주문페이지 옵션박스 따라 내려오는 이벤트
  //alert('a');
  var $selectBox = $('#select_box');
  var $sot = $selectBox.offset().top;
  //alert($sot);
  var $selectTop = $selectBox.css('top');
  //alert($selectTop);
  //var $hot = $('.sub_header').offset().top;

    //alert('a');



  if($window.scrollTop() <= 1500){
    $selectBox.css({'position':'fixed','top':'0'}).stop().animate({'top':'150'},500,'linear');

    if($sot < 100){
      $selectBox.stop().animate({'top':'250'},500,'linear');
    }
  }else{
    $selectBox.css({
      'position':'absolute',
      'top':1500
    });
  }
  //   if($sot>=1300){
  //     $selectBox.css({
  //       'position':'relative',
  //       'top':-700
  //     });
  //   }else if($sot < 100){
  //     $selectBox.stop().animate({'top':'250'},500,'linear');
  //   }else{
  //
  //   }
  // }






}); //scroll닫기


//위 동작에서 마우스아웃시 기존 서브헤더도 오퍼시티0.9가 적용되는걸 방지!  스크롤 된 상황에만 마우스아웃시 오퍼시티 0.9 됨
$('.sub_header2').on('mouseover',function(){
  //alert('a');
  var $scroll = $window.scrollTop();

  $(this).css({'opacity':'1'});
}).on('mouseout',function(){
  //alert('a');
  if($subHeaderHeight+50 < $window.scrollTop()){
  $(this).css({'opacity':'0.9'});
}else{
  $(this).css({'opacity':'1'});
}
});



//탑버튼 클릭시 상단으로 이동
$topBtn.on('click',function(){
  //alert('a');
  $('html,body').stop().animate({
    scrollTop:'0'
  },400,'easeOutSine');
});



var $sublnb = $('.lnb_list');
var $userIcon = $sublnb.find('>li:nth-child(1)');
var $cartIcon = $sublnb.find('>li:nth-child(2)');
var $searchIcon = $sublnb.find('>li:nth-child(3)');
var $search = $sublnb.find('>li:nth-child(3)>a');


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



//버튼 눌리는 귀여운 효과(공통)
$('button').on('mouseover',function(){
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



//////////디테일 탭
var $thumbAnchor = $('.detail_thumb').find('div');


$thumbAnchor.on('click',function(e){
  //alert('a');
  e.preventDefault(); // a링크 초기화
  if($(this).hasClass('detail_border')){
      return;
  }

  $thumbAnchor.removeClass('detail_border');
  $(this).addClass('detail_border');

  var $imgShow = $(this).find('a').attr('href');

  $('.detail_imgs').hide(1);
  $($imgShow).show(1);


});




//디테일페이지 탭기능
  $dTabAnchor.eq(0).addClass('detail_active');
  //1번 탭네비 초기세팅

$dTabAnchor.on('click',function(e){
  //alert('a');
  e.preventDefault(); // a링크 초기화

  if($(this).hasClass('detail_active')){
    return;
  } //반복적으로 나타나는것 방지

  $dTabAnchor.removeClass('detail_active');
  $(this).addClass('detail_active');

  var $work = $(this).attr('href');
  //alert($work);

  $('.tabs-panel').hide(1);
  $($work).show(1);

});

$dTabAnchor.eq(2).on('click',function(){
  alert('준비중입니다.');
});
$dTabAnchor.eq(3).on('click',function(){
  alert('준비중입니다.');
});




//디테일페이지 확대기능

$('.img_wrap').on('mousemove',function(e){
  //alert('a');
  e.preventDefault(); // 초기화
  $('.img_wrap').find('>div').css({
    'left':(e.clientX-$('.img_wrap').width())/2,
    'top':(e.clientY-$('.img_wrap').height())/2
  });
  $('.img_wrap').find('>div:nth-child(1)').css({
    'left':0,
    'top':0
  });
  $('.img_wrap').find('>div:nth-child(2)').css({
    'left':0,
    'top':0
  });

  // if($('.img_wrap').find('>div').hasClass('main_img')){
  //   $('.img_wrap').find('>div').css({
  //     'left':0,
  //     'top':0
  //   });
  // }else{
  //   $('.img_wrap').find('>div').css({
  //     'left':(e.clientX-$('.img_wrap').width())/1.5,
  //     'top':(e.clientY-$('.img_wrap').height())/1.5
  //   });
  // }
});


//사이즈가이드 클릭시 나타나는 팝업창

$('.size_guide').on('click',function(){
  //alert('a');
  $('#pop_background').fadeIn(100);
});


$('.size_pop').find('div>div').on('click',function(){
  //alert('a');
  $('#pop_background').fadeOut(100);
});




//사이즈옵션 선택버튼들

var $sizeBtn = $('.detail_txt').find('div:nth-child(3)>div:nth-child(2)>div');

$sizeBtn.on('click',function(){
  //alert('a');
  $sizeBtn.removeClass('detail_border');
  $(this).addClass('detail_border');
});


//찜버튼 클릭시 하트색 변경
var $wishBtn = $('.wish_btn');

  $wishBtn.addClass('red'); //초기세팅
  $wishBtn.on('click',function(){
//alert('a');
  if($(this).hasClass('red')){
  alert('상품이 위시리스트에 추가되었습니다.');
  $(this).find('>img').attr('src','../img/detail/wish2.png');
  $(this).removeClass('red');
}else{
  alert('상품이 위시리스트에서 삭제되었습니다.');
  $(this).find('>img').attr('src','../img/detail/wish1.png');
  $(this).addClass('red');
}

});


//상품수량 증가/감소 기능

var $inc = $('.minus');
var $dec = $('.plus');
var $quantity = 1;


$dec.on('click',function(){
  //alert('a');
  if($quantity < 9){
  var $quantity2 = $quantity+1;
  $('.count').val($quantity2);
  $quantity = $quantity2;
}else{
  alert('10개 이상은 구매하실 수 없습니다.');
}
});


$inc.on('click',function(){
  //alert('a');
  if($quantity > 1){
  var $quantity3 = $quantity-1;
  $('.count').val($quantity3);
  $quantity = $quantity3;
}else{
  alert('1개 이상 구매해주세요.');
}
});



var $sizeOption = $('.option').find('>span').eq(3);

$('.size_btn').find('>div').on('click',function(){
  //alert('a');
  $('.option').css({'display':'block'});
  $('.detail_txt').find('>div:nth-child(5)').stop().animate({
    'bottom':'120'
  },100,'linear');

//alert($(this).text());
$sizeOption.text($(this).text());





});









//장바구니 버튼 클릭시

var $cartBtn = $('.cart_btn');
//var $defaultCount = $('.count').text();
//alert($defaultCount);
var $defaultCount = $('.count').val();

$cartBtn.on('click',function(){
  //alert('a');
  //alert('장바구니에 추가되었습니다.');

  //장바구니 알림 팝업창
  $('#cart_pop').show(0).delay(3000).hide(1);
  //0,1 넣으면 index순번으로 됨!!!!!!!!

  //장바구니아이콘 위 카운트 생성됨
  $('.cart_count').css({
    'display':'block'
  });

  //선택옵션 텍스트 사라짐
  $('.option').css({'display':'none'});

  $('.detail_txt').find('>div:nth-child(5)').stop().animate({
    'bottom':'140'
  },100,'linear');

  //장바구니 갯수 자동 카운트
  var $addCount = parseInt($('.count').val());
  //alert($addCount);
  var $nowCount = parseInt($('.cart_count').text());
  //alert($nowCount);
  $('.cart_count').text($addCount+$nowCount);

  //*******장바구니 담긴 후 선택한 옵션 초기화********
  //선택한 수량 1로 초기화

  var $defaultCount = $('.count').val();
  var $newCount = $defaultCount-($('.count').val()-1);

  $('.count').val($newCount);

  //선택한 옵션에 보더없애줌
  $sizeBtn.removeClass('detail_border');

});




//장바구니 팝업창 바로닫기버튼
var $cartPopClose = $('#cart_pop').find('div>div:nth-child(3)');

$cartPopClose.on('click',function(){
  $('#cart_pop').css({
    'display':'none'
  },10,'linear');
});


//sns공유아이콘 팝업 열기+닫기

var $shareClose = $('#pop_share').find('div>div:nth-child(1)>span:nth-child(2)');

$('.share_btn').on('click',function(){
  //alert('a');
  $('#pop_share').fadeIn(100);
});

$shareClose.on('click',function(){
  $('#pop_share').fadeOut(100);
});



setTimeout(function(){
  $('#pop').hide();
},2000);




////////////////주문페이지

//이메일 선택
var $mailSelect = $('.order_inform').find('.mail_select');
var $mailBox = $('.order_inform').find('>div:nth-child(4)>input:nth-child(5)');

$mailSelect.on('click',function(){
  //alert('a');
  var $userMail = $(this).val();
  //alert($userMail);
  $mailBox.val($userMail);

  // if($userMail == ''){
  //   $mailBox.focus();
  // } // 1/18 직접입력 선택시 자동 포커싱->다시확인할것
});


//휴대폰번호 변경
var $phoneBtn = $('.order_phonenum').find('button');

$phoneBtn.addClass('phoneChange');
$phoneBtn.on('click',function(){
  //alert('a');
  if($phoneBtn.hasClass('phoneChange')){
  alert('휴대폰 번호를 변경하시겠습니까?');
  $phoneBtn.css({'background':'#555','color':'#fff'});
  $('.order_phonenum').find('input').attr('disabled',false).removeClass('grayBg');
  $phoneBtn.removeClass('phoneChange');
}else{
  alert('입력하신 휴대폰번호로 변경됩니다.');
  $phoneBtn.css({'background':'#ddd','color':'#333'});
  $('.order_phonenum').find('input').attr('disabled',true).addClass('grayBg');
  $phoneBtn.addClass('phoneChange');
}
});

//주문자 주소찾기
var $adressBtn = $('.order_adress').find('button');

$adressBtn.addClass('search_ad');
$adressBtn.on('click',function(){
  //alert('a');
  if($adressBtn.hasClass('search_ad')){
    //alert('a');
    alert('주문하시는 분의 주소를 입력해주세요.');
    $('.order_adress').find('input').attr('disabled',false).removeClass('grayBg');
    $adressBtn.removeClass('search_ad');
  }else{
    $('.order_adress').find('input').attr('disabled',true).addClass('grayBg');
    $adressBtn.addClass('search_ad');
  }
});

//주소찾기
var $adressBtn2 = $('.track_adress').find('button');

$adressBtn2.addClass('search_ad');
$adressBtn2.on('click',function(){
  //alert('a');
  if($adressBtn2.hasClass('search_ad')){
    //alert('a');
    alert('받으시는 분의 주소를 입력해주세요.');
    $('.track_adress').find('input').attr('disabled',false).removeClass('grayBg');
    $adressBtn2.removeClass('search_ad');
  }else{
    $('.track_adress').find('input').attr('disabled',true).addClass('grayBg');
    $adressBtn2.addClass('search_ad');
  }
});

//회원정보 수정
var $userModify = $('.order_inform').find('>div:nth-child(8)>input');

$userModify.on('click',function(){
  alert('입력해주신 정보로 회원정보가 수정됩니다.');
});

//위 정보와 동일 체크
var $userClone = $('.track_inform').find('>div:nth-child(1)>input');

$userClone.addClass('clone_info');
$userClone.on('click',function(){
  //alert('a');
  var $orderName = $('.order_inform').find('.order_name');
  var $orderPhone = $('.order_inform').find('.order_phonenum>input');
  var $orderAdress = $('.order_inform').find('.order_adress>input');

  var $trackName = $('.track_inform').find('.track_name');
  var $trackPhone = $('.track_inform').find('.track_phonenum>input');
  var $trackAdress = $('.track_inform').find('.track_adress>input');

  if($userClone.hasClass('clone_info')){
    $trackName.val($orderName.text());
    $trackPhone.eq(0).val($orderPhone.eq(1).val());
    $trackPhone.eq(1).val($orderPhone.eq(2).val());
    $trackAdress.eq(0).val($orderAdress.eq(0).val());
    $trackAdress.eq(2).val($orderAdress.eq(1).val());
    $trackAdress.eq(3).val($orderAdress.eq(2).val());
    $userClone.removeClass('clone_info')
  }else{
    $trackName.val('');
    $trackPhone.eq(0).val('');
    $trackPhone.eq(1).val('');
    $trackAdress.eq(0).val('');
    $trackAdress.eq(2).val('');
    $trackAdress.eq(3).val('');
    $userClone.addClass('clone_info')
  }
});

//배송 요청사항 포커싱
var $defaultReq = $('.track_req').find('textarea').text();
//alert($defaultReq);

$('.track_req').find('textarea').on('focus',function(){
  //alert('a');

  if($(this).text() == $defaultReq){
  $(this).text('');
}
}).on('blur',function(){
  if($(this).text() == ''){
  $(this).text($defaultReq);
}
});

//결제수단 선택

var $payBtn = $('.pay_inform').find('>div:nth-child(3)>div>div');

$payBtn.on('click',function(){
  //alert('a');
  $payBtn.find('span').removeClass('payment_circle');
  $(this).find('span').addClass('payment_circle');

});

//쿠폰 팝업

var $couponPopClose = $('#coupon_pop').find('>div>div>span:nth-child(2)');
$('.coupon_btn').on('click',function(){
  $('#coupon_pop').fadeIn(100);
});

$couponPopClose.on('click',function(){
  $('#coupon_pop').fadeOut(100);
});

$('.new_user').on('click',function(){
  $('#coupon_pop').fadeOut(100);
  $('.coupon_price').text('5,000');
  $('.coupon_price').css({'margin-left':-30});
  $('.total_price').text('184,000');

  //parseInt($('.total_price').text())-parseInt($('.coupon_price').text())
});

//구매동의 체크 안하면 결제하기 버튼 안눌리는것
// $('.order_btn').on('click',function(){
//   if($('.pay_agree').find('>input').checked(true)){
//     alert('a');
//   }
// }); 2021-01-18 checked여부 확인하는거 재확인!



//디테일페이지 상세 확대 슬라이드
$('.bxslider2').bxSlider({
  mode:'vertical',
  slideWidth:80,
  minSlides:5,
  maxSlides:8,
  moveSlides:1,
  slideMargin:10,
  wrapperClass:'bx-wrapper2',
  prevText:'<i class="fa fa-angle-up" aria-hidden="true"></i>',
  nextText:'<i class="fa fa-angle-down" aria-hidden="true"></i>',
  infiniteLoop:false
  //onSlideAfter:function(currentSlide,oldIndex,newIndex){
    //alert('a');
  //   if()
  //   $(currentSlide).stop().animate({
  //
  //   },200,'linear');
  //
  //
  // }

});





















});//jQuery닫기
