'use strict';

/**
 * ratatouille service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ratatouille.ratatouille');
