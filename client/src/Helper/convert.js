// covert image into base 64 format.

export default function convertToBase64(file){
    return new Promise((resolve, reject)=>{
        const fileReader = new FileReader();
        fileReader.onload = ()=>{
            resolve(fileReader.result)
        }

        fileReader.onerror = (error) =>{
            reject(error)
        }
    })
}