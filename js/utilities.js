function inputValById(inputId){
  return document.getElementById(inputId).value;
}

function allHider(element, toUnhide = null){
  let childrenList = document.getElementById(element).children;
  let unHide = document.getElementById(toUnhide);
  for (child of childrenList){
    child.classList.add('hidden');
  }
  unHide.classList.remove('hidden');
}