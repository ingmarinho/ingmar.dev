function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const webTitle = 'ingmar.dev';

// async function titleChange(string) {
//     // build up
//     for (let i = 0; i < string.length; i++) {
//         document.title = '> ' + string.substring(0, i) + '\\';
//         await sleep(300);
//         document.title = '> ' + string.substring(0, i) + '|';
//         await sleep(300);
//         document.title = '> ' + string.substring(0, i) + '/';
//         await sleep(300);
//         document.title = '> ' + string.substring(0, i + 1);
//         await sleep(300);
//     }

//     await sleep(200);

    // break down
    // for (let i = 0; i < string.length + 1; i++) {
    //     document.title = '> ' + string.substring(string.length, i);
    //     await sleep(300);
    // }

//     titleChange(webTitle);
// }


async function titleChange2(string) {
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j <= i; j++) {
            document.title = string.substring(0, i) + ' < ' + string[j];
            await sleep(250);
        }
    }

    document.title = string;
    await sleep(300);

    for (let i = string.length; i >= 0; i--) {
        document.title = string.substring(0, i) + ' <';
        await sleep(300);
    }

    await sleep(300);

    titleChange2(string);
}

titleChange2(webTitle);
