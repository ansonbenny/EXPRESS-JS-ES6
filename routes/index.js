import *as express from 'express'
import demoH from '../helpers/demo.js'
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  demoH.fun()
  demoH.fff()
  res.render('index', { title: 'Express' });
});

export default router;
