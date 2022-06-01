const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token
    if (authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT, (err, user) =>{
            if (err) return res.status(401).json("Token is not valid");
            req.user = user;
            next();
        })

    } else return res.status(401).json("You are not authenticated!")
}

const authorize = (req, res, next) =>{
    verifyToken(req, res, () => {
        if (req.user.id === req.params.userId || req.user.isAdmin){
            next();
        } else return res.status(403).json("Access denied");
    })
}

const verifyAdmin = (req, res, next) =>{
    verifyToken(req, res, () => {
        if (req.user.isAdmin){
            next();
        } else return res.status(403).json("Access denied");
    })
}


module.exports ={ verifyToken, authorize, verifyAdmin };