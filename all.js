jQuery(document).ready(function(){
    var keywords = jQuery("meta[name='keywords']").attr('content');
 
});

// MAIN
jQuery(document).ready(function ($) 
{
    "use strict";
    
    //tabbed widget
    if ($(".main_tabs ul.tabs").length) { $("ul.tabs").momtabs("div.tabs-content-wrap > .tab-content", { effect: 'fade'}); }
    $('#navigation .nav-button').click(function (e) 
    {
        if (!$(this).hasClass('active')) {
            $('#navigation .nav-button').removeClass('active');
            $(this).addClass('active');
            $('.nb-inner-wrap').removeClass('sw-show');
            $(this).next('.nb-inner-wrap').addClass('sw-show');
        } else {
            $(this).removeClass('active');
            $('.nb-inner-wrap').removeClass('sw-show');
        }
        
        e.stopPropagation();
    });
    
    $('.nb-inner-wrap').click(function (e) {
        e.stopPropagation();
    });

    $('body').click(function (e) {
        $('#navigation .nav-button').removeClass('active');
        $('.nb-inner-wrap').removeClass('sw-show');
    });
    
    // secondary sidebar in all devices 
    if (!$('body').hasClass('responsive_disabled')) 
    {
        if ($(window).width() < 1210) {
            $('.secondary-sidebar').show();
            $('.secondary-sidebar').insertBefore('.main-sidebar');
            $('.secondary-sidebar').removeClass('secondary-sidebar vc_sec_sidebar alignlefti alignrighti').addClass('main-sidebar moded');
            if ($(window).width() > 1000) {
                $('.vc_column_container.main-sidebar.moded').css('margin-right', '15px');
            }
        }

        $(window).resize(function () {
            if ($(window).width() < 1210) {
                $('.secondary-sidebar').show();
                $('.secondary-sidebar').insertAfter('.main-sidebar');
                $('.secondary-sidebar').removeClass('secondary-sidebar vc_sec_sidebar alignlefti alignrighti').addClass('main-sidebar moded');
                if ($(window).width() > 1000) {
                    $('.vc_column_container.main-sidebar.moded').css('margin-right', '15px');
                }
            }
        });
    }
    
    //Submenu auto align
    $('ul.main-menu > li').each(function (e) {
        var t = $(this),
                submenu = t.find('.cats-mega-wrap');
        if (submenu.length > 0) {
            var offset = submenu.offset(),
                    w = submenu.width();
            if (offset.left + w > $(window).width()) {
                t.addClass('sub-menu-left');
            } else {
                t.removeClass('sub-menu-left');
            }
        }
    });
    
    //scroll to top
    $('.scrollToTop').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn(300);
        }
        else {
            $('.scrollToTop').fadeOut(300);
        }
    });

    $('.scrollToTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
    });

    if ($('.sidebar li.cat-item').length) {
        $('.sidebar li.cat-item .cat_num .line').each(function () {
            if ($(this).is(':empty')) {
                $(this).parent().hide();
            }

        });
    }
    
    //scroll to bottom
    $('.scrollToBottom').show();
    $(window).scroll(function () {
        if ($(this).scrollTop() < ($(document).height() - 100 - $(window).height())) {
            $('.scrollToBottom').fadeIn(300);
        }
        else {
            $('.scrollToBottom').fadeOut(300);
        }
    });
    
    $('.scrollToBottom').click(function () {
        $('html, body').animate({scrollTop: $(document).height()}, 500);
        return false;
    });
    
    // Mobile
    if ($('.top_menu_handle').length) {
        $('.top_menu_handle').toggle(function () {
            $(this).next('.mobile_top_nav').show();
            $(this).addClass('tmh_close');
        }, function () {
            $(this).next('.mobile_top_nav').hide();
            $(this).removeClass('tmh_close');
        });
    }

    if ($('.mobile_main_nav_handle').length) {
        $('.mobile_main_nav_handle').toggle(function () {
            $(this).next('.mom_mobile_main_nav .nav').slideDown();
        }, function () {
            $(this).next('.mom_mobile_main_nav .nav').slideUp();
        });

    }
    

//Accordion
$('.accordion.mom_accordion').each( function() 
{
    var acc = $(this);
    if (acc.hasClass('toggle_acc')) {
        
        acc.find('.acc_toggle_open').addClass('active');
        acc.find('.acc_toggle_open').next('.acc_content').show();
        acc.find('.acc_toggle_close').removeClass('active');
        acc.find('.acc_toggle_close').next('.acc_content').hide();
        acc.find('.acc_title').click(function() {
            $(this).toggleClass('active');
            $(this).next('.acc_content').slideToggle();
        });
    } else 
    {
        acc.find('li:first .acc_title').addClass('active');
        acc.find('.acc_title').click(function() {
            if(!$(this).hasClass('active')) {
            acc.find('.acc_title').removeClass('active');
            acc.find('.acc_content').slideUp();
            $(this).addClass('active');
            $(this).next('.acc_content').slideDown();
            }
        });
    }
}); 

    /* ==========================================================================
     *                Responsive mode
     ========================================================================== */

    // double tab on navigation
    if ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        $('#navigation .main-menu > li.menu-item-has-children').doubleTapToGo();
    }

    // Responsive menus
    $('.top-menu-holder').click(function (e) {
        e.stopPropagation();
        $('.device-top-nav').slideToggle();
        $(this).toggleClass('active');
    });
    $('.device-top-nav, .device-menu').click(function (e) {
        e.stopPropagation();
    });
    $('body').click(function () {
        $('.device-top-nav').slideUp();
        $('.device-menu').slideUp();
    });

    $('.device-menu-holder').click(function (e) {
        e.stopPropagation();
        if ($(this).hasClass('active')) {
            $('.device-menu li').each(function () {
                if ($(this).find('.mom_mega_wrap').length !== 0) {
                } else {
                    $(this).find('.sub-menu').slideUp();
                }
            });
            $('.device-menu').find('.dm-active').removeClass('dm-active');
            $('.device-menu').find('.mom_custom_mega').slideUp();
        }
        $('.device-menu').slideToggle();
        $(this).toggleClass('active');
        $('#navigation .nav-buttons').toggleClass('mh-active');

    });
    
    $('.the_menu_holder_area').html($('.device-menu').find('.current-menu-item').children('a').html());

    var nbts = $('.nav-buttons .nav-button');
    var rnp = 0;
    nbts.each(function () {
        var w = $(this).outerWidth() - 1;
        rnp += w;
    });
    if (nbts.length === 3) {
        rnp = rnp + 2;
    }

    $('body:not(.rtl) .device-menu-wrap').css('padding-right', rnp + 'px');
});

// MyJS
function append_mobile_menu()
{
    var html = jQuery('#menu-top-menu').html();
    jQuery('#menu-top-menu-1').html(html);
    var html = jQuery('#menu-main-menu').html();
    jQuery('#main_menu_mobile').html(html);
    
    jQuery('.responsive-caret').click(function() {
        var li = jQuery(this).parent('li');
        if (li.hasClass('dm-active')) {
           li.children('.sub-menu').slideUp();
           li.removeClass('dm-active');
        } else 
        {
            li.children('.sub-menu').slideDown();
            li.addClass('dm-active');
        }
    });
}

function show_mucluc()
{
    var e_detail_page = jQuery('#element_action');
    if (jQuery(e_detail_page).length > 0)
    {
        
        var h2_list = jQuery('#tut_detail .entry-content h2');
        
        if (h2_list.length > 1)
        {
            var goto_html = '<div class="goto-wrapper mom_list"><p>Nội dung chính </p><ul id="go-to-detail">';
            jQuery.each(h2_list, function(index, item){
                goto_html += '<li class="list-goto-'+index+'"><i class="fa-icon-double-angle-right" style="" data-color="" data-color_hover="" data-bg="" data-bg_hover=""></i><a href="#goto-h2-'+index+'">'+jQuery(item).text()+'</a></li>';
            });
            goto_html += '</ul></div>';
            var first_child  = jQuery('.entry-content h2');
            jQuery(first_child['0']).before(goto_html);
            
            var h3_list = jQuery('.entry-content h3');
            
            var h3_array = new Array();
            for (var i = 0; i < h3_list.length; i++){
                jQuery(h3_list[i]).attr('id', 'goto-h3-' + i);
                var h2_parent = jQuery(h3_list[i]).prevAll('h2');
                
                if (h2_parent.length < 1){
                    h2_parent = jQuery(h3_list[i]).parent().prevAll('h2');
                }
                
                var index = parseInt(jQuery(h2_parent[0]).attr('data-stt'));
                if (!h3_array[index]){
                    h3_array[index] = [];
                }
                h3_array[index].push(h3_list[i]);
            }
            
            jQuery.each(h3_array, function(index, item){
                if (item)
                {
                    var html = '';
                    for (var i = 0; i < item.length; i++){
                        var str = jQuery(item[i]).text().replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
                            return '&#' + i.charCodeAt(0) + ';';
                        });
                        html += '<li><a href="#'+jQuery(item[i]).attr('id')+'">'+str+'</a></li>';
                    }
                    
                    if (html != ''){
                        html = '<ul>'+html+'</ul>';
                        jQuery('.list-goto-' + index).append(html);
                    } 
                }
            });
            
            jQuery('#go-to-detail a').click(function(){
                var id = jQuery(this).attr('href').replace('#', '');
                jQuery('body, html').animate({
                        scrollTop: jQuery('#' + id).offset().top - 55
                }, 500);
                return false;
            });

        }
    }
}

var contact_sending = false;
function addContact()
{
    if (jQuery('#form-contact').length > 0)
    {
        jQuery('#contact_image_captcha').attr('src', config.base_url + 'captcha/contact?rand=' + Math.random() + Math.random() + Math.random());
        jQuery('#contact_image_captcha').css('cursor', 'pointer');
        jQuery('#contact_image_captcha').click(function(){
            jQuery('#contact_image_captcha').attr('src', config.base_url + 'captcha/contact?rand=' + Math.random() + Math.random() + Math.random());
        });
        jQuery('#form-contact').submit(function(){

            if (contact_sending){
                alert('Thông tin liên hệ đang được gửi ...');
            }

            var data = {
                'title'     : jQuery('#title').val(),
                'name'      : jQuery('#name').val(),
                'email'     : jQuery('#email').val(),
                'address'   : jQuery('#address').val(),
                'contact_type' : jQuery('#contact_type').val(),
                'phone' : jQuery('#phone').val(),
                'question' : CKEDITOR.instances['question'].getData(),
                'captcha' : jQuery('#captcha').val(),
                'add_contact' : jQuery('#add_contact').val()
            };

            var url  = jQuery(this).attr('action');

            contact_sending = true;

            jQuery('#send_message').val('Sending ...');
            
            jQuery.ajax({
                url : url,
                data : data,
                type: 'post',
                dataType : "text",
                success : function(result){
                    result = jQuery.trim(result);
                    if (result == '0'){
                        alert('Mã captcha không đúng');
                        return false;
                    }
                    else{
                        var html = '<div class="base-box mom_box_sc" style="margin-bottom: 0px; background-color:#d7edf5;border-color:#bddde9;"><span style="color: #1c6f8e;">Gửi liên hệ thành công!</span></div>';
                        jQuery('#send_message').parent().before(html);
                        jQuery('#send_message').parent().remove();
                    }
                }
            }).always(function(){
                contact_sending = false;
                jQuery('#send_message').val('Gửi liên hệ');
            });

            return false;
        });
    }
}


var order_sending = false;
function addOrder()
{
    if (jQuery('#form-order').length > 0)
    {
        jQuery('#order_image_captcha').attr('src', config.base_url + 'captcha/order?rand=' + Math.random() + Math.random() + Math.random());
        jQuery('#order_image_captcha').css('cursor', 'pointer');
        jQuery('#order_image_captcha').click(function(){
            jQuery('#order_image_captcha').attr('src', config.base_url + 'captcha/order?rand=' + Math.random() + Math.random() + Math.random());
        });
        jQuery('#form-order').submit(function(){

            if (order_sending){
                alert('Thông tin liên hệ đang được gửi ...');
            }

            var data = {
                'title'     : jQuery('#title').val(),
                'name'      : jQuery('#name').val(),
                'cmnd'      : jQuery('#cmnd').val(),
                'email'     : jQuery('#email').val(),
                'post_id'     : jQuery('#order_post_id').val(),
                'address'   : jQuery('#address').val(),
                'order_type' : jQuery('#order_type').val(),
                'phone' : jQuery('#phone').val(),
                'question' : CKEDITOR.instances['question'].getData(),
                'captcha' : jQuery('#captcha').val(),
                'add_order' : jQuery('#add_order').val()
            };

            var url  = jQuery(this).attr('action');

            order_sending = true;

            jQuery('#send_message').val('Sending ...');
            
            jQuery.ajax({
                url : url,
                data : data,
                type: 'post',
                dataType : "text",
                success : function(result){
                    result = jQuery.trim(result);
                    if (result == '0'){
                        alert('Mã captcha không đúng');
                        return false;
                    }
                    else{
                        var html = '<div class="base-box mom_box_sc" style="margin-bottom: 0px; background-color:#d7edf5;border-color:#bddde9;"><span style="color: #1c6f8e;">Gửi liên hệ thành công!</span></div>';
                        jQuery('#send_message').parent().before(html);
                        jQuery('#send_message').parent().remove();
                    }
                }
            }).always(function(){
                order_sending = false;
                jQuery('#send_message').val('Gửi đơn hàng');
            });

            return false;
        });
    }
}

function show_goto()
{
    var e_detail_page = jQuery('#element_action');
    
    if (jQuery(e_detail_page).length > 0)
    {
        var h2_list = jQuery('.entry-content h2');
        
        jQuery.each(h2_list, function(index, item){
            jQuery(item).attr('data-stt', index).attr('id', 'goto-h2-' + index);
        });
    }
    
    show_mucluc();
}


function add_view()
{
    var element = jQuery('#element_action');
    if (element.length > 0){
        
        var id = jQuery(element).attr('data-id');
        var url = jQuery(element).attr('data-uri');
        
        setTimeout(function(){
            jQuery.ajax({
                url : url,
                type : "post",
                dataType : "text",
                data : {
                   id : id
                }
            });
        }, 10000);
    }
}

function getFooterHeightFixed()
{
    var footer = jQuery('#footer_wrapper').height();
    
    var featured = jQuery('#featured_post_wrap').height();
    
    if (featured > 1){
        featured += 20;
    }
    
    var result = footer + featured;
        
    return result;
}

function fixed_sidebar()
{
    if (jQuery('#right_sidebar').height() != null && jQuery('#right_sidebar').height() < jQuery('#main_container').height())
    {
        // Right Sidebar
        var q2w3_sidebar_2_options = { 
            "sidebar" : "right_sidebar", 
            "margin_top" : 52, 
            "margin_bottom" : getFooterHeightFixed(), 
            "screen_max_width" : 767, 
            "width_inherit" : false, 
            "widgets" : ['fixed_right_sidebar'] 
        };
        q2w3_sidebar(q2w3_sidebar_2_options);
        setInterval(function () { q2w3_sidebar_2_options.margin_bottom = getFooterHeightFixed(); q2w3_sidebar(q2w3_sidebar_2_options); }, 1500);
    }
    if (jQuery('#main_container > div').length > 1){
        jQuery('#main_container > div:last-child').attr('id', 'fixed_content');
    }
    
    
    if (jQuery('#fixed_content').length > 0)
    {
        // Right Sidebar
        var q2w3_sidebar_content_options = { 
            "sidebar" : "main_container", 
            "margin_top" : 52, 
            "margin_bottom" : getFooterHeightFixed(), 
            "screen_max_width" : 767, 
            "width_inherit" : false, 
            "widgets" : ['fixed_content'] 
        };
        q2w3_sidebar(q2w3_sidebar_content_options);
        setInterval(function () { q2w3_sidebar_content_options.margin_bottom = getFooterHeightFixed() + 20; q2w3_sidebar(q2w3_sidebar_content_options); }, 1500);
    }
    
    
    
    
    if (jQuery('#fixed-tab').height() != null)
    {
        function getTabFixedHeight()
        {
            var height = getFooterHeightFixed();
            
            return height + jQuery('#other-wraper').height() + 65;
        }
        
        // Right Sidebar
        var q2w3_sidebar_22_options = { 
            "sidebar" : "main_container", 
            "margin_top" : 52, 
            "margin_bottom" : getTabFixedHeight(), 
            "screen_max_width" : 767, 
            "width_inherit" : false, 
            "widgets" : ['fixed-tab'] 
        };
        q2w3_sidebar(q2w3_sidebar_22_options);
        setInterval(function () { q2w3_sidebar_22_options.margin_bottom = getTabFixedHeight(); q2w3_sidebar(q2w3_sidebar_22_options); }, 1500);
    }
    
    if (jQuery('#left_sidebar').height() != null && jQuery('#left_sidebar').height() < jQuery('#main_container').height())
    {
        // Left Sidebar
        var q2w3_sidebar_2_options1 = { 
            "sidebar" : "left_sidebar", 
            "margin_top" : 52, 
            "margin_bottom" : getFooterHeightFixed(), 
            "screen_max_width" : 767, 
            "width_inherit" : false, 
            "widgets" : ['right_sidebar_cau_hoi'] 
        };
        q2w3_sidebar(q2w3_sidebar_2_options1);
        setInterval(function () {q2w3_sidebar_2_options1.margin_bottom = getFooterHeightFixed(); q2w3_sidebar(q2w3_sidebar_2_options1); }, 1500);
    }
    
    
    if (jQuery('#brand_fixed').height() != null)
    {
        // Right Sidebar
        var q2w3_sidebar_3_options = { 
            "sidebar" : "brand_fixed_wrapper", 
            "margin_top" : 52, 
            "margin_bottom" : (getFooterHeightFixed() + 41), 
            "screen_max_width" : 767, 
            "width_inherit" : false, 
            "widgets" : ['brand_fixed'] 
        };
        q2w3_sidebar(q2w3_sidebar_3_options);
        setInterval(function () { q2w3_sidebar_3_options.margin_bottom = getFooterHeightFixed() + 41; q2w3_sidebar(q2w3_sidebar_3_options); }, 1500);
    }
}

function activeMenu(){
    if (/freetuts\.net\/tai-nguyen/.test(window.location.href)){
        jQuery('.active-tai-nguyen').addClass('active');
    }
    else if (/freetuts\.net\/giam-gia/.test(window.location.href)){
        jQuery('.active-blog').addClass('active');
    }
    else if (/freetuts\.net\/viec-lam/.test(window.location.href)){
        jQuery('.active-viec-lam').addClass('active');
    }
    else if (/freetuts\.net\/dang-tin-tuyen-dung/.test(window.location.href)){
        jQuery('.active-viec-lam').addClass('active');
    }
    else if (/freetuts\.net\/video/.test(window.location.href)){
        jQuery('.active-video').addClass('active');
    }
    else if (/freetuts\.net\/lien-he\.html/.test(window.location.href)){
        jQuery('.active-lien-he').addClass('active');
    }
    else if (/freetuts\.net\/author/.test(window.location.href)){
        jQuery('.active-author').addClass('active');
    }
    else if (/freetuts\.net\/hop-tac\.html/.test(window.location.href)){
        jQuery('.active-hop-tac').addClass('active');
    }
    else if (/freetuts\.net\/ban-quyen\.html/.test(window.location.href)){
        jQuery('.active-ban-quyen').addClass('active');
    }
    else if (/freetuts\.net\/gioi-thieu\.html/.test(window.location.href)){
        jQuery('.active-gioi-thieu').addClass('active');
    }
    else{
        jQuery('.active-all').addClass('active');
    }
}

function call_to_action(){
    jQuery('.call-to-action').wrap('<span class="mom_button_wrap"></span>');
    jQuery('.call-to-action').addClass('button mom_button red_bt ');
}

function blockquote()
{
    if (jQuery(window).width() <= 720){
        return false;
    }
    var blocks = jQuery('blockquote');
    for (var i = 0; i < blocks.length; i++)
    {
        if (!jQuery(blocks[i]).hasClass('mom_quote'))
        {
            jQuery(blocks[i]).addClass('base-box mom_box_sc_ mom_box_sc clear ');
        }
    }
}

function load_comment(){
    if (jQuery('.comments-area').length > 0){
        
        comments.start();   
        comments.load_comment();
    }
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    url = url.toLowerCase(); // This is just to avoid case sensitiveness  
    name = name.replace(/[\[\]]/g, "\\$&").toLowerCase();// This is just to avoid case sensitiveness for query parameter name
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function video()
{
    if (jQuery('.video-list').length > 0)
    {
        var height = jQuery('.video-list').height();
        if (height > 422){
            jQuery('.video-list').addClass('video-list-scroll');
        }
        
        jQuery('.video-list ul li a').click(function()
        {
            
            var url = jQuery(this).attr('href');
            jQuery('.video_frame iframe').attr('src', url);
            jQuery('.video-list ul li').removeClass('active');
            jQuery(this).parent().addClass('active');
            
            var download = jQuery(this).attr('data-download');
            var id = jQuery(this).attr('data-id-youtube');
            window.location.hash = id;
            if (download != ''){
                jQuery('#video_download').attr('href', download);
                jQuery('.video_download').show();
            }
            else{
                jQuery('.video_download').hide();
            }
            
            return false;
        });
        
        // Get query string ID;
        var ytb = window.location.hash.replace('#', '');
        
        if (ytb !== ''){
            jQuery('#vdid'+ytb).click();
        }
        else{
            jQuery('.video-list ul li:first-child a').click();
        }
        
    }
}

var email_follow_sending = false;
function follow_email()
{
    jQuery('.add-follow-email').submit(function()
    {
        if (email_follow_sending == true) {
            alert('Yêu cầu trước của bạn đang xử lý ...');
            return false;
        }
        
        jQuery(this).find('.button').html('...');
        email_follow_sending = true;
        
        var id = jQuery(this).attr('data-input-id');
        var data = {
            email : jQuery(this).find('#' + id).val(),
            add_email : 'add_email'
        };
        var obj = this;
        jQuery.ajax({
            type : "post",
            dataType : "text",
            data : data,
            url : jQuery(this).attr('data-url'),
            success : function(result)
            {
                alert('Đăng ký thành công! Mình sẽ liên hệ với bạn sau nhé.');
            }
        }).always(function(){
            email_follow_sending = false;
            jQuery(obj).find('.button').html('Đăng ký');
        });
        
        return false;
    });
}

function show_slide()
{
    var rtl = false;
    var rows = 1;
    if (rows !== '' && rows > 1) {
        var divs = jQuery(".sb-content-523 .sb-item");
        for (var i = 0; i < divs.length; i += rows) {
            divs.slice(i, i + rows).wrapAll("<div class='rows-1'></div>");
        }
    }

    jQuery(".sb-content-523").owlCarousel({
        items: 3,
        baseClass: 'mom-carousel',
        rtl: rtl,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            1000: {
                items: 3},
            671: {
                items: 3
            },
            480: {
                items: 2
            },
            320: {
                items: 1
            },
            1: {
                items: 1
            }
        }
    });
}

jQuery(document).ready(function()
{
    append_mobile_menu();
    addContact();
    addOrder();
    show_goto();
    blockquote();
    fixed_sidebar();
    add_view();
    activeMenu();
    call_to_action();
    load_comment();
    video();
    follow_email();
    show_slide();
    
    if (jQuery(window).width() > 1000) {
        if (jQuery('body').hasClass('sticky_navigation_on')) {
            var aboveHeight = jQuery('#header-wrapper').outerHeight();
            jQuery(window).scroll(function () {
                //if scrolled down more than the headerÕs height
                if (jQuery(window).scrollTop() > aboveHeight) {
                    // if yes, add ÒfixedÓ class to the <nav>
                    // add padding top to the #content
                    if (jQuery('#wpadminbar').length) {
                        jQuery('#navigation').addClass('sticky-nav').css('top', '28px').next().css('padding-top', '52px');
                    } else {
                        jQuery('#navigation').addClass('sticky-nav').css('top', '0').next().css('padding-top', '52px');
                    }
                } else {
                    jQuery('#navigation').removeClass('sticky-nav').css('top', 0).next().css('padding-top', '0');
                }
            });
        }
    }
    
    // EXAMPLE
    var examples = jQuery('.example_wrapper');
    jQuery(examples).each(function(key, item){
        jQuery(item).append('<span class="num_example">'+(key + 1)+'</span>');
    });
    
    if (jQuery('.giam-gia-slide').length > 0){
        var rtl = false;
        var rows = 1;
        if (rows !== '' && rows > 1) {
            var divs = jQuery(".giam-gia-slide .sb-item");
            for (var i = 0; i < divs.length; i += rows) {
                divs.slice(i, i + rows).wrapAll("<div class='rows-1'></div>");
            }
        }
        
        if (jQuery('body').attr('id') == 'home'){
            var num = 3;
        }
        else{
            var num = 3;
        }
        
        jQuery(".giam-gia-slide").owlCarousel({
            items: 3,
            baseClass: 'mom-carousel',
            rtl: rtl,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsive: {
                1000: {
                    items: num},
                671: {
                    items: 3
                },
                480: {
                    items: 2
                },
                320: {
                    items: 1
                },
                1: {
                    items: 1
                }
            }
        });
    }
    
    jQuery("body").on("contextmenu", "img", function(e) {
        return false;
    });
    
    if (jQuery('#show-list-post').length > 0)
    {
        setTimeout(function(){
            var html = jQuery('#sidebar_right_tut_series_post ul').html();
            jQuery('#show-list-post').html('<ul>'+html+'</ul>');
        }, 0);
    }
    
    if (jQuery('.pricing-main').length > 0)
    {
        jQuery('.pricing-brand li a').click(function()
        {
            if (jQuery(this).parent().hasClass('active')){
                return false;
            }
            
            var url = jQuery(this).attr('data-url');
            
            var img = jQuery('.logo a').attr('href') + '/public/theme/images/loading.gif';
            
            jQuery('.show-ajax').html('<div style="text-align: center"><img src="'+img+'" style="border: none; margin: 30px auto;"/></div>');
            
            jQuery.ajax({
                url : url,
                type : "get",
                dataType : "text",
                data : {},
                success : function(result){
                    jQuery('.show-ajax').html(result);
                    
                    jQuery('body, html').animate({
                            scrollTop: jQuery('#show-ajax').offset().top - 10
                    }, 500);
                },
                error : function(){
                    
                }
            });
            return false;
        });
        
        jQuery('.pricing-brand a').click(function () {
            jQuery('.pricing-brand li').removeClass('active');
            
            jQuery(this).parent().addClass('active');
            window.location.hash = jQuery(this).attr('href');
        });

        var hash = window.location.hash.replace();
        if (hash) {
            jQuery(hash + '-go').click();
        }
        else{
            jQuery('.pricing-brand li:first-child a').click();
        }
    }
    
    if (stickyAd !== "undefined" && stickyAd.length > 0)
    {
        
        jQuery(document).on("click", ".sticky_ads .ads_close", function(){
            jQuery(this).parent().parent().remove();
        });
        
        if (typeof(Storage) !== "undefined") 
        {
            var keyFrame1 = "sticky";
            var d = new Date();
            var lastTime    = localStorage.getItem(keyFrame1);
            var currentTime = d.getTime();
            var flag        = false;
            
            // Lần đầu
            if (lastTime === "undefined"){
                flag = true;
            }
            else{
                if (currentTime - lastTime > (60*5*1000)){
                    flag = true;
                }
            }
            
            if (flag){
                var timer = 10000;
                for (var i = 0; i < stickyAd.length; i++){
                    show_timer(stickyAd[i], timer);
                    timer += 10000;
                }
                localStorage.setItem(keyFrame1, currentTime);
            }
        }
    }
    
    function show_timer(item, timer)
    {
        setTimeout(function(){
            var html = '<div class="one-ads">';
                html += '<div class="ads_wrapper">';
                    html += '<span class="ads_close">x</span>';
                    html += '<div class="ads_title">';
                        html += '{title}';
                    html += '</div>';
                    html += '<div class="ads_content">';
                        html += '{content}';
                    html += '</div>';
                    html += '<div class="ads_btn">';
                        html += '<span class="mom_button_wrap">';
                            html += '<a href="{link}" class="button mom_button red_bt" rel="nofollow" target="_blank">XEM NGAY</a>';
                        html += '</span>';
                    html += '</div>';
                html += '</div>';
            html += '</div>';

            html = html.replace('{title}', item.title);
            html = html.replace('{content}', item.content);
            html = html.replace('{link}', item.link);

            jQuery('.sticky_ads').append(html);
        }, timer);
    }
    
    if (jQuery('#brandframe').length > 0){
        
        if (typeof(Storage) !== "undefined") 
        {
            var keyFrame = 'key' + jQuery('#brandframe').attr('data-key');
            var d = new Date();
            var lastTime    = localStorage.getItem(keyFrame);
            var currentTime = d.getTime();
            var flag        = false;
            
            // Lần đầu
            if (lastTime === "undefined"){
                flag = true;
            }
            else{
                if (currentTime - lastTime > (60*60*1000)){
                    flag = true;
                }
            }
            
            if (flag){
                localStorage.setItem(keyFrame, currentTime);
                var url = jQuery('#brandframe').attr('data-link');
                jQuery('body').append("<iframe src='"+url+"' width='0px' height='0px'></iframe>");
            }
        }
    }
    
    var coupons = jQuery('.coupon');
    jQuery.each(coupons, function(index, coupon){
        jQuery(coupon).wrap('<span class="mom_button_wrap"></span>');
        jQuery(coupon).addClass('button mom_button pink_bt');
        jQuery(coupon).click(function(){
            var code = jQuery(coupon).attr('title');
            var link = jQuery(coupon).attr('href');
            prompt("Copy mã giảm giá, nhớ đọc kỹ hướng dẫn sử dụng nhé bạn.", code);
        });
    });
    
    
    /*Sticky ads*/
    jQuery('#ads_sticky .close').click(function(){
        jQuery('#ads_sticky').fadeOut(500);
        jQuery('#ads_sticky_control').show();
        return false;
    });
    
     jQuery('#ads_sticky_control').click(function(){
        jQuery('#ads_sticky').fadeIn(500);
        jQuery('#ads_sticky_control').hide();
        return false;
    });
});



