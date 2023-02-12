
const router = require('express').Router();
const uploadCtrl = require('../controllers/upload');
const {upload} = require('../helpers/filehelper');


router.post('/uploads', upload.single('image'), uploadCtrl.singleFileUpload);
router.get('/getSingleFiles', uploadCtrl.getallSingleFiles);


module.exports=router;