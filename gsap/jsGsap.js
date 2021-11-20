// Select Text / Variable / Object / Array
// Canvas, SVG / WebLg
//> GSAP ===============================================
//> To <
gsap.to(".cuadro", {
  duration: 2,
  x: 400,
  backgroundColor: "#000000",
  borderRadius: "20%",
  border: "2px solid #000",
  ease: "power.out",
});

gsap.to(".cuad2", {
  duration: "2",
  x: 600,
  ease: "power2.in",
});

// > set <
let myObject = document.getElementById(`cuad3`);
console.log(myObject);

gsap.set(myObject, { transformOrigin: "50% 50%" });
gsap.to(myObject, { duration: 2, x: 400, rotation: 360 });
