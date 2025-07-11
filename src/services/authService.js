import Parse from "parse";

export class AuthService {
  // User registration
  static async register(username, password, email) {
    try {
      const user = new Parse.User();
      user.set("username", username);
      user.set("password", password);
      user.set("email", email);

      const result = await user.signUp();
      return { success: true, user: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // User login
  static async login(username, password) {
    try {
      const user = await Parse.User.logIn(username, password);
      return { success: true, user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // User logout
  static async logout() {
    try {
      await Parse.User.logOut();
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Get current user
  static getCurrentUser() {
    return Parse.User.current();
  }

  // Check if user is authenticated
  static isAuthenticated() {
    return Parse.User.current() !== null;
  }

  // Check if user session is valid
  static async isSessionValid() {
    try {
      const currentUser = Parse.User.current();
      if (!currentUser) return false;

      await currentUser.fetch();
      return true;
    } catch (error) {
      return false;
    }
  }
}
