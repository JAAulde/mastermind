import _ from 'lodash';

(function () {
    'use strict';

    var Code,
        value_library = {
            basic: [
                {id:0},
                {id:1},
                {id:2},
                {id:3},
                {id:4},
                {id:5},
                {id:6},
                {id:7},
                {id:8},
                {id:9},
            ]
        };

    Code = function () {
        this.values = [];
        this.attempts = [];
    };

    Code.prototype = {
        setValues: function (c) {
            this.values = c;
        },
        addValue:function (v) {
            this.values.push(v);
        },
        crack: function(guess) {
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
    };


    (function () {
        var code = new Code();

        console.log('Code 1:');
        code.setValues([
            value_library.basic[1],
            value_library.basic[7],
            value_library.basic[6],
            value_library.basic[4],
            value_library.basic[6],
        ]);
        console.log('CRACK 1a: assert {matches: 0, contains: 3}', code.crack([
            value_library.basic[7],
            value_library.basic[6],
            value_library.basic[2],
            value_library.basic[6],
            value_library.basic[5],
        ]));
        console.log('CRACK 1b: assert {matches: 1, contains: 1}', code.crack([
            value_library.basic[0],
            value_library.basic[7],
            value_library.basic[2],
            value_library.basic[6],
            value_library.basic[5],
        ]));
        console.log('CRACK 1c: assert {matches: 1, contains: 2}', code.crack([
            value_library.basic[6],
            value_library.basic[7],
            value_library.basic[2],
            value_library.basic[6],
            value_library.basic[5],
        ]));

        console.log('Code 2:');
        code.setValues([
            value_library.basic[1],
            value_library.basic[7],
            value_library.basic[6],
            value_library.basic[4],
            value_library.basic[0],
        ]);
        console.log('CRACK 2a: assert {matches: 0, contains: 2}', code.crack([
            value_library.basic[7],
            value_library.basic[6],
            value_library.basic[2],
            value_library.basic[6],
            value_library.basic[5],
        ]));
        console.log('CRACK 2b: assert {matches: 1, contains: 2}', code.crack([
            value_library.basic[0],
            value_library.basic[7],
            value_library.basic[2],
            value_library.basic[6],
            value_library.basic[5],
        ]));
        console.log('CRACK 2c: assert {matches: 1, contains: 1}', code.crack([
            value_library.basic[6],
            value_library.basic[7],
            value_library.basic[2],
            value_library.basic[6],
            value_library.basic[5],
        ]));
    })();
})();