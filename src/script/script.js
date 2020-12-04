document.querySelectorAll('.quest .arrow').forEach((item)=>{
    item.addEventListener('click',(event)=>{
    
        
    })
})
document.querySelectorAll('.quest').forEach((item)=>{
    
    item.addEventListener('click',(event)=>{
        if(event.target.classList.contains('arrow')){
            if(!event.target.parentElement.parentElement.parentElement.classList.contains('active')){
                event.target.parentElement.parentElement.parentElement.classList.add('active')
                event.target.parentElement.parentElement.parentElement.querySelector('.arrow_img:not(.active)').style = 'transform:rotate(180deg)'
            }else{
                event.target.parentElement.parentElement.parentElement.classList.remove('active')
                event.target.parentElement.parentElement.parentElement.querySelector('.arrow_img:not(.active)').style = 'transform:none'
            }
        }
        if(event.target.classList.contains('quest')){
            if(!event.target.classList.contains('active')){
                event.target.classList.add('active')
                event.target.querySelector('.arrow_img:not(.active)').style = 'display:none'
                event.target.querySelector('.arrow_img.active').style = 'display:block'
            }else{
                event.target.classList.remove('active')
                event.target.querySelector('.arrow_img:not(.active)').style = 'display:block'
                event.target.querySelector('.arrow_img.active').style = 'transform:none'
            }
            
        }
        if(event.target.classList.contains('ask')){
            if(!event.target.parentElement.parentElement.classList.contains('active')){
                event.target.parentElement.parentElement.classList.add('active')
                event.target.parentElement.parentElement.querySelector('.arrow_img:not(.active)').style = 'display:none'
                event.target.parentElement.parentElement.querySelector('.arrow_img.active').style = 'display:block'
            }else{
                event.target.parentElement.parentElement.classList.remove('active')
                event.target.parentElement.parentElement.querySelector('.arrow_img:not(.active)').style = 'display:block'
                event.target.parentElement.parentElement.querySelector('.arrow_img.active').style = 'display:none'
            }
        }
        if(event.target.classList.contains('title')){
            if(!event.target.parentElement.classList.contains('active')){
                event.target.parentElement.classList.add('active')
                event.target.parentElement.querySelector('.arrow_img:not(.active)').style = 'display:none'
                event.target.parentElement.querySelector('.arrow_img.active').style = 'display:block'
            }else{
                event.target.parentElement.classList.remove('active')
                event.target.parentElement.querySelector('.arrow_img:not(.active)').style = 'display:block'
                event.target.parentElement.querySelector('.arrow_img.active').style = 'display:none'
            }
        }
        if(event.target.classList.contains('arrow_img')){
            if(!event.target.parentElement.parentElement.parentElement.classList.contains('active')){
                event.target.parentElement.parentElement.parentElement.classList.add('active')
                event.target.parentElement.querySelector('.arrow_img:not(.active)').style = 'display:none'
                event.target.parentElement.querySelector('.arrow_img.active').style = 'display:block'
            }else{
                event.target.parentElement.parentElement.parentElement.classList.remove('active')
                event.target.parentElement.querySelector('.arrow_img:not(.active)').style = 'display:block'
                event.target.parentElement.querySelector('.arrow_img.active').style = 'display:none'
            }
        }
        
        
        
    })
})
document.querySelector('.switch .mout').addEventListener('click',()=>{
    if(!document.querySelector('.switch .mout').classList.contains('active')){
        document.querySelector('.switch .mout').classList.add('active')
        document.querySelector('.switch .ann').classList.remove('active')
        document.querySelector('.cost_wrapper.ann').style.display = 'none'
        document.querySelector('.cost_wrapper.mouth').style.display = 'flex'
        
    }
})
document.querySelector('.switch .ann').addEventListener('click',()=>{
    if(!document.querySelector('.switch .ann').classList.contains('active')){
        document.querySelector('.switch .ann').classList.add('active')
        document.querySelector('.switch .mout').classList.remove('active')
        document.querySelector('.cost_wrapper.ann').style.display = 'flex'
        document.querySelector('.cost_wrapper.mouth').style.display = 'none'
    }
})
document.querySelector('.images__wrapper .prev').addEventListener('click',()=>{
    if(!document.querySelector('.image.active').previousElementSibling.classList.contains('image')){
        let el = document.querySelector('.image.active .name')
        document.querySelector('.image.active').classList.remove('active')
        document.querySelectorAll('.images__wrapper .image')[document.querySelectorAll('.images__wrapper .image').length-1].classList.add('active')
        document.querySelector('.images__wrapper .prev .name').innerText = document.querySelectorAll('.images__wrapper .image .name')[document.querySelectorAll('.images__wrapper .image').length-1].innerText
        document.querySelector('.images__wrapper .next .name').innerText = el.innerText

    }else{
        let element = document.querySelector('.image.active')
        if(element.nextElementSibling.classList.contains('image')){
            document.querySelector('.images__wrapper .prev .name').innerText = document.querySelectorAll('.images__wrapper .image>.name')[document.querySelectorAll('.images__wrapper .image>.name').length-1].innerText
            document.querySelector('.images__wrapper .next .name').innerText = document.querySelector('.image.active .name').innerText
        }else{
            document.querySelector('.images__wrapper .prev .name').innerText =  document.querySelectorAll('.images__wrapper .image>.name')[0].innerText
            document.querySelector('.images__wrapper .next .name').innerText = document.querySelector('.image.active .name').innerText
        }
        document.querySelector('.image.active').classList.remove('active')
        element.previousElementSibling.classList.add('active')
    }
})
document.querySelector('.images__wrapper .next').addEventListener('click',()=>{
    if(!document.querySelector('.image.active').nextElementSibling.classList.contains('image')){
        document.querySelector('.images__wrapper .prev .name').innerText = document.querySelectorAll('.images__wrapper .image>.name')[document.querySelectorAll('.images__wrapper .image>.name').length-1].innerText
        document.querySelector('.images__wrapper .next .name').innerText = document.querySelectorAll('.images__wrapper .image>.name')[1].innerText
        document.querySelector('.image.active').classList.remove('active')
        let el = document.querySelectorAll('.images__wrapper .image')[0]
        el.classList.add('active')
    }else{
        let el = document.querySelector('.image.active')
        if(el.previousElementSibling.classList.contains('image')){
            document.querySelector('.images__wrapper .prev .name').innerText =  el.querySelector('.name').innerText
            document.querySelector('.images__wrapper .next .name').innerText =  document.querySelectorAll('.images__wrapper .image>.name')[0].innerText
        }else{
            document.querySelector('.images__wrapper .prev .name').innerText =  document.querySelectorAll('.images__wrapper .image>.name')[0].innerText
            document.querySelector('.images__wrapper .next .name').innerText =  document.querySelectorAll('.images__wrapper .image>.name')[document.querySelectorAll('.images__wrapper .image>.name').length-1].innerText
        }
        document.querySelector('.image.active').classList.remove('active')
        el.nextElementSibling.classList.add('active')
        
    }
})
document.querySelector('.comp .prev').addEventListener('click',()=>{
    let active = document.querySelector('.comp_list.active')
    if(active.previousElementSibling.classList.contains('comp_list')){
        document.querySelector('.comp_list.active').classList.remove('active')
        active.previousElementSibling.classList.add('active')
    }else{
        document.querySelector('.comp_list.active').classList.remove('active')
        document.querySelectorAll('.comp_list')[document.querySelectorAll('.comp_list').length-1].classList.add('active')
    }
})
document.querySelector('.comp .next').addEventListener('click',()=>{
    let active = document.querySelector('.comp_list.active')
    if(active.nextElementSibling){
        document.querySelector('.comp_list.active').classList.remove('active')
        active.nextElementSibling.classList.add('active')
    }else{
        document.querySelector('.comp_list.active').classList.remove('active')
        document.querySelectorAll('.comp_list')[0].classList.add('active')
    }
})