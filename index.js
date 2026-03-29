let btn = document.getElementById('top-btn');

window.onscroll = function(){
    scrollFunction();
};

function scrollFunction(){
    if (document.documentElement.scrollTop > 100){
        btn.style.display = 'inline-flex';
    } else{
        btn.style.display = 'none';
    }
};

function goTopFunction(){
    document.documentElement.scrollTop = 0;
}