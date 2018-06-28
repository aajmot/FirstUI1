

export class UserModel {
  private _userName;
  private _password;



  get UserName() {
    return this._userName;
  }
  set UserName(userName: string) {
    this._userName = userName;
  }

  get Passsword() {
    return this._password;
  }

  set Passord(password: string) {
    this._password = password;
  }



  AuthenticateUser () {
    // call http service to authnticate login user here

  }

  getUser(id: Integer) {
    // get user by its id
  }

  getAllUser() {
    // get all use
  }

  postUser() {
    // create user logic
  }

  putUser() {
    // update an existing user
  }

  deleteUser() {
    // delete an user
  }
















}
