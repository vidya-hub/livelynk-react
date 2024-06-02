class APIRoutes {
  static baseUrl = "http://192.168.1.56:3000";

  //auth Routes
  static login = `${APIRoutes.baseUrl}/auth/login`;
  static register = `${APIRoutes.baseUrl}/auth/register`;

  //contact
  static addContact = `${APIRoutes.baseUrl}/contact/addContact/`;
  static acceptContactRequest = `${APIRoutes.baseUrl}/contact/acceptContactRequest`;
  static deleteContact = `${APIRoutes.baseUrl}/contact/deleteContact`;
  static getContacts = `${APIRoutes.baseUrl}/contact/getContacts?`;
  static getAllContacts = `${APIRoutes.baseUrl}/contact/getAllContacts?`;
  static getChatContacts = `${APIRoutes.baseUrl}/contact/getChatContacts?`;

  // CHAT
  static getChatHistory = `${APIRoutes.baseUrl}/chat/getChatHistory?`;
}

export default APIRoutes;
