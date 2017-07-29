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
    define(['ApiClient', 'model/InlineResponse2008RecipientsExclusionLists', 'model/InlineResponse2008RecipientsLists'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2008RecipientsExclusionLists'), require('./InlineResponse2008RecipientsLists'));
  } else {
    // Browser globals (root is window)
    if (!root.SendinBlueApi) {
      root.SendinBlueApi = {};
    }
    root.SendinBlueApi.InlineResponse2008Recipients = factory(root.SendinBlueApi.ApiClient, root.SendinBlueApi.InlineResponse2008RecipientsExclusionLists, root.SendinBlueApi.InlineResponse2008RecipientsLists);
  }
}(this, function(ApiClient, InlineResponse2008RecipientsExclusionLists, InlineResponse2008RecipientsLists) {
  'use strict';




  /**
   * The InlineResponse2008Recipients model module.
   * @module model/InlineResponse2008Recipients
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>InlineResponse2008Recipients</code>.
   * @alias module:model/InlineResponse2008Recipients
   * @class
   * @param lists {Array.<module:model/InlineResponse2008RecipientsLists>} Lists included in the campaign
   * @param exclusionLists {Array.<module:model/InlineResponse2008RecipientsExclusionLists>} Lists excluded of the campaign
   */
  var exports = function(lists, exclusionLists) {
    var _this = this;

    _this['lists'] = lists;
    _this['exclusionLists'] = exclusionLists;
  };

  /**
   * Constructs a <code>InlineResponse2008Recipients</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2008Recipients} obj Optional instance to populate.
   * @return {module:model/InlineResponse2008Recipients} The populated <code>InlineResponse2008Recipients</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('lists')) {
        obj['lists'] = ApiClient.convertToType(data['lists'], [InlineResponse2008RecipientsLists]);
      }
      if (data.hasOwnProperty('exclusionLists')) {
        obj['exclusionLists'] = ApiClient.convertToType(data['exclusionLists'], [InlineResponse2008RecipientsExclusionLists]);
      }
    }
    return obj;
  }

  /**
   * Lists included in the campaign
   * @member {Array.<module:model/InlineResponse2008RecipientsLists>} lists
   */
  exports.prototype['lists'] = undefined;
  /**
   * Lists excluded of the campaign
   * @member {Array.<module:model/InlineResponse2008RecipientsExclusionLists>} exclusionLists
   */
  exports.prototype['exclusionLists'] = undefined;



  return exports;
}));


