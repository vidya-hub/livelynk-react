class APIRoutes {
  static baseUrl = "https://e1d2-157-10-167-7.ngrok-free.app";

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
