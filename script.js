let len = document.getElementById("length")
// let upper = document.getElementById("uppercase")
// let lower = document.getElementById("lowercase")
// let symbols = document.getElementById("symbols")
// let numbers = document.getElementById("numbers")

// generate.addEventListener('click', ()=>{
//     getpass.value = p();
// })

class Password {
  constructor() {
    console.log("Welcome to Password Generator")
    this.pass = ""
  }
  
  generatePassword(len) {
    let chars = "abcdefghijklmnopqrstuvwxyz"
    let numbers = "1234567890"
    let special = "!@#$%^&*()"
    if (len < 3) {
      console.log("Your password should be atleast 3 characters long")
    }
    else {
      let i = 0
      while (i < len) {
        this.pass += chars[Math.floor(Math.random() * chars.length)]
        this.pass += numbers[Math.floor(Math.random() * numbers.length)]
        this.pass += special[Math.floor(Math.random() * special.length)]
        i += 3
      }
      this.pass = this.pass.substr(0, len)
      return this.pass
    }
  }
}

let p = new Password()
document.write(len.value)
p.generatePassword(len.value)
