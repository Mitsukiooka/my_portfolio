$(function(){
  $('.btn').on('mouseover', function(){
    $(this).addClass('js-over');
  })
  $('.btn').on('mouseout', function(){
    $(this).removeClass('js-over');
  })
});

// $(function(){
//   $(window).scroll(function(){
//     let position = $(window).scrollTop();
//     if (position > 120) {
//       console.log(position)
//       $('.text').animate({
//       }, 300
//       );
//     }
//   })
// });

$(function(){
  $('.page-header').each(function(){
    var $window = $(window),
        $header = $(this),
        headerOffsetTop = $header.offset().top;
    $window.on('scroll', function(){
      if ($window.scrollTop() > headerOffsetTop) {
        $header.addClass('sticky');
      } else {
        $header.removeClass('sticky');
      }
    });
    $window.trigger('scroll');
  })
});

// $(function() {
//   $('.page-header').each(function() {
//     var $window = $(window),
//         $header = $(this),
//         $headerClone = $header.contents().clone(),
//         $headerCloneContainer = $('<div class="page-header-clone"></div>'),
//         threshold = $header.offset().top + $header.outerHeight();
//     console.log(threshold);
//     $headerCloneContainer.append($headerClone);
//     $headerCloneContainer.appendTo('body');
//     $window.on('scroll', $.throttle(1000 / 15, function(){
//       if ($window.scrollTop() > threshold) {
//         $headerCloneContainer.addClass('visible');
//       } else {
//         $headerCloneContainer.removeClass('visible');
//       }
//     }));
//     $window.trigger('scroll');
//   })
// })

$(function() {
  $('.back-to-top').each(function(){
    var el = scrollableElement('html', 'body');
    $(this).on('click', function(event){
      event.preventDefault();
      $(el).animate({scrollTop: 0 }, 800);
    });
  });
});

function scrollableElement() {
  var i, len, el, $el, scrollable;
  for (i = 0, len = arguments.length; i < len; i++) {
    el = arguments[i],
    $el = $(el);
    if ($el.scrollTop() > 0 ) {
      return el;
    } else {
      $el.scrollTop(1);
      scrollable = $el.scrollTop() > 0;
      $el.scrollTop(0);
      if (scrollable) {
        return el;
      }
    }
  }
  return [];
};

$(function(){
  $('#profile').each(function(){
    var $tabList = $(this).find('.tabs-nav'),
    $tabAnchors = $tabList.find('a'),
    $tabPanels = $(this).find('.tabs-panel');

    $tabList.on('click', 'a', function(event) {
      event.preventDefault();
      var $this = $(this);
      $tabPanels.hide();
      $($this.attr('href')).show();
    });

    $tabAnchors.eq(0).trigger('click');
  });
});

$(function(){
  imagesProgress();
  function imagesProgress () {

    var $container    = $('#progress'),                    // 1
        $progressBar  = $container.find('.progress-bar'),  // 2
        $progressText = $container.find('.progress-text'), // 3
        // 1. プログレス表示全体のコンテナー
        // 2. プログレス表示のバー部分
        // 3. プログレス表示のテキスト部分
  
        // imagesLoaded ライブラリで body 要素内の画像の読み込み状況を監視
        // 同時に body 全体の画像の総数を保存
        imgLoad       = imagesLoaded('body'),
        imgTotal      = imgLoad.images.length,
  
        // 読み込みの完了した画像の数のカウンターと、
        // プログレス表示の現在地にあたる数値 (ともに最初は 0)
        imgLoaded     = 0,
        current       = 0,
  
        // 1 秒間に 60 回のペースで読み込み状況をチェック
        progressTimer = setInterval(updateProgress, 1000 / 60);
  
    // imagesLoaded を利用し、画像が読み込まれるごとにカウンターを加算
    imgLoad.on('progress', function () {
        imgLoaded++;
    });
  
    // 画像の読み込み状況をもとにプログレス表示を更新
    // この関数は setInterval() メソッドにより 1 秒間に 60 回呼び出される
    function updateProgress () {
  
        // 読み込みの完了した画像のパーセンテージ
        var target = (imgLoaded / imgTotal) * 100;
  
        // current (現在地) と target (目的地) の距離をもとにイージングをかける
        current += (target - current) * 0.1;
  
        // 表示のバーの幅とテキストに current の値を反映
        // テキストは小数点以下を切り捨てて整数に
        $progressBar.css({ width: current + '%' });
        $progressText.text(Math.floor(current) + '%');
  
        // 終了処理
        if(current >= 100){
            // プログレス表示の更新をストップ
            clearInterval(progressTimer);
            // CSS でスタイルを変えるためクラスを追加
            $container.addClass('progress-complete');
            // プログレスバーとテキストを同時にアニメーションさせるため、
            // グループ化して 1 つの jQuery オブジェクトに
            $progressBar.add($progressText)
                // 0.5 秒待つ
                .delay(500)
                // 0.25 秒かけてプログレスバーとテキストを透明にする
                .animate({ opacity: 0 }, 250, function () {
                    // 1 秒かけてオーバーレイを上方向へスライドアウト
                    $container.animate({ top: '-100%' }, 1000, 'easeInOutQuint');
                });
        }
  
        // current が 99.9 より大きければ 100 と見なして終了処理へ
        if (current > 99.9) {
            current = 100;
        }
    }
  }
});

$(function(){
  activateScene2();
  function activateScene2 () {

    var $content = $('#scene-2-content'),
        $charts = $content.find('.chart');

    // コンテンツが右から出てくる
    $content.stop(true).animate({
        right: 0
    }, 1200, 'easeInOutQuint');

    // 円チャートごとの処理
    $charts.each(function(){
        var $chart = $(this),
            // 「マスク」を保存し、角度 0 を指定
            $circleLeft = $chart.find('.left .circle-mask-inner')
                .css({ transform: 'rotate(0)' }),
            $circleRight = $chart.find('.right .circle-mask-inner')
                .css({ transform: 'rotate(0)' }),
            // パーセンテージ値を取得
            $percentNumber = $chart.find('.percent-number'),
            percentData = $percentNumber.text();

        // パーセンテージの表示をいったん 0 に
        $percentNumber.text(0);

        // 角度のアニメーション
        $({ percent: 0 }).delay(1000).animate({ percent: percentData }, {
            duration: 1500, 
            progress: function () {
                var now = this.percent,
                    deg = now * 360 / 100,
                    degRight = Math.min(Math.max(deg, 0), 180),
                    degLeft  = Math.min(Math.max(deg - 180, 0), 180);
                $circleRight.css({ transform: 'rotate(' + degRight + 'deg)' });
                $circleLeft.css({ transform: 'rotate(' + degLeft + 'deg)' });
                $percentNumber.text(Math.floor(now));
            }
        });
    });
}
});
