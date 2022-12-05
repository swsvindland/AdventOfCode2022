import {readFile} from "fs";

readFile('./src/day5input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    let stack1 = 'TFVZCWSQ'.split("").reverse();
    let stack2 = 'BRQ'.split("").reverse();
    let stack3 = 'SMPQTZB'.split("").reverse();
    let stack4 = 'HQRFVD'.split("").reverse();
    let stack5 = 'PTSBDLGJ'.split("").reverse();
    let stack6 = 'ZTRW'.split("").reverse();
    let stack7 = 'JRFSNMQH'.split("").reverse();
    let stack8 = 'WHFNR'.split("").reverse();
    let stack9 = 'BRPQTZJ'.split("").reverse();

    const actions = [];
    data.split("\n").forEach(value => {
        const split = value.split(" ");
        actions.push([parseInt(split[1]), parseInt(split[3]), parseInt(split[5])]);
    });

    const getStackFromIndex = (index: number) => {
        switch (index) {
            case 1:
                return stack1;
            case 2:
                return stack2;
            case 3:
                return stack3;
            case 4:
                return stack4;
            case 5:
                return stack5;
            case 6:
                return stack6;
            case 7:
                return stack7;
            case 8:
                return stack8;
            case 9:
                return stack9;
            default:
                break;
        }
    }

    // part 1
    // actions.forEach(action => {
    //     for (let i = 0; i < action[0]; i++) {
    //         const crate = getStackFromIndex(action[1]).pop();
    //         getStackFromIndex(action[2]).push(crate);
    //     }
    // })

    actions.forEach(action => {
        let fromStackLength = getStackFromIndex(action[1])?.length ?? 0;
        const moving = getStackFromIndex(action[1])?.slice(fromStackLength - 1 - action[0], fromStackLength - 1);
        const staying = getStackFromIndex(action[1])?.slice(0, fromStackLength - 1 - action[0]);

        getStackFromIndex(action[2])?.push(...moving);
        switch (action[1]) {
            case 1:
                stack1 = staying;
                break
            case 2:
                stack2 = staying;
                break
            case 3:
                stack3 = staying;
                break
            case 4:
                stack4 = staying;
                break
            case 5:
                stack5 = staying;
                break
            case 6:
                stack6 = staying;
                break
            case 7:
                stack7 = staying;
                break
            case 8:
                stack8 = staying;
                break
            case 9:
                stack9 = staying;
                break
            default:
                break
        }
    })

    console.log(stack1);
    console.log(stack2);
    console.log(stack3);
    console.log(stack4);
    console.log(stack5);
    console.log(stack6);
    console.log(stack7);
    console.log(stack8);
    console.log(stack9);
});
