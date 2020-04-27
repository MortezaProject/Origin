let datablog=[];

//set images page
//document.getElementsByName('designBy').src = '../Images/design_by.png';


//set image page


ShowDescriptionBlog = function (param) {
    let bid = param.attributes.bid.value || "";
    datablog.forEach(function(itm){
        if (itm.bid == bid) {
            document.querySelector('#description-blog span').innerHTML = itm.desc +'<img class="BHRblog" style="float:left;" src='+ window.imagesource.Arrowblogleft +' />';
            document.querySelector('#dateblog span').innerHTML = itm.date + '<img class="BHLblog" style="float:left;" src='+ window.imagesource.Arrowblogleft +' />';
        }
    });
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
        $(e).children("img").attr("src", window.imagesource.Arrowdown)
    else $(e).children("img").attr("src", window.imagesource.Arrowup)
}
ChangeIconCollapseChild = function (e) {
    debugger;
    if ($($(e)[0].dataset.target).hasClass("show"))
        $(e).children("img").attr("src", window.imagesource.Arrowdownsmall)
    else $(e).children("img").attr("src",window.imagesource.Arrowupsmall)
}
OpenDilogComment=function(e){
    debugger;
}
CreateBlogHome = function (data) {
    datablog = data || {};
    for (let i = 0; i < datablog.length; i++) {	
        let div = document.createElement('div');	
        div.classList.add('swiper-slide');
        div.classList.add('swiper-slide-cust');
        div.innerHTML = '<div class="view zoom" bid=' + datablog[i].bid +
            ' onmouseover="ShowDescriptionBlog(this)" onmouseout="HideDescriptionBlog(this)"><div class="item-blog d-flex flex-column justify-content-between"><div><img src=' +	
            datablog[i].src +	
            ' class="blog-image" /></div><div class="p-2 text-center item-blog-desc"><p>' + datablog[i]	
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
LoadCommentsUsers =function(data_comments){
    data_comments.sort((a, b) => (a.parent_comment_id > b.parent_comment_id) ? 1 : -1)
    for (var i = 0; i < data_comments.length; i++) {
        if(data_comments[i].parent_comment_id =="")
        {
            $("#collapsecommentsuser .card-body-comment").append('<div class="media border_comments pt-3"><div class="media-body" comment_id="'+data_comments[i].commentid +'"><h4 class="pl-3">'+ data_comments[i].comment_sender_name +'</h4><h4>'+ data_comments[i].date +'</h4><p>'+ data_comments[i].comment+'</p></div></div>');
        }
        else{
            let parent = $('[comment_id="'+data_comments[i].parent_comment_id +'"]');
            let padding = "0";
            if($(parent).children().attr('child') != undefined)
                padding = Number($(parent).children()[0].style.paddingRight.substring(0,1))+1;
                if ($('[comment_id="'+data_comments[i].parent_comment_id +'"]').length >= 1) {
                    $('[comment_id="'+data_comments[i].parent_comment_id +'"]').append('<div class="media pt-3"><div class="media-body" comment_id="'+data_comments[i].commentid+'"><div child style="padding-right:' +(padding == "0" ? "1rem" : padding+"rem")+';"><h4 class="pl-3">'+data_comments[i].comment_sender_name +'</h4><h4>'+data_comments[i].date+'</h4><p>'+data_comments[i].comment+'</p></div></div></div>');
                }
                
        }
    }
    parent = $("#collapsecommentsuser .card-body-comment .border_comments");
    for (var i = 0; i < parent.length; i++) {
        for (var j = 0; j < $(parent[i]).find(".media").length; j++) {
            if(j%2 == 0)
                $(parent[i]).find(".media")[j].style.backgroundColor = "#eceaea"
            else $(parent[i]).find(".media")[j].style.backgroundColor = "#f5f3f0"
        }  
    }
}
