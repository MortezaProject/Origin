let datablog = [];

//set images page
//document.getElementsByName('designBy').src = '../Images/design_by.png';

//set image page

ShowDescriptionBlog = function (param) {
  let bid = param.attributes.bid.value || "";
  datablog.forEach(function (itm) {
    if (itm.bid == bid) {
      document.querySelector("#description-blog span").innerHTML =
        itm.desc +
        '<img class="BHRblog" style="float:left;" src=' +
        window.imagesource.Arrowblogleft +
        " />";
      document.querySelector("#dateblog span").innerHTML =
        itm.date +
        '<img class="BHLblog" style="float:left;" src=' +
        window.imagesource.Arrowblogleft +
        " />";
    }
  });
  $("#description-blog").removeClass("d-none");
  for (var i = 0; i < $("#SwiperSlider").children().length; i++) {
    if ($("#SwiperSlider").children()[i].textContent != param.textContent)
      $("#SwiperSlider").children()[i].style.opacity = "0.4";
  }
};

HideDescriptionBlog = function (param) {
  //morteza $("#description-blog").removeClass("d-none");
  //$("#description-blog").addClass("d-none")
  for (var i = 0; i < $("#SwiperSlider").children().length; i++) {
    $("#SwiperSlider").children()[i].style.opacity = "1";
  }
};
ChangeIconCollapse = function (e) {
  debugger;
  if ($($(e)[0].dataset.target).hasClass("show"))
    $(e).children("img").attr("src", window.imagesource.Arrowdown);
  else $(e).children("img").attr("src", window.imagesource.Arrowup);
};
ChangeIconCollapseChild = function (e) {
  debugger;
  if ($($(e)[0].dataset.target).hasClass("show"))
    $(e).children("img").attr("src", window.imagesource.Arrowdownsmall);
  else $(e).children("img").attr("src", window.imagesource.Arrowupsmall);
};
OpenDilogComment = function (e) {
  debugger;
};
CreateBlogHome = function (data) {
  datablog = data || {};
  for (let i = 0; i < datablog.length; i++) {
    let div = document.createElement("div");
    div.classList.add("swiper-slide");
    div.classList.add("swiper-slide-cust");
    div.innerHTML =
      '<div class="view zoom" bid=' +
      datablog[i].bid +
      ' onmouseover="ShowDescriptionBlog(this)" onmouseout="HideDescriptionBlog(this)"><div class="item-blog d-flex flex-column justify-content-between"><div><img src=' +
      datablog[i].src +
      ' class="blog-image" /></div><div class="p-2 text-center item-blog-desc"><p>' +
      datablog[i].title +
      "</p></div></div></<div>";
    document.getElementById("SwiperSlider").append(div);
  }
  var swiper = new Swiper("#SliderID", {
    slidesPerView: 1,
    spaceBetween: 10,
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
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 27,
      },
    },
  });
};
LoadCommentsUsers = function (data_comments) {
  data_comments.sort((a, b) =>
    a.parent_comment_id > b.parent_comment_id ? 1 : -1
  );
  for (var i = 0; i < data_comments.length; i++) {
    if (data_comments[i].parent_comment_id == "") {
      $("#collapsecommentsuser .card-body-comment").append(
        '<div class="media border_comments pt-3"><div class="media-body" comment_id="' +
          data_comments[i].commentid +
          '"><h4 class="pl-3">' +
          data_comments[i].comment_sender_name +
          "</h4><h4>" +
          data_comments[i].date +
          "</h4><p>" +
          data_comments[i].comment +
          "</p></div></div>"
      );
    } else {
      let parent = $(
        '[comment_id="' + data_comments[i].parent_comment_id + '"]'
      );
      let padding = "0";
      if ($(parent).children().attr("child") != undefined)
        padding =
          Number($(parent).children()[0].style.paddingRight.substring(0, 1)) +
          1;
      if (
        $('[comment_id="' + data_comments[i].parent_comment_id + '"]').length >=
        1
      ) {
        $('[comment_id="' + data_comments[i].parent_comment_id + '"]').append(
          '<div class="media pt-3"><div class="media-body" comment_id="' +
            data_comments[i].commentid +
            '"><div child style="padding-right:' +
            (padding == "0" ? "1rem" : padding + "rem") +
            ';"><h4 class="pl-3">' +
            data_comments[i].comment_sender_name +
            "</h4><h4>" +
            data_comments[i].date +
            "</h4><p>" +
            data_comments[i].comment +
            "</p></div></div></div>"
        );
      }
    }
  }
  parent = $("#collapsecommentsuser .card-body-comment .border_comments");
  for (var i = 0; i < parent.length; i++) {
    for (var j = 0; j < $(parent[i]).find(".media").length; j++) {
      if (j % 2 == 0)
        $(parent[i]).find(".media")[j].style.backgroundColor = "#eceaea";
      else $(parent[i]).find(".media")[j].style.backgroundColor = "#f5f3f0";
    }
  }
};

TreeBlog = function (element, entries) {
  entries = [
    { id: "1", parent: "0", text: "1394(105)", level: "1" },

    { id: "2", parent: "0", text: "1395(10)", level: "1" },

    { id: "3", parent: "0", text: "1396(100)", level: "1" },

    { id: "4", parent: "0", text: "1397(17)", level: "1" },

    { id: "5", parent: "0", text: "1398(17)", level: "1" },

    { id: "7", parent: "5", text: "فروردین", level: "2" },
    { id: "8", parent: "5", text: "اردیبهشت", level: "2" },
    { id: "9", parent: "5", text: "خرداد", level: "2" },
    { id: "10", parent: "5", text: "تیر", level: "2" },
    { id: "11", parent: "5", text: "مرداد", level: "2" },
    { id: "12", parent: "5", text: "شهریور", level: "2" },
    { id: "13", parent: "5", text: "مهر", level: "2" },
  ];
  function list_to_tree(list) {
    var map = {},
      node,
      roots = [],
      i;
    for (i = 0; i < list.length; i += 1) {
      map[list[i].id] = i;
      list[i].children = [];
    }
    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      if (node.parent !== "0") {
        list[map[node.parent]].children.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
  }
  let data = list_to_tree(entries);

  /////////////////////////////////////////////////////////////
  function createTree(container, obj) {
    container.append(createTreeDom(obj));
  }

  function createTreeDom(node) {
    if (node.length == 0) return;
    let ul = document.createElement("ul");
    for (let i = 0; i < node.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = node[i].text;
      li.setAttribute("data-jstree", '{"icon" : "false"}');
      li.setAttribute("role", "presentation");
      li.id = node[i].id;

      let childrenUl = createTreeDom(node[i].children);
      if (childrenUl) {
        li.append(childrenUl);
      }
      ul.append(li);
    }
    return ul;
  }

  let container = document.getElementById(element);
  createTree(container, data);
  ////////////////////////////////////////////////

  let tree = "#" + element;

  $(tree).jstree({
    themes: { theme: "default", dots: false, icons: false },
    plugins: ["themes", "html_data"],
    core: {
      expand_selected_onload: true,
    },

    //plugins: ["wholerow"],
  });
  $(tree).on("select_node.jstree", function (e, data) {
    $(tree).jstree().toggle_node(data.node);
  });
  $(tree)
    //.on("select_node.jstree", function (e, data) {
    //    // var i, j, r = [];
    //    // for(i = 0, j = data.selected.length; i < j; i++) {
    //    //   r.push(data.instance.get_node(data.selected[i]).text);
    //    // }
    //    //debugger;
    //    if (document.getElementById(data.selected[0]).classList.contains('jstree-closed')){
    //        document.getElementById(data.selected[0]).classList.remove('jstree-closed');
    //        document.getElementById(data.selected[0]).classList.add('jstree-open');
    //        document.getElementById(data.selected[0]).setAttribute("aria-expanded", "true");
    //        $('.jstree .jstree-open>.jstree-children').css("display", "block")
    //    }
    //    else {
    //        document.getElementById(data.selected[0]).classList.remove('jstree-open');
    //        document.getElementById(data.selected[0]).classList.add('jstree-closed');
    //        document.getElementById(data.selected[0]).setAttribute("aria-expanded", "false");
    //        $('.jstree .jstree-open>.jstree-children').css("display", "none")
    //    }
    //    // $('#event_result').html('Selected: ' + r.join(', '));
    //})
    .jstree();
};
