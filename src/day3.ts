import { readFile } from 'fs';

readFile('./src/day3input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const getPriority = (str: string) => {
        if (lower.includes(str)) {
            return lower.indexOf(str) + 1;
        }
        return upper.indexOf(str) + 27;
    };

    const sacks = [];
    data.split('\n').forEach((value) => {
        sacks.push(value.split(''));
    });

    let sum = 0;
    sacks.forEach((sack, index) => {
        if (index % 3 === 0 && index < sacks.length - 2) {
            const map = new Map<string, number>();
            const sack1 = sack;
            const sack2 = sacks[index + 1];
            const sack3 = sacks[index + 2];

            sack1.forEach((value) => {
                map.set(value, 0);
            });

            sack2.forEach((value) => {
                if (map.has(value)) {
                    map.set(value, 1);
                }
            });

            sack3.forEach((value) => {
                if (map.has(value) && map.get(value) === 1) {
                    map.set(value, 2);
                }
            });

            console.log(map);

            map.forEach((value, key) => {
                if (value === 2) {
                    sum += getPriority(key);
                }
            });
        }

        // const shared = new Set<string>();
        // sack2.forEach((item) => {
        //     if (sack1.includes(item)) {
        //         shared.add(item);
        //     }
        // });
        //
        // Array.from(shared).forEach((item) => {
        //     sum += getPriority(item);
        // })

        // console.log(sack1, sack2, shared, sum);
    });

    console.log(sum);
});
