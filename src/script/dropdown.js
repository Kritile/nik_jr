document.querySelector('.dropdown-toggle').addEventListener('click', ()=>{
    if(!document.querySelector('.dropdown-menu').classList.contains('active')){
        document.querySelector('.dropdown-menu').classList.add('active')
        document.querySelector('.lang_arrow').style.transform='rotate(180deg)'
    }else{
        document.querySelector('.dropdown-menu').classList.remove('active')
        document.querySelector('.lang_arrow').style.transform='unset'
    }
    
})