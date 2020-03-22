(function(){
    if (window.CreateSlider) return;

    window.CreateSlider = function (params) {
        debugger;
        // params.parent.innerHTML = "";
        let Options = {
            parent : params.parent || {},
            NumberOfEachSlider : params.NumberOfEachSlider || 1,
            NumberOfTree : params.NumberOfTree || 1,
            ID : params.ID
        }
        let NumberOfPages = Math.ceil(Options.NumberOfTree / Options.NumberOfEachSlider),
            flag = 0;
        for (let i = 0; i < NumberOfPages; i++) {
            let itemChild = document.createElement("div");
            itemChild.classList.add("carousel-item");
            if(i==0) itemChild.classList.add("active");
            Options.parent.append(itemChild)
            
                for (let j = 0; j < Options.NumberOfEachSlider; j++) {
                    if(flag == Options.NumberOfTree) return;
                    let div = itemChild;
                    if (Options.NumberOfEachSlider>1){
                        div = document.createElement("div");
                        // div.classList.add("col-3");
                        div.style.width= "25%";
                        div.style.float= "right";
                        itemChild.append(div)
                    }
                    let tree = document.createElement("div");
                    tree.id = Options.ID+flag;
                    div.append(tree)
                    flag++;
                }            
        }
    }
})()
