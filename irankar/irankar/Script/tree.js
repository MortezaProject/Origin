(function () {
  if (window.CreateTree) return;

  window.CreateTree = function (element, setTree, map, entries) {
    ///////////////////////////////////////////////////////////
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
      plugins: ["wholerow"],
    });
    $(tree)
      // listen for event
      .on("select_node.jstree", function (e, data) {
        // var i, j, r = [];
        // for(i = 0, j = data.selected.length; i < j; i++) {
        //   r.push(data.instance.get_node(data.selected[i]).text);
        // }
        debugger;
        if (
          data.instance.element.find("li[aria-selected=true]").prop("setMap")
        ) {
          map.remove();
          new CreateMap(
            "mapid",
            data.instance.element.find("li[aria-selected=true]").prop("setMap")
          );
          // CreateMap.prototype.buggyFunc(
          //   "mapid",
          //   data.instance.element.find("li[aria-selected=true]").prop("setMap")
          // );
        }
        if (data.node.text == "تهران") show_collection_dropdown("tree");
        // $('#event_result').html('Selected: ' + r.join(', '));
      })
      .on("open_node.jstree", function (e, data) {
        debugger;
        entries.forEach(function (dt, i) {
          if (dt.setMap) {
            let node = container.querySelector('li[id="' + dt.id + '"]');
            if (node) node["setMap"] = dt.setMap;
          }
        });
      })
      // create the instance
      .jstree();
    ////////////////////////////////////////////////
    entries.forEach(function (dt, i) {
      if (dt.setMap) {
        let node = container.querySelector('li[id="' + dt.id + '"]');
        if (node) node["setMap"] = dt.setMap;
      }
    });
    ////////////////////////////////////////////////
  };
})();
