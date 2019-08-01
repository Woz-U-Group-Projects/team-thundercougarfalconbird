module.exports = function(models) {
    models.users.belongsToMany(models.products, 
        { 
            through: models.user_products,
            foreignKey: 'userId'
        });
    models.products.belongsToMany(models.users,
        {
            through: models.user_products,
            foreignKey: 'productId'
        });
}