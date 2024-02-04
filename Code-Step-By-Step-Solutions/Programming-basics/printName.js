// Question : The following program attempts to print a full name given a first name and last name as parameters. The last name should be printed in full, starting with a capital letter and followed by all lowercase letters. A comma and the capitalized first name initial should then follow. For example, the call printName("Abby", "Stepp") should output "Stepp, A." to the console. The initial code contains several kinds of errors. Fix the code below so that it compiles and runs properly.

function printName(first, last) {
  let fullname =
    last.charAt(0).toUpperCase() +
    last.slice(1).toLowerCase() +
    ", " +
    first.substring(0, 1).toUpperCase() +
    ".";
  console.log(fullname);
}

printName("Mr. Foo", "O' Smithy");
printName("Abby", "Stepp");
printName("George", "Boole");
printName("steve", "JOBS");
