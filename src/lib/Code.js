export default class Code {
    constructor() {
        this.values = [];
        this.attempts = [];
    }

    setValues(c) {
        this.values = c;

        return this;
    }

    addValue(v) {
        this.values.push(v);

        return this;
    }

    crack(guess) {
        var instance = this,
            values_counts = _.countBy(this.values, 'id'),
            guess_counts = _.countBy(guess, 'id'),
            common_values = _.intersection(_.keys(values_counts), _.keys(guess_counts)),
            matches = _.filter(guess, function(value, index){
                return value.id === instance.values[index].id;
            }).length,
            contains = _.reduce(common_values, function (sum, id){
                var addend = values_counts[id] <= guess_counts[id]
                    ? values_counts[id]
                    : guess_counts[id];

                return sum + addend;
            }, 0),
            results = {
                matches: matches,
                contains: contains - matches,
                solved: (matches === this.values.length)
            };

        this.attempts.push({
            values: guess,
            evaluation: results
        });

        return results;
    }
}

