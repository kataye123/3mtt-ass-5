let toggles = document.getElementsByClassName('toggle');
let contents = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('icon');

// setTimeout(() => {
// document.body.style.background-color; "aqua";
// },300)
 

// console.log(toggles,contents,icons);

        for(let i=0; i<toggles.length; i++){
            toggles[i].addEventListener('click', ()=>{
                if (parseInt (contents[i].style.height)
                != contents[i].scrollHeight){
            contents[i].style.height = contents[i].scrollHeight + "px";
        toggles[i].style.color = "blue"
        icons[i].classList.remove('fa-plus')
        icons[i].classList.add('fa-minus');
        }
        else{
            contents[i].style.height = "0px";
            toggles[i].style.color = "black"
            icons[i].classList.remove ("fa-minus")
            icons[i].classList.add ("fa-plus")
        }    
    
    for(let j=0; j<contents.length; j++){
        if(j!==i) { contents[j].style.height = "0px";
            toggles[j].style.color = "black"
            icons[j].classList.remove ("fa-minus")
            icons[j].classList.add ("fa-plus")
        }

     }
        });}