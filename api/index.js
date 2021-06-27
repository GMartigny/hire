const allow = require("allow-cors");

module.exports = (request, response) => {
    allow(response);

    response.json({
        available: false,
        email: "guillaume.martigny@gmail.com",
    });
};
