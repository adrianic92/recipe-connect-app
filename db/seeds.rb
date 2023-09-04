# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding Data..."

# User.create([
#   { username: 'potter', password: 'patronum', password_confirmation: 'patronum', name: 'Harry Potter', date_of_birth: "1980-07-31", bio: "Food is magical!" },
#   { username: 'weasley', password: 'leviosa', password_confirmation: 'leviosa', name: 'Ron Weasley', date_of_birth: "1980-03-01", bio: "Bloody hewel! I love to cook!" },
#   { username: 'granger', password: 'alohomora', password_confirmation: 'alohomora', name: 'Hermione Granger', date_of_birth: "1979-09-19", bio: "It's a mimosa, not mamacusa!" }
# ])

# # Seed data for Restaurants
# Recipe.create([
#   { name: 'Sadwitch', ingredients: '2 Slices of Bread (any kind), 1 Slice of meat (any kind), 1 Slice of Cheese (any kind)', directions: 'Place all ingredients in between two slice of bread. Enjoy!', user_id: 1},
#   { name: 'Cerealus Black ', ingredients: '1 cup of milk (any kind), 1 cup of cereal (any kind)', directions: "Pour cereal into medium sized bowl and then pour milk in the bowl. Enjoy!", user_id: 2 },
#   { name: "Sorceror's Quesadilla", ingredients: "1 tortilla (any kind), 1 slice of cheese (any kind)", directions: "Heat flat surface pan to medium heat. Heat tortilla until soft. Place cheese inside and fold tortilla in half with cheese inside the fold. Cook until cheese is melted. Enjoy!", user_id: 3 }
# ])

# # Seed data for Reviews
# Tag.create([
#   { name: "Delicious" },
#   { name: "Sweet" },
#   { name: "Cheesy" }
# ])

# RecipeTag.create([
#     { recipe_id: 1, tag_id: 1},
#     { recipe_id: 2, tag_id: 1},
#     { recipe_id: 2, tag_id: 2},
#     { recipe_id: 3, tag_id: 3}
# ])

# Comment.create([
#     { recipe_id: 1, user_id: 2, description: "Bloody brilliant recipe!"},
#     { recipe_id: 2, user_id: 3, description: "Such an easy recipe!"},
#     { recipe_id: 3, user_id: 1, description: "This was so good and easy to make!"}
# ])

tags = ["Appetizer", "Salad", "Soup","Pasta", "Pizza", "Burger", "Sandwich", "Sushi", "Seafood", "BBQ", "Vegetarian", "Vegan", "Dessert", "Breakfast", "Brunch", "Italian", "Mexican", "Chinese", "Indian", "Japanese", "Thai", "Mediterranean", "Greek", "French", "Spanish", "Korean","American", "Fusion", "Healthy", "Comfort Food", "Spicy", "Grilled", "Roasted", "Fried", "Baked", "Savory", "Gourmet", "Street Food", "Fast Food", "Homemade", "Low Carb", "Gluten-Free", "Dairy-Free", "Nut-Free", "Quick", "Easy", "Family-Friendly", "Exotic", "Bitter", "Sour", "Tasty"]

# Create tags
tags.each do |tag|
  Tag.create(name: tag)
end

puts "seeding complete!" 