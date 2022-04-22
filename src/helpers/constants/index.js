import AdminBooksList from "containers/adminBooksList";
import AdminNewReservations from "containers/adminNewReservations";
import AdminUsersList from "containers/adminUsersList";
import SuperAdminAdmins from "containers/superAdminAdmins";
import AdminController from "controllers/admin";

export const Hosts = {
  BASE_URL: "BASE_URL",
  PUBLIC_URL: "PUBLIC_URL",
};

export const Methods = {
  users: "users",
  groups: "groups",
  getUserRole: "getUserRole",
  login: "login",
  adminLogin: "identity/login",
  categories: "categories",
  reservations: "reservations",
  logOut: "logOut",
  BookCreationRequests: "BookCreationRequests",
  confirmUser: "users/confirm",
  changeUserStatus: "users/changeStatus",
  getEndingSoonReservations: "reservations/getEndingSoonReservations",
};

export const Controllers = {
  profession: "Profession",
  register: "register",
  books: "books",
  admin: "admin",
};

export const HostUrls = {
  BASE_URL: "http://138.68.129.12/api",
  PUBLIC_URL: "http://138.68.129.12:8888/api",
};

export const USER_TYPES = {
  accountant: 0,
  librarian: 1,
  superAdmin: 2,
  student: 3,
};

export const USER_NAVIGATION = {
  0: "/accountant",
  1: "/admin",
  2: "/admin",
  3: "/user",
};

export const adminHeaderData = [
  { title: "Գրքերի Ցանկ", Comp: AdminBooksList, id: 0 },
  { title: "Օգտվողների Ցանկ", Comp: AdminUsersList, id: 1 },
  { title: "նոր հայտեր", Comp: AdminNewReservations, id: 2 },
];

export const superAdminHeaderData = [
  { title: "Գրքերի Ցանկ", Comp: AdminBooksList, id: 0 },
  { title: "Օգտվողների Ցանկ", Comp: AdminUsersList, id: 1 },
  { title: "նոր հայտեր", Comp: AdminNewReservations, id: 2 },
  { title: "Ադմիններ", Comp: SuperAdminAdmins, id: 3 },
];

export const ADMIN_CREATE_NEW_BOOK_LIST_INPUTS = [
  { title: "Անուն", id: "name" },
  { title: "հեղինակ", id: "author" },
  { title: "արտադրության տարեթիվ", id: "productionYear", type: "number" },
  { title: "նկարագրությունը", id: "description" },
  { title: "էջերի քանակ", id: "pagesCount", type: "number" },
  { title: "Գրքերի քանակ", id: "quantity", type: "number", disabled: true },
  {
    title: "Հասանելի պատվիրելու համար",
    id: "availableForBorrowingCount",
    type: "number",
  },
  {
    title: "Հասանելի Գրադարանում Կարդալու համար",
    id: "availableForUsingInLibraryCount",
    type: "number",
  },
];

export const ADMIN_RESERVATIONS_TABLE_ACTION_BUTTONS = [
  { title: "հաստատել", id: 2, accessWith: 0 },
  { title: "Չեղարկել", id: 1, accessWith: 0 },
  { title: "Վերադարձնել", id: 3, accessWith: 2 },
];

export const AdminReservationStatuses = {
  Reserved: 0,
  Canceled: 1,
  Borrowed: 2,
  Returned: 3,
};
