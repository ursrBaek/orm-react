const COUNT = 9;

const mainElem = document.getElementsByTagName('main')[0];

for (let i = 2; i <= COUNT; i++) {
  const $multiplicationTableContainer = document.createElement('div');
  $multiplicationTableContainer.className = 'multiplicationTableContainer';

  const $titleElement = document.createElement('h2');
  $titleElement.innerHTML = `<span className="titleNumber">${i}</span>단`;

  $multiplicationTableContainer.appendChild($titleElement);

  const $multiplicationTable = document.createElement('div');
  $multiplicationTable.className = 'multiplicationTable';

  let multiplicationTableInnerHtml = '';

  for (let j = 1; j <= 9; j++) {
    const row = `<div class="row">
    <span>${i}</span><span>X</span><span>${j}</span><span>=</span><span>${i * j}</span>
    </div>`;

    multiplicationTableInnerHtml += row;
  }

  $multiplicationTable.innerHTML = multiplicationTableInnerHtml;
  $multiplicationTableContainer.appendChild($multiplicationTable);

  mainElem.appendChild($multiplicationTableContainer);
}
