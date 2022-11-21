

function saatFunc(){

    const derece=6;
    const zaman=new Date();
    
    let saniyye=zaman.getSeconds() *derece;
    let deqiqe=zaman.getMinutes() * derece;
    let eqreb=zaman.getHours()* 30 +(deqiqe / 12)


    
    document.querySelector('.saniyye').style.transform=`rotate(${saniyye}deg)`;
    document.querySelector('.deqiqe').style.transform=`rotate(${deqiqe}deg)`;
    document.querySelector('.eqreb').style.transform=`rotate(${eqreb}deg)`;
    // console.log(`${saat}: ${deqiqe} :${saniyye}`);
}

saatFunc();
setInterval(saatFunc,1000)