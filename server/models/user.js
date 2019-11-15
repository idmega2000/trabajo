import cryptData from "../utilities/cryptData";

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 25],
        is: {
          args: /^[a-z']+$/i,
          msg: "First name field must contain only alphabets"
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 25],
        is: {
          args: /^[a-z']+$/i,
          msg: "Last name field must contain only alphabets"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: 'Field must be a valid email ID'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    blocked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    imageUrl: {
      type: DataTypes.TEXT,
    },
    bio: {
      type: DataTypes.TEXT,
    },
    gender: {
      type: DataTypes.ENUM('male', 'female', 'unspecified')
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [11, 15],
          msg: 'Phone number should have a length of range 11 - 15 digits'
        },
        isNumeric: {
          args: true,
          msg: 'Phone number should only be digits'
        },
      }
    },
    location: {
      type: DataTypes.STRING,
    },
    nationality: {
      type: DataTypes.STRING,
    },
    twitterUrl: {
      type: DataTypes.STRING,
      validate: {
        contains: {
          args: 'twitter',
          msg: 'Enter a valid twitter url'
        },
        isUrl: {
          args: true,
          msg: 'Enter a valid url'
        }
      },
    },
    facebookUrl: {
      type: DataTypes.STRING,
      validate: {
        contains: {
          args: 'facebook',
          msg: 'Enter a valid facebook url'
        },
        isUrl: {
          args: true,
          msg: 'Enter a valid url'
        }
      },
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      isDate: {
        args: true,
        msg: 'Enter valid date'
      },
    }
  }, {
    hooks: {
      beforeUpdate: async (user) => {
        user.password = await cryptData.encryptData(user.password);
        user.email = await user.email.toLowerCase();
      },
      beforeCreate: async (user) => {
        user.password = await cryptData.encryptData(user.password);
        user.email = await user.email.toLowerCase()
      }
    },

  });
  return User;
};
