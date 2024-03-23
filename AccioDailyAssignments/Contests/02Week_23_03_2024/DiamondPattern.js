/**
 * 
    * 
   * *
  * * *
 * * * *
* * * * *
* * * * *
 * * * *
  * * *
   * *
    *
 */


function printDiamondPattern(n){
    for(let i = 0; i < n; i++){
        let spaces = n - i -1
        let stars = i + 1
        for(let sp = 0; sp < spaces; sp++){
            process.stdout.write(" ")
        }
        for(let st = 0; st < stars; st++){
            process.stdout.write("* ")
        }
        console.log()
    }

    // InversePattern
    for(let i = n - 1; i >= 0; i--){
        let spaces = n - i - 1
        let stars = i + 1
        for(let sp = 0; sp < spaces; sp++){
            process.stdout.write(" ")
        }
        for(let st = 0; st < stars; st++){
            process.stdout.write("* ")
        }
        console.log()
    }

}

printDiamondPattern(5)