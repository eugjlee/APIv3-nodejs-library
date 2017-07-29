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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SendinBlueApi) {
      root.SendinBlueApi = {};
    }
    root.SendinBlueApi.SendTransacSms = factory(root.SendinBlueApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SendTransacSms model module.
   * @module model/SendTransacSms
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SendTransacSms</code>.
   * @alias module:model/SendTransacSms
   * @class
   * @param sender {String} Name of the sender. Only alphanumeric characters. No more than 11 characters
   * @param recipient {String} Mobile number to send SMS with the country code
   * @param content {String} Content of the message. If more than 160 characters long, multiple text messages will be sent
   */
  var exports = function(sender, recipient, content) {
    var _this = this;

    _this['sender'] = sender;
    _this['recipient'] = recipient;
    _this['content'] = content;


  };

  /**
   * Constructs a <code>SendTransacSms</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendTransacSms} obj Optional instance to populate.
   * @return {module:model/SendTransacSms} The populated <code>SendTransacSms</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sender')) {
        obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
      }
      if (data.hasOwnProperty('recipient')) {
        obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
      }
      if (data.hasOwnProperty('webUrl')) {
        obj['webUrl'] = ApiClient.convertToType(data['webUrl'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name of the sender. Only alphanumeric characters. No more than 11 characters
   * @member {String} sender
   */
  exports.prototype['sender'] = undefined;
  /**
   * Mobile number to send SMS with the country code
   * @member {String} recipient
   */
  exports.prototype['recipient'] = undefined;
  /**
   * Content of the message. If more than 160 characters long, multiple text messages will be sent
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * Tag of the message
   * @member {String} tag
   */
  exports.prototype['tag'] = undefined;
  /**
   * Webhook to call for each event triggered by the message (delivered etc.)
   * @member {String} webUrl
   */
  exports.prototype['webUrl'] = undefined;



  return exports;
}));


