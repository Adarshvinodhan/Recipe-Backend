const express = require('express');
const {addRecipe,getRecipe,getAllRecipe,editRecipe,deleteRecipe}=require('../controllers/recipeController')
const router = express.Router();

// GET all recipes
router.get('/recipes',getAllRecipe);

// GET a single recipe by ID
router.get('/recipes/:id', getRecipe);

// POST a new recipe
router.post('/recipes',addRecipe);

// PUT (update) an existing recipe by ID
router.put('/recipes/:id',editRecipe);

// DELETE a recipe by ID
router.delete('/recipes/:id',deleteRecipe);

module.exports = router;
