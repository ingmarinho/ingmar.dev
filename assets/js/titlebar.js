function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const titleArr = ['\\', '|', '/', 'i', 'i\\', 'i|', 'i/', 'in', 'in\\', 'in|', 'in/', 'ing', 'ing\\', 'ing|', 'ing/', 'ingm', 'ingm\\', 'ingm|', 'ingm/', 'ingma', 'ingma\\', 'ingma|', 'ingma/', 'ingmar', 'ingmar\\', 'ingmar|', 'ingmar/', 'ingmar.', 'ingmar.\\', 'ingmar.|', 'ingmar./', 'ingmar.d', 'ingmar.d\\', 'ingmar.d|', 'ingmar.d/', 'ingmar.de', 'ingmar.de\\', 'ingmar.de|', 'ingmar.de/', 'ingmar.dev'];

async function changeTitle() {
    for (let i = 0; i < titleArr.length; i++) {
        document.title = titleArr[i];
        await sleep(300);
    }

    document.title = '[ ingmar.dev ]';
    await sleep(800);

    return changeTitle();
}

changeTitle();


