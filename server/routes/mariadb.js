import express from 'express';
import connect from '../helpers/mariadb';
const router = express.Router();
const API_END_POINT = 'https://ghibliapi.herokuapp.com';
const API_GET_FILMS = 'https://ghibliapi.herokuapp.com/films';

router.post(`${API_GET_FILMS}`, function(req,res) {
  console.log('res : ', res);
});

export default router;
