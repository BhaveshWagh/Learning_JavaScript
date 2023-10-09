class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password.toUpperCase();
  }
  set password(value) {
    this._password = value;
  }
}

const bhavesh = new User("b@bhavesh.ai.in.com", "abc123");
console.log(bhavesh.email);
console.log(bhavesh.password);
