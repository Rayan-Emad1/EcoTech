const Forest = require("../models/forests.model");



const createForest = async (req, res) => {
    try {
      const { location, name, description } = req.body;
      
      const new_forest = new Forest({
        location,
        name,
        description,
        temperature: {},
        wind: {},
        humidity: {},
      });
  
      await new_forest.save();

      res.status(201).json(new_forest);
    } 
    catch (error) {
      console.error('Error creating forest:', error);
      res.status(500).json({ message: 'Error creating forest' });
    }
};


module.exports = { createForest, updateForestData };
