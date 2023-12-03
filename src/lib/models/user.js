class User {
  constructor(email) {
    this.email = email;
  }

  getNamePrefix() {
    return this.email.substr(0, 1).toUpperCase();
  }
}
export default User;
