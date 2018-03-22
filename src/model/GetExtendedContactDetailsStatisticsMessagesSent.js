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
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetExtendedContactDetailsStatisticsMessagesSent = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetExtendedContactDetailsStatisticsMessagesSent model module.
   * @module model/GetExtendedContactDetailsStatisticsMessagesSent
   * @version 6.x.x
   */

  /**
   * Constructs a new <code>GetExtendedContactDetailsStatisticsMessagesSent</code>.
   * @alias module:model/GetExtendedContactDetailsStatisticsMessagesSent
   * @class
   * @param campaignId {Number} ID of the campaign which generated the event
   * @param eventTime {Date} UTC date-time of the event
   */
  var exports = function(campaignId, eventTime) {
    var _this = this;

    _this['campaignId'] = campaignId;
    _this['eventTime'] = eventTime;
  };

  /**
   * Constructs a <code>GetExtendedContactDetailsStatisticsMessagesSent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetExtendedContactDetailsStatisticsMessagesSent} obj Optional instance to populate.
   * @return {module:model/GetExtendedContactDetailsStatisticsMessagesSent} The populated <code>GetExtendedContactDetailsStatisticsMessagesSent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('campaignId')) {
        obj['campaignId'] = ApiClient.convertToType(data['campaignId'], 'Number');
      }
      if (data.hasOwnProperty('eventTime')) {
        obj['eventTime'] = ApiClient.convertToType(data['eventTime'], 'Date');
      }
    }
    return obj;
  }

  /**
   * ID of the campaign which generated the event
   * @member {Number} campaignId
   */
  exports.prototype['campaignId'] = undefined;
  /**
   * UTC date-time of the event
   * @member {Date} eventTime
   */
  exports.prototype['eventTime'] = undefined;



  return exports;
}));


