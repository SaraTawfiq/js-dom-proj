var imgList= Array.from(document.querySelectorAll('.item img')) ;
var lightBoxContainer =document.querySelector('.lightboxContainer');
var lightboxitem =document.querySelector('.lightboxitem');
var nextBtn=document.getElementById('next');
var prev=document.getElementById('prev');
var closeBtn=document.getElementById('close');
var currentSliderIndex=0;

for (var i=0; i<imgList.length; i++)
{
    imgList[i].addEventListener('click', function(e){
        var imgScr= e.target.getAttribute('src');
         currentSliderIndex =imgList.indexOf(e.target);
         console.log(currentSliderIndex);
        lightboxitem.style.backgroundImage=`url(${imgScr})`;
        lightBoxContainer.classList.replace('d-none','d-flex');

    })
}

function nextSlider (){
    currentSliderIndex ++;
    if(currentSliderIndex==imgList.length)
    {
        currentSliderIndex=0;
    }
    var imgScr= imgList [currentSliderIndex].getAttribute('src');
    lightboxitem.style.backgroundImage=`url(${imgScr})`;
}
nextBtn.addEventListener('click',nextSlider);




function prevSlider (){
    currentSliderIndex --;
    if(currentSliderIndex<0)
    {
        currentSliderIndex=imgList.length-1;
    }
    var imgScr= imgList [currentSliderIndex].getAttribute('src');
    lightboxitem.style.backgroundImage=`url(${imgScr})`;
}
prev.addEventListener('click',prevSlider);


closeBtn.addEventListener('click',function(){

    lightBoxContainer.classList.replace('d-flex','d-none');
});