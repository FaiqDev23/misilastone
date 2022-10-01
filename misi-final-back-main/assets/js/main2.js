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

    $newPosts.css({opacity: 0 });
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

    $newPosts.find("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").prettyPhoto({social_tools: false, deeplinking: false });

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
