module.exports = (req, res) => {
    const body = {
        available: true,
        email: "guillaume.martigny@gmail.com"
    };

    res
        .status(200)
        .send(JSON.stringify(body));
};
