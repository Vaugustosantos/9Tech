

function menu(){
    var links = document.querySelector(".links")
    var menu = document.getElementById("menu")
    if(links.classList.contains("showlinks")){
        links.classList.remove("showlinks")
        menu.setAttribute('src', 'menu-regular-24 (2).png')
    }else{
        links.classList.add("showlinks")
        menu.setAttribute('src','x.png')
    }
}

function carrinho(){
    var carrinho  = document.querySelector(".carrinhoitem")
    var cart = document.getElementById("cart")
    if(carrinho.classList.contains("carrinhoaparecer")){
        carrinho.classList.remove("carrinhoaparecer")
        cart.setAttribute('src','cart-solid-24.png')
    }else{
        carrinho.classList.add("carrinhoaparecer")
        cart.setAttribute('src','x.png')
        
    }
}

function setadireita(){
    var imagem = document.querySelector(".ps5-1")
    imagem.setAttribute("src", "PS52.PNG")
}

function setaesquerda(){
    var imagem = document.querySelector(".ps5-1")
    imagem.setAttribute("src", "ps5.png")
}


function setadireitapc(){
   var foto =  document.querySelector(".pcgamer")
   foto.setAttribute("src","pcgamer2.png")
}

function setaesquerdapc(){
    var foto = document.querySelector(".pcgamer")
    foto.setAttribute("src", "pc gamer.png")
}


function setadireitaxbox(){
    var foto = document.querySelector(".xbox")
    foto.setAttribute("src","xbox2.png")

}

function setaesquerdaxbox(){
    var foto = document.querySelector(".xbox")
    foto.setAttribute("src","xboxOne.png")
}

function setadireitamotog(){
    var foto = document.querySelector(".motog")
    foto.setAttribute("src","motog60.png")
}

function setaesquerdamotog(){
    var foto = document.querySelector(".motog")
    foto.setAttribute("src","motog602.png")
}

function setadireitaxr(){
    var foto = document.querySelector(".iphonexr")
    foto.setAttribute("src","iphonexr2.png")
}

function setaesquerdaxr(){
    var foto = document.querySelector(".iphonexr")
    foto.setAttribute("src","iphonexr.png")
}


function setadireita13(){
    var foto = document.querySelector(".iphone13")
    foto.setAttribute("src","iphone132.png")
}

function setaesquerda13(){
    var foto= document.querySelector(".iphone13")
    foto.setAttribute("src","iphone13.png")
}

function setadireitaram(){
    var foto = document.querySelector(".ram")
    foto.setAttribute("src","ram2.png")
}

function setaesquerdaram(){
    var foto = document.querySelector(".ram")
    foto.setAttribute("src","ram.png")
}

function setadireitassd(){
    var foto = document.querySelector(".ssd")
    foto.setAttribute("src","ssd2.png")
}

function setaesquerdassd(){
    var foto = document.querySelector(".ssd")
    foto.setAttribute("src","ssd.png")
}

function setadireitartx(){
    var foto = document.querySelector(".rtx")
    foto.setAttribute("src","rtx2.png")
}

function setaesquerdartx(){
    var foto = document.querySelector(".rtx")
    foto.setAttribute("src","rtx.png")
}