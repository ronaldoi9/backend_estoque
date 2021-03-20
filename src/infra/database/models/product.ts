import { Model, INTEGER, STRING, DOUBLE } from 'sequelize'
import { sequelize } from '@/infra/database/sequelize'
  
class ProductModel extends Model { }
  
ProductModel.init({
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: STRING,
      allowNull: false
    },
    quantity: {
      type: DOUBLE,
      allowNull: false
    },
    price: {
      type: DOUBLE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'products',
    name: {
      singular: 'product',
    }
})
  
export const Product = ProductModel
export default ProductModel  