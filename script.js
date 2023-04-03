const qrInput = document.querySelector(".form input");
const qrcodeBtn = document.querySelector(".form button");
const qrImg = document.querySelector(".qr-code img");
const subContainer2 = document.querySelector(".Sub-container2");


qrcodeBtn.addEventListener("click", () => {
    let qrValue = qrInput.value; 
    if(!qrValue) return;
    qrcodeBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=2000x2000&data=${qrValue}`;

    qrImg.addEventListener("load", () =>{
        subContainer2.classList.add("active");
        qrcodeBtn.innerText = "Generate QR Code"
    });

});

qrInput.addEventListener("keyup", ()=>{
    if(!qrInput.value) {
        subContainer2.classList.remove("active"); 
    }
});


// For Download Image QR-Code
let downloadBtn = document.querySelectorAll('.downloadBtn')
image = document.querySelectorAll('[data-downloadImg]')

function toDataURL(url) {
    return fetch(url).then((response) => {
        return response.blob();
    }).then(blob => {
        return URL.createObjectURL(blob);
    })
}

async function download(url) {
    const a = document.createElement("a");
    a.href = await url;
    a.download = "Download.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

downloadBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        let imageURL = btn.parentElement.querySelector('img').src
        download(toDataURL(imageURL))
    })
})