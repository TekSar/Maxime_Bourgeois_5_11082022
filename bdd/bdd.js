//IMPORTATION DES variable d'environnement
require('dotenv').config();

//connetion à la base de données mongoDB avec les variables d'environnement'
const mongoose = require('mongoose');

mongoose.connect('mongodb://admin2:administrateur@ac-lpijiv3-shard-00-00.ngjkjw5.mongodb.net:27017,ac-lpijiv3-shard-00-01.ngjkjw5.mongodb.net:27017,ac-lpijiv3-shard-00-02.ngjkjw5.mongodb.net:27017/?ssl=true&replicaSet=atlas-14dp2p-shard-0&authSource=admin&retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

module.exports = mongoose;
