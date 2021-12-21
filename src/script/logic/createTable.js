function createTable(record, whereToAdd) {
  const { name, value, key } = record;

  const tableRow = document.createElement("tr");
  const tableItemName = document.createElement("td");
  const tableItemValue = document.createElement("td");
  const tableItemValueElement = document.createElement("span");

  tableRow.className = "table__row";
  tableItemName.className = "table__item";
  tableItemValue.className = "table__item";

  if (key) {
    tableItemValueElement.setAttribute('id', key);
    tableItemValue.className = "table__item tooltip";
  }

  tableItemName.innerHTML = name;
  tableItemValueElement.innerHTML = value;

  tableRow.appendChild(tableItemName);
  tableItemValue.appendChild(tableItemValueElement)
  tableRow.appendChild(tableItemValue);

  whereToAdd.appendChild(tableRow);
}
