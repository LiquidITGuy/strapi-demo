'use strict';

/**
 * ratatouille router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::ratatouille.ratatouille');
