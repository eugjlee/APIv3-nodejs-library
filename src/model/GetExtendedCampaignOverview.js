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
    define(['ApiClient', 'model/GetCampaignOverview', 'model/GetExtendedCampaignOverviewSender'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetCampaignOverview'), require('./GetExtendedCampaignOverviewSender'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetExtendedCampaignOverview = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.GetCampaignOverview, root.SibApiV3Sdk.GetExtendedCampaignOverviewSender);
  }
}(this, function(ApiClient, GetCampaignOverview, GetExtendedCampaignOverviewSender) {
  'use strict';




  /**
   * The GetExtendedCampaignOverview model module.
   * @module model/GetExtendedCampaignOverview
   * @version 6.x.x
   */

  /**
   * Constructs a new <code>GetExtendedCampaignOverview</code>.
   * @alias module:model/GetExtendedCampaignOverview
   * @class
   * @implements module:model/GetCampaignOverview
   * @param id {Number} ID of the campaign
   * @param name {String} Name of the campaign
   * @param subject {String} Subject of the campaign
   * @param type {module:model/GetCampaignOverview.TypeEnum} Type of campaign
   * @param status {module:model/GetCampaignOverview.StatusEnum} Status of the campaign
   * @param testSent {Boolean} Retrieved the status of test email sending. (true=Test email has been sent  false=Test email has not been sent)
   * @param header {String} Header of the campaign
   * @param footer {String} Footer of the campaign
   * @param replyTo {String} Email defined as the \"Reply to\" of the campaign
   * @param toField {String} Customisation of the \"to\" field of the campaign
   * @param htmlContent {String} HTML content of the campaign
   * @param tag {String} Tag of the campaign
   * @param createdAt {Date} Creation UTC date-time of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @param modifiedAt {Date} UTC date-time of last modification of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   */
  var exports = function(id, name, subject, type, status, testSent, header, footer, replyTo, toField, htmlContent, tag, createdAt, modifiedAt) {
    var _this = this;

    GetCampaignOverview.call(_this, id, name, subject, type, status);
    _this['testSent'] = testSent;
    _this['header'] = header;
    _this['footer'] = footer;

    _this['replyTo'] = replyTo;
    _this['toField'] = toField;
    _this['htmlContent'] = htmlContent;

    _this['tag'] = tag;
    _this['createdAt'] = createdAt;
    _this['modifiedAt'] = modifiedAt;



  };

  /**
   * Constructs a <code>GetExtendedCampaignOverview</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetExtendedCampaignOverview} obj Optional instance to populate.
   * @return {module:model/GetExtendedCampaignOverview} The populated <code>GetExtendedCampaignOverview</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      GetCampaignOverview.constructFromObject(data, obj);
      if (data.hasOwnProperty('testSent')) {
        obj['testSent'] = ApiClient.convertToType(data['testSent'], 'Boolean');
      }
      if (data.hasOwnProperty('header')) {
        obj['header'] = ApiClient.convertToType(data['header'], 'String');
      }
      if (data.hasOwnProperty('footer')) {
        obj['footer'] = ApiClient.convertToType(data['footer'], 'String');
      }
      if (data.hasOwnProperty('sender')) {
        obj['sender'] = GetExtendedCampaignOverviewSender.constructFromObject(data['sender']);
      }
      if (data.hasOwnProperty('replyTo')) {
        obj['replyTo'] = ApiClient.convertToType(data['replyTo'], 'String');
      }
      if (data.hasOwnProperty('toField')) {
        obj['toField'] = ApiClient.convertToType(data['toField'], 'String');
      }
      if (data.hasOwnProperty('htmlContent')) {
        obj['htmlContent'] = ApiClient.convertToType(data['htmlContent'], 'String');
      }
      if (data.hasOwnProperty('shareLink')) {
        obj['shareLink'] = ApiClient.convertToType(data['shareLink'], 'String');
      }
      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('modifiedAt')) {
        obj['modifiedAt'] = ApiClient.convertToType(data['modifiedAt'], 'Date');
      }
      if (data.hasOwnProperty('inlineImageActivation')) {
        obj['inlineImageActivation'] = ApiClient.convertToType(data['inlineImageActivation'], 'Boolean');
      }
      if (data.hasOwnProperty('mirrorActive')) {
        obj['mirrorActive'] = ApiClient.convertToType(data['mirrorActive'], 'Boolean');
      }
      if (data.hasOwnProperty('recurring')) {
        obj['recurring'] = ApiClient.convertToType(data['recurring'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Retrieved the status of test email sending. (true=Test email has been sent  false=Test email has not been sent)
   * @member {Boolean} testSent
   */
  exports.prototype['testSent'] = undefined;
  /**
   * Header of the campaign
   * @member {String} header
   */
  exports.prototype['header'] = undefined;
  /**
   * Footer of the campaign
   * @member {String} footer
   */
  exports.prototype['footer'] = undefined;
  /**
   * @member {module:model/GetExtendedCampaignOverviewSender} sender
   */
  exports.prototype['sender'] = undefined;
  /**
   * Email defined as the \"Reply to\" of the campaign
   * @member {String} replyTo
   */
  exports.prototype['replyTo'] = undefined;
  /**
   * Customisation of the \"to\" field of the campaign
   * @member {String} toField
   */
  exports.prototype['toField'] = undefined;
  /**
   * HTML content of the campaign
   * @member {String} htmlContent
   */
  exports.prototype['htmlContent'] = undefined;
  /**
   * Link to share the campaign on social medias
   * @member {String} shareLink
   */
  exports.prototype['shareLink'] = undefined;
  /**
   * Tag of the campaign
   * @member {String} tag
   */
  exports.prototype['tag'] = undefined;
  /**
   * Creation UTC date-time of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * UTC date-time of last modification of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @member {Date} modifiedAt
   */
  exports.prototype['modifiedAt'] = undefined;
  /**
   * Status of inline image. inlineImageActivation = false means image can’t be embedded, & inlineImageActivation = true means image can be embedded, in the email.
   * @member {Boolean} inlineImageActivation
   */
  exports.prototype['inlineImageActivation'] = undefined;
  /**
   * Status of mirror links in campaign. mirrorActive = false means mirror links are deactivated, & mirrorActive = true means mirror links are activated, in the campaign
   * @member {Boolean} mirrorActive
   */
  exports.prototype['mirrorActive'] = undefined;
  /**
   * FOR TRIGGER ONLY ! Type of trigger campaign.recurring = false means contact can receive the same Trigger campaign only once, & recurring = true means contact can receive the same Trigger campaign several times
   * @member {Boolean} recurring
   */
  exports.prototype['recurring'] = undefined;

  // Implement GetCampaignOverview interface:
  /**
   * ID of the campaign
   * @member {Number} id
   */
exports.prototype['id'] = undefined;

  /**
   * Name of the campaign
   * @member {String} name
   */
exports.prototype['name'] = undefined;

  /**
   * Subject of the campaign
   * @member {String} subject
   */
exports.prototype['subject'] = undefined;

  /**
   * Type of campaign
   * @member {module:model/GetCampaignOverview.TypeEnum} type
   */
exports.prototype['type'] = undefined;

  /**
   * Status of the campaign
   * @member {module:model/GetCampaignOverview.StatusEnum} status
   */
exports.prototype['status'] = undefined;

  /**
   * UTC date-time on which campaign is scheduled (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @member {Date} scheduledAt
   */
exports.prototype['scheduledAt'] = undefined;



  return exports;
}));


