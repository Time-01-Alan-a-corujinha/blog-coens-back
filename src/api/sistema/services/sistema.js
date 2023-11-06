'use strict';

/**
 * sistema service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sistema.sistema');
