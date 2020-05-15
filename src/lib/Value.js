import _ from 'lodash';

export default class Value {
    constructor(id, properties) {
        this.id = id;

        if (_.isUndefined(properties)) {
            properties = {};
        } else if (!_.isPlainObject(properties)) {
            throw 'Any properties to be assigned to a Value must be provided in a plain object.';
        }

        _.assign(this, properties);
    }
}