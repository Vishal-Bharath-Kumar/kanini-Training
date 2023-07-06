// document.getElementById('question').addEventListener('click',hide);

document.getElementById('close').addEventListener('click', close);
document.getElementById('open').addEventListener('click', open);
var x = window.matchMedia("(max-width: 1200px)")

function open() {
    document.getElementById('close').classList.remove('hidden');
    document.getElementById('open').classList.add('hidden');
    if(x.matches)
    {
    document.getElementById('nav-links').classList.remove('hidden-2')
    }
}
function close(){
    document.getElementById('close').classList.add('hidden');
    document.getElementById('open').classList.remove('hidden');
    if(x.matches)
    {
    document.getElementById('nav-links').classList.add('hidden-2');
    }
}

document.getElementById('down').addEventListener('click', extramodule);
document.getElementById('up').addEventListener('click', closeModule);
document.getElementById('emp-down').addEventListener('click', empmodule);
document.getElementById('emp-up').addEventListener('click', empClose);


function extramodule(){
    document.getElementById('up').classList.remove('hidden');
    document.getElementById('down').classList.add('hidden');
    document.getElementById('ques').classList.remove('hidden');
}

function closeModule(){
    document.getElementById('up').classList.add('hidden');
    document.getElementById('down').classList.remove('hidden');
    document.getElementById('ques').classList.add('hidden');
}

function empmodule(){
    document.getElementById('emp-up').classList.remove('hidden');
    document.getElementById('emp-down').classList.add('hidden');
    document.getElementById('emp').classList.remove('hidden');
}

function empClose(){
    document.getElementById('emp-up').classList.add('hidden');
    document.getElementById('emp-down').classList.remove('hidden');
    document.getElementById('emp').classList.add('hidden');
}


function changecolor1() {
    document.getElementById('demo1').style.backgroundColor = '#DFF3FB';
  
}
document.addEventListener('click', function(event) {
    var p = document.getElementById('demo1');
    if (!p.contains(event.target)) {
        p.style.backgroundColor = '#ffffff00';
    }
});
function changecolor2() {
    document.getElementById('demo2').style.backgroundColor = '#DFF3FB';
  
}
document.addEventListener('click', function(event) {
    var p = document.getElementById('demo2');
    if (!p.contains(event.target)) {
        p.style.backgroundColor = '#ffffff00';
    }
});
function changecolor3() {
    document.getElementById('demo3').style.backgroundColor = '#DFF3FB';
  
}
document.addEventListener('click', function(event) {
    var p = document.getElementById('demo3');
    if (!p.contains(event.target)) {
        p.style.backgroundColor = '#ffffff00';
    }
});
function changecolor4() {
    document.getElementById('demo4').style.backgroundColor = '#DFF3FB';
  
}
document.addEventListener('click', function(event) {
    var p = document.getElementById('demo4');
    if (!p.contains(event.target)) {
        p.style.backgroundColor = '#ffffff00';
    }
});
function changecolor5() {
    document.getElementById('demo5').style.backgroundColor = '#DFF3FB';
  
}
document.addEventListener('click', function(event) {
    var p = document.getElementById('demo5');
    if (!p.contains(event.target)) {
        p.style.backgroundColor = '#ffffff00';
    }
});
function changecolor6() {
    document.getElementById('demo6').style.backgroundColor = '#DFF3FB';
  
}
document.addEventListener('click', function(event) {
    var p = document.getElementById('demo6');
    if (!p.contains(event.target)) {
        p.style.backgroundColor = '#ffffff00';
    }
});
function changecolor7() {
    document.getElementById('demo7').style.backgroundColor = '#DFF3FB';
  
}
document.addEventListener('click', function(event) {
    var p = document.getElementById('demo7');
    if (!p.contains(event.target)) {
        p.style.backgroundColor = '#ffffff00';
    }
});
function changecolor8() {
    document.getElementById('demo8').style.backgroundColor = '#DFF3FB';
  
}
document.addEventListener('click', function(event) {
    var p = document.getElementById('demo8');
    if (!p.contains(event.target)) {
        p.style.backgroundColor = '#ffffff00';
    }
});

function openNav() {
    document.getElementById("myNav").style.width = "38%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

document.addEventListener('click', function(event){
    var p = document.getElementsById('myNav');
    if (!p.contains(event.target)){
        p.style.backgroundColor =  '#DFF3FB';
    }
});
  