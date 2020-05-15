import _ from 'lodash';
import Code from './Code';
import Guess from './Guess';

export default class Secret extends Code {
    constructor(values) {
      super(values);
    }

    crack(guess) {
        var instance = this,
            values_counts,
            guess_counts,
            common_values,
            contains,
            matches;

        if (!(guess instanceof Guess)) {
            throw 'A guess provided to Secret.crack must be an instance of Guess';
        }

        values_counts = _.countBy(this.values, 'id');
        guess_counts = _.countBy(guess.values, 'id');
        common_values = _.intersection(
            _.keys(values_counts),
            _.keys(guess_counts)
        );
        contains = _.reduce(common_values, function (sum, id){
            var addend = values_counts[id] <= guess_counts[id]
                ? values_counts[id]
                : guess_counts[id];

            return sum + addend;
        }, 0);

        matches = _.filter(guess.values, function(value, index){
            return value.id === instance.values[index].id;
        }).length;

        return {
            guess: guess,
            evaluation: {
                matches: matches,
                contains: contains - matches,
                solved: (matches === this.values.length)
            }
        };
    }
}
