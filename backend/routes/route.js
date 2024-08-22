import express from "express";
import {handelGetData, handelCreateData, handelDeleteData, getSingleData, handelUpdateData} from '../controllers/urls.js'
const router = express.Router();

// crate api
router.post('/', handelCreateData)

// get all data api
router.get('/', handelGetData)

// get single data api
router.get('/:id', getSingleData)

// delete api
router.delete('/:id', handelDeleteData)

// update api
router.patch('/:id',handelUpdateData)

export default router;