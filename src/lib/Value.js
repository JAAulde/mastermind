import _ from 'lodash';

export default class Value {
    constructor(id, properties) {
        if (!_.isNumber(id) && !_.isString(id)) {
            throw 'Value constructor requires a string or number for the first param, `id`.';
        }

        if (_.isUndefined(properties)) {
            properties = {};
        } else if (!_.isPlainObject(properties)) {
            throw 'Any properties to be assigned to a Value must be provided in a plain object.';
        }

        this.id = id;
        _.assign(this, properties);
    }
}