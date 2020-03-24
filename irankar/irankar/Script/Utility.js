
ShowDescriptionBlog = function (param) {
    document.querySelector('#description-blog span').textContent = param.getAttribute('desc');
    $("#description-blog").removeClass("d-none");
}

HideDescriptionBlog = function (param) {
    //$("#description-blog").removeClass("d-none");
    $("#description-blog").addClass("d-none")
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
