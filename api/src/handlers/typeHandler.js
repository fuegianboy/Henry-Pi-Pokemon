const {getTypesController} = require ("../controllers/typeControllers")

const getTypesHandler = async (req, res) => {
    try {
        const response = await getTypesController()
        return res.status(200).send(response)
    } catch (error) {
        res.status(400).send({ error: error.message });
    }    
}

module.exports = {getTypesHandler};
