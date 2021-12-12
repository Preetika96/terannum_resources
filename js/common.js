function openNav() 
{
    document.getElementById("header").style.right = "0";
    document.getElementById("header").style.position = "absolute";
}

function closeNav() 
{
    document.getElementById("header").style.right = "-100%";
    document.getElementById("header").style.position = "fixed";
}

$(document).ready(function () {

    $(".footer_button").click(function(){
        Calendly.initPopupWidget({url: 'https://calendly.com/terannumagency'});
        return false;
    })

    $(".header_button").click(function(){
        Calendly.initPopupWidget({url: 'https://calendly.com/terannumagency'});
        return false;
    })

    $(".get_in_touch").click(function(){
        Calendly.initPopupWidget({url: 'https://calendly.com/terannumagency'});
        return false;
    })

});