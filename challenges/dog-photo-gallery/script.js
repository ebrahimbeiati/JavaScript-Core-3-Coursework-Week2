async function  getRandomDogPhoto(){
    try{
        const response = await fetch(`https://dog.ceo/api/breeds/image/random`)
        const photo =await response.json()
        return photo.message
    }catch(err){
        return err
    }
}

    const buttons = document.getElementById("randomPhotos");
    buttons.addEventListener("click", async() =>{
        const list =document.getElementById("list")

        const ul = document.createElement("li")
        list.appendChild(ul)

        const photos = document.createElement("img")

    const photosUrl = await getRandomDogPhoto()
    photos.src =photosUrl
    ul.appendChild(photos)
})