'use strict';

const { countBy } = require('lodash');

/**
 *  film controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::film.film', ({strapi}) => ({
    /**
     * If the film (tbmd_id) already exist the database use an update
     * otherwise use a create
     * @param {*} ctx 
     * @returns meta-data
     */
    async create(ctx) {
        let tmdb_id = ctx.request.body.data.tmdb_id
        let film = await strapi.db.query('api::film.film').findOne({where: { tmdb_id: tmdb_id }});

        if(film){
            ctx.params = {"id": film.id}
            return super.update(ctx)
        }
        else{
            return super.create(ctx)
        }
    }
}));
