import {readFile} from "fs";

readFile('./src/day2input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const rockScore = 1;
    const paperScore = 2;
    const scissorsScore = 3;

    const lossScore = 0;
    const drawScore = 3;
    const winScore = 6;

    let rounds = [];
    data.split("\n").forEach(value => {
        if (value !== "") {
            rounds.push(value.split(" "));
        }
    });

    const handToScore = (hand: string) => {
        if (hand === 'A') return rockScore;
        if (hand === 'B') return paperScore;
        if (hand === 'C') return scissorsScore;
    }

    // part 1 decode
    // const decode = (hand: string) => {
    //     if (hand === 'X') return 'A';
    //     if (hand === 'Y') return 'B';
    //     if (hand === 'Z') return 'C';
    // }

    const decode = (opponentHand: string, hand: string) => {
        switch (hand) {
            case 'X':
                if (opponentHand === 'A') return 'C';
                if (opponentHand === 'B') return 'A';
                if (opponentHand === 'C') return 'B';
                break;
            case 'Y':
                return opponentHand;
                break;
            case 'Z':
                if (opponentHand === 'A') return 'B';
                if (opponentHand === 'B') return 'C';
                if (opponentHand === 'C') return 'A';
                break;
        }
    }

    let score = 0;
    rounds.forEach(round => {
        const p1 = round[0];
        const p2 = decode(round[0], round[1]);

        if (p1 === p2) {
            score += drawScore;
            score += handToScore(p2);
        } else if (p1 === 'C' && p2 === 'A') {
            score += winScore;
            score += handToScore(p2);
        } else if (p1 === 'A' && p2 === 'B') {
            score += winScore;
            score += handToScore(p2);
        } else if (p1 === 'B' && p2 === 'C') {
            score += winScore;
            score += handToScore(p2);
        } else {
            score += lossScore;
            score += handToScore(p2);
        }

        console.log(p1, p2, score);
    });

    console.log(score);
});
