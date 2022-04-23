const { recipe } = require('../index/')

const mainController = {

    homePage: async(req,res) => {
        console.log('je veux ajouter une recette');

        try {
            const recipes = await recipe.insertOne();
        } catch (error) {
            
        }

    }

};

module.exports = mainController;


//try {
//     db.products.insertOne( { item: "card", qty: 15 } );
// } catch (e) {
//    print (e);
// };

//ça vient de la doc de mongo je l'ai mis en commentaire ici juste pour que ça m'aide comme exemple