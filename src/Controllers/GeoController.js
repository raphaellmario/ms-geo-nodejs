exports.post = (req, res, next) => {
   res.status(201).send('Rota POST!');
};

exports.put = (req, res, next) => {
   let id = req.params.id;
   res.status(201).send(`Rota PUT com ID! --> ${id}`);
};

exports.delete = (req, res, next) => {
   let id = req.params.id;
   res.status(200).send(`Rota DELETE com ID! --> ${id}`);
};

exports.get = (req, res, next) => {
   const https = require('https');

   const options = {
      hostname: 'api.homol.buscaatm.24horasdigital.com.br',
      port:443,
      path: '/v3/localizacao?latitude=-20.344603&longitude=-40.287665&acessivel=0&lista=1&limite=10',
      method: 'GET',
      headers: {
         'x-api-key': 'XaVmpwFgQU7sG9KZFbm50agQzgI5zw4satFE1FVJ',
      },
   };

   const tt = https.request(options, res => {
      console.log(`statusCode: ${res.statusCode}`);

      res.on('data', d => {
         process.stdout.write(d);
      });
   });

   tt.on('error', error => {
      console.error(error);
   });

   res.status(200).send('Rota GET!');
};

exports.getById = (req, res, next) => {
   let id = req.params.id;
   res.status(200).send(`Rota GET com ID! ${id}`);
};