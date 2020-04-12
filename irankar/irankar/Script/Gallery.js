(function () {
  if (window.CreateSliderGallery) return;

  window.CreateSliderGallery = function (params) {
    const Parent = params.elem,
          TopSlider = Parent.querySelector(".TopSlider"),
          fullpageWithThumb = Parent.querySelector(".fullpageWithThumb");
    let data = params.data;
    Parent.querySelector(".gallery-toolbar-AllPages").textContent =
      data.length;
    Parent.querySelector(".formControlRange").min = 0;
    Parent.querySelector(".formControlRange").max = data.length - 1;
    let changeRange = function (e) {
      let mySwiper = TopSlider.swiper;
      // if (e.getAttribute("oldval") > e.valueAsNumber ) mySwiper.slideNext();
      // else mySwiper.slidePrev();
      mySwiper.slideTo(e.valueAsNumber);
      // e.setAttribute("oldval",e.valueAsNumber)
    };
    var swiper = new Swiper(".TopSlider", {
      slidesPerView: 1,
      spaceBetween: 150,
      setWrapperSize: true,
      // init: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      // breakpoints: {
      //     640: {
      //         slidesPerView: 2,
      //         spaceBetween: 40,
      //     },
      //     768: {
      //         slidesPerView: 2,
      //         spaceBetween: 40,
      //     },
      //     1024: {
      //         slidesPerView: 4,
      //         spaceBetween: 50,

      //     },
      // }
    });

    for (let i = 0; i < data.length; i++) {
      // let slide = '<div class="swiper-slide"><img src=' + data[i].src + ' class="blog-image" /></div>'
      let slide =
        '<div class="swiper-slide" style="background-image:url(' +
        data[i].src +
        ');background-position: center;background-size: 100% 100%;background-repeat: no-repeat;"></div>';
      swiper.appendSlide(slide);
    }

    let goToSlide_onkeyup = function (e) {
      if (e.valueAsNumber > data.length) {
        e.value = "";
        return;
      }
      if (window.event.keyCode == 13) {
        let val = parseInt(e.value - 1);
        let mySwiper = TopSlider.swiper;
        mySwiper.slideTo(val);
      }
    };

    let goToSlide_onclick = function (e) {
      e.select();
    };
    
    Parent.querySelector('.gallery-toolbar-dropdown a[name=fullpage_view]').onclick = function () {
      Parent.querySelectorAll(".btn-shape-Swiper").forEach(function (el, i) {
        el.classList.remove("d-none");
      });
      TopSlider.classList.remove("py-10");
      TopSlider.style.height = "calc(100% - 31.4px)";
      fullpageWithThumb.classList.add("d-none");
      TopSlider.querySelector(".swiper-wrapper").innerHTML = "";
      fullpageWithThumb.querySelector(".swiper-wrapper").innerHTML = "";
      var swiper = new Swiper(".TopSlider", {
        slidesPerView: 1,
        spaceBetween: 150,
        setWrapperSize: true,
        // init: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });

      for (let i = 0; i < data.length; i++) {
        let slide =
          '<div class="swiper-slide" style="background-image:url(' +
          data[i].src +
          ');background-position: center;background-size: 100% 100%;background-repeat: no-repeat;"></div>';
        swiper.appendSlide(slide);
      }
    };

    Parent.querySelector('.gallery-toolbar-dropdown a[name=fullpageWithThumb_view]').onclick = function () {
      Parent.querySelectorAll(".btn-shape-Swiper").forEach(function (el, i) {
        el.classList.add("d-none");
      });
      TopSlider.classList.remove("py-10");
      fullpageWithThumb.classList.remove("d-none");
      TopSlider.classList.add("swiper-container-fullpageWithThumb");
      TopSlider.classList.add("gallery-top-fullpageWithThumb");
      TopSlider.style.height = "calc(85% - 31.4px)";
      fullpageWithThumb.style.height = "15%";
      TopSlider.querySelector(".swiper-wrapper").innerHTML = "";
      fullpageWithThumb.querySelector(".swiper-wrapper").innerHTML = "";
      let galleryThumbs = new Swiper(".fullpageWithThumb", {
        spaceBetween: 21,
        slidesPerView: 9,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
      let galleryTop = new Swiper(".TopSlider", {
        spaceBetween: 150,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: galleryThumbs,
        },
      });
      for (let i = 0; i < data.length; i++) {
        let slide =
          '<div class="swiper-slide" style="background-image:url(' +
          data[i].src +
          ');background-position: center;background-size: 100% 100%;background-repeat: no-repeat;"></div>';
        galleryThumbs.appendSlide(slide);
        galleryTop.appendSlide(slide);
      }
    };
    
    Parent.querySelector('.gallery-toolbar-dropdown a[name=TwoSlide_view]').onclick = function () {
      Parent.querySelectorAll(".btn-shape-Swiper").forEach(function (el, i) {
        el.classList.remove("d-none");
      });
      TopSlider.classList.add("py-10");
      TopSlider.style.height = "calc(100% - 31.4px)";
      fullpageWithThumb.classList.add("d-none");
      TopSlider.querySelector(".swiper-wrapper").innerHTML = "";
      fullpageWithThumb.querySelector(".swiper-wrapper").innerHTML = "";
      var swiper = new Swiper(".TopSlider", {
        slidesPerView: 2,
        spaceBetween: 150,
        setWrapperSize: true,
        // init: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });

      for (let i = 0; i < data.length; i++) {
        let slide =
          '<div class="swiper-slide" style="background-image:url(' +
          data[i].src +
          ');background-position: center;background-size: 100% 100%;background-repeat: no-repeat;"></div>';
        swiper.appendSlide(slide);
      }
    };
    
    Parent.querySelector('.gallery-toolbar-dropdown a[name=MultiSlide_view]').onclick = function () {
      Parent.querySelectorAll(".btn-shape-Swiper").forEach(function (el, i) {
        el.classList.remove("d-none");
      });
      TopSlider.classList.remove("py-10");
      TopSlider.style.height = "calc(100% - 31.4px)";
      fullpageWithThumb.classList.add("d-none");
      TopSlider.querySelector(".swiper-wrapper").innerHTML = "";
      fullpageWithThumb.querySelector(".swiper-wrapper").innerHTML = "";
      let swiper = new Swiper(".TopSlider", {
        slidesPerView: 4,
        slidesPerColumn: 3,
        spaceBetween: 10,
        // slidesPerGroup:3,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      for (let i = 0; i < data.length; i++) {
        let slide =
          '<div class="swiper-slide swiper-slide-MultiSlide" style="background-image:url(' +
          data[i].src +
          ');background-position: center;background-size: 100% 100%;background-repeat: no-repeat;"></div>';
        swiper.appendSlide(slide);
      }
    };
  };
})();
