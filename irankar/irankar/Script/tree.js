(function () {
    if (window.CreateTree) return;

    window.CreateTree = function (element, setTree, map) {
        entries = [
            {
                "id": "1",
                "parent": "0",
                "text": "ازبکستان",
                "level": "1",
            },
            {
                "id": "2",
                "parent": "0",
                "text": "آلمان",
                "level": "1"
            },
            {
                "id": "3",
                "parent": "0",
                "text": "آمریکا",
                "level": "1"
            },
            {
                "id": "4",
                "parent": "0",
                "text": "انگلیس",
                "level": "1"
            },
            {
                "id": "5",
                "parent": "0",
                "text": "ایران",
                "level": "1"
            },
            {
                "id": "51",
                "parent": "5",
                "text": "تهران",
                "level": "2",
                setMap  : {
                    view : {lat:35.7034,lon:51.3881,scale:11},
                    marker : [
                        {val:31,mlat:35.7415,mlon:51.4524,Desc:"تهران (ایران) + موزۀ ملی ایران (۳۰)، کتابخانه ملی ایران (۵)، موزه ملک (۴۵)، موزه ملی قرآن کریم (۵۲)، ..."},
                        {val:6,mlat:35.7376,mlon:51.4840,Desc:"تهران (ایران) + موزۀ ملی ایران (۳۰)، کتابخانه ملی ایران (۵)، موزه ملک (۴۵)، موزه ملی قرآن کریم (۵۲)، ..."},
                        {val:12,mlat:35.7264,mlon:51.3776,Desc:"تهران (ایران) + موزۀ ملی ایران (۳۰)، کتابخانه ملی ایران (۵)، موزه ملک (۴۵)، موزه ملی قرآن کریم (۵۲)، ..."},
                        {val:27,mlat:35.7170,mlon:51.5067,Desc:"تهران (ایران) + موزۀ ملی ایران (۳۰)، کتابخانه ملی ایران (۵)، موزه ملک (۴۵)، موزه ملی قرآن کریم (۵۲)، ..."},
                        {val:21,mlat:35.7108,mlon:51.4339,Desc:"تهران (ایران) + موزۀ ملی ایران (۳۰)، کتابخانه ملی ایران (۵)، موزه ملک (۴۵)، موزه ملی قرآن کریم (۵۲)، ..."},
                        {val:9,mlat:35.6830,mlon:51.2334,Desc:"تهران (ایران) + موزۀ ملی ایران (۳۰)، کتابخانه ملی ایران (۵)، موزه ملک (۴۵)، موزه ملی قرآن کریم (۵۲)، ..."}
                    ]
                }
            },
            {
                "id": "511",
                "parent": "51",
                "text": "موزه ملک",
                "level": "3"
            },
            {
                "id": "512",
                "parent": "51",
                "text": "موزه ملی ایران",
                "level": "3"
            },
            {
                "id": "513",
                "parent": "51",
                "text": "موزه قرآن کریم",
                "level": "3"
            },
            {
                "id": "52",
                "parent": "5",
                "text": "مشهد",
                "level": "2"
            },
            {
                "id": "53",
                "parent": "5",
                "text": "اردبیل",
                "level": "2"
            },
            {
                "id": "54",
                "parent": "5",
                "text": "اصفهان",
                "level": "2"
            },
            {
                "id": "6",
                "parent": "0",
                "text": "ایرلند",
                "level": "1"
            },
            {
                "id": "7",
                "parent": "0",
                "text": "بحرین",
                "level": "1"
            },
            {
                "id": "8",
                "parent": "0",
                "text": "ترکیه",
                "level": "1"
            },
        ];
        ///////////////////////////////////////////////////////////
        function list_to_tree(list) {
            var map = {}, node, roots = [], i;
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
            if (node.length==0)return;
            let ul = document.createElement('ul');
            
            for (let i = 0; i < node.length; i++) {
              let li = document.createElement('li');
              li.innerHTML = node[i].text;
              li.setAttribute('data-jstree','{"icon" : "false"}');
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
          let tree = '#' + element;
          $(tree).jstree({
              "plugins" : [ "wholerow" ]
          });
          $(tree)
          // listen for event
          .on('select_node.jstree', function (e, data) {
            // var i, j, r = [];
            // for(i = 0, j = data.selected.length; i < j; i++) {
            //   r.push(data.instance.get_node(data.selected[i]).text);
            // }
            debugger
            if(data.instance.element.find('li[aria-selected=true]').prop('setMap')){
                map.remove();
                new CreateMap("mapid", data.instance.element.find('li[aria-selected=true]').prop('setMap'));
            }

            // $('#event_result').html('Selected: ' + r.join(', '));
          })
          .on('open_node.jstree', function (e, data) {
              debugger
              entries.forEach(function(dt,i){
                if(dt.setMap){
                    let node = container.querySelector('li[id="'+ dt.id +'"]');
                    if(node) node["setMap"] = dt.setMap;
                }
            })
          })
          // create the instance
          .jstree();
          ////////////////////////////////////////////////
          entries.forEach(function(dt,i){
              if(dt.setMap){
                  let node = container.querySelector('li[id="'+ dt.id +'"]');
                  if(node) node["setMap"] = dt.setMap;
              }
          })
          ////////////////////////////////////////////////
        
    }
})()
