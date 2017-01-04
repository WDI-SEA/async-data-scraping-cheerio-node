'use strict';
module.exports = function(sequelize, DataTypes) {
  var scrapeurl = sequelize.define('scrapeurl', {
    url: DataTypes.TEXT,
    html: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return scrapeurl;
};