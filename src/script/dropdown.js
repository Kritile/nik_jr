document.querySelector('.dropdown-toggle').addEventListener('click', ()=>{
    if(document.querySelector('.dropdown-menu').style.display == 'none'){
        document.querySelector('.dropdown-menu').style.display = 'block'
    }else{
        document.querySelector('.dropdown-menu').style.display = 'none'
    }
    
})