'use strict';

/**
 * post-approval service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::post-approval.post-approval');
