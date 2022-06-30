const GeoController = require('../Controllers/GeoController');
module.exports = (app) => {
//    app.post('/usuario', GeoController.post);
//    app.put('/usuario/:id', GeoController.put);
//    app.delete('/usuario/:id', GeoController.delete);
   app.get('/all', GeoController.get);
   app.get('/find/:id', GeoController.getById);
}