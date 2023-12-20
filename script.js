
function rechercher() {
    // Récupération du mot entré par l'utilisateur
    let mot = document.getElementById("mot").value;
    let resultat = document.getElementById('resultat')
    let reset = document.getElementById('reset')
    let input = document.querySelector('input')
    

    if(mot.length !=0){

        let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"+mot
        
        // Appel de l'API du dictionnaire
        fetch(url).then(response => response.json().then(data => {

            console.log(data)
            try {
                for( let mots of data){
                    let definition= mots.meanings[0].definitions[0].definition;
                    let responce =document.createElement('p')
                    responce.innerHTML =definition
                    resultat.appendChild(responce);
                    
                }
            } catch (error) {
                resultat.innerHTML='<p> Aucune Définition Trouvé </p>'
            }

            reset.addEventListener('click',()=> {
                location.reload()
            })



        })
        )}
    }    

    