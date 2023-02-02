const baseURL = "https://ascii-art.fr/saveref/"



// att le random String de l'img/pdf
async function pdfToServeurGet(randomString){

    let url = `${baseURL}${randomString}`

    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    await fetch(url, requestOptions)
        .then(response=>response.json())
        .then(result=>{
            console.log(result)
        })
        .catch(error => {
            console.error(error);
        });
}




