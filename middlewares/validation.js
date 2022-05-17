const validationEmail = (req, res, next) => {
  const { email } = req.body;
  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(validEmail)) {
    return true;
  } 
    return false;
};