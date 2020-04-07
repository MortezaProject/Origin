let imagefilter={
    src:$("#views img")[0].src
}
let show_position_dropdown = function () {
    $("#views img")[0].src = imagefilter.src;
    document.querySelectorAll('.show_position_dropdown').forEach(function (el) {
        el.classList.remove('d-none');
    })
    document.querySelectorAll('.show_version_dropdown').forEach(function (el) {
        el.classList.add('d-none');
    })
    document.querySelectorAll('.show_collection_dropdown').forEach(function (el) {
        el.classList.add('d-none');
    })
}
let show_collection_dropdown = function () {
    $("#views img")[0].src = imagefilter.src;
    document.querySelectorAll('.show_collection_dropdown').forEach(function (el) {
        el.classList.remove('d-none');
    })
    document.querySelectorAll('.show_version_dropdown').forEach(function (el) {
        el.classList.add('d-none');
    })
    document.querySelectorAll('.show_position_dropdown').forEach(function (el) {
        el.classList.add('d-none');
    })
}
let show_version_dropdown = function () {
    $("#views img")[0].src = imagefilter.src;
    document.querySelectorAll('.show_version_dropdown').forEach(function (el) {
        el.classList.remove('d-none');
    })
    document.querySelectorAll('.show_position_dropdown').forEach(function (el) {
        el.classList.add('d-none');
    })
    document.querySelectorAll('.show_collection_dropdown').forEach(function (el) {
        el.classList.add('d-none');
    })
}
//first tab

let setMap = {
    view: {
        lat: 32.306,
        lon: 51.240,
        scale: 6
    },
    marker: []
}
let map = new CreateMap("mapid", setMap);
document.getElementById('treeid').classList.add('d-none');
let setTree = null;
new CreateTree("treeid", setTree, map);

let MapMode_Onclick = function (elem) {
    $("#views img")[0].src = $(elem).children()[0].src
    document.getElementById('mapid').classList.add('col-12');
    document.getElementById('mapid').classList.remove('col-9');
    document.getElementById('mapid').classList.remove('d-none');
    document.getElementById('treeid').classList.add('d-none');
    map.invalidateSize();
}
let TreeMapMode_Onclick = function (elem) {
    $("#views img")[0].src = $(elem).children()[0].src
    document.getElementById('mapid').classList.remove('col-12');
    document.getElementById('mapid').classList.add('col-9');
    document.getElementById('mapid').classList.remove('d-none');
    document.getElementById('treeid').classList.remove('d-none');
    document.getElementById('treeid').classList.add('col-3');
    document.getElementById('treeid').classList.remove('col-12');
    map.invalidateSize();
    // swiper.update();
}
//second tab

let collection_childs = function () {

    let elem = document.querySelector('#collection_childs'),
        _div = "";

    collectionData.forEach(function (dt, i) {

        if (i % 4 == 0) {
            _div = document.createElement('div');
            _div.classList.add('row');
            elem.appendChild(_div)
        }
        let _child = document.createElement('div');
        _child.classList.add('col-md-6');
        _child.classList.add('mb-4');
        _child.classList.add('px-0');
        _child.classList.add('versin-detail-data-parent');
        _child.innerHTML = '<div class="container-fluid pr-0">' +
            '<div class="row">' +
            '<div class="col-md-6 versin-detail-data-img mb-2"><div class="container" style="padding:unset;"><img style="height:230px;width:100%;" class="img" src="' +
            dt.src + '"/>' +
            '<div class="versin-detail-data-img-title mr-3">' +
            '<div class="container-fluid">' +
            '<div class="row"><div>' + dt.title + '</div></div>' +
            '<div class="row"><div> موقعیت: </div><div>' + dt.position + '</div></div>' +
            '</div>' +
            '</div>' +
            '</div></div>' +
            '<div class="col-md-6 versin-detail-data-text">' +
            '<div class="container-fluid">' +
            '<div class="row mb-3"><div>' + dt.title + '</div></div>' +
            '<div class="row"><div class="versin-detail-data-text-subject"> تاسیس: </div><div>' + dt
            .established + '</div></div>' +
            '<div class="row mb-3"><div class="versin-detail-data-text-subject"> موقعیت: </div><div>' +
            dt.position + '</div></div>' +
            '<div class="row"><div>' + dt.desc + '</div></div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        _div.appendChild(_child);

    })
}



let collection_childs_slider = function (collectionData) {
    let _div = document.querySelector('#collection_childs_slider .swiper-wrapper'),
    //$("#collection_childs_slider").addClass("swiper-container-cust");
        itemChild = "";
    let tab = document.getElementById('pills-Collection');
    //tab.classList.add('show active');
    for (let i = 0; i < collectionData.length; i++) {
        if (i % 12 == 0) {
            let swiper_slide = document.createElement("div");
            swiper_slide.classList.add("swiper-slide");
            _div.append(swiper_slide);
            let view = document.createElement("div");
            $(view).addClass("view w-100")
            swiper_slide.append(view);
            itemChild = document.createElement("div");
            $(itemChild).addClass("item-list d-flex flex-column justify-content-between p-3");		/* Updated 06 */
            // itemChild.style.width = "200px";
            view.append(itemChild);
        }

        let slide = document.createElement("div");
        slide.classList.add('collection_childs_slider_ListMode_text')
        slide.textContent = collectionData[i].title;
        itemChild.append(slide)
    }
    let swiper = new Swiper('#collection_childs_slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        // setWrapperSize: true,
        // init: false,	
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
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
    //tab.classList.remove('show active');
}




let collection_ListViewMode_Onclick = function (elem) {
    $("#views img")[0].src = $(elem).children()[0].src
    let swiper = document.querySelector('#collection_childs_slider')
    document.querySelector("#collection_childs_show").classList.remove('d-none');
    //if (swiper.querySelector('.swiper-wrapper').children.length == 0) collection_childs_slider();
    document.querySelector('#collection_childs_parent').classList.add('d-none');
    document.querySelectorAll('.versin-detail-data-img').forEach(function (el, i) {
        el.setAttribute('mode', 'list')
    })
}


let collection_TwoViewMode_Onclick = function (elem) {
    $("#views img")[0].src = $(elem).children()[0].src
    document.querySelector('#collection_childs_show').classList.add('d-none');
    document.querySelector('#collection_childs_parent').classList.remove('d-none');
    if (document.querySelector('#collection_childs').children.length == 0) collection_childs();
    document.querySelectorAll('.versin-detail-data-parent').forEach(function (el, i) {
        el.classList.add('col-md-6');
        el.classList.remove('col-md-12');
    })
    document.querySelectorAll('.versin-detail-data-img').forEach(function (el, i) {
        el.setAttribute('mode', 'two')
        el.classList.add('col-md-6');
        el.classList.remove('col-md-3');
        el.classList.remove('col-md-12');
    })
    document.querySelectorAll('.versin-detail-data-text').forEach(function (el, i) {
        el.classList.remove('d-none');
        el.classList.add('col-md-6');
        el.classList.remove('col-md-9');
    })
}
//third tab

let version_childs = function () {

    let elem = document.querySelector('#version_childs'),
        _div = "";

    versionData.forEach(function (dt, i) {

        if (i % 4 == 0) {
            _div = document.createElement('div');
            _div.classList.add('row');
            elem.appendChild(_div)
        }
        let _child = document.createElement('div');
        _child.classList.add('col-md-6');
        _child.classList.add('mb-4');
        _child.classList.add('pr-0');
        _child.classList.add('versin-detail-data-parent');
        _child.innerHTML = '<div class="container-fluid pr-0">' +
            '<div class="row">' +
            '<div class="col-md-6 versin-detail-data-img mb-2"><div class="container" style="padding:unset;"><img style="height:230px;width:100%;" class="img" src="' +
            dt.src + '"/>' +
            '<div class="versin-detail-data-img-title mr-3">' +
            '<div class="container-fluid">' +
            '<div class="row"><div> نسخه شماره </div><div>' + dt.id + '</div></div>' +
            '<div class="row"><div> محل نگهداری: </div><div>' + dt.place + '</div></div>' +
            '</div>' +
            '</div>' +
            '</div></div>' +
            '<div class="col-md-6 versin-detail-data-text">' +
            '<div class="container-fluid">' +
            '<div class="row mb-3"><div> نسخه شماره </div><div>' + dt.id + '</div></div>' +
            '<div class="row"><div class="versin-detail-data-text-subject"> محل نگهداری: </div><div>' +
            dt.place + '</div></div>' +
            '<div class="row"><div class="versin-detail-data-text-subject"> شماره اموال: </div><div>' +
            dt.state + '</div></div>' +
            '<div class="row"><div class="versin-detail-data-text-subject"> تعداد صفحات: </div><div>' +
            dt.pages + '</div></div>' +
            '<div class="row"><div class="versin-detail-data-text-subject"> پدید آورندگان: </div><div>' +
            dt.creator + '</div></div>' +
            '<div class="row"><div class="versin-detail-data-text-subject"> موضوع اثر: </div><div>' +
            dt.subject + '</div></div>' +
            '<div class="row"><div class="versin-detail-data-text-subject"> تاریخ خلق: </div><div>' +
            dt.date + '</div></div>' +
            '<div class="row"><div class="versin-detail-data-text-subject"> رنگ: </div><div>' + dt
            .color + '</div></div>' +
            '<div class="row"><div class="versin-detail-data-text-subject"> جنس: </div><div>' + dt
            .material + '</div></div>' +
            '<div class="row"><div class="versin-detail-data-text-subject"> تکنیک: </div><div>' + dt
            .technique + '</div></div>' +
            '<div class="row"><div class="versin-detail-data-text-subject"> ابعاد: </div><div>' + dt
            .dimension + '</div></div>' +
            '<div class="row"><div class="versin-detail-data-text-subject"> واقف: </div><div>' + dt
            .benefactor + '</div></div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        _div.appendChild(_child);

    })
    document.getElementById('version_childs_parent').classList.add('d-none');
    document.getElementById('pills-prescription').classList.remove('show', 'active')
    document.getElementById('pills-Collection').classList.remove('show', 'active')

}


let version_childs_slider = function (versionData) {
    let _div = document.querySelector('#version_childs_slider .swiper-wrapper'),
        itemChild = "";
    for (let i = 0; i < versionData.length; i++) {
        if (i % 12 == 0) {
        let swiper_slide = document.createElement("div");
        swiper_slide.classList.add("swiper-slide");
        _div.append(swiper_slide);
        let view = document.createElement("div");
        $(view).addClass("view w-100")
        swiper_slide.append(view);
        itemChild = document.createElement("div");
        $(itemChild).addClass("item-list d-flex flex-column justify-content-between p-3");		/* Updated 06 */
        // itemChild.style.width = "200px";
        view.append(itemChild);
        }

        let slide = document.createElement("div");
        slide.classList.add('version_childs_slider_ListMode_text')
        slide.textContent = "نسخه شماره " + versionData[i].id;
        itemChild.append(slide)



    }
    let swiper = new Swiper('#version_childs_slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        // setWrapperSize: true,
        // init: false,	
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,

            },
        }
    });
    version_childs();
}


let Version_ListViewMode_Onclick = function (elem) {
    $("#views img")[0].src = $(elem).children()[0].src
    let swiper = document.querySelector('#version_childs_slider')
    document.querySelector("#version_childs_show").classList.remove('d-none');
    if (swiper.querySelector('.swiper-wrapper').children.length == 0) version_childs_slider();
    
    document.querySelector('#version_childs_parent').classList.add('d-none');
    document.querySelectorAll('.versin-detail-data-img').forEach(function (el, i) {
        el.setAttribute('mode', 'list')
    })
}
let Version_GalleryViewMode_Onclick = function (elem) {
    $("#views img")[0].src = $(elem).children()[0].src
    document.querySelector('#version_childs_show').classList.add('d-none');
    document.querySelector('#version_childs_parent').classList.remove('d-none');
    document.querySelectorAll('.versin-detail-data-parent').forEach(function (el, i) {
        el.classList.add('col-md-3');
        el.classList.remove('col-md-6');
        el.classList.remove('col-md-12');
    })
    document.querySelectorAll('.versin-detail-data-img').forEach(function (el, i) {
        el.setAttribute('mode', 'gallery')
        el.classList.add('col-md-12');
        el.classList.remove('col-md-3');
        el.classList.remove('col-md-6');
    })
    document.querySelectorAll('.versin-detail-data-text').forEach(function (el, i) {
        el.classList.add('d-none');
        el.classList.remove('col-md-6');
        el.classList.remove('col-md-9');
    })
}
let Version_OneViewMode_Onclick = function (elem) {
    $("#views img")[0].src = $(elem).children()[0].src
    document.querySelector('#version_childs_show').classList.add('d-none');
    document.querySelector('#version_childs_parent').classList.remove('d-none');
    document.querySelectorAll('.versin-detail-data-parent').forEach(function (el, i) {
        el.classList.remove('col-md-6');
        el.classList.add('col-md-12');
    })
    document.querySelectorAll('.versin-detail-data-img').forEach(function (el, i) {
        el.setAttribute('mode', 'one')
        el.classList.remove('col-md-6');
        el.classList.remove('col-md-12');
        el.classList.add('col-md-3');
    })
    document.querySelectorAll('.versin-detail-data-text').forEach(function (el, i) {
        el.classList.remove('d-none');
        el.classList.remove('col-md-6');
        el.classList.add('col-md-9');
    })
}
let Version_TwoViewMode_Onclick = function (elem) {
    $("#views img")[0].src = $(elem).children()[0].src
    document.querySelector('#version_childs_show').classList.add('d-none');
    document.querySelector('#version_childs_parent').classList.remove('d-none');
    document.querySelectorAll('.versin-detail-data-parent').forEach(function (el, i) {
        el.classList.add('col-md-6');
        el.classList.remove('col-md-12');
    })
    document.querySelectorAll('.versin-detail-data-img').forEach(function (el, i) {
        el.setAttribute('mode', 'two')
        el.classList.add('col-md-6');
        el.classList.remove('col-md-3');
        el.classList.remove('col-md-12');
    })
    document.querySelectorAll('.versin-detail-data-text').forEach(function (el, i) {
        el.classList.remove('d-none');
        el.classList.add('col-md-6');
        el.classList.remove('col-md-9');
    })
}