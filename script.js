let SliderItemsNode = document.querySelectorAll('.slider-slide')
let SliderItems = Array.prototype.slice.call(SliderItemsNode);
// console.log(SliderItems)

// We select all elements with the "content" class from the code and put them into one array (list). That will be a list with our pictures that will appear

let SliderButtonsNode = document.querySelectorAll('.slider-button')
let SliderButtons = Array.prototype.slice.call(SliderButtonsNode);
// console.log(SliderButtons)

// We do the same with buttons with numbers


let ActiveIndex
SliderButtonsNode.forEach(function(Slide, i) {
    Slide.addEventListener("click",  function ()  {
       console.log(i)
        ActiveIndex = i
        for (var c = 0; c < SliderItemsNode.length; c++) {
            SliderButtonsNode[c].style.opacity = '0.4'
            SliderButtonsNode[c].style.boxShadow = 'inset 42px -1px 24px -45px rgba(66, 68, 90, 1)'
        }
        
        console.log(ActiveIndex + 'xd')
        for (var n = 0; n < SliderItemsNode.length; n++) {
            SliderItemsNode[n].style.display = "none"
        }
        SliderItemsNode.forEach(function (SlideE, b) {
            if (ActiveIndex == b) {
                SliderItemsNode[b].style.display = 'flex'
            }
        })
        SliderButtonsNode[i].style.opacity = '1'
        SliderButtonsNode[i].style.boxShadow = 'none'
        SliderButtonsNode[i].style.borderLeft = '0.5px solid rgb(124, 129, 134, 0.2)'
        SliderButtonsNode[i].style.backgroundColor = 'rgba(255, 255, 255, 1)'
   });
});

   