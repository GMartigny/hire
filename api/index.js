const allow = require("allow-cors");

module.exports = (request, response) => {
    allow(response);

    const payload = {
        available: false,
        email: "guillaume.martigny@gmail.com",
    };

    response.json(payload);
};
