// let word = “”;
// let Cell1 = “”;
// let Cell2 = “”;
// let Cell3 = “”;
// let Cell4 = “”;
// for (let i = 0; i <= csvString.length; i++) {
//   if (csvString[i] === “\n” || i === csvString.length) {
//     Cell4 = word;
//     console.log(Cell1, Cell2, Cell3, Cell4);
//     word = “”;
//     Cell1 = “”;
//     Cell2 = “”;
//     Cell3 = “”;
//     Cell4 = “”;
//     continue;
//   }
//   if (csvString[i] != “,”) {
//     word += csvString[i];
//   } else if (Cell1 === “”) {
//     Cell1 = word;
//     word = “”;
//     continue;
//   } else if (Cell2 === “”) {
//     Cell2 = word;
//     word = “”;
//     continue;
//   } else if (Cell3 === “”) {
//     Cell3 = word;
//     word = “”;
//     continue;
//   }
// }
// Split the CSV string into rows based on newline characters.
let rows = csvString.split(“\n”);
for (let i = 0; i < rows.length; i++) {
  // Split the current row into individual elements (id, name, occupation, age)
 // based on the comma delimiter and assign them to respective variables.
 let [cell1, cell2, cell3, cell4] = rows[i].split(“,”);
    console.log(cell1, cell2, cell3, cell4);
}