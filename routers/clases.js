// products.js
const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission');



// Get all clases
router.get('/', permission('admin', 'client'), async (req, res) => {
    const clases = await sequelize.models.clases.findAndCountAll()
    return res.status(200).json({ data: clases });
});

// Create a new clase
router.post('/', permission('admin'), async (req, res) => {
    const { body } = req;
    const clase = await sequelize.models.clases.create({
        name: body.name,
        description: body.description,
        price: body.price,
        image: body.image,
    })
    await clase.save();
    return res.status(201).json({ data: clase })
});

// Update a clase by id
router.put('/:id', permission('admin'), async (req, res) => {
    const { body, params: { id } } = req;
    const clase = await sequelize.models.clase.findByPk(id);
    if (!clase) {
        return res.status(404).json({ code: 404, message: 'Clase not found' });
      }

      const updatedClase = await clase.update({
        name: body.name,
        description: body.description,
        price: body.price,
        image: body.image,
      });
    
      return res.json({ data: updatedClase });
});



// Delete a clase by id
router.delete('/:id', permission('admin'), async (req, res) => {
    const { params: { id } } = req;
    const clase = await sequelize.models.clases.findByPk(id);
    if (!clase) {
      return res.status(404).json({ code: 404, message: 'Clase not found' });
    }
    await clase.destroy();
    return res.json();
  
  });

module.exports = router;