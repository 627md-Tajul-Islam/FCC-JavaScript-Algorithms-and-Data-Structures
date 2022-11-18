const storage = {
    desk : {
        drawer : "stapler"
    },

    cabinet : {
        "top drawer" : {
            folderOne : "file",
            folderTwo : "secrets"
        },

    "bottom drawer" : "soda"
    }
}

const find = storage.cabinet["top drawer"].folderOne;
console.log(find)