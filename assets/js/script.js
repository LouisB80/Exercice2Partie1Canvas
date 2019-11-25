var c = document.getElementById( "canvas" );
var ctx = c.getContext("2d");
//Toit
function toit() {
  ctx.fillStyle = "orange";
  ctx.rotate(45 * Math.PI / 180);
  ctx.fillRect(212,-56,57,57);
};
// Mur
function mur() {
  ctx.fillStyle = "lightblue";
  ctx.fillRect(150,150,80,80);
};
function fenetres(){
  ctx.fillStyle = "grey";
  ctx.fillRect(160,165,20,20);
  ctx.fillRect(200,165,20,20);
}
function porte(){
  ctx.fillStyle = "grey";
  ctx.fillRect(180,200,20,30);
}
function main() {
  ctx.save();
  toit();
  ctx.restore();
  mur();
  fenetres();
  porte();
}
main();
