// router.use(function (req, res, next) {
//     if(req.session.role !== 'admin'){
//         req.session.userId === Product.UserId
//         next()
//     }next()
//     })

const loginGuard = (req, res, next) => {
  if (!req.session.userId) {
    const error = `Please login first`;
    res.redirect(`/login?error=${error}`);
  } else {
    next();
  }
};

const navEndpoint = (req, res, next) => {
  if (req.session.role) {
    if (req.session.role === "user") {
      res.redirect("/users");
    } else if (req.session.role === "admin") {
      res.redirect("/admin");
    } else {
      next();
    }
  } else {
    next()
  }
};

module.exports = { loginGuard, navEndpoint };
