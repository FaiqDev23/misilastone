window._wpemojiSettings = { "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/2.2.1\/72x72\/", "ext": ".png", "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/2.2.1\/svg\/", "svgExt": ".svg", "source": { "concatemoji": "http:\/\/wp1.themexlab.com\/old\/greenture\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.7.23" } };
!function (t, a, e) { var r, n, i, o = a.createElement("canvas"), l = o.getContext && o.getContext("2d"); function c(t) { var e = a.createElement("script"); e.src = t, e.defer = e.type = "text/javascript", a.getElementsByTagName("head")[0].appendChild(e) } for (i = Array("flag", "emoji4"), e.supports = { everything: !0, everythingExceptFlag: !0 }, n = 0; n < i.length; n++)e.supports[i[n]] = function (t) { var e, a = String.fromCharCode; if (!l || !l.fillText) return !1; switch (l.clearRect(0, 0, o.width, o.height), l.textBaseline = "top", l.font = "600 32px Arial", t) { case "flag": return (l.fillText(a(55356, 56826, 55356, 56819), 0, 0), o.toDataURL().length < 3e3) ? !1 : (l.clearRect(0, 0, o.width, o.height), l.fillText(a(55356, 57331, 65039, 8205, 55356, 57096), 0, 0), e = o.toDataURL(), l.clearRect(0, 0, o.width, o.height), l.fillText(a(55356, 57331, 55356, 57096), 0, 0), e !== o.toDataURL()); case "emoji4": return l.fillText(a(55357, 56425, 55356, 57341, 8205, 55357, 56507), 0, 0), e = o.toDataURL(), l.clearRect(0, 0, o.width, o.height), l.fillText(a(55357, 56425, 55356, 57341, 55357, 56507), 0, 0), e !== o.toDataURL() }return !1 }(i[n]), e.supports.everything = e.supports.everything && e.supports[i[n]], "flag" !== i[n] && (e.supports.everythingExceptFlag = e.supports.everythingExceptFlag && e.supports[i[n]]); e.supports.everythingExceptFlag = e.supports.everythingExceptFlag && !e.supports.flag, e.DOMReady = !1, e.readyCallback = function () { e.DOMReady = !0 }, e.supports.everything || (r = function () { e.readyCallback() }, a.addEventListener ? (a.addEventListener("DOMContentLoaded", r, !1), t.addEventListener("load", r, !1)) : (t.attachEvent("onload", r), a.attachEvent("onreadystatechange", function () { "complete" === a.readyState && e.readyCallback() })), (r = e.source || {}).concatemoji ? c(r.concatemoji) : r.wpemoji && r.twemoji && (c(r.twemoji), c(r.wpemoji))) }(window, document, window._wpemojiSettings);
/* <![CDATA[ */
var tribe_events_linked_posts = { "post_types": { "tribe_venue": "venue", "tribe_organizer": "organizer" } };
var greenture_js_vars = { "greenture_template_uri": "http:\/\/wp1.themexlab.com\/old\/greenture\/wp-content\/themes\/greenture", "greenture_ajax_url": "http:\/\/wp1.themexlab.com\/old\/greenture\/wp-admin\/admin-ajax.php" };
/* ]]> */
var ajaxurl = '../wp-admin/admin-ajax.html';


jQuery.noConflict();
jQuery(window).load(function () {
    var curPage = 1;
    var pagesNum = jQuery('ul.pagination').find("a.page-numbers:not('.current, .next, .prev'):last").text();

    var $container = jQuery('#tpath-posts-infinite-container');
    $container.infinitescroll({
        loading: {
            msg: null,
            finishedMsg: '<span class="all-loaded">All Posts displayed</span>',
            img: 'http://wp1.themexlab.com/old/greenture/wp-content/themes/greenture/images/ajax-loader.gif',
            msgText: ""
        },
        navSelector: 'ul.pagination',
        nextSelector: 'ul.pagination li a.next',
        itemSelector: 'article.post',
        errorCallback: function () {
            if ($container.hasClass('grid-layout')) {
                $container.masonry();
            }
        }
    }, function (posts) {

        var $newPosts = jQuery(posts);

        curPage++;
        if (curPage == pagesNum) {
            jQuery(window).unbind('.infscr');
        }

        $newPosts.css({ opacity: 0 });
        $newPosts.imagesLoaded(function () {
            $newPosts.animate({ opacity: 1 }, 300, "linear");
            if ($container.hasClass('grid-layout')) {
                $container.masonry('appended', $newPosts);
            }
        });

        if (Modernizr.mq('only screen and (min-width: 1025px)')) {
            var gridwidth = (jQuery('.grid-col-2').width() / 2) - 15;
            jQuery('.grid-col-2 .grid-posts').css('width', gridwidth);
            var gridwidth = (jQuery('.grid-col-3').width() / 3) - 20;
            jQuery('.grid-col-3 .grid-posts').css('width', gridwidth);
            var gridwidth = (jQuery('.grid-col-4').width() / 4) - 22;
            jQuery('.grid-col-4 .grid-posts').css('width', gridwidth);
        }

        if (Modernizr.mq('only screen and (max-width: 1024px) and (min-width: 768px)')) {
            if (jQuery('body').hasClass('three-col-middle') || jQuery('body').hasClass('three-col-right') || jQuery('body').hasClass('three-col-left')) {
                jQuery('.three-col-middle .grid-col-2 .grid-posts, .three-col-right .grid-col-2 .grid-posts, .three-col-left .grid-col-2 .grid-posts, .three-col-middle .grid-col-3 .grid-posts, .three-col-right .grid-col-3 .grid-posts, .three-col-left .grid-col-3 .grid-posts, .three-col-middle .grid-col-4 .grid-posts, .three-col-right .grid-col-4 .grid-posts, .three-col-left .grid-col-4 .grid-posts').imagesLoaded(function () {
                    jQuery('.three-col-middle .grid-col-2 .grid-posts, .three-col-right .grid-col-2 .grid-posts, .three-col-left .grid-col-2 .grid-posts, .three-col-middle .grid-col-3 .grid-posts, .three-col-right .grid-col-3 .grid-posts, .three-col-left .grid-col-3 .grid-posts, .three-col-middle .grid-col-4 .grid-posts, .three-col-right .grid-col-4 .grid-posts, .three-col-left .grid-col-4 .grid-posts').css('width', '100%');
                    $('.three-col-middle .grid-col-2, .three-col-right .grid-col-2, .three-col-left .grid-col-2, .three-col-middle .grid-col-3, .three-col-right .grid-col-3, .three-col-left .grid-col-3, .three-col-middle .grid-col-4, .three-col-right .grid-col-4, .three-col-left .grid-col-4').masonry({
                        columnWidth: '.grid-posts',
                        gutter: 0
                    });
                });
            } else {
                var gridwidth = (jQuery('.grid-col-2, .grid-col-3, .grid-col-4').width() / 2) - 15;
                jQuery('.grid-col-2 .grid-posts, .grid-col-3 .grid-posts, .grid-col-4 .grid-posts').css('width', gridwidth);
            }
        }

        if (Modernizr.mq('only screen and (max-width: 767px)')) {
            jQuery('.grid-col-2 .grid-posts, .grid-col-3 .grid-posts, .grid-col-4 .grid-posts').imagesLoaded(function () {
                jQuery('.grid-col-2 .grid-posts, .grid-col-3 .grid-posts, .grid-col-4 .grid-posts').css('width', '100%');
                $('.grid-col-2, .grid-col-3, .grid-col-4').masonry({
                    columnWidth: '.grid-posts',
                    gutter: 0
                });
            });
        }

        if (typeof jQuery.fn.mediaelementplayer !== 'undefined' && jQuery.isFunction(jQuery.fn.mediaelementplayer)) {
            $newPosts.find('audio, video').mediaelementplayer();
        }

        $newPosts.find("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").prettyPhoto({ social_tools: false, deeplinking: false });

        $newPosts.find('.posted-date .entry-date').each(function () {
            var post_date = jQuery(this).text();
            var date_arr = post_date.split(/ +/);
            if (typeof date_arr !== 'undefined' && date_arr.length > 0) {
                jQuery(this).html("");

                if (date_arr[0] !== undefined) {
                    jQuery(this).append('<span class="date">' + date_arr[0] + '</span>');
                }

                if (date_arr[1] !== undefined) {
                    jQuery(this).append('<span class="month">' + date_arr[1] + '</span>');
                }

                if (date_arr[2] !== undefined) {
                    jQuery(this).append('<span class="year">' + date_arr[2] + '</span>');
                }
            }
        });

        $newPosts.find('.owl-carousel.blog-carousel-slider').each(function () {
            initBlogSlider();
        });

        if ($container.hasClass('grid-layout')) {
            $container.masonry();
        }

    });
});

jQuery(function ($) {
    $('#tpath_gmap').gmap3({
        map: {
            options: {
                styles: [{ "featureType": "landscape", "stylers": [{ "color": "#E2E2E2" }] }, { "featureType": "road.highway", "stylers": [{ "color": "#B2B2B2" }] }, { "featureType": "road.arterial", "stylers": [{ "color": "#FDFDFD" }] }, { "featureType": "water", "stylers": [{ "color": "#D9D9D9" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#d3cfcf" }] }, { "featureType": "poi", "stylers": [{ "color": "#C8C8C8" }] }, { "elementType": "labels.text", "stylers": [{ "color": "#000000" }, { "saturation": 1 }, { "weight": 0.1 }] }]
            }
        },
        getlatlng: {
            address: "Mirpur New Bazar Road, Block-c, Dhaka-1210",
            callback: function (results) {
                if (!results) return;
                $(this).gmap3({
                    map: {
                        options: {
                            center: results[0].geometry.location,
                            zoom: 12,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            scrollwheel: true,
                            scaleControl: true,
                            zoomControl: true,
                            panControl: true,
                        }
                    },
                    marker: {
                        values: [{ address: "Mirpur New Bazar Road, Block-c, Dhaka-1210", data: "Mirpur New Bazar Road, Block-c, Dhaka-1210", options: { icon: "http://wp1.themexlab.com/old/greenture/wp-content/themes/greenture/images/map-marker.png" } },],
                        events: {
                            mouseover: function (marker, event, context) {
                                var map = $(this).gmap3("get"),
                                    infowindow = $(this).gmap3({ get: { name: "infowindow" } });
                                if (infowindow) {
                                    infowindow.open(map, marker);
                                    infowindow.setContent(context.data);
                                } else {
                                    $(this).gmap3({
                                        infowindow: {
                                            anchor: marker,
                                            options: { content: context.data }
                                        }
                                    });
                                }
                            },
                            mouseout: function () {
                                var infowindow = $(this).gmap3({ get: { name: "infowindow" } });
                                if (infowindow) {
                                    infowindow.close();
                                }
                            }
                        }
                    },
                });
            }
        }
    });
});

function initMap() {
    // The location of Uluru
    const uluru = { lat: 40.409264, lng: 49.867092 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;

(function (body) {
    'use strict';
    body.className = body.className.replace(/\btribe-no-js\b/, 'tribe-js');
})(document.body);

/* <![CDATA[ */
var mejsL10n = { "language": "en-US", "strings": { "Close": "Close", "Fullscreen": "Fullscreen", "Turn off Fullscreen": "Turn off Fullscreen", "Go Fullscreen": "Go Fullscreen", "Download File": "Download File", "Download Video": "Download Video", "Play": "Play", "Pause": "Pause", "Captions\/Subtitles": "Captions\/Subtitles", "None": "None", "Time Slider": "Time Slider", "Skip back %1 seconds": "Skip back %1 seconds", "Video Player": "Video Player", "Audio Player": "Audio Player", "Volume Slider": "Volume Slider", "Mute Toggle": "Mute Toggle", "Unmute": "Unmute", "Mute": "Mute", "Use Up\/Down Arrow keys to increase or decrease volume.": "Use Up\/Down Arrow keys to increase or decrease volume.", "Use Left\/Right Arrow keys to advance one second, Up\/Down arrows to advance ten seconds.": "Use Left\/Right Arrow keys to advance one second, Up\/Down arrows to advance ten seconds." } };
var _wpmejsSettings = { "pluginPath": "\/old\/greenture\/wp-includes\/js\/mediaelement\/" };
/* ]]> */