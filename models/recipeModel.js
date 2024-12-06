const mongoose = require('mongoose');

// Define the schema for a recipe
const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    ingredients: [
        {
            name: {
                type: String,
                required: true,
                trim: true,
            },
            quantity: {
                type: String,
                required: true,
            },
        },
    ],
    instructions: {
        type: String,
        required: true,
    },
    prepTime: {
        type: Number, // Time in minutes
        required: true,
    },
    servings: {
        type: Number,
        default: 1,
    },
    category: {
        type: String,
        enum: ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack', 'Drink'], // Example categories
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create and export the model
module.exports = mongoose.model('Recipe', recipeSchema);
