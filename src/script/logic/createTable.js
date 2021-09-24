function createTable(record, whereToAdd) {
  const tableRow = document.createElement("tr");
  const tableItemName = document.createElement("td");
  const tableItemValue = document.createElement("td");

  tableRow.className = "table__row";
  tableItemName.className = "table__item";
  tableItemValue.className = "table__item";

  tableItemName.innerHTML = record.name;
  tableItemValue.innerHTML = record.value;

  tableRow.appendChild(tableItemName);
  tableRow.appendChild(tableItemValue);

  whereToAdd.appendChild(tableRow);
}
