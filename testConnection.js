const mongoose = require('mongoose');

const uri = 'mongodb+srv://oscarjosemanuel89:Federer.89n@cluster0.0ta6n.mongodb.net/tuBaseDeDatos?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ Conexión exitosa a MongoDB'))
    .catch(err => console.error('❌ Error en la conexión:', err));
