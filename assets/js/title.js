function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const titleStartArr = ['> \\', '> |', '> /', '> i', '> i\\', '> i|', '> i/', '> in', '> in\\', '> in|', '> in/', '> ing', '> ing\\', '> ing|', '> ing/', '> ingm', '> ingm\\', '> ingm|', '> ingm/', '> ingma', '> ingma\\', '> ingma|', '> ingma/', '> ingmar', '> ingmar\\', '> ingmar|', '> ingmar/', '> ingmar.', '> ingmar.\\', '> ingmar.|', '> ingmar./', '> ingmar.d', '> ingmar.d\\', '> ingmar.d|', '> ingmar.d/', '> ingmar.de', '> ingmar.de\\', '> ingmar.de|', '> ingmar.de/', '> ingmar.dev'];
const titleEndArr = ['> ingmar.dev', '> ngmar.dev', '> gmar.dev', '> mar.dev', '> ar.dev', '> r.dev', '> .dev', '> dev', '> ev', '> v', '>'];

async function changeTitle() {
    for (let i = 0; i < titleStartArr.length; i++) {
        document.title = titleStartArr[i];
        await sleep(300);
    }

    await sleep(200);

    for (let i = 0; i < titleEndArr.length; i++) {
        document.title = titleEndArr[i];
        await sleep(250);
    }

    return changeTitle();
}

changeTitle();


