function makeid(l) {
    // write your code here
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let radnomStr = ""
      for(let i = 1; i <= l; i++){
        let randomIndex = parseInt(Math.random()*str.length)
        radnomStr += str[randomIndex]
      }
      return radnomStr
  }
  
  console.log(makeid(5));
  
  
  // q6:  Generate a random password of length 8
  
  // console.log(parseInt(Math.random()*10)) // 0<= x < 1
  
  // let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"
  
  // let password = ""
  // for(let i = 1; i<=8; i++){
  //   let randomIndex =  parseInt(Math.random()*str.length)
  //     // console.log(randomIndex, str[randomIndex])
  //     password = password + str[randomIndex]
  // }
  // console.log(password)
  // // console.log(randomIndex, str[randomIndex])
  