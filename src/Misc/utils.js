import _ from 'lodash';
// export const compare = (password, test) => {
//     let colors = [0, 0, 0, 0];

//     //Yellow Test
//     colors = test.map(el => {
//         if (password.includes(el))
//             return 1
//         else
//             return 0
//     })

//     //Green Test
//     for (let i = 0; i < password.length; i++) {
//         if (password[i] === test[i]) {
//             colors[i] = 2
//         }
//     }

//     return colors.sort().reverse()
// }

export const compare = (password, guess) => {
    let colors = [0, 0, 0, 0];
    let greens = [];
    let yellows = [];
    let n_guess = [];
    let n_password = [];

    for (let i = 0; i < password.length; i++) {
        if (password[i] === guess[i]) {
            greens.push(2);
        } else {
            n_guess.push(guess[i]);
            n_password.push(password[i]);
        }
    }

    n_guess = _.uniq(n_guess);

    for (let i = 0; i < n_guess.length; i++) {
        if (n_password.includes(n_guess[i])) {
            yellows.push(1);
        }
    }

    let final = [...greens, ...yellows];

    for (let i = 0; i < final.length; i++) {
        colors[i] = final[i];
    }

    return colors;
};

export const win = (test) => {
    const size = test.length;
    let correct = 0;

    test.forEach(element => {
        if (element >= 2)
            correct++;
    });

    return correct >= size ? true : false
}

export const touchVibe = (vibe = 40) => {
    if (!(/iPhone|iPod|iPad|iOS|BlackBerry/).test(navigator.userAgent)) {
        const canVibrate = "vibrate" in navigator || "mozVibrate" in navigator;

        if (canVibrate && !("vibrate" in navigator))
            navigator.vibrate = navigator.mozVibrate;

        navigator.vibrate(vibe)
    }
};