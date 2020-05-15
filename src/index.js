import _ from 'lodash';
import Code from './lib/Code'

(function () {
    'use strict';

    var value_library = {
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