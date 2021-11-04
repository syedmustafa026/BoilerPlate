let upload = async (file) => {
    pic = document.getElementById("profile");
    loader = document.getElementById("loader")
    return new Promise((resolve, reject) => {
        let storageRef = firebase.storage().ref(`myfolder/todayImages/${file.name}`);
        let progress1 = document.getElementById("progress");
        let bar = document.getElementById("bar");
        progress1.style.display = "block"
        let uploading = storageRef.put(file)
        uploading.on('state_changed',
            (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                bar.style.width = Math.round(progress.toFixed()) + "%";
                bar.innerHTML = Math.round(progress.toFixed()) + "%";
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED:
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING:
                        console.log('Upload is running');
                        break;

                }
                if (bar.innerHTML === "100%") {
                    swal("Successfully", " Item Added", "success");
                }

            },
            (error) => {
                reject(error)
            },
            () => {
                uploading.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    resolve(downloadURL)
                });
            }
        );
    })
}
