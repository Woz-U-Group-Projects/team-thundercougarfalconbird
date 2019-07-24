module.exports = function(models) {
    models.users.belongsToMany(models.products, 
        { 
            through: models.wishlist,
            foreignKey: 'userId'
        });
    models.products.belongsToMany(models.users,
        {
            through: models.wishlist,
            foreignKey: 'productId'
        });
}