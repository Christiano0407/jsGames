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

//myObject = { rotation: 0 };
gsap.set(myObject, { transformOrigin: "50% 50%" });
gsap.to(myObject, {
  duration: 2,
  x: 400,
  rotation: 360,
  onUpdate: function () {
    //console.log(myObject.rotation);
  },
});

// ======= Methods =======
// from =>
const four = document.getElementById(`cuad4`);
gsap.from(four, { duration: 2, opacity: 0, scale: 0.5, ease: "back" });

const circle = document.querySelectorAll(`.circle`);
gsap.from(circle, {
  duration: 2,
  opacity: 0,
  //y: 150,
  y: "random(-200, 200)",
  stagger: 0.25,
});
//gsap.to(circle, { backgroundColor: "#000000", ease: "power2.in" });

// ===== Tween ======
