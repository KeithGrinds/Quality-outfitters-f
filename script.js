// NAV
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", ()=>{
    navLinks.classList.toggle("show");
});

// CURSOR
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", e=>{
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// SMOKE
const canvas = document.getElementById("smokeCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles=[];

function createSmoke(x,y){
    particles.push({
        x,y,
        size:Math.random()*20+10,
        alpha:1
    });
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach((p,i)=>{
        ctx.fillStyle=`rgba(200,200,200,${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
        ctx.fill();

        p.y -=1;
        p.alpha -=0.01;

        if(p.alpha<=0) particles.splice(i,1);
    });

    requestAnimationFrame(animate);
}

canvas.addEventListener("mousemove", e=>{
    createSmoke(e.clientX,e.clientY);
});

animate();

// FORM
document.querySelector("form").addEventListener("submit", e=>{
    e.preventDefault();
    alert("Message Sent!");
});
