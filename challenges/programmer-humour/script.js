async function fetchData(){
    try{
        const response = await fetch(`https://xkcd.now.sh/?comic=latest`);
        const data = await response.json();
        console.log(data)
        return data.img 
    }catch(err){
        return err
    }
}

async function fetchImage(){
    const image = document.createElement('img');
    image.src = await fetchData();
    document.body.appendChild(image);

}
fetchImage()