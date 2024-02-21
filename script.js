function togglemode() {
    const html = document.documentElement  
    html.classlist.toggle("light") 
//pegar a tag img

const img=document.queryselector("#profile img")
//substituir a imagem

    if(html.classList.contains ('light')) {
//se tiver light mode, adicionar a imagem light
        img.setAttribute('src','./assets/assets/avatar-light.png')
    
 } else {
//se estiver sem light mode, manter a imagem normal
img.setAttribute('src','./assets/assets/avatar.png')
} 

}
