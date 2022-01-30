var text = {'feeling':'Good', 'time':'Morning'}
var text1 = "{'greeting':'Hello', 'afterG':'There!'}"

var jsn = JSON.stringify(text);
var Jstr = JSON.parse(jsn);

document.getElementById('text1').innerHTML = jsn;
document.getElementById('text2').innerHTML = Jstr.feeling + '' + Jstr.time;

localStorage.setItem('dog1', 'Hemi');
localStorage.setItem('dog2', 'Max');

document.getElementById('text3').innerHTML = localStorage.getItem('dog1');
document.getElementById('text4').innerHTML = localStorage.getItem('dog2');