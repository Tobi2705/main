'use strict';
const _ = require('lodash');
// var expr = /Machine Learning/;
// switch (expr) {
//     case 'Machine Learning Engineer':
//         console.log('Machine Learning');
//         var tags = 'Machine Learning'
//         break;
//     case 'Machine Learning test':
//     case 'Machine Learning test':
//         console.log('Machine Learning');
//         // expected output: "Mangoes and papayas are $2.79 a pound."
//         break;
//     default:
//         console.log('Sorry, we are out of ' + expr + '.');
// }
// function getTags() {
//     var job = 'Machine Learning';
//     var tags;
//     switch (job) {
//         case 'Machine Learning':
//             tags = 'MachineLearning';
//             break;
//         case 'Machine Learning':
//             tags = 'MachineLearning';
//             break;
//         case 'Machine Learning':
//             tags = 'MachineLearning';
//             break;
//         case 'Machine Learning':
//             tags = 'MachineLearning';
//             break;
//         case 'Machine Learning':
//             tags = 'MachineLearning';
//             break;
//         case 'Machine Learning':
//             tags = 'MachineLearning';
//             break;
//         case 'Machine Learning':
//             tags = 'MachineLearning';
//             break;
//         default:
//             tags = 'Invalid day';
//     }
//     console.log(tags);
//     return tags

// }

let COUNTRS = [

    {
        rx: /\W(Machine)\W/gi,
        label: 'MachineLearning'
    },
    {
        rx: /\W(Machine Learning Engineering)\W/gi,
        label: 'MachineLearning'
    },

];


module.exports = () => {
    function getCountrs(text) {
        var countrs = _.reduce(COUNTRS, function (countrs, countr) {
            var count = 0;
            var result;

            while ((result = countr.rx.exec(text)))
                count += 1;

            if (count > 0)
                countrs.push({
                    label: countr.label,
                    count: count
                });

            return countrs;
        }, []);

        return _.map(_.sortBy(countrs, 'count'), 'label');
    }

    //expose public APIs
    return {
        getCountrs: getCountrs
    };
};