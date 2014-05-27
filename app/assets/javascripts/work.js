
$(window).load(function () {
    document.getElementById("vidCarousel").style.display = 'none';
    document.getElementById("imgViewVid").src = "/images/workToggle.jpg";
    document.getElementById("imgViewVid").bln = true;
});

function imgViewVid_onClick(element) {

    element.src = element.bln ? "/images/workToggle.jpg" : "/images/workToggle2.jpg";
    document.getElementById("vidCarousel").style.display = element.bln ? 'block' : 'none';
    element.bln = !element.bln;
}

function workImg_onClick() {
    document.getElementById("vidCarousel").style.display = 'block';
    document.getElementById("imgViewVid").src = "/images/workToggle2.jpg";
    document.getElementById("imgViewVid").bln = false;

    document.body.scrollTop = document.documentElement.scrollTop = 0;
} 