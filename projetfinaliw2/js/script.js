function validerMonFormulaire(){

    // Validation de l'input

    let portefeuille = document.getElementById("InputList").value;

    //FNB /CPG/RENTE

    let formulaireEstValide=false;


    if (portefeuille === "FNB") {
        formulaireEstValide = true;
    }

    else if (portefeuille=== "CPG") {
        formulaireEstValide = true;
    }
    else if (portefeuille=== "Rente") {
        formulaireEstValide = true;
    }

    if(!formulaireEstValide) {
        alert( "Veuillez vous limiter aux portefeuilles mentionnés");
    }

    else {
        alert( " Bravo! votre profil investisseur est enregistré avec succès ")
    }

    return formulaireEstValide;
}



function fitElementToParent(el, padding) {
    var timeout = null;
    function resize() {
        if (timeout) clearTimeout(timeout);
        anime.set(el, {scale: 1});
        var pad = padding || 0;
        var parentEl = el.parentNode;
        var elOffsetWidth = el.offsetWidth - pad;
        var parentOffsetWidth = parentEl.offsetWidth;
        var ratio = parentOffsetWidth / elOffsetWidth;
        timeout = setTimeout(anime.set(el, {scale: ratio}), 10);
    }
    resize();
    window.addEventListener('resize', resize);
}

var sphereAnimation = (function() {

    var sphereEl = document.querySelector('.sphere-animation');
    var spherePathEls = sphereEl.querySelectorAll('.sphere path');
    var pathLength = spherePathEls.length;
    var hasStarted = false;
    var aimations = [];

    fitElementToParent(sphereEl);

    var breathAnimation = anime({
        begin: function() {
            for (var i = 0; i < pathLength; i++) {
                aimations.push(anime({
                    targets: spherePathEls[i],
                    stroke: {value: ['rgba(255,75,75,1)', 'rgba(80,80,80,.35)'], duration: 500},
                    translateX: [2, -4],
                    translateY: [2, -4],
                    easing: 'easeOutQuad',
                    autoplay: false
                }));
            }
        },
        update: function(ins) {
            aimations.forEach(function(animation, i) {
                var percent = (1 - Math.sin((i * .35) + (.0022 * ins.currentTime))) / 2;
                animation.seek(animation.duration * percent);
            });
        },
        duration: Infinity,
        autoplay: false
    });

    var introAnimation = anime.timeline({
        autoplay: false
    })
        .add({
            targets: spherePathEls,
            strokeDashoffset: {
                value: [anime.setDashoffset, 0],
                duration: 3900,
                easing: 'easeInOutCirc',
                delay: anime.stagger(190, {direction: 'reverse'})
            },
            duration: 2000,
            delay: anime.stagger(60, {direction: 'reverse'}),
            easing: 'linear'
        }, 0);

    var shadowAnimation = anime({
        targets: '#sphereGradient',
        x1: '25%',
        x2: '25%',
        y1: '0%',
        y2: '75%',
        duration: 30000,
        easing: 'easeOutQuint',
        autoplay: false
    }, 0);

    function init() {
        introAnimation.play();
        breathAnimation.play();
        shadowAnimation.play();
    }

    init();

})();

window.human = false;

var canvasEl = document.querySelector('.fireworks');
var ctx = canvasEl.getContext('2d');
var numberOfParticules = 30;
var pointerX = 0;
var pointerY = 0;
var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
var colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];

function setCanvasSize() {
    canvasEl.width = window.innerWidth * 2;
    canvasEl.height = window.innerHeight * 2;
    canvasEl.style.width = window.innerWidth + 'px';
    canvasEl.style.height = window.innerHeight + 'px';
    canvasEl.getContext('2d').scale(2, 2);
}

function updateCoords(e) {
    pointerX = e.clientX || e.touches[0].clientX;
    pointerY = e.clientY || e.touches[0].clientY;
}

function setParticuleDirection(p) {
    var angle = anime.random(0, 360) * Math.PI / 180;
    var value = anime.random(50, 180);
    var radius = [-1, 1][anime.random(0, 1)] * value;
    return {
        x: p.x + radius * Math.cos(angle),
        y: p.y + radius * Math.sin(angle)
    }
}

function createParticule(x,y) {
    var p = {};
    p.x = x;
    p.y = y;
    p.color = colors[anime.random(0, colors.length - 1)];
    p.radius = anime.random(16, 32);
    p.endPos = setParticuleDirection(p);
    p.draw = function() {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = p.color;
        ctx.fill();
    }
    return p;
}

function createCircle(x,y) {
    var p = {};
    p.x = x;
    p.y = y;
    p.color = '#FFF';
    p.radius = 0.1;
    p.alpha = .5;
    p.lineWidth = 6;
    p.draw = function() {
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.lineWidth = p.lineWidth;
        ctx.strokeStyle = p.color;
        ctx.stroke();
        ctx.globalAlpha = 1;
    }
    return p;
}

function renderParticule(anim) {
    for (var i = 0; i < anim.animatables.length; i++) {
        anim.animatables[i].target.draw();
    }
}

function animateParticules(x, y) {
    var circle = createCircle(x, y);
    var particules = [];
    for (var i = 0; i < numberOfParticules; i++) {
        particules.push(createParticule(x, y));
    }
    anime.timeline().add({
        targets: particules,
        x: function(p) { return p.endPos.x; },
        y: function(p) { return p.endPos.y; },
        radius: 0.1,
        duration: anime.random(1200, 1800),
        easing: 'easeOutExpo',
        update: renderParticule
    })
        .add({
            targets: circle,
            radius: anime.random(80, 160),
            lineWidth: 0,
            alpha: {
                value: 0,
                easing: 'linear',
                duration: anime.random(600, 800),
            },
            duration: anime.random(1200, 1800),
            easing: 'easeOutExpo',
            update: renderParticule,
            offset: 0
        });
}

var render = anime({
    duration: Infinity,
    update: function() {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    }
});

document.addEventListener(tap, function(e) {
    window.human = true;
    render.play();
    updateCoords(e);
    animateParticules(pointerX, pointerY);
}, false);

var centerX = window.innerWidth / 2;
var centerY = window.innerHeight / 2;

function autoClick() {
    if (window.human) return;
    animateParticules(
        anime.random(centerX-50, centerX+50),
        anime.random(centerY-50, centerY+50)
    );
    anime({duration: 200}).finished.then(autoClick);
}

autoClick();
setCanvasSize();
window.addEventListener('resize', setCanvasSize, false);


var timeline = anime.timeline({ autoplay: true, direction: 'alternate', loop: true });

function setDash(el) {
    if (el.nodeName === 'path') {
        el.style.dashArray = anime.setDashoffset(el);
        return [anime.setDashoffset(el) - 1, 0];
    }

    return 0;
}

var animations = [
    { name: '.t1', x: 195.47816, y: 152.84847, stroke: '#dd5d20' },
    { name: '.t2', x: 254.09133, y: 152.65768, stroke: '#0b9444' },
    { name: '.h1', x: 387.71374, y: 152.65768, stroke: '#1f91ac' },
    { name: '.h2', x: 383.47816, y: 210.44844, stroke: '#df871b' },
    { name: '.h3', x: 510.41374, y: 152.65768, stroke: '#1f91ac' },
    { name: '.h4', x: 507, y: 152.36218, fill: '#df871b' },
    { name: '.i1', x: 192.47816, y: 348.64847, stroke: '#dd5d20' },
    { name: '.i2', x: 188.47816, y: 463.85818, stroke: '#dd5d20' },
    { name: '.i3', x: 258.09133, y: 348.56614, stroke: '#1f91ac' },
    { name: '.i4', x: 254, y: 348.36218, fill: '#ffffff' },
    { name: '.n1', x: 387.71374, y: 348.36614, stroke: '#da3931' },
    { name: '.n2', x: 499.004, y: 348.36614, stroke: '#da3931' },
    { name: '.n3', x: 395.7, y: 348.46218, stroke: '#0b9444' },
    { name: '.n4', x: 391.70001, y: 348.66217, fill: '#da3931' },
    { name: '.n5', x: 503, y: 463.16217, fill: '#da3931' },
    { name: '.k1', x: 188.32637, y: 544.48746, stroke: '#da3931' },
    { name: '.k2', x: 200.31263, y: 659.5965, stroke: '#1f91ac' },
    { name: '.k3', x: 196.31264, y: 659.39655, fill: '#da3931' },
    { name: '.k4', x: 252.924, y: 599.49118, stroke: '#df871b' }
];

animations.forEach(function(animation, index) {
    if (animation.stroke) {
        timeline
            .add({
                targets: animation.name,
                stroke: {
                    value: ['#000', animation.stroke],
                    duration: 500,
                    delay: 1000 + index * 30,
                    easing: 'easeInOutQuad'
                },
                offset: 0
            });
    }
    if (animation.fill) {
        timeline
            .add({
                targets: animation.name,
                fill: {
                    value: ['#000', animation.fill],
                    duration: 500,
                    delay: 1000 + index * 30,
                    easing: 'easeInOutQuad'
                },
                offset: 0
            });
    }
    timeline
        .add({
            targets: animation.name,
            translateX: {
                value: [100 * (index % 4) - animation.x + 100, -100],
                duration: 500,
                delay: 1000 + index * 30,
                easing: 'easeInOutQuad'
            },
            translateY: {
                value: [100 * Math.floor(index / 4) - animation.y + 100, -100],
                duration: 500,
                delay: 1000 + index * 30,
                easing: 'easeInOutQuad'
            },
            offset: 0
        });
    timeline
        .add({
            targets: animation.name,
            strokeDashoffset: {
                value: setDash,
                duration: 800,
                delay: 1200 + index * 30,
                easing: 'easeInOutQuad'
            },
            offset: 0
        });
});

timeline
    .add({
        targets: '.t1',
        opacity: 1,
        duration: 1000,
        delay: 4000,
        offset: 0
    });


