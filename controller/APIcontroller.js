    const { User } = require('../models');

    module.exports.get_users = async (req, res) => {

        try {
            const user = await User.findAll();
            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

    module.exports.post_users = async (req, res) => {
        const { username, email, role } = req.body;

        try {
            const user = await User.create({ username, email, role });
            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    } 

    module.exports.get_users_id = async (req ,res) => {
        const id = req.params.id;

        try {
            const user = await User.findOne({ where: { id }});
            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

    module.exports.update_users_id = async (req, res) => {
        const id = req.params.id;
        const { username, email, role } = req.body;

        try {
            const user = await User.findOne({ where: { id }});

            user.username = username;
            user.email = email;
            user.role = role;
            await user.save();

            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

    module.exports.delete_users_id = async (req, res) => {
        const id = req.params.id;

        try {
            const user = await User.findOne({ where: { id }});
            await user.destroy();
            res.json({ message: 'user telah dihapus.'});
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

