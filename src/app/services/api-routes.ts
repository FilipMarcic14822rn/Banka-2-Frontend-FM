export const ApiRoutes = {
  auth: {
    login: '/auth/login',
    activateEmployee: '/auth/activate-employee',
    allPermissions: '/permissions/all',
    allRoles: '/roles/all',
  },
  users: {
    users: '/users',
    findById: '/users/findById',
    findByEmail: '/users/findByEmail',
    findAll: '/users/findAll',
    delete: '/users/delete',
    privateClient: '/users/public/private-client',
    corporateClient: '/users/public/corporate-client',
    passwordActivation: '/users/public',
    updatePrivateClient: '/users/updatePrivateClient',
    updateEmployee: '/users/updateEmployee',
    createEmployee: '/users',
    updateCorporateClient: '/users/updateCorporateClient',
    deactivateEmployee: '/users/deactivateEmployee',
    changePasswordSubmit: '/users/password-change-confirmation',
    activateEmployee: '/users/activateEmployee',
    changePasswordRequest: '/users/password-change-initialization',
  },
  accounts: {
    associateProfileInit: '/accounts/associate-profile-initialization',
    codeConfirmation: '/accounts/code-confirmation',
    createAccountForeign: '/accounts/create-account/foreign',
    createAccountDomestic: '/accounts/create-account/domestic',
    createAccountBusiness: '/accounts/create-account/business',
  },
  stocks: {
    findAllStocks: '/stock/all',
    findStockById: '/stock',
    findStockBySymbol: '/stock/stockSymbol',
  },
};
