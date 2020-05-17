import _ from 'lodash';
import Guess from './Models/Codes/Guess';
import Secret from './Models/Codes/Secret';
import Value from './Models/Value';

(function () {
    'use strict';

    var value_library = {
            basic: [
                new Value(0, {color: 'Red'}),
                new Value(1, {color: 'Orange'}),
                new Value(2, {color: 'Yellow'}),
                new Value(3, {color: 'Blue'}),
                new Value(4, {color: 'Green'}),
                new Value(5, {color: 'Blue'}),
                new Value(6, {color: 'Indigo'}),
                new Value(7, {color: 'Violet'}),
                new Value(8, {color: 'Mauve'}),
                new Value(9, {color: 'Chartreuse'}),
            ]
        };

    (function () {
        var secret1,
            secret2;

        console.log('Secret 1:');
        secret1 = new Secret([
            value_library.basic[1],
            value_library.basic[7],
            value_library.basic[6],
            value_library.basic[4],
            value_library.basic[6],
        ]);
        console.log(
            'CRACK 1a: assert {matches: 0, contains: 3}',
            secret1.crack(new Guess([
                value_library.basic[7],
                value_library.basic[6],
                value_library.basic[2],
                value_library.basic[6],
                value_library.basic[5],
            ]))
        );
        console.log(
            'CRACK 1b: assert {matches: 1, contains: 1}',
            secret1.crack(new Guess([
                value_library.basic[0],
                value_library.basic[7],
                value_library.basic[2],
                value_library.basic[6],
                value_library.basic[5],
            ]))
        );
        console.log(
            'CRACK 1c: assert {matches: 1, contains: 2}',
            secret1.crack(new Guess([
                value_library.basic[6],
                value_library.basic[7],
                value_library.basic[2],
                value_library.basic[6],
                value_library.basic[5],
            ]))
        );

        console.log('Secret 2:');
        secret2 = new Secret([
            value_library.basic[1],
            value_library.basic[7],
            value_library.basic[6],
            value_library.basic[4],
            value_library.basic[0],
        ]);
        console.log(
            'CRACK 2a: assert {matches: 0, contains: 2}',
            secret2.crack(new Guess([
                value_library.basic[7],
                value_library.basic[6],
                value_library.basic[2],
                value_library.basic[6],
                value_library.basic[5],
            ]))
        );
        console.log(
            'CRACK 2b: assert {matches: 1, contains: 2}',
            secret2.crack(new Guess([
                value_library.basic[0],
                value_library.basic[7],
                value_library.basic[2],
                value_library.basic[6],
                value_library.basic[5],
            ]))
        );
        console.log(
            'CRACK 2c: assert {matches: 1, contains: 1}',
            secret2.crack(new Guess([
                value_library.basic[6],
                value_library.basic[7],
                value_library.basic[2],
                value_library.basic[6],
                value_library.basic[5],
            ]))
        );
    })();
})();