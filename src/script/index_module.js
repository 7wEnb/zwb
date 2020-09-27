define([], function() {
    return {
        init: function() {
            //首页渲染
            (function() {
                const $render = $('.wnsjk_right')
                $.ajax({
                        url: 'http://192.168.11.1/Snail/php/snail.php',
                        dataType: 'json'
                    })
                    .done(function(data) {
                        let strhtml = ''
                        $.each(data, function(index, value) {

                            strhtml += `
                        
                        <div class="wn_simcard">
                        <div class="simcard_name">${value.title}</div>
                        <div class="simcard_intro">${value.content}</div>
                        <div class="simcard_price">${value.price}</div>
                        <div class="simcard_img">
                        <img  src="${value.url}" alt="">
                        </div>
                        
                    </div>
                        `
                            strhtml += '</div>'
                            if (index == 3) {
                                return false
                            }
                        })
                        $render.html(strhtml)


                    })
            })()



            //二级菜单

            const $menuli = $('.left li');
            const $item = $('.cartlist .item');
            const $cartlist = $('.cartlist');
            $menuli.on('mouseover', function() {
                $(this).addClass('active').siblings().removeClass('active');
                $item.eq($(this).index()).show().siblings('.item').hide();
                $cartlist.show();
            });
            $menuli.on('mouseout', function() {
                $(this).removeClass('active');
                $cartlist.hide();
            });
            $cartlist.hover(() => {
                $cartlist.show();

            }, () => {
                $cartlist.hide();

            })





            //轮播图
            (function() {

            })()


        }

    }
})