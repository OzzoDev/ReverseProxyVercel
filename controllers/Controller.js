const getData = (_, res) => {
  res.status(200).json({ data: "This is some data", success: true });
};

module.exports = {
  getData,
};
