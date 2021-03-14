    const express = require('express');
    const APIroutes = require('./routes/routes');
    const { sequelize } = require('./models');

    const app = express();

    //middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    //activating server
    app.listen({ port: 8000 }, async () => {
        console.log('Server telah tersambung di port 8000.');
        await sequelize.authenticate();
        console.log('Database telah tersambung ke server.');
    });

    //routes
    app.use(APIroutes);

