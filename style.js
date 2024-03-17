let counter=document.querySelector('.counter-num');
let start_btn=document.querySelector('#start');
let sound=document.getElementById('click-sound');
let counter_shape=document.querySelector('.shape');
let tasbeh_one =document.querySelector('.one');
let tasbeh_two =document.querySelector('.two');
let tasbeh_three =document.querySelector('.three');
let tasbeh_four =document.querySelector('.four');
let tasbeh_five = document.querySelector('.five');
let tasbeh_six =document.querySelector('.six');
let message=document.querySelector('.message');
let count=0;
let parent_element=document.querySelector('.parent');
start_btn.addEventListener('click',function(){
start_btn.style.cssText='pointer-events:none;';
tasbeh_one.children[0].style.cssText='display:none';
tasbeh_one.addEventListener('click',function(){
    counter.innerHTML=+counter.innerHTML + 1;
    counter_shape.style.cssText=`height:${count+1}%`;
    ++count;
    sound.play();
    if(counter.innerHTML==100){
        counter_shape.style.cssText=`height:0%`;
        tasbeh_one.style.cssText='pointer-events:none';
       tasbeh_one.children[0].style.cssText='display:block !important'; 
       tasbeh_two.children[0].style.cssText='display:none';
       count=0;
        tasbeh_two.addEventListener('click',function(){
            counter.innerHTML=+counter.innerHTML+1;
            counter_shape.style.cssText=`height:${count+1}%`;
            ++count;
            sound.play();
            if(counter.innerHTML==200){
                counter_shape.style.cssText=`height:0%`;
                count=0;
                tasbeh_two.style.cssText='pointer-events:none';
                tasbeh_two.children[0].style.cssText='display:block !important'
                tasbeh_three.children[0].style.cssText='display:none';
                tasbeh_three.addEventListener('click',function(){
                     counter.innerHTML=+counter.innerHTML+1;
                     counter_shape.style.cssText=`height:${count+1}%`;
                     ++count;
                     sound.play();
                     if(counter.innerHTML==300){
                        counter_shape.style.cssText=`height:0%`;
                        count=0;
                        tasbeh_three.style.cssText='pointer-events:none';
                        tasbeh_three.children[0].style.cssText='display:block !important';
                         tasbeh_four.children[0].style.cssText='display:none';
                          tasbeh_four.addEventListener('click',function(){
                            counter.innerHTML=+counter.innerHTML+1;
                            counter_shape.style.cssText=`height:${count+1}%`;
                            ++count;
                            sound.play();
                            if(counter.innerHTML==400){
                            counter_shape.style.cssText=`height:0%`;
                            count=0;
                            tasbeh_four.style.cssText='pointer-events:none';
                            tasbeh_four.children[0].style.cssText='display:block !important';
                            tasbeh_five.children[0].style.cssText='display:none';
                            tasbeh_five.addEventListener('click',function(){
                            counter.innerHTML=+counter.innerHTML+1;
                             counter_shape.style.cssText=`height:${count+1}%`;
                            ++count;
                            sound.play();
                            if(counter.innerHTML==500){
                               counter_shape.style.cssText=`height:0%`;
                               count=0;
                               tasbeh_five.style.cssText='pointer-events:none';
                               tasbeh_five.children[0].style.cssText='display:block !important';
                               tasbeh_six.children[0].style.cssText='display:none'; 
                               tasbeh_six.addEventListener('click',function(){
                               counter.innerHTML=+counter.innerHTML+1;
                               counter_shape.style.cssText=`height:${count+1}%`;
                               ++count;
                               sound.play();
                               if(counter.innerHTML==600){
                               counter_shape.style.cssText=`height:0%`;
                               count=0;
                               tasbeh_six.style.cssText='pointer-events:none'; 
                               tasbeh_six.children[0].style.cssText='display:block !important'; 
                               message.style.cssText='display:flex !important';
                               parent.style.cssText='display:none';
                               start_btn.style.cssText='display:none';
                               }
                               })
                            }
                            })
                        }
                          }) 
                
                        }
                })
            }
            
        })
    }
})

})
