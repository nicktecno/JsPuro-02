const express = require('express')
const nunjucks = require("nunjucks")

const server = express()
const videos = require("./data")

server.use(express.static("public"))

server.set ("view engine", "html")
nunjucks.configure("views",{
express:server,
autoescape: false,
nocache:true
})

server.get("/", function(req, res){
    const about = {
        avatar_url: "https://scontent.fssz1-1.fna.fbcdn.net/v/t1.0-9/96095606_2857861534328162_2356274261800255488_o.jpg?_nc_cat=111&_nc_sid=84a396&_nc_ohc=KOSEBUrlhw4AX_3AiP-&_nc_ht=scontent.fssz1-1.fna&oh=10d3a8b766dd5788de528ab44e8969f1&oe=5F079F98",
        name: "Grazyela Couto",
        role:"Instrutora - Rocketseat",
        description: 'Programadora full-stack, focada em trazer o melhor ensino para iniciantes em programação. Colaboradora da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
        link: [
            {name: "Instagram", url:"https://www.instagram.com/grazy.gr/"},
            {name: "Facebook", url:"https://www.facebook.com/grazy.rg5"}
        ]
    }
    
    
    return res.render("about", {about:about})
    })


server.get("/portfolio", function(req, res) {
        return res.render("portfolio", {items: videos})
    })


    server.get("/video", function(req, res) {
        const id = req.query.id

        const video = videos.find(function(video){
                if (video.id ==id) {
                    return true
                }
        })

       if (!video) {
            return res.send("Video not found!")

       }
       return res.render("video", {item: video})

    })
server.listen(5000, function(){
console.log("server is running")

    


})
