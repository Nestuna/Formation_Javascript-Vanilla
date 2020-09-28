// event 1
const parent = document.getElementById('parent'),
      child = document.getElementById('child'),
      parentCount = document.getElementById('parent-count'),
      childCount = document.getElementById('child-count');

parent.addEventListener('click', function(event) {
  event.preventDefault();
  let newValue = parseInt(parentCount.textContent) + 1;
  parentCount.textContent = newValue;
});
child.addEventListener('click', function(event) {
  event.preventDefault();
  event.stopPropagation();
  let newValue = parseInt(childCount.textContent) + 1;
  childCount.textContent = newValue;
});

// event 2
