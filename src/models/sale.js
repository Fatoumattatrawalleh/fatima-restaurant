const mongoose = require('mongoose')

const saleSchema = new mongoose.Schema(
    {
     description: {
        type: String,
         required:true
        },
    
    qty: {
     type: String,
     required:true
    },

    price: {
    type: String,
    required:true
     },

    total: {
     type: String,
     required:false
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
             
    },
 {timestamps: true}
)

saleSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject._v
        

    }
})
        

const Sale = mongoose.model('sale', saleSchema);

module.exports = Sale;