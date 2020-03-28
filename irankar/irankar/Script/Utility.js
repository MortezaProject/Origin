
ShowDescriptionBlog = function (param) {
    document.querySelector('#description-blog span').textContent = param.getAttribute('desc');
    $("#description-blog").removeClass("d-none");
    for (var i = 0; i < $("#SwiperSlider").children().length; i++) {
        if ($("#SwiperSlider").children()[i].textContent != param.textContent )
            $("#SwiperSlider").children()[i].style.opacity = "0.4";
    }
}

HideDescriptionBlog = function (param) {
    //$("#description-blog").removeClass("d-none");
    $("#description-blog").addClass("d-none")
    for (var i = 0; i < $("#SwiperSlider").children().length; i++) {
            $("#SwiperSlider").children()[i].style.opacity = "1";
    }
}
ChangeIconCollapse = function (e) {
    debugger;
    if ($($(e)[0].dataset.target).hasClass("show"))
        $(e).children("img").attr("src", "../Images/Arrow-down.svg")
    else $(e).children("img").attr("src", "../Images/Arrow-up.svg")
}
ChangeIconCollapseChild = function (e) {
    debugger;
    if ($($(e)[0].dataset.target).hasClass("show"))
        $(e).children("img").attr("src", "../Images/Arrow-down-small.svg")
    else $(e).children("img").attr("src", "../Images/Arrow-up-small.svg")
}
CreateBlogHome = function () {
    let data = [{	
        src: "../Images/img1.jpg",	
        title: "1قرآن از نظر دانشمندان غربی",	
        desc: "متن1متن1متن1متن1متن1متن1متن1متن1متن1متن1متن1متن1متن1متن1متن1متن1متن1متن1متن1متن1"	
    },	
                   {	
                       src: "../Images/img1.jpg",	
                       title: "2قرآن از نظر دانشمندان غربی",	
                       desc: "متن2متن2متن2متن2متن2متن2متن2متن2متن2متن2متن2متن2متن2متن2متن2متن2متن2متن2متن2متن2"	
                   },	
                   {	
                       src: "../Images/img1.jpg",	
                       title: "3قرآن از نظر دانشمندان غربی",	
                       desc: "متن3متن3متن3متن3متن3متن3متن3متن3متن3متن3متن3متن3متن3متن3متن3متن3متن3متن3متن3متن3"	
                   },	
                   {	
                       src: "../Images/img1.jpg",	
                       title: "4قرآن از نظر دانشمندان غربی",	
                       desc: "متن4متن4متن4متن4متن4متن4متن4متن4متن4متن4متن4متن4متن4متن4متن4متن4متن4متن4متن4متن4"	
                   },	
                   {	
                       src: "../Images/img1.jpg",	
                       title: "5قرآن از نظر دانشمندان غربی",	
                       desc: "متن5متن5متن5متن5متن5متن5متن5متن5متن5متن5متن5متن5متن5متن5متن5متن5متن5متن5متن5متن5"	
                   },	
                   {	
                       src: "../Images/img1.jpg",	
                       title: "6قرآن از نظر دانشمندان غربی",	
                       desc: "متن6متن6متن6متن6متن6متن6متن6متن6متن6متن6متن6متن6متن6متن6متن6متن6متن6متن6متن6متن6"	
                   },	
                   {	
                       src: "../Images/img1.jpg",	
                       title: "7قرآن از نظر دانشمندان غربی",	
                       desc: "متن7متن7متن7متن7متن7متن7متن7متن7متن7متن7متن7متن7متن7متن7متن7متن7متن7متن7متن7متن7"	
                   },	
    ]	
    for (let i = 0; i < data.length; i++) {	
        let div = document.createElement('div');	
        div.classList.add('swiper-slide');
        div.classList.add('swiper-slide-cust');
        div.innerHTML = '<div class="view zoom" desc=' + data[i].desc +	
            ' onmouseover="ShowDescriptionBlog(this)" onmouseout="HideDescriptionBlog(this)"><div class="item-blog d-flex flex-column justify-content-between"><div><img src=' +	
            data[i].src +	
            ' class="blog-image" /></div><div class="p-2 text-center item-blog-desc"><p>' + data[i]	
            .title + '</p></div></div></<div>';	
        document.getElementById('SwiperSlider').append(div);	
    }	
    var swiper = new Swiper('#SliderID', {	
        slidesPerView: 1,	
        spaceBetween: 10,	
        // init: false,	
        pagination: {	
            el: '.swiper-pagination',	
            clickable: true,	
        },	
        navigation: {	
            nextEl: '.swiper-button-next',	
            prevEl: '.swiper-button-prev',	
        },	
        scrollbar: {	
            el: '.swiper-scrollbar',	
        },	
        breakpoints: {	
            640: {	
                slidesPerView: 2,	
                spaceBetween: 20,	
            },	
            1024: {	
                slidesPerView: 3,	
                spaceBetween: 40,	
            },	
            1440: {	
                slidesPerView: 4,	
                spaceBetween: 27,	
            },	
        }	
    });	

}
