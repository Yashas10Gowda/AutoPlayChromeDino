const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const space = new KeyboardEvent('keydown', { 'keyCode': 32, 'which': 32 });
const downdown = new KeyboardEvent('keydown', { 'keyCode': 40, 'which': 40 });
const downup = new KeyboardEvent('keyup', { 'keyCode': 40, 'which': 40 });

document.dispatchEvent(space);

function jumpobstruction() {
    for (let i = 0; i < 10; i++) {
        if (ctx.getImageData(150 + i, 120, 1, 1).data[0] == 83) {
            return true;
        }
    }
    return false;
}

async function duckobstruction() {
    for (let i = 0; i < 10; i++) {
        if (ctx.getImageData(150 + i, 90, 1, 1).data[0] == 83) {
            document.dispatchEvent(downdown);
            setTimeout(function () {
                document.dispatchEvent(downup);
            }, 350);
            break;
        }
    }
}

setInterval(() => {
    jumpobstruction() ? document.dispatchEvent(space) : null;
    duckobstruction();
}, 10);
