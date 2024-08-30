// const loginUser = (email, password, onSuccess, onError) => {
//     setTimeout(() => {
//         const error = true;
//         if(error){
//             return onError(new Error("Deu erro!")); // caso a variável 'error' seja true
//         }

//         console.log("Logado")
//         onSuccess(email);
//     }, 1500);
// }                 
//                                 FUNÇÃO DE LOGINUSER SEM PROMISE

const loginUserPromise = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = true;

        if(error){
            reject(new Error("Erro no login!"))
        }

        console.log("Usuário logado!")
        resolve(email)
    })
}

const getUserVideos = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getUserVideos")
            resolve(["video1, video2, video3"]);
        }, 2000);
    })
} // Função userSalvarVideos que recebe a string 'email' e a função callback(), usado para que seja concluido o setTimeout para chamar o ["video1, video2, video3"]

const getVideosDetails = (video) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getVideosDetails")
            resolve( { title: "video title" });
        }, 2500);
    })
}

// loginUserPromise("teste@gmail.com", "123456")
//     .then((user) => getUserVideos(user.email))
//     .then((videos) => getVideosDetails(videos[0]))
//     .catch((error) => console.log(error))

const displayUser = async () => {
    try {
        const user = await loginUserPromise("teste@gmail.com", "123456");
        const videos = await getUserVideos(user.email);
        const videoDetails = await getVideosDetails(videos[0])

        console.log(videoDetails);
    } catch(error) {
        console.log(error)
    }
} // ASYNC AWAIT 

displayUser();

// .then() rodará caso o codigo caia no resolve (resolve)
// .catch() lida com o erro da Promise (reject)
// Promise.all() executa mais de uma Promise por vez
// AXIOS = consumo de resolve
