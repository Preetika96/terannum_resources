// Stats

function elementInView(obj){
    return ($(window).height() + $(window).scrollTop()) > $(obj).offset().top;
};

$(document).ready(function () {

    $(window).scroll(function(){
        if (elementInView($('.agency_stats_container')))
        {
            $('.agency_stats_number').each(function (_, el) {
                const $thisProgress = $(el);
                let intervalTimer;
                intervalTimer = setInterval(() => {
                    const lastVal = Number($thisProgress.attr('data-last'));
                    const currentVal = Number($thisProgress.text());
                    if (currentVal < lastVal) {
                        $thisProgress.text(currentVal + 1);
                    } else {
                        if (typeof $thisProgress.attr('data-plus') === 'string') {
                            $thisProgress.text(Number($thisProgress.attr('data-last')) + "+");
                        }
                        clearInterval(intervalTimer);
                    }
                }, 400);
            });
        }
    });

    showSlides();
    
});

// Steps

var slideIndex = 0;

function currentSlide(n) 
{
    showSlides(slideIndex = n);
}

function showSlides() 
{
    var i;
    var slides = document.getElementsByClassName("agency_steps_card");
    var dots = document.getElementsByClassName("dot");
    var labels = document.getElementsByClassName("agency_steps_label");

    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";  
    }

    slideIndex++;
    
    if (slideIndex > slides.length) {slideIndex = 1}   

    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" active_dot", "");
        labels[i].className = labels[i].className.replace(" active_label", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active_dot";
    labels[slideIndex-1].className += " active_label";
    
    // setTimeout(showSlides, 12000);

}