function main() {
  first();
  second();
  third();
  second();
  console.log("Done with main.");
}
function first() {
  console.log("Inside first function.");
}
function second() {
  console.log("Inside second function.");
  third();
  console.log("Done with second function.");
}
function third() {
  console.log("Inside third fuction.");
  first();
  console.log("Called first function.");
  console.log("Done with third function.");
}

main()
