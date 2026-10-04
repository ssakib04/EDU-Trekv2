export const EDU_TREK_CONFIG = {
  siteName: 'EDU Trek Travel',
  tagline: 'Your Vision, Our Direction',
  adminEmail: 'info@edutrek.com',
  registrationFee: 500,
  bkash: {
    enabled: false,
    mode: 'sandbox',
    appKey: '',
    appSecret: '',
    username: '',
    password: '',
    merchantId: '',
    paymentApiUrl: '/api/bkash/create-payment',
    callbackUrl: '/register?payment=success',
  },
  web3forms: {
    enabled: true,
    accessKey: 'ebb45462-70fc-4df0-bef9-0ba8c66c96cf',
  },
  formspree: {
    enabled: false,
    formId: 'YOUR_FORMSPREE_FORM_ID',
  },
  demoPayment: true,
};
