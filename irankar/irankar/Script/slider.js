(function(){
    if (window.CreateSlider) return;

    window.CreateSlider = function (params) {
        let Options = {
            ContainerID : params.ContainerID || {},
            ChildNode : params.ChildNode,
            NumberOfEachSlider : params.NumberOfEachSlider || 1,
            NumberOfTree : params.NumberOfTree || 1,
            ID : params.ID
        }

        for (let i = 0; i < Options.NumberOfTree; i++) {
            
            let itemChild = document.createElement("div");
            itemChild.classList.add("swiper-slide");
            Options.ChildNode.append(itemChild);

            let tree = document.createElement("div");
            tree.id = Options.ID+i;
            itemChild.append(tree)
            
        }

        let x = '#'+Options.ContainerID
        var swiper = new Swiper(x, {
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
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 100,
              },
            }
          });
          return swiper;
        // debugger;
        // // params.parent.innerHTML = "";
        // let Options = {
        //     parent : params.parent || {},
        //     NumberOfEachSlider : params.NumberOfEachSlider || 1,
        //     NumberOfTree : params.NumberOfTree || 1,
        //     ID : params.ID
        // }
        // let NumberOfPages = Math.ceil(Options.NumberOfTree / Options.NumberOfEachSlider),
        //     flag = 0;
        // for (let i = 0; i < NumberOfPages; i++) {
        //     let itemChild = document.createElement("div");
        //     itemChild.classList.add("carousel-item");
        //     if(i==0) itemChild.classList.add("active");
        //     Options.parent.append(itemChild)
            
        //         for (let j = 0; j < Options.NumberOfEachSlider; j++) {
        //             if(flag == Options.NumberOfTree) return;
        //             let div = itemChild;
        //             if (Options.NumberOfEachSlider>1){
        //                 div = document.createElement("div");
        //                 // div.classList.add("col-3");
        //                 div.style.width= "25%";
        //                 div.style.float= "right";
        //                 itemChild.append(div)
        //             }
        //             let tree = document.createElement("div");
        //             tree.id = Options.ID+flag;
        //             div.append(tree)
        //             flag++;
        //         }            
        // }
    }
})()
