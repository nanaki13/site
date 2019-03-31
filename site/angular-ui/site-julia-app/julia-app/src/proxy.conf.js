const PROXY_CONFIG = [
    {
        context: [
            "/rsc",
            "/api"
        ],
        target: "http://localhost:4567",
        secure: false
    }
]
 
module.exports = PROXY_CONFIG;