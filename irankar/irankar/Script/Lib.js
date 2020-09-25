CreateBookLists = function (lists) {
  let parent = document.getElementById("book-lists"),
    Row = "",
    Child = "";
  for (let i = 0; i < lists.length; i++) {
    if (i % 3 == 0) {
      Row = document.createElement("div");
      Row.classList.add("row");
      Row.classList.add("m-0");
      Row.classList.add("p-0");
      parent.appendChild(Row);
    }
    Child = document.createElement("div");
    Child.classList.add("col-md-4");
    Child.classList.add("view");
    Child.classList.add("zoom");
    Child.classList.add("p-0");
    Child.innerHTML =
      '<div CodeBook="' +
      lists[i].CodeBook +
      '" class="item-book d-flex flex-column justify-content-between mx-3" onclick="ShowListBooksDetails(this)" ' +
      "<div>" +
      '<img src="' +
      lists[i].src +
      '" class="blog-image"' +
      "</div>" +
      '<div class="p-2 text-center item-Book-desc"' +
      "<p>" +
      lists[i].desc +
      "</p>" +
      "</div>" +
      "</div>";
    Row.appendChild(Child);
  }
};

ShowListBooksDetails = function (id) {
  debugger;
  let CodeBook = id.getAttribute("CodeBook"),
    Lists = "";
  ListBooksDetails.forEach((element) => {
    if (element.CodeBook == CodeBook) Lists = element;
  });
  document.getElementById("book-lists").classList.add("d-none");
  let parent = document.getElementById("Book-lists-detail"),
    tdBookName = "",
    tdDescriptionBook = "",
    tdAuthor = "",
    tdPublisher = "",
    tdPublished = "",
    publicationdate = "",
    Numbers = "",
    NumberOfPage = "",
    shabok = "",
    Lang = "",
    Size = "";
  parent.classList.remove("d-none");

  tdBookName = document.createElement("td");
  tdDescriptionBook = document.createElement("td");
  tdAuthor = document.createElement("td");
  tdPublisher = document.createElement("td");
  tdPublished = document.createElement("td");
  tdpublicationdate = document.createElement("td");
  tdNumbers = document.createElement("td");
  tdNumberOfPage = document.createElement("td");
  tdshabok = document.createElement("td");
  tdLang = document.createElement("td");
  tdSize = document.createElement("td");
  $("#Book-lists-detail .BookName").html(Lists.BookName);
  $("#Book-lists-detail .DescriptionBook").html(Lists.DescriptionBook);
  $("#Book-lists-detail .Author").html(Lists.Author);
  $("#Book-lists-detail .Publisher").html(Lists.Publisher);
  $("#Book-lists-detail .Published").html(Lists.Published);
  $("#Book-lists-detail .publicationdate").html(Lists.publicationdate);
  $("#Book-lists-detail .Numbers").html(Lists.Numbers);
  $("#Book-lists-detail .NumberOfPage").html(Lists.NumberOfPage);
  $("#Book-lists-detail .shabok").html(Lists.shabok);
  $("#Book-lists-detail .Lang").html(Lists.Lang);
  $("#Book-lists-detail .Size").html(Lists.Size);
  $("#Book-lists-detail .imgBook").attr("src", Lists.src);
  //   elLists.classList.add("row")
};
