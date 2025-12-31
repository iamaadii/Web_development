const randomDelay = ()=>{
    return new Promise((resolve)=>{
        let delay = 2 + Math.random()*7 * 1000;
        setTimeout(()=>{
            resolve()
        },delay);
    })
}

const dots = (div)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            div.innerText+=".";
            setTimeout(()=>{
                div.innerText+=".";
                setTimeout(()=>{
                    div.innerText+=".";
                    resolve();
                },2000)
            },2000)
        },2000)
    })
}

const addItem = async (item)=>{
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = ">>>"+item;
    document.body.append(div); 
    await dots(div);
}


async function main() {
    let text = ["Initializing Hacking ", "Reading your files ", "Password Files Detected ","Sending Password & Personal Files to Server ","Cleaning up "];
    for(const item of text){
        await addItem(item);
    }
}

main()