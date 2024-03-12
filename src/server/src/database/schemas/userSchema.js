const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// const mongoosePaginate = require('mongoose-paginate');
// itemSchema.plugin(mongoosePaginate);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false,
  },
  firstname: {
    type: String,
    required: false,
    default:""
  },
  lastname: {
    type: String,
    required: false,
    default:""
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'manager', 'team_leader', 'employee'], // Enumerated list of allowed roles
    default: 'employee' // Default role for new users
  },
  status: {
    type: String,
    required: true,
    enum: ['active','inactive'],
    default:'inactive'
  },
  adminPrivilege: {
    type: String,
    required: false,
    enum: ['true','false'],
    default: false
  }
});

// Hash the password before saving to the database
userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords during login
userSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model('User', userSchema);

module.exports = User;