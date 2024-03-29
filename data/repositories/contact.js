const Repository = require('./repository');
const model = require('../models/contact');

module.exports = class ContactRepository extends Repository {
    constructor() {
        super(model);
    }

    getUserContacts(id) {
        return this.model.query(function (qb) {
            qb.where('user_id', id)
        }).fetchAll();
    }

    updateUserContacts(id){
        return this.model.query(function(qb){
            qb.where("user_id", id)
        }).update({user});
    }

    deleteUserContacts(id){
        return this.model.query(function(qb){
            qb.where("user_id", id)
        }).del();
    }

}