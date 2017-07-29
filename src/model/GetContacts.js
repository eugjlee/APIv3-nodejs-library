/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse20014Contacts'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse20014Contacts'));
  } else {
    // Browser globals (root is window)
    if (!root.SendinBlueApi) {
      root.SendinBlueApi = {};
    }
    root.SendinBlueApi.GetContacts = factory(root.SendinBlueApi.ApiClient, root.SendinBlueApi.InlineResponse20014Contacts);
  }
}(this, function(ApiClient, InlineResponse20014Contacts) {
  'use strict';




  /**
   * The GetContacts model module.
   * @module model/GetContacts
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>GetContacts</code>.
   * @alias module:model/GetContacts
   * @class
   * @param contacts {Array.<module:model/InlineResponse20014Contacts>} 
   * @param count {Number} Number of contacts
   */
  var exports = function(contacts, count) {
    var _this = this;

    _this['contacts'] = contacts;
    _this['count'] = count;
  };

  /**
   * Constructs a <code>GetContacts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetContacts} obj Optional instance to populate.
   * @return {module:model/GetContacts} The populated <code>GetContacts</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('contacts')) {
        obj['contacts'] = ApiClient.convertToType(data['contacts'], [InlineResponse20014Contacts]);
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/InlineResponse20014Contacts>} contacts
   */
  exports.prototype['contacts'] = undefined;
  /**
   * Number of contacts
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;



  return exports;
}));


