
ShowDescriptionBlog = function (param) {
    document.querySelector('#description-blog span').textContent = param.getAttribute('desc');
    document.querySelector('#dateblog span').textContent = param.getAttribute('dateblog');
    $("#description-blog").removeClass("d-none");
    for (var i = 0; i < $("#SwiperSlider").children().length; i++) {
        if ($("#SwiperSlider").children()[i].textContent != param.textContent )
            $("#SwiperSlider").children()[i].style.opacity = "0.4";
    }
}

HideDescriptionBlog = function (param) {
    //morteza $("#description-blog").removeClass("d-none");
    //$("#description-blog").addClass("d-none")
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
OpenDilogComment=function(e){
    debugger;
}
CreateBlogHome = function () {
    let data = [{	
        src: "../Images/img1.jpg",	
        title: "1قرآن از نظر دانشمندان غربی",	
        desc: "متن1متن1متن1متن1متن1متن1متن1متن1متن1متن1متن1متن1متن1متن1متن1متن1متن1متن1متن1متن1"	,
        date:"جمعه23خرداد"
    },	
                   {	
                       src: "../Images/img1.jpg",	
                       title: "2قرآن از نظر دانشمندان غربی",	
                       desc: "متن2متن2متن2متن2متن2متن2متن2متن2متن2متن2متن2متن2متن2متن2متن2متن2متن2متن2متن2متن2",
                       date:"جمعه24خرداد"
                   },	
                   {	
                       src: "../Images/img1.jpg",	
                       title: "3قرآن از نظر دانشمندان غربی",	
                       desc: "متن3متن3متن3متن3متن3متن3متن3متن3متن3متن3متن3متن3متن3متن3متن3متن3متن3متن3متن3متن3",
                       date:"جمعه25خرداد"
                   },	
                   {	
                       src: "../Images/img1.jpg",	
                       title: "4قرآن از نظر دانشمندان غربی",	
                       desc: "متن4متن4متن4متن4متن4متن4متن4متن4متن4متن4متن4متن4متن4متن4متن4متن4متن4متن4متن4متن4",
                       date:"جمعه26خرداد"
                   },	
                   {	
                       src: "../Images/img1.jpg",	
                       title: "5قرآن از نظر دانشمندان غربی",	
                       desc: "متن5متن5متن5متن5متن5متن5متن5متن5متن5متن5متن5متن5متن5متن5متن5متن5متن5متن5متن5متن5",
                       date:"جمعه27خرداد"
                   },	
                   {	
                       src: "../Images/img1.jpg",	
                       title: "6قرآن از نظر دانشمندان غربی",	
                       desc: "متن6متن6متن6متن6متن6متن6متن6متن6متن6متن6متن6متن6متن6متن6متن6متن6متن6متن6متن6متن6",
                       date:"جمعه28خرداد"
                   },	
                   {	
                       src: "../Images/img1.jpg",	
                       title: "7قرآن از نظر دانشمندان غربی",	
                       desc: "متن7متن7متن7متن7متن7متن7متن7متن7متن7متن7متن7متن7متن7متن7متن7متن7متن7متن7متن7متن7",
                       date:"جمعه29خرداد"
                   },	
    ]	
    for (let i = 0; i < data.length; i++) {	
        let div = document.createElement('div');	
        div.classList.add('swiper-slide');
        div.classList.add('swiper-slide-cust');
        div.innerHTML = '<div class="view zoom" desc=' + data[i].desc +' dateblog='+ data[i].date +
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
LoadCommentsUsers =function(){
    debugger;
    let data_comments=[
        {
            commentid:"1",
            parent_comment_id:"",
            comment:"نحوه دسترسی به این منابع چگونه است؟",
            comment_sender_name:"مهسا:",
            date:"9:12- 29 شهریور 98"
        },
            {
                commentid:"2",
                parent_comment_id:"1",
                comment:"نحوه دسترسی به این منابع چگونه است؟",
                comment_sender_name:"ادمین:",
                date:"9:12- 29 شهریور 98"
            },
                {
                    commentid:"3",
                    parent_comment_id:"",
                    comment:"نحوه دسترسی به این منابع چگونه است؟",
                    comment_sender_name:"علی:",
                    date:"9:12- 29 شهریور 98"
                },
                        {
                            commentid:"5",
                            parent_comment_id:"4",
                            comment:"نحوه دسترسی به این منابع چگونه است؟",
                            comment_sender_name:"علی:",
                            date:"9:12- 29 شهریور 98"
                        },
                    {
                        commentid:"4",
                        parent_comment_id:"3",
                        comment:"لطفا برای اطلاع دقیق در ساعات اداری با شماره های مرکز تماس بگیرید",
                        comment_sender_name:"ادمین:",
                        date:"9:12- 29 شهریور 98"
                    }

    ]
    data_comments.sort((a, b) => (a.parent_comment_id > b.parent_comment_id) ? 1 : -1)
    for (var i = 0; i < data_comments.length; i++) {
        if(data_comments[i].parent_comment_id =="")
        {
            $("#collapsecommentsuser .card-body-comment").append('<div class="media border_comments pt-3"><div class="media-body" comment_id="'+data_comments[i].commentid +'"><h4 class="d-flex justify-content-between pl-3">'+ data_comments[i].comment_sender_name +'<a src="#" data-toggle="modal" data-target="#exampleModalCenter" style="color:#00a693;">پاسخ دهید</a></h4><h4>'+ data_comments[i].date +'</h4><p>'+ data_comments[i].comment+'</p></div></div>');
        }
        else{
            let parent = $('[comment_id="'+data_comments[i].parent_comment_id +'"]');
            let padding = "0";
            if($(parent).children().attr('child') != undefined)
                padding = Number($(parent).children()[0].style.paddingRight.substring(0,1))+1;
                if ($('[comment_id="'+data_comments[i].parent_comment_id +'"]').length >= 1) {
                    $('[comment_id="'+data_comments[i].parent_comment_id +'"]').append('<div class="media pt-3"><div class="media-body" comment_id="'+data_comments[i].commentid+'"><div child style="padding-right:' +(padding == "0" ? "1rem" : padding+"rem")+';"><h4 class="d-flex justify-content-between pl-3">'+data_comments[i].comment_sender_name +'<a src="#" data-toggle="modal" data-target="#exampleModalCenter" style="color:#00a693;">پاسخ دهید</a></h4><h4>'+data_comments[i].date+'</h4><p>'+data_comments[i].comment+'</p></div></div></div>');
                }
                
        }
    }
    parent = $("#collapsecommentsuser .card-body-comment .border_comments");
    for (var i = 0; i < parent.length; i++) {
        for (var j = 0; j < $(parent[i]).find(".media").length; j++) {
            if(j%2 == 0)
                $(parent[i]).find(".media")[j].style.backgroundColor = "#d1d3d4"
            else $(parent[i]).find(".media")[j].style.backgroundColor = "#f5f3f0"
        }  
    }
}
