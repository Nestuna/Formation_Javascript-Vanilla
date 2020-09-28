const name = document.getElementById('name'),
      gender = document.getElementById('gender'),
      resName = document.getElementById('res-name'),
      resGender = document.getElementById('res-gender');

name.addEventListener('input', function(event){
  console.log(event.target.value);
  resName.textContent = event.target.value;
});
gender.addEventListener('input', function(event){
  console.log(event.target.value);
  resGender.textContent = event.target.value;
});

const result = document.getElementById('result'),
      mouseX =  document.getElementById('mouse-x'),
      mouseY =  document.getElementById('mouse-y');

result.addEventListener('mousemove', function(){
  let x = event.offsetX;
  let y = event.offsetY;
  mouseX.textContent = x;
  mouseY.textContent = y;
});