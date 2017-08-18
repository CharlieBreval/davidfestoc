'use strict';

/*---------------------------------------------- 
               P R E L O A D E R
------------------------------------------------*/

function prealoader() {
    Pace.on('done', function () {
        // $("#contents").fadeIn(1000);
    });
}

/*---------------------------------------------- 
               S L I D E R
------------------------------------------------*/
function mainBanner() {

    if ($('#rev_slider').length > 0) {
        var revapi16;
        if ($('#rev_slider').revolution == undefined) {
            revslider_showDoubleJqueryError('#rev_slider');
        } else {
            revapi16 = $('#rev_slider').show().revolution({
                sliderType: 'carousel',
                jsFileLocation: '../revolution/js/',
                sliderLayout: 'fullscreen',
                dottedOverlay: 'none',
                delay: 9000,
                navigation: {
                    keyboardNavigation: 'off',
                    keyboard_direction: 'horizontal',
                    mouseScrollNavigation: 'off',
                    // mouseScrollNavigation:"on",
                    // mouseScrollReverse:"default",
                    onHoverStop: 'off',
                    touch: {
                        touchenabled: 'on',
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: 'horizontal',
                        drag_block_vertical: false
                    },

                    arrows: {
                        style: 'arrowpag',
                        enable: true,
                        hide_onmobile: true,
                        hide_under: 600,
                        hide_onleave: false,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        tmp: '<div class="arrow-text">{{param1}}</div>',
                        left: {
                            h_align: 'left',
                            v_align: 'center',
                            h_offset: 30,
                            v_offset: 0
                        },
                        right: {
                            h_align: 'right',
                            v_align: 'center',
                            h_offset: 30,
                            v_offset: 0
                        }
                    },

                    tabs: {
                        style: 'hermes',
                        enable: true,
                        // width: 175,
                        // height: 140,
                        width: 320,
                        height: 160,
                        min_width: 150,
                        wrapper_padding: 0,
                        wrapper_color: '#000000',
                        wrapper_opacity: '0.5',
                        tmp: '<span class="tp-tab-image"></span>',
                        visibleAmount: 10,
                        hide_onmobile: true,
                        hide_under: 776,
                        hide_onleave: false,
                        hide_delay: 200,
                        // direction: "vertical",
                        direction: 'horizontal',
                        span: true,
                        position: 'inner',
                        space: 0,
                        // h_align: "right",
                        h_align: 'center',
                        v_align: 'bottom',
                        h_offset: 0,
                        v_offset: 100
                    }
                },
                carousel: {
                    horizontal_align: 'center',
                    vertical_align: 'center',
                    fadeout: 'on',
                    vary_fade: 'on',
                    maxVisibleItems: 3,
                    infinity: 'on',
                    space: 0,
                    stretch: 'on'
                },
                responsiveLevels: [1240, 1024, 778, 480],
                gridwidth: [800, 640, 480, 480],
                gridheight: [720, 720, 480, 360],
                lazyLoad: 'on',
                lazyType: 'smart',
                parallax: {
                    type: 'scroll',
                    origo: 'enterpoint',
                    speed: 400,
                    levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
                },
                shadow: 0,
                spinner: 'off',
                stopLoop: 'off',
                stopAfterLoops: 0,
                stopAtSlide: -1,
                shuffle: 'off',
                autoHeight: 'off',
                disableProgressBar: 'off',
                hideThumbsOnMobile: 'off',
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: 'off',
                    nextSlideOnWindowFocus: 'off',
                    disableFocusListener: false
                }
            });
        }
    };

    $('#thumbsButton').on('mouseenter', function (e) {
        $('body').toggleClass('showThumbnails');
    });

    $('.tp-tabs').on('mouseleave', function (e) {
        $('body').removeClass('showThumbnails');
    });
}

/*---------------------------------------------- 
            S L I D E R   T E X T
------------------------------------------------*/
function mainBannerText() {
    if ($('#rev_slider_text').length > 0) {
        var revapi;
        revapi = jQuery('#rev_slider_text').revolution({
            sliderType: 'standard',
            sliderLayout: 'fullscreen',
            delay: 9000,
            onHoverStop: 'off',
            navigation: {
                keyboardNavigation: 'off',
                keyboard_direction: 'horizontal',
                mouseScrollNavigation: 'off',
                // mouseScrollNavigation:"on",
                // mouseScrollReverse:"default",
                onHoverStop: 'off',
                arrows: { enable: false }
            },
            responsiveLevels: [2048, 1285, 778, 480],
            gridwidth: [2048, 1285, 778, 480],
            gridheight: 720,
            fallbacks: {
                simplifyAll: 'off',
                nextSlideOnWindowFocus: 'off',
                disableFocusListener: false
            }
        });
    };
}

/*---------------------------------------------- 
            S L I D E R   S C R O L L
------------------------------------------------*/
function mainBannerScroll() {
    if ($('#rev_slider_scroll').length > 0) {
        var revapiScroll;
        if ($('#rev_slider_scroll').revolution == undefined) {
            revslider_showDoubleJqueryError('#rev_slider_scroll');
        } else {
            revapiScroll = $('#rev_slider_scroll').show().revolution({
                sliderType: 'standard',
                jsFileLocation: '../revolution/js/',
                sliderLayout: 'fullscreen',
                dottedOverlay: 'none',
                delay: 9000,
                navigation: {
                    keyboardNavigation: 'on',
                    keyboard_direction: 'vertical',
                    mouseScrollNavigation: 'on',
                    mouseScrollReverse: 'default',
                    onHoverStop: 'off',
                    touch: {
                        touchenabled: 'on',
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: 'vertical',
                        drag_block_vertical: false
                    },

                    bullets: {
                        enable: true,
                        // rtl:true,
                        hide_onmobile: true,
                        hide_under: 1024,
                        style: 'uranus',
                        hide_onleave: false,
                        direction: 'vertical',
                        h_align: 'right',
                        v_align: 'center',
                        h_offset: 30,
                        v_offset: 0,
                        space: 5,
                        tmp: '<span class="tp-bullet-inner"></span>'
                    }
                },
                viewPort: {
                    enable: true,
                    outof: 'wait',
                    visible_area: '80%',
                    presize: false
                },
                responsiveLevels: [1240, 1024, 778, 480],
                visibilityLevels: [1240, 1024, 778, 480],
                gridwidth: [1240, 1024, 778, 480],
                gridheight: [868, 768, 960, 720],
                lazyType: 'single',
                shadow: 0,
                spinner: 'spinner2',
                stopLoop: 'on',
                stopAfterLoops: 0,
                stopAtSlide: 1,
                shuffle: 'off',
                autoHeight: 'off',
                fullScreenAutoWidth: 'off',
                fullScreenAlignForce: 'off',
                fullScreenOffsetContainer: '',
                fullScreenOffset: '',
                disableProgressBar: 'on',
                hideThumbsOnMobile: 'off',
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: 'off',
                    nextSlideOnWindowFocus: 'off',
                    disableFocusListener: false
                }
            });
        }
    };
}

/*---------------------------------------------- 
        S L I D E R   C O M I N G S O O N
------------------------------------------------*/
function mainBannerComingsoon() {
    if ($('#slidescoming').length > 0) {
        var slidercoming;
        slidercoming = jQuery('#slidescoming').revolution({
            sliderType: 'standard',
            sliderLayout: 'fullscreen',
            delay: 9000,
            navigation: {
                arrows: { enable: false }
            },
            gridwidth: 1230,
            gridheight: 720
        });
    }
}

/*---------------------------------------------- 
           A L B U M S   C A R O U S E L
------------------------------------------------*/
function albumsCarousel() {
    if ($('#albums-carousel').length) {
        $('#albums-carousel').flickity({
            cellAlign: 'center',
            contain: true,
            wrapAround: true,
            groupCells: true,
            tabindex: '0'
        });
    }
}

/*---------------------------------------------- 
               L I G H T B O X
------------------------------------------------*/
function lightboxGallery() {
    var d = !!$('body').hasClass('lightbox-download-enabled');
    $('.lightgallery', '#albums-carousel').lightGallery({
        // selector:'[rel="lightbox"]',
        thumbnail: 1,
        showThumbByDefault: !1,
        autoplay: !1,
        download: d,
        // mode: 'lg-lollipop'
        cssEasing: 'cubic-bezier(.77,0,.175,1)',
        easing: 'easeOutSine',
        hideBarsDelay: 99999
    });

    $('.content-photo', '#albums-carousel').each(function (index, element) {
        var imgThumbBg = $(element).find('li:first-child img').attr('src');
        $(element).css('background-image', 'url("' + imgThumbBg + '")');
    });
}

/*---------------------------------------------- 
               C O U N T D O W N
------------------------------------------------*/
function countdownComing() {
    // Create a countdown instance. Change the launchDay according to your needs.
    // The month ranges from 0 to 11. I specify the month from 1 to 12 and manually subtract the 1.
    if ($('#timer').length > 0) {
        $('#timer').countdown('2017/04/10', function (event) {
            var $this = $(this).html(event.strftime('' + '<div class="countdown-row">' + '<div class="countdown-section"><div class="countdown-amount">%D</div> <div class="countdown-period">days</div></div> ' + '<div class="countdown-section"><div class="countdown-amount">%H</div> <div class="countdown-period">hr</div></div> ' + '<div class="countdown-section"><div class="countdown-amount">%M</div> <div class="countdown-period">min</div></div> ' + '<div class="countdown-section"><div class="countdown-amount">%S</div> <div class="countdown-period">sec</div></div>' + '</div>'));
        });
    }
}

/*---------------------------------------------- 
               N A V I G A T I O N
------------------------------------------------*/
function navigation() {
    $('.left-menu .navbar').on('click', function (e) {
        $(this).toggleClass('active');
    }).on('mouseleave', function (e) {
        $(this).removeClass('active');
    });

    $('.navbar-nav li a', '#navbar').on('click', function (e) {
        $(this).parent().addClass('active').siblings().removeClass('active');
        $('#navbar').collapse('hide');
    });
}

/*---------------------------------------------- 
               M E N U   F U L L
------------------------------------------------*/
function menuFull() {
    var $overlay = $('#overlay');
    $('#trigger-overlay').on('click', function (e) {
        if ($overlay.hasClass('open')) {
            $overlay.removeClass('open');
            $(this).removeClass('is-active');
        } else {
            $overlay.addClass('open');
            $(this).addClass('is-active');
        }
        return false;
    });
    $overlay.find('a').on('click', function (e) {
        $overlay.removeClass('open'), $('.dropdown-icon').removeClass('is-active');
    });

    $('#trigger-dropdown').on('click', function (e) {
        $('.nav-dropdown').addClass('open');
        $(this).blur();
        $('#jHeader').addClass('dropdown-open');
        return false;
    });
    $('.nav-dropdown').on('mouseleave', function () {
        $(this).removeClass('open');
        $('#jHeader').removeClass('dropdown-open');
    });
}

/*---------------------------------------------- 
                 V I D E O
------------------------------------------------*/
function videoPlayer() {
    if ($('#playerVideo').length > 0) {
        //If there are video backgrounds
        $('#playerVideo').mb_YTPlayer();
        jQuery('#playerVideo').on('YTPPause', function () {
            jQuery('#play-video').removeClass('playing');
        });
        jQuery('#playerVideo').on('YTPPlay', function () {
            jQuery('#play-video').addClass('playing');
        });
        jQuery('#play-video').on('click', function (e) {
            if (jQuery('#play-video').hasClass('playing')) {
                jQuery('#playerVideo').pauseYTP();
            } else {
                jQuery('audio').each(function (i, e) {
                    this.pause();
                });
                jQuery('#playerVideo').playYTP();
            }
            e.preventDefault();
        });
    };
}

/*---------------------------------------------- 
                   P A G E S
------------------------------------------------*/
function closeLayer() {
    var $layerPage = $('.layer-page');
    $layerPage.css({
        '-webkit-transform': 'none',
        '-moz-transform': 'none',
        '-ms-transform': 'none',
        '-o-transform': 'none',
        'transform': 'none'
    });
    $layerPage.removeClass('active');
}
function closeNavVertical() {
    $('.left-menu .navbar').removeClass('active');
}
function resizeLayers() {
    var wheight = $(window).height();
    $('.layer-page.active').css({
        '-webkit-transform': 'matrix(1, 0, 0, 1, 0, -' + wheight + ')',
        '-moz-transform': 'matrix(1, 0, 0, 1, 0, -' + wheight + ')',
        '-ms-transform': 'matrix(1, 0, 0, 1, 0, -' + wheight + ')',
        '-o-transform': 'matrix(1, 0, 0, 1, 0, -' + wheight + ')',
        'transform': 'matrix(1, 0, 0, 1, 0, -' + wheight + ')'
    });
}
function managePages() {
    $('.open-layer', '#navbar').on('click', function (e) {
        closeLayer();
        var wheight = $(window).height();
        var layerToOpen = $(this).data('layer');
        $('.layer-page').removeClass('active');
        $('.' + layerToOpen).css({
            '-webkit-transform': 'matrix(1, 0, 0, 1, 0, -' + wheight + ')',
            '-moz-transform': 'matrix(1, 0, 0, 1, 0, -' + wheight + ')',
            '-ms-transform': 'matrix(1, 0, 0, 1, 0, -' + wheight + ')',
            '-o-transform': 'matrix(1, 0, 0, 1, 0, -' + wheight + ')',
            'transform': 'matrix(1, 0, 0, 1, 0, -' + wheight + ')'
        }).addClass('active');
        closeNavVertical();
        return false;
    });
    $('.open-home').on('click', function (e) {
        closeLayer();
        closeNavVertical();
        return false;
    });
    $('.close-layer').on('click', function (e) {
        closeLayer();
    });

    // // hast navigation
    var match = location.hash.match(/^#?(.*)$/)[1];
    if (match) {
        var wheight1 = $(window).height();
        $('.layer-page').removeClass('active');
        $('.' + match).css({
            '-webkit-transform': 'matrix(1, 0, 0, 1, 0, -' + wheight1 + ')',
            '-moz-transform': 'matrix(1, 0, 0, 1, 0, -' + wheight1 + ')',
            '-ms-transform': 'matrix(1, 0, 0, 1, 0, -' + wheight1 + ')',
            '-o-transform': 'matrix(1, 0, 0, 1, 0, -' + wheight1 + ')',
            'transform': 'matrix(1, 0, 0, 1, 0, -' + wheight1 + ')'
        }).addClass('active');
    }
}

/*---------------------------------------------- 
               I S O T O P E
------------------------------------------------*/
function isotopeGrid() {
    if ($('#grid-gallery').length > 0) {
        // gallery
        var $galleryGrid = $('#grid-gallery').isotope({
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: '.grid-item'
            }
        });

        // filter items on button click
        $('#filters').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $galleryGrid.isotope({ filter: filterValue });
        });

        // change is-checked class on buttons
        $('#filters').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'li', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });

        // lightbox
        $('#grid-gallery').lightGallery({
            selector: '.grid-item',
            showThumbByDefault: !1,
            cssEasing: 'cubic-bezier(.77,0,.175,1)',
            easing: 'easeOutSine',
            hideBarsDelay: 99999
        });
    }
}

/*---------------------------------------------- 
                    M A P S
------------------------------------------------*/
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: { lat: -33.9, lng: 151.2 },
        mapTypeControl: false,
        scrollwheel: false,
        styles: [{ 'featureType': 'water', 'elementType': 'geometry', 'stylers': [{ 'color': '#e9e9e9' }, { 'lightness': 17 }] }, { 'featureType': 'landscape', 'elementType': 'geometry', 'stylers': [{ 'color': '#f5f5f5' }, { 'lightness': 20 }] }, { 'featureType': 'road.highway', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ffffff' }, { 'lightness': 17 }] }, { 'featureType': 'road.highway', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#ffffff' }, { 'lightness': 29 }, { 'weight': 0.2 }] }, { 'featureType': 'road.arterial', 'elementType': 'geometry', 'stylers': [{ 'color': '#ffffff' }, { 'lightness': 18 }] }, { 'featureType': 'road.local', 'elementType': 'geometry', 'stylers': [{ 'color': '#ffffff' }, { 'lightness': 16 }] }, { 'featureType': 'poi', 'elementType': 'geometry', 'stylers': [{ 'color': '#f5f5f5' }, { 'lightness': 21 }] }, { 'featureType': 'poi.park', 'elementType': 'geometry', 'stylers': [{ 'color': '#dedede' }, { 'lightness': 21 }] }, { 'elementType': 'labels.text.stroke', 'stylers': [{ 'visibility': 'on' }, { 'color': '#ffffff' }, { 'lightness': 16 }] }, { 'elementType': 'labels.text.fill', 'stylers': [{ 'saturation': 36 }, { 'color': '#333333' }, { 'lightness': 40 }] }, { 'elementType': 'labels.icon', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'transit', 'elementType': 'geometry', 'stylers': [{ 'color': '#f2f2f2' }, { 'lightness': 19 }] }, { 'featureType': 'administrative', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#fefefe' }, { 'lightness': 20 }] }, { 'featureType': 'administrative', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#fefefe' }, { 'lightness': 17 }, { 'weight': 1.2 }] }]
    });
    setMarkers(map);
}
function setMarkers(map) {
    var marker = new google.maps.Marker({
        position: { lat: -33.9, lng: 151.2 },
        map: map,
        title: 'Photo',
        zIndex: 1
    });
}

$(window).on('load', function (e) {
    isotopeGrid();
});

$(window).on('resize', function (e) {
    resizeLayers();
    closeNavVertical();
});

// DOM ready function
(function ($) {
    prealoader();
    mainBanner();
    mainBannerText();
    mainBannerScroll();
    mainBannerComingsoon();
    albumsCarousel();
    lightboxGallery();
    countdownComing();
    navigation();
    menuFull();
    videoPlayer();
    managePages();
})(jQuery);
//# sourceMappingURL=main.js.map
