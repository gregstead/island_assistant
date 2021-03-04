const router = require('express').Router();
const passport = require('../../config/passport');

router.get('/home', passport.authenticate('local'), (req, res) => {
  console.log('req.user :>> ', req.user);
  req.user ? res.redirect('/home') : res.redirect('/', 301);
});

module.exports = router;
