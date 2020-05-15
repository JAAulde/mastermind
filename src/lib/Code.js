import _ from 'lodash';
import Value from './Value';

export default class Code {
    constructor(values) {
        this.setValues(values);
    }

    setValues(values) {
        if (_.isUndefined(values)) {
            values = [];
        } else if (!_.isArray(values)) {
            throw 'Values provided to a Code must be in an Array.';
        }

        this.values = [];

        _.each(values, this.addValue.bind(this));

        return this;
    }

    addValue(value) {
        if (!(value instanceof Value)) {
            throw 'A value provided to a Code must be an instance of Value';
        }

        this.values.push(value);

        return this;
    }
}

