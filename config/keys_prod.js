// module.exports = {
//   mongoURI: 'mongodb://krame490:go_student123@ds029267.mlab.com:29267/fridgefest',
//   secretOrKey: 'fridgefestsignature',
// };

module.exports = {
  mongoURI: ProcessingInstruction.env.MONGO_URI,
  secretOrKey: ProcessingInstruction.env.SECRET_OR_KEY,
};
