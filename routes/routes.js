    const { Router } = require('express');
    const APIcontroller = require('../controller/APIcontroller');

    const router = Router();

    router.get('/', APIcontroller.get_users);
    router.post('/users', APIcontroller.post_users);
    router.get('/users/:id', APIcontroller.get_users_id);
    router.put('/users/:id/update', APIcontroller.update_users_id);
    router.delete('/users/:id/delete', APIcontroller.delete_users_id);


    module.exports = router;

