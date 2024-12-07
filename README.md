# Recipe API Documentation

Welcome to the Recipe API! This API allows users to manage recipes with CRUD (Create, Read, Update, Delete) functionality. Below is the guide to test or use this API.

## Base URL

The API is deployed at:
```
https://recipe-backend-aro7.onrender.com
```

## Endpoints

### 1. Get All Recipes
Retrieve a list of all available recipes.

**Endpoint:**
```
GET /recipes
```
**Example:**
```
curl -X GET https://recipe-backend-aro7.onrender.com/recipes
```

### 2. Get a Single Recipe by ID
Retrieve details of a specific recipe using its ID.

**Endpoint:**
```
GET /recipes/:id
```
**Example:**
```
curl -X GET https://recipe-backend-aro7.onrender.com/recipes/<recipe_id>
```
Replace `<recipe_id>` with the desired recipe ID.

### 3. Add a New Recipe
Create a new recipe by sending the necessary data.

**Endpoint:**
```
POST /recipes
```
**Headers:**
```
Content-Type: application/json
```
**Body:**
```json
{
  "title": "Recipe Title",
  "ingredients": ["Ingredient 1", "Ingredient 2"],
  "instructions": "Step-by-step instructions"
}
```
**Example:**
```
curl -X POST https://recipe-backend-aro7.onrender.com/recipes \
-H "Content-Type: application/json" \
-d '{
  "title": "Spaghetti Bolognese",
  "ingredients": ["Spaghetti", "Tomato Sauce", "Ground Beef"],
  "instructions": "Cook spaghetti. Prepare the sauce. Mix and serve."
}'
```

### 4. Update an Existing Recipe by ID
Modify the details of an existing recipe using its ID.

**Endpoint:**
```
PUT /recipes/:id
```
**Headers:**
```
Content-Type: application/json
```
**Body:**
```json
{
  "title": "Updated Recipe Title",
  "ingredients": ["Updated Ingredient 1"],
  "instructions": "Updated instructions"
}
```
**Example:**
```
curl -X PUT https://recipe-backend-aro7.onrender.com/recipes/<recipe_id> \
-H "Content-Type: application/json" \
-d '{
  "title": "Updated Spaghetti",
  "ingredients": ["Spaghetti", "New Tomato Sauce"],
  "instructions": "Boil spaghetti. Prepare the new sauce. Mix and serve."
}'
```
Replace `<recipe_id>` with the recipe's ID.

### 5. Delete a Recipe by ID
Remove a specific recipe using its ID.

**Endpoint:**
```
DELETE /recipes/:id
```
**Example:**
```
curl -X DELETE https://recipe-backend-aro7.onrender.com/recipes/<recipe_id>
```
Replace `<recipe_id>` with the recipe's ID.

## Notes
- Ensure the API is live before making requests.
- Use tools like [Postman](https://www.postman.com/) or `curl` for testing.
- For POST and PUT requests, always include `Content-Type: application/json` in the headers.

## Contact
If you have any questions or encounter issues, feel free to reach out!

