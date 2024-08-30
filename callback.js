// onSuccess = callback

const loginUser = (email, password, onSuccess, onError) => {
    setTimeout(() => {
        const error = false;
        if(error){
            return onError(new Error("Deu erro!")); // caso a variável 'error' seja true
        }

        console.log("Logado")
        onSuccess(email);
    }, 1500);
    console.log("Após setTimeout");
}

const getUserVideos = (email, callback) => {
    setTimeout(() => {
        const videos = ["video1, video2, video3"]
        callback(videos);
    }, 2000);
} // Função userSalvarVideos que recebe a string 'email' e a função callback(), usado para que seja concluido o setTimeout para chamar o ["video1, video2, video3"]

const getVideosDetails = (video, callback) => {
    setTimeout(() => {
        callback( { title: "video title" });
    }, 2500);
}

const user = loginUser("teste@gmail.com", "12345", (user) => {
    getUserVideos(user.email, (videos) => {
        console.log(videos);
        getVideosDetails(videos[0], (videoDetails) => {
            console.log(videoDetails)
        })
    });
}, (error) => {
    console.log(error);
})

// console.log( { user })

// callback muito bagunçado, função dentro de função