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
    define(['ApiClient', 'model/InlineResponse2008Recipients', 'model/InlineResponse2008Sender', 'model/InlineResponse2008Statistics'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2008Recipients'), require('./InlineResponse2008Sender'), require('./InlineResponse2008Statistics'));
  } else {
    // Browser globals (root is window)
    if (!root.SendinBlueApi) {
      root.SendinBlueApi = {};
    }
    root.SendinBlueApi.GetEmailCampaign = factory(root.SendinBlueApi.ApiClient, root.SendinBlueApi.InlineResponse2008Recipients, root.SendinBlueApi.InlineResponse2008Sender, root.SendinBlueApi.InlineResponse2008Statistics);
  }
}(this, function(ApiClient, InlineResponse2008Recipients, InlineResponse2008Sender, InlineResponse2008Statistics) {
  'use strict';




  /**
   * The GetEmailCampaign model module.
   * @module model/GetEmailCampaign
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>GetEmailCampaign</code>.
   * @alias module:model/GetEmailCampaign
   * @class
   * @param id {Number} ID of the campaign
   * @param name {String} Name of the campaign
   * @param subject {String} Subject of the campaign
   * @param type {module:model/GetEmailCampaign.TypeEnum} Type of campaign
   * @param status {module:model/GetEmailCampaign.StatusEnum} Status of the campaign
   * @param scheduledAt {String} Date on which campaign is scheduled
   * @param testSent {Boolean} Retrieved the status of test email sending. (true=Test email has been sent  false=Test email has not been sent)
   * @param header {String} Header of the campaign
   * @param footer {String} Footer of the campaign
   * @param replyTo {String} Email defined as the \"Reply to\" of the campaign
   * @param toField {String} Customisation of the \"to\" field of the campaign
   * @param htmlContent {String} HTML content of the campaign
   * @param shareLink {String} Link to share the campaign on social medias
   * @param tag {String} Tag of the campaign
   * @param createdAt {String} Creation date of the campaign
   * @param modifiedAt {String} Date of last modification of the campaign
   */
  var exports = function(id, name, subject, type, status, scheduledAt, testSent, header, footer, replyTo, toField, htmlContent, shareLink, tag, createdAt, modifiedAt) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
    _this['subject'] = subject;
    _this['type'] = type;
    _this['status'] = status;
    _this['scheduledAt'] = scheduledAt;
    _this['testSent'] = testSent;
    _this['header'] = header;
    _this['footer'] = footer;

    _this['replyTo'] = replyTo;
    _this['toField'] = toField;
    _this['htmlContent'] = htmlContent;
    _this['shareLink'] = shareLink;
    _this['tag'] = tag;
    _this['createdAt'] = createdAt;
    _this['modifiedAt'] = modifiedAt;





  };

  /**
   * Constructs a <code>GetEmailCampaign</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetEmailCampaign} obj Optional instance to populate.
   * @return {module:model/GetEmailCampaign} The populated <code>GetEmailCampaign</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('scheduledAt')) {
        obj['scheduledAt'] = ApiClient.convertToType(data['scheduledAt'], 'String');
      }
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
        obj['sender'] = InlineResponse2008Sender.constructFromObject(data['sender']);
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
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
      }
      if (data.hasOwnProperty('modifiedAt')) {
        obj['modifiedAt'] = ApiClient.convertToType(data['modifiedAt'], 'String');
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
      if (data.hasOwnProperty('recipients')) {
        obj['recipients'] = InlineResponse2008Recipients.constructFromObject(data['recipients']);
      }
      if (data.hasOwnProperty('statistics')) {
        obj['statistics'] = InlineResponse2008Statistics.constructFromObject(data['statistics']);
      }
    }
    return obj;
  }

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
   * @member {module:model/GetEmailCampaign.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Status of the campaign
   * @member {module:model/GetEmailCampaign.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Date on which campaign is scheduled
   * @member {String} scheduledAt
   */
  exports.prototype['scheduledAt'] = undefined;
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
   * @member {module:model/InlineResponse2008Sender} sender
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
   * Creation date of the campaign
   * @member {String} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * Date of last modification of the campaign
   * @member {String} modifiedAt
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
  /**
   * @member {module:model/InlineResponse2008Recipients} recipients
   */
  exports.prototype['recipients'] = undefined;
  /**
   * @member {module:model/InlineResponse2008Statistics} statistics
   */
  exports.prototype['statistics'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "classic"
     * @const
     */
    "classic": "classic",
    /**
     * value: "trigger"
     * @const
     */
    "trigger": "trigger"  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "draft"
     * @const
     */
    "draft": "draft",
    /**
     * value: "sent"
     * @const
     */
    "sent": "sent",
    /**
     * value: "archive"
     * @const
     */
    "archive": "archive",
    /**
     * value: "queued"
     * @const
     */
    "queued": "queued",
    /**
     * value: "suspended"
     * @const
     */
    "suspended": "suspended",
    /**
     * value: "in_process"
     * @const
     */
    "in_process": "in_process"  };


  return exports;
}));


