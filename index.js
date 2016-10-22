var yaml = require('js-yaml');
var fs = require('fs');

module.exports =  {
  asia: function (weight) {
    return this._base(weight, 'asia');
  },
  oceania: function (weight) {
    return this._base(weight, 'oceania');
  },
  europa: function (weight) {
    return this._base(weight, 'europa');
  },
  africa: function (weight) {
    return this._base(weight, 'africa');
  },
  _base: function (weight, area_name) {
    this._validate_weight_limit(weight)
    return this._calculate(weight, area_name);
  },
  _validate_weight_limit: function (weight) {
    if (weight <= 0) {
      throw new Error("Weight Limit under");
    } else if (weight > 30000) {
      throw new Error("Weight Limit over");
    }
  },
  _calculate: function (weight, area_name) {
    var price_table = yaml.safeLoad(fs.readFileSync('./ems_base_file.yaml', 'utf8'));
    for (var weight_key in price_table[area_name] ){
      if (weight_key >= weight) {
        return price_table[area_name][weight_key];
      }
    }
  }
}
