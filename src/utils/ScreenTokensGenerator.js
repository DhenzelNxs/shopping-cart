const GerarToken = () => {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < 9; i++) {
    token += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return token;
};

const Tokens = {
  Order: GerarToken(),
  Payment: GerarToken(),
  QrCode: GerarToken(),
  CreditCard: GerarToken(),
};

export default Tokens;
