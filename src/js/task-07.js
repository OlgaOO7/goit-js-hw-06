const inputFontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputFontSizeControl .addEventListener('input', onControlFontSize);

function onControlFontSize () {
  text.style.fontSize = inputFontSizeControl .value + "px";
};

