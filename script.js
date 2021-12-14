// $.ajax({
//     url : 'https://api.nasa.gov/planetary/apod?api_key=sEkVILIIBUnRbQ0XjWnejiohxH4BwRCFBjSC3N0q',
//     success: function(response){
//         console.log(response);
//     },
//     erro: function(error){
//         console.log(error);
//     }
// })


// Espera evento no botão.
$('#btnFazerRequest').click(function(){
    // Pega a data passada
    const data = $('#data').val()
    // Settando API
    $.ajax({
        // conecta URL + Data pra pegar a foto e afins.
        url : `https://api.nasa.gov/planetary/apod?api_key=sEkVILIIBUnRbQ0XjWnejiohxH4BwRCFBjSC3N0q&date=${data}`,
        
        // O request recebe o obj que está sendo chamado na API
        // Caso seja bem sucedida vai rolar o que tá dentro disso:
        success : function(request){
            console.log(request); 
            const imagem = $('#imagem');
            const tituloTexto = $('#nomeDoCorpoCeleste');
            const texto = $('#textoDescricao');
            if(imagem.css('display') === 'none'){
                // Adicionando imagem
                imagem.attr('src', request.hdurl);
                imagem.attr('alt', request.title); 
                imagem.css('display', 'block');

                // Adicionando texto
                tituloTexto.text(request.title)
                texto.text(request.explanation)
            } else {
                // Adicionando imagem
                imagem.attr('src', request.hdurl);
                imagem.attr('alt', request.title); 

                // Adicionando texto
                tituloTexto.text(request.title)
                texto.text(request.explanation)
            }
        },
        error : function(error){
            console.log(error);
        }
    })
})