let showModal_Onclick = function(e){
    e.classList.add('d-none')
    let elem = document.querySelector("#left-status");
    elem.classList.remove('col-9');
    elem.classList.remove('pl-0');
    elem.classList.add('showModal');
    elem.querySelector('.gallery-toolbar').classList.remove('d-none');
    elem.querySelector('#fullpageWithThumb').style.height="15%";
    // elem.querySelector('#fullpageWithThumb').classList.add("fullpageWithThumb-swiper-slide");
    document.querySelector('body').classList.add('overflow-hidden');
    document.getElementById('left-status').style.height = "100%";
    
    var mySwiper = document.querySelector('#SliderID').swiper;
    mySwiper.update();
}

let hideModal_Onclick = function(){
    document.querySelector('#left-status .fa-expand-arrows-alt').classList.remove('d-none');
    let elem = document.querySelector("#left-status");
    elem.classList.add('col-9');
    elem.classList.add('pl-0');
    elem.classList.remove('showModal');
    elem.querySelector('.gallery-toolbar').classList.add('d-none');
    elem.querySelector('#fullpageWithThumb').style.height="15%";
    // elem.querySelector('#fullpageWithThumb').classList.remove("fullpageWithThumb-swiper-slide");
    document.querySelector('body').classList.remove('overflow-hidden');
    document.getElementById('left-status').style.height = "791px";

    var mySwiper = document.querySelector('#SliderID').swiper;
    mySwiper.update();
}

let imagefilter={
    src:$("#views img")[0].src
}

let datagallery = [];
let show_position_dropdown = function () {
    if (!$('#gallery').hasClass('d-none')) {
        document.querySelectorAll('.show-dropdown-gallery').forEach(function (el, i) {
            el.classList.add('d-none');
        })
        document.querySelector('#back').classList.add('d-none');
    }
    $("#views img")[0].src = imagefilter.src;
    $("#views").css("background-color","#d6d6d6");
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
    if (!$('#gallery').hasClass('d-none')) {
        document.querySelectorAll('.show-dropdown-gallery').forEach(function (el, i) {
            el.classList.add('d-none');
        })
        document.querySelector('#back').classList.add('d-none');
    }
    $("#views img")[0].src = imagefilter.src;
    $("#views").css("background-color","#d6d6d6");
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
    if (!$('#gallery').hasClass('d-none')) {
        backto();
    }
    $("#views img")[0].src = imagefilter.src;
    $("#views").css("background-color","#d6d6d6");
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
    //$("#views img")[0].src = $(elem).children()[0].src
    $("#views").children("img").attr("src", "../Images/map-view-selected.svg")
    $("#views").css("background-color","#00a693");
    document.getElementById('mapid').classList.add('col-12');
    document.getElementById('mapid').classList.remove('col-9');
    document.getElementById('mapid').classList.remove('d-none');
    document.getElementById('treeid').classList.add('d-none');
    map.invalidateSize();
}
let TreeMapMode_Onclick = function (elem) {
    $("#views").children("img").attr("src", "../Images/map-tree-view-selected.svg")
    $("#views").css("background-color","#00a693");
    //$("#views img")[0].src = $(elem).children()[0].src
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
        itemChild = "";
    for (let i = 0; i < collectionData.length; i++) {
        if (i % 12 == 0) {
            let swiper_slide = document.createElement("div");
            swiper_slide.classList.add("swiper-slide");
            _div.append(swiper_slide);
            let view = document.createElement("div");
            $(view).addClass("view w-100")
            swiper_slide.append(view);
            itemChild = document.createElement("div");
            $(itemChild).addClass("item-list d-flex flex-column justify-content-start p-3");		/* Updated 06 */
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
        //setWrapperSize: true,
        //init: false,	
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
    //tab.classList.remove('show active');
}




let collection_ListViewMode_Onclick = function (elem) {
    $("#views").children("img").attr("src", "../Images/list-view-selected.svg")
    $("#views").css("background-color","#00a693");
    //$("#views img")[0].src = $(elem).children()[0].src
    let swiper = document.querySelector('#collection_childs_slider')
    document.querySelector("#collection_childs_show").classList.remove('d-none');
    //if (swiper.querySelector('.swiper-wrapper').children.length == 0) collection_childs_slider();
    document.querySelector('#collection_childs_parent').classList.add('d-none');
    document.querySelectorAll('.versin-detail-data-img').forEach(function (el, i) {
        el.setAttribute('mode', 'list')
    })
}


let collection_TwoViewMode_Onclick = function (elem) {
    $("#views").children("img").attr("src", "../Images/two-row-view-selected.svg")
    $("#views").css("background-color","#00a693");
    //$("#views img")[0].src = $(elem).children()[0].src
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
            dt.src + '" onclick="CreateGallery(this)"/>' +
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
    document.querySelector(".formControlRange").min = 0;
    document.querySelector(".formControlRange").max = versionData.length - 1;
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
            $(itemChild).addClass("item-list d-flex flex-column justify-content-start p-3");		/* Updated 06 */
            // itemChild.style.width = "200px";
            view.append(itemChild);
        }

        let slide = document.createElement("div");
        slide.classList.add('version_childs_slider_ListMode_text')
        slide.setAttribute("onclick","CreateGallery(this)")
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
    version_childs();
}


let Version_ListViewMode_Onclick = function (elem) {


    $("#views").children("img").attr("src", "../Images/list-view-selected.svg")
    //$("#views img")[0].src = $(elem).children()[0].src
    $("#views").css("background-color","#00a693");
    let swiper = document.querySelector('#version_childs_slider')
    document.querySelector("#version_childs_show").classList.remove('d-none');
    if (swiper.querySelector('.swiper-wrapper').children.length == 0) version_childs_slider();
    
    document.querySelector('#version_childs_parent').classList.add('d-none');
    document.querySelectorAll('.versin-detail-data-img').forEach(function (el, i) {
        el.setAttribute('mode', 'list')
    })
}
let Version_GalleryViewMode_Onclick = function (elem) {


    $("#views").children("img").attr("src", "../Images/gallery-view-selected.svg")
    //$("#views img")[0].src = $(elem).children()[0].src
    $("#views").css("background-color","#00a693");
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
    
    $("#views").children("img").attr("src", "../Images/one-row-view-selected.svg")
    $("#views").css("background-color","#00a693");
    //$("#views img")[0].src = $(elem).children()[0].src
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
    $("#views").children("img").attr("src", "../Images/two-row-view-selected.svg")
    $("#views").css("background-color","#00a693!important");
    //$("#views img")[0].src = $(elem).children()[0].src
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

let CreateGallery = function(elem){
    let param = elem.innerHTML; // get parameter elements for request server
    // request to server 
    // after excute under code
    document.querySelectorAll('.show-dropdown-gallery').forEach(function (el, i) {
        el.classList.remove('d-none');
    })
    document.querySelectorAll('.show_version_dropdown').forEach(function (el, i) {
        el.classList.add('d-none');
    })
    document.querySelector('#back').classList.remove('d-none');
    document.getElementById('version_childs_show').classList.add('d-none')
    document.getElementById('version_childs_parent').classList.add('d-none')
    document.getElementById('gallery').classList.remove('d-none')
    document.getElementById('left-status').style.height = "791px";
    document.querySelectorAll('.btn-shape-Swiper').forEach(function (el, i) {
        el.classList.add('d-none');
    })
    datagallery = [{
        id:"1",
        src: "../Images/blog1.png",
        keepplace:"ایران/تهران",
        propertynum:"1393/04/1254",
        countpages:"256",
        creators:"عبدالرحمان صوفی",
        subject:"اخلاق",
        createdate:"1 ذیحجه",
        color:"نخودی",
        gender:"دست ساز ترمه آهار مهره ومقواااا",
        teqnique:"دست ساز ترمه آهار مهره ومقواااادست ساز ترمه آهار مهره ومقواااادست ساز ترمه آهار مهره ومقواااا",
        demensions:"طول 35 و عرض 15 سانتیمتر و",
        waqf:"حاج حسین آقا ملک",
        tabpage:"برگگه 45 پشت از برگه 245",
        soreinfo:"الفتح 45-11",
        verseaye:"قَالَ يَا قَوْمِ لِمَ تَسْتَعْجِلُونَ بِالسَّيِّئَةِ قَبْلَ الْحَسَنَةِ لَوْلَا تَسْتَغْفِرُونَ اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ ووَلَقَدْ أَرْسَلْنَا إِلَى ثَمُودَ أَخَاهُمْ صَالِحًا أَنِ اعْبُدُوا اللَّهَ فَإِذَا هُمْ فَرِيقَانِ يَخْتَصِمُونَ"
    },
   {
       id:"2",
       src: "../Images/blog2.png",
       keepplace:"ایران/رشت",
       propertynum:"1393/04/1254",
       countpages:"256",
       creators:"عبدالرحمان صوفی",
       subject:"اخلاق",
       createdate:"1 ذیحجه",
       color:"نخودی",
       gender:"دست ساز ترمه آهار مهره ومقواااا",
       teqnique:"دست ساز ترمه آهار مهره ومقواااادست ساز ترمه آهار مهره ومقواااادست ساز ترمه آهار مهره ومقواااا",
       demensions:"طول 35 و عرض 15 سانتیمتر و",
       waqf:"حاج حسین آقا ملک",
       tabpage:"برگگه 45 پشت از برگه 245",
       soreinfo:"الفتح 45-11",
       verseaye:"قَالَ يَا قَوْمِ لِمَ تَسْتَعْجِلُونَ بِالسَّيِّئَةِ قَبْلَ الْحَسَنَةِ لَوْلَا تَسْتَغْفِرُونَ اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ ووَلَقَدْ أَرْسَلْنَا إِلَى ثَمُودَ أَخَاهُمْ صَالِحًا أَنِ اعْبُدُوا اللَّهَ فَإِذَا هُمْ فَرِيقَانِ يَخْتَصِمُونَ"
   },
    {
        id:"3",
        src: "../Images/blog3.png",
        keepplace:"ایران/کرج",
        propertynum:"1393/04/1254",
        countpages:"256",
        creators:"عبدالرحمان صوفی",
        subject:"اخلاق",
        createdate:"1 ذیحجه",
        color:"نخودی",
        gender:"دست ساز ترمه آهار مهره ومقواااا",
        teqnique:"دست ساز ترمه آهار مهره ومقواااادست ساز ترمه آهار مهره ومقواااادست ساز ترمه آهار مهره ومقواااا",
        demensions:"طول 35 و عرض 15 سانتیمتر و",
        waqf:"حاج حسین آقا ملک",
        tabpage:"برگگه 45 پشت از برگه 245",
        soreinfo:"الفتح 45-11",
        verseaye:"قَالَ يَا قَوْمِ لِمَ تَسْتَعْجِلُونَ بِالسَّيِّئَةِ قَبْلَ الْحَسَنَةِ لَوْلَا تَسْتَغْفِرُونَ اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ ووَلَقَدْ أَرْسَلْنَا إِلَى ثَمُودَ أَخَاهُمْ صَالِحًا أَنِ اعْبُدُوا اللَّهَ فَإِذَا هُمْ فَرِيقَانِ يَخْتَصِمُونَ"

    },
    {
        id:"4",
        src: "../Images/blog4.png",
        keepplace:"ایران/اهواز",
        propertynum:"1393/04/1254",
        countpages:"256",
        creators:"عبدالرحمان صوفی",
        subject:"اخلاق",
        createdate:"1 ذیحجه",
        color:"نخودی",
        gender:"دست ساز ترمه آهار مهره ومقواااا",
        teqnique:"دست ساز ترمه آهار مهره ومقواااادست ساز ترمه آهار مهره ومقواااادست ساز ترمه آهار مهره ومقواااا",
        demensions:"طول 35 و عرض 15 سانتیمتر و",
        waqf:"حاج حسین آقا ملک",
        tabpage:"برگگه 45 پشت از برگه 245",
        soreinfo:"الفتح 45-11",
        verseaye:"قَالَ يَا قَوْمِ لِمَ تَسْتَعْجِلُونَ بِالسَّيِّئَةِ قَبْلَ الْحَسَنَةِ لَوْلَا تَسْتَغْفِرُونَ اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ ووَلَقَدْ أَرْسَلْنَا إِلَى ثَمُودَ أَخَاهُمْ صَالِحًا أَنِ اعْبُدُوا اللَّهَ فَإِذَا هُمْ فَرِيقَانِ يَخْتَصِمُونَ"
    },
    {
        id:"5",
        src: "../Images/blog5.png",
        keepplace:"ایران/تهران",
        propertynum:"1393/04/1254",
        countpages:"256",
        creators:"عبدالرحمان صوفی",
        subject:"اخلاق",
        createdate:"1 ذیحجه",
        color:"نخودی",
        gender:"دست ساز ترمه آهار مهره ومقواااا",
        teqnique:"دست ساز ترمه آهار مهره ومقواااادست ساز ترمه آهار مهره ومقواااادست ساز ترمه آهار مهره ومقواااا",
        demensions:"طول 35 و عرض 15 سانتیمتر و",
        waqf:"حاج حسین آقا ملک",
        tabpage:"برگگه 45 پشت از برگه 245",
        soreinfo:"الفتح 45-11",
        verseaye:"قَالَ يَا قَوْمِ لِمَ تَسْتَعْجِلُونَ بِالسَّيِّئَةِ قَبْلَ الْحَسَنَةِ لَوْلَا تَسْتَغْفِرُونَ اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ ووَلَقَدْ أَرْسَلْنَا إِلَى ثَمُودَ أَخَاهُمْ صَالِحًا أَنِ اعْبُدُوا اللَّهَ فَإِذَا هُمْ فَرِيقَانِ يَخْتَصِمُونَ"
    },
    {
        id:"6",
        src: "../Images/blog6.png",
        keepplace:"ایران/تهران",
        propertynum:"1393/04/1254",
        countpages:"256",
        creators:"عبدالرحمان صوفی",
        subject:"اخلاق",
        createdate:"1 ذیحجه",
        color:"نخودی",
        gender:"دست ساز ترمه آهار مهره ومقواااا",
        teqnique:"دست ساز ترمه آهار مهره ومقواااادست ساز ترمه آهار مهره ومقواااادست ساز ترمه آهار مهره ومقواااا",
        demensions:"طول 35 و عرض 15 سانتیمتر و",
        waqf:"حاج حسین آقا ملک",
        tabpage:"برگگه 45 پشت از برگه 245",
        soreinfo:"الفتح 45-11",
        verseaye:"قَالَ يَا قَوْمِ لِمَ تَسْتَعْجِلُونَ بِالسَّيِّئَةِ قَبْلَ الْحَسَنَةِ لَوْلَا تَسْتَغْفِرُونَ اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ ووَلَقَدْ أَرْسَلْنَا إِلَى ثَمُودَ أَخَاهُمْ صَالِحًا أَنِ اعْبُدُوا اللَّهَ فَإِذَا هُمْ فَرِيقَانِ يَخْتَصِمُونَ"
    },
    {
        id:"7",
        src: "../Images/blog7.png",
        keepplace:"ایران/تهران",
        propertynum:"1393/04/1254",
        countpages:"256",
        creators:"عبدالرحمان صوفی",
        subject:"اخلاق",
        createdate:"1 ذیحجه",
        color:"نخودی",
        gender:"دست ساز ترمه آهار مهره ومقواااا",
        teqnique:"دست ساز ترمه آهار مهره ومقواااادست ساز ترمه آهار مهره ومقواااادست ساز ترمه آهار مهره ومقواااا",
        demensions:"طول 35 و عرض 15 سانتیمتر و",
        waqf:"حاج حسین آقا ملک",
        tabpage:"برگگه 45 پشت از برگه 245",
        soreinfo:"الفتح 45-11",
        verseaye:"قَالَ يَا قَوْمِ لِمَ تَسْتَعْجِلُونَ بِالسَّيِّئَةِ قَبْلَ الْحَسَنَةِ لَوْلَا تَسْتَغْفِرُونَ اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ ووَلَقَدْ أَرْسَلْنَا إِلَى ثَمُودَ أَخَاهُمْ صَالِحًا أَنِ اعْبُدُوا اللَّهَ فَإِذَا هُمْ فَرِيقَانِ يَخْتَصِمُونَ"
    },
    {
        id:"8",
        src: "../Images/blog8.png",
        keepplace:"ایران/تهران",
        propertynum:"1393/04/1254",
        countpages:"256",
        creators:"عبدالرحمان صوفی",
        subject:"اخلاق",
        createdate:"1 ذیحجه",
        color:"نخودی",
        gender:"دست ساز ترمه آهار مهره ومقواااا",
        teqnique:"دست ساز ترمه آهار مهره ومقواااادست ساز ترمه آهار مهره ومقواااادست ساز ترمه آهار مهره ومقواااا",
        demensions:"طول 35 و عرض 15 سانتیمتر و",
        waqf:"حاج حسین آقا ملک",
        tabpage:"برگگه 45 پشت از برگه 245",
        soreinfo:"الفتح 45-11",
        verseaye:"قَالَ يَا قَوْمِ لِمَ تَسْتَعْجِلُونَ بِالسَّيِّئَةِ قَبْلَ الْحَسَنَةِ لَوْلَا تَسْتَغْفِرُونَ اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ ووَلَقَدْ أَرْسَلْنَا إِلَى ثَمُودَ أَخَاهُمْ صَالِحًا أَنِ اعْبُدُوا اللَّهَ فَإِذَا هُمْ فَرِيقَانِ يَخْتَصِمُونَ"
    },
    {
        id:"9",
        src: "../Images/blog9.png",
        keepplace:"ایران/تهران",
        propertynum:"1393/04/1254",
        countpages:"256",
        creators:"عبدالرحمان صوفی",
        subject:"اخلاق",
        createdate:"1 ذیحجه",
        color:"نخودی",
        gender:"دست ساز ترمه آهار مهره ومقواااا",
        teqnique:"دست ساز ترمه آهار مهره ومقواااادست ساز ترمه آهار مهره ومقواااادست ساز ترمه آهار مهره ومقواااا",
        demensions:"طول 35 و عرض 15 سانتیمتر و",
        waqf:"حاج حسین آقا ملک",
        tabpage:"برگگه 45 پشت از برگه 245",
        soreinfo:"الفتح 45-11",
        verseaye:"قَالَ يَا قَوْمِ لِمَ تَسْتَعْجِلُونَ بِالسَّيِّئَةِ قَبْلَ الْحَسَنَةِ لَوْلَا تَسْتَغْفِرُونَ اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ ووَلَقَدْ أَرْسَلْنَا إِلَى ثَمُودَ أَخَاهُمْ صَالِحًا أَنِ اعْبُدُوا اللَّهَ فَإِذَا هُمْ فَرِيقَانِ يَخْتَصِمُونَ"
    },
    {
        id:"10",
        src: "../Images/blog10.png",
        keepplace:"ایران/تهران",
        propertynum:"1393/04/1254",
        countpages:"256",
        creators:"عبدالرحمان صوفی",
        subject:"اخلاق",
        createdate:"1 ذیحجه",
        color:"نخودی",
        gender:"دست ساز ترمه آهار مهره ومقواااا",
        teqnique:"دست ساز ترمه آهار مهره ومقواااادست ساز ترمه آهار مهره ومقواااادست ساز ترمه آهار مهره ومقواااا",
        demensions:"طول 35 و عرض 15 سانتیمتر و",
        waqf:"حاج حسین آقا ملک",
        tabpage:"برگگه 45 پشت از برگه 245",
        soreinfo:"الفتح 45-11",
        verseaye:"قَالَ يَا قَوْمِ لِمَ تَسْتَعْجِلُونَ بِالسَّيِّئَةِ قَبْلَ الْحَسَنَةِ لَوْلَا تَسْتَغْفِرُونَ اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ ووَلَقَدْ أَرْسَلْنَا إِلَى ثَمُودَ أَخَاهُمْ صَالِحًا أَنِ اعْبُدُوا اللَّهَ فَإِذَا هُمْ فَرِيقَانِ يَخْتَصِمُونَ"
    },
    {
        id:"11",
        src: "../Images/blog11.png",
        keepplace:"ایران/تهران",
        propertynum:"1393/04/1254",
        countpages:"256",
        creators:"عبدالرحمان صوفی",
        subject:"اخلاق",
        createdate:"1 ذیحجه",
        color:"نخودی",
        gender:"دست ساز ترمه آهار مهره ومقواااا",
        teqnique:"دست ساز ترمه آهار مهره ومقواااادست ساز ترمه آهار مهره ومقواااادست ساز ترمه آهار مهره ومقواااا",
        demensions:"طول 35 و عرض 15 سانتیمتر و",
        waqf:"حاج حسین آقا ملک",
        tabpage:"برگگه 45 پشت از برگه 245",
        soreinfo:"الفتح 45-11",
        verseaye:"قَالَ يَا قَوْمِ لِمَ تَسْتَعْجِلُونَ بِالسَّيِّئَةِ قَبْلَ الْحَسَنَةِ لَوْلَا تَسْتَغْفِرُونَ اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ ووَلَقَدْ أَرْسَلْنَا إِلَى ثَمُودَ أَخَاهُمْ صَالِحًا أَنِ اعْبُدُوا اللَّهَ فَإِذَا هُمْ فَرِيقَانِ يَخْتَصِمُونَ"
    },
    {
        id:"12",
        src: "../Images/blog12.png",
        keepplace:"ایران/تهران",
        propertynum:"1393/04/1254",
        countpages:"256",
        creators:"عبدالرحمان صوفی",
        subject:"اخلاق",
        createdate:"1 ذیحجه",
        color:"نخودی",
        gender:"دست ساز ترمه آهار مهره ومقواااا",
        teqnique:"دست ساز ترمه آهار مهره ومقواااادست ساز ترمه آهار مهره ومقواااادست ساز ترمه آهار مهره ومقواااا",
        demensions:"طول 35 و عرض 15 سانتیمتر و",
        waqf:"حاج حسین آقا ملک",
        tabpage:"برگگه 45 پشت از برگه 245",
        soreinfo:"الفتح 45-11",
        verseaye:"قَالَ يَا قَوْمِ لِمَ تَسْتَعْجِلُونَ بِالسَّيِّئَةِ قَبْلَ الْحَسَنَةِ لَوْلَا تَسْتَغْفِرُونَ اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ ووَلَقَدْ أَرْسَلْنَا إِلَى ثَمُودَ أَخَاهُمْ صَالِحًا أَنِ اعْبُدُوا اللَّهَ فَإِذَا هُمْ فَرِيقَانِ يَخْتَصِمُونَ"
    },
    ]

    document.querySelector("#SliderID").classList.remove('py-10');
    document.querySelector("#fullpageWithThumb").classList.remove('d-none');
    document.querySelector("#SliderID").classList.add('swiper-container-fullpageWithThumb');
    document.querySelector("#SliderID").classList.add('gallery-top-fullpageWithThumb');
    document.querySelector("#SliderID").style.height = "calc(85% - 31.4px)";
    document.querySelector("#fullpageWithThumb").style.height = "15%";
    document.querySelector("#SliderID .swiper-wrapper").innerHTML = "";
    document.querySelector("#fullpageWithThumb .swiper-wrapper").innerHTML = "";
    var galleryThumbs = new Swiper('#fullpageWithThumb', {
        spaceBetween: 32,
        slidesPerView: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        //on: {
        //    click: function (e) {
        //        datagallery.forEach(function(itm){
        //            if (itm.id == e.target.attributes.iid.value) {
        //                for (let obj in itm ) {
        //                if (document.getElementById(obj) !=null) {
        //                    document.getElementById(obj).innerHTML = itm[obj];
    
        //                }
        //            }
        //        }
        //        });
        //    },
        //}
    });
    var galleryTop = new Swiper('#SliderID', {
        spaceBetween: 150,
     
        loopedSlides: 5, //looped slides should be the same

        thumbs: {
            swiper: galleryThumbs,
        },
        //on: {
        //    click: function (e) {
        //        datagallery.forEach(function(itm){
        //            if (itm.id == e.target.attributes.iid.value) {
        //                for (let obj in itm ) {
        //                if (document.getElementById(obj) !=null) {
        //                    document.getElementById(obj).innerHTML = itm[obj];
    
        //                }
        //            }
        //        }
        //        });
        //    },
        //}
    });

    for (let i = 0; i < datagallery.length; i++) {
        let slide = '<div class="swiper-slide" style="background-image:url(' + datagallery[i].src +
            ');background-position: center;background-size: 100% 100%;background-repeat: no-repeat;" iid="'+datagallery[i].id+'"></div>'
        galleryThumbs.appendSlide(slide);
        galleryTop.appendSlide(slide);
        for (let obj in datagallery[i] ) {
            if (document.getElementById(obj) !=null) {
            document.getElementById(obj).innerHTML = datagallery[i][obj];
    
        }
    }
}



let tableone = document.getElementById('table-one');
//tableone.innerHTML = ''


let goToSlide_onkeyup = function(e){
    if(e.valueAsNumber>datagallery.length){
        e.value = "";
        return;
    }
    if(window.event.keyCode == 13){
        let val = parseInt(e.value-1) ;
        let mySwiper = document.querySelector('#SliderID').swiper;
        mySwiper.slideTo(val);
    }
            
}

let goToSlide_onclick = function(e){
    e.select();
}





}

let changeRange = function(e){
    let mySwiper = document.querySelector('#SliderID').swiper;
    // if (e.getAttribute("oldval") > e.valueAsNumber ) mySwiper.slideNext();
    // else mySwiper.slidePrev();
    mySwiper.slideTo(e.valueAsNumber);
    // e.setAttribute("oldval",e.valueAsNumber)            
}

let fullpage = function () {
    document.querySelectorAll('.btn-shape-Swiper').forEach(function (el, i) {
        el.classList.remove('d-none');
    })
    $("#views").css("background-color","#00a693");
    $("#views").children("img").attr("src", "../Images/one-selected.svg") 
    document.querySelector("#SliderID").classList.remove('py-10');
    document.querySelector("#SliderID").style.height = "calc(100% - 31.4px)";
    document.querySelector("#fullpageWithThumb").classList.add('d-none');
    document.querySelector("#SliderID .swiper-wrapper").innerHTML = "";
    document.querySelector("#fullpageWithThumb .swiper-wrapper").innerHTML = "";
    var swiper = new Swiper('#SliderID', {
        slidesPerView: 1,
        spaceBetween: 150,
        setWrapperSize: true,
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
    });

    for (let i = 0; i < datagallery.length; i++) {
        let slide = '<div class="swiper-slide" style="background-image:url(' + datagallery[i].src +
            ');background-position: center;background-size: 100% 100%;background-repeat: no-repeat;"></div>'
        swiper.appendSlide(slide);
    }
}
let TwoSlide = function () {
    document.querySelectorAll('.btn-shape-Swiper').forEach(function (el, i) {
        el.classList.remove('d-none');
    })
    $("#views").css("background-color","#00a693");
    $("#views").children("img").attr("src", "../Images/two-selected.svg") 
    document.querySelector("#SliderID").classList.add('py-10');
    document.querySelector("#SliderID").style.height = "calc(100% - 31.4px)";
    document.querySelector("#fullpageWithThumb").classList.add('d-none');
    document.querySelector("#SliderID .swiper-wrapper").innerHTML = "";
    document.querySelector("#fullpageWithThumb .swiper-wrapper").innerHTML = "";
    var swiper = new Swiper('#SliderID', {
        slidesPerView: 2,
        spaceBetween: 150,
        setWrapperSize: true,
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
    });

    for (let i = 0; i < datagallery.length; i++) {
        let slide = '<div class="swiper-slide" style="background-image:url(' + datagallery[i].src +
            ');background-position: center;background-size: 100% 100%;background-repeat: no-repeat;"></div>'
        swiper.appendSlide(slide);
    }
}

let MultiSlide = function () {
    document.querySelectorAll('.btn-shape-Swiper').forEach(function (el, i) {
        el.classList.remove('d-none');
    })
    $("#views").css("background-color","#00a693");
    $("#views").children("img").attr("src", "../Images/view-selected.svg") 
    document.querySelector("#SliderID").classList.remove('py-10');
    document.querySelector("#SliderID").style.height = "calc(100% - 31.4px)";
    document.querySelector("#fullpageWithThumb").classList.add('d-none');
    document.querySelector("#SliderID .swiper-wrapper").innerHTML = "";
    document.querySelector("#fullpageWithThumb .swiper-wrapper").innerHTML = "";
    let swiper = new Swiper('#SliderID', {
        slidesPerView: 4,
        slidesPerColumn: 3,
        spaceBetween: 10,
        // slidesPerGroup:3,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    for (let i = 0; i < datagallery.length; i++) {
        let slide = '<div class="swiper-slide swiper-slide-MultiSlide" style="background-image:url(' + datagallery[
                i].src +
            ');background-position: center;background-size: 100% 100%;background-repeat: no-repeat;"></div>'
        swiper.appendSlide(slide);
    }
}



let fullpageWithThumb = function () {
    document.querySelectorAll('.btn-shape-Swiper').forEach(function (el, i) {
        el.classList.add('d-none');
    })
    $("#views").css("background-color","#00a693");
    $("#views").children("img").attr("src", "../Images/thumbnail-selected.svg")
    document.querySelector("#fullpageWithThumb").classList.remove('d-none');
    document.querySelector("#SliderID").style.height = "calc(85% - 31.4px)";
    document.querySelector("#SliderID .swiper-wrapper").innerHTML = "";
    document.querySelector("#fullpageWithThumb .swiper-wrapper").innerHTML = "";
    var galleryThumbs = new Swiper('#fullpageWithThumb', {
        spaceBetween: 32,
        slidesPerView: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('#SliderID', {
        spaceBetween: 150,
     
        loopedSlides: 5, //looped slides should be the same

        thumbs: {
            swiper: galleryThumbs,
        },
    });
    for (let i = 0; i < datagallery.length; i++) {
        let slide = '<div class="swiper-slide" style="background-image:url(' + datagallery[i].src +
            ');background-position: center;background-size: 100% 100%;background-repeat: no-repeat;" iid="'+datagallery[i].id+'"></div>'
        galleryThumbs.appendSlide(slide);
        galleryTop.appendSlide(slide);
        for (let obj in datagallery[i] ) {
            if (document.getElementById(obj) !=null) {
            document.getElementById(obj).innerHTML = datagallery[i][obj];
    
        }
    }
}
        
}

let backto = function(){
    document.querySelector('#back').classList.add('d-none');
    document.querySelector('#gallery').classList.add('d-none');
    document.getElementById('pills-prescription').style.height = "unset";
    document.querySelector("#version_childs_show").classList.remove('d-none');
    document.querySelectorAll('.show-dropdown-gallery').forEach(function (el, i) {
        el.classList.add('d-none');
    })
    document.querySelectorAll('.show_version_dropdown').forEach(function (el, i) {
        el.classList.remove('d-none');
    })
}




let expandgallery = function(){
    var modal = document.getElementById("myModal");
    var parent = document.getElementById("expandgallery");
    document.body.style.overflow="hidden";
    modal.style.display="block";

    //modal.style.height = window.innerHeight;

//    var galleryThumbs = new Swiper("#fullpageWithThumbExpand", {
//        spaceBetween: 32,
//        slidesPerView: 5,
//        navigation: {
//            nextEl: '.swiper-button-next',
//            prevEl: '.swiper-button-prev',
//        },
//        freeMode: true,
//        loopedSlides: 5, //looped slides should be the same
//        watchSlidesVisibility: true,
//        watchSlidesProgress: true,
//    });
//    var galleryTop = new Swiper('#expandgallery', {
//        spaceBetween: 150,
     
//        loopedSlides: 5, //looped slides should be the same

//        thumbs: {
//            swiper: galleryThumbs,
//        },
//    });
//    for (let i = 0; i < datagallery.length; i++) {
//        let slide = '<div class="swiper-slide" style="background-image:url(' + datagallery[i].src +
//            ');background-position: center;background-size: 100% 100%;background-repeat: no-repeat;" iid="'+datagallery[i].id+'"></div>'
//        galleryThumbs.appendSlide(slide);
//        galleryTop.appendSlide(slide);
//        for (let obj in datagallery[i] ) {
//            if (document.getElementById(obj) !=null) {
//            document.getElementById(obj).innerHTML = datagallery[i][obj];
    
//        }
//    }
//}
}