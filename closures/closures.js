function makeSizer(size) {
    return function () {
      document.body.style.fontSize = `${size}px`;
    };
}


  const size36 = makeSizer(36);
  const size24 = makeSizer(24);
  const size12 = makeSizer(12);

  document.getElementById('button-closures-36').onclick = size36;
  document.getElementById('button-closures-24').onclick = size24;
  document.getElementById('button-closures-12').onclick = size12;
