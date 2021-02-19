function customDropdown(element){
    var resultsList;
    var inputWords;
    //Aller chercher la liste des options
    var options = element.querySelectorAll('option');

    var dropdown = document.createElement('div');
    dropdown.classList.add('c-dropdown');

    
    function genererOptions(filterChar){
    //Retirer options presentes
        resultsList.innerHTML ='';
        var filteredOptions = Array.from(options).filter(function(option){
            // Si le texte de l'option contient le texte de la recherche, retrourne vrai
            if(typeof filterChar === 'string'){
                return option.innerText.toLowerCase().indexOf(filterChar.toLowerCase()) > -1;
            }
        });

        //Generer "no result found"
        if (filteredOptions.length === 0){
            var noResult = document.createElement('div');
            noResult.classList.add('custom-dropdown-result-item');
            noResult.classList.add('no-results');
            noResult.innerText = 'no results found...';
            resultsList.appendChild(noResult);
        }

        //generer le resultat pour chaque option
        filteredOptions.forEach(function(option){
            var optionResult = document.createElement('div');
            optionResult.classList.add('custom-dropdown-result-item');
            optionResult.innerText = option.innerText;

            optionResult.onclick = function(){
                inputWords.value = this.innerText;
                resultsList.classList.add('hide');
            }

            resultsList.appendChild(optionResult);
        });
        dropdown.appendChild(resultsList);
    }

    //Ajouter un text input
    inputWords = document.createElement('input');
    dropdown.appendChild(inputWords);
    inputWords.placeholder = 'Search';
    inputWords.classList.add('dropList');

    //Recuperer valeur du charactere input
    inputWords.oninput = function(event){
        var inputValue = event.target.value;

        //Filtrer les options selon la nouvelle valeur
        genererOptions(inputValue);
        resultsList.classList.remove('hide');
    }

    //Click pour ajouter ou enlever hide
    inputWords.addEventListener("click", function(){
        resultsList.classList.toggle('hide');
    });


    //Ajouter un X pour le reset
    var clearBtn = document.createElement('button');
    clearBtn.classList.add('clear-btn');
    clearBtn.innerText = 'X';
    clearBtn.onclick = function(){
        inputWords.value = '';
        resultsList.classList.add('hide');
        genererOptions('');
    }
    dropdown.appendChild(clearBtn);

    //ajouter la liste de resultats sur le text input
    resultsList = document.createElement('div');
    resultsList.classList.add('custom-dropdown-results');
    resultsList.classList.add('hide');

    //generer le resultat pour chaque option
    genererOptions('');

    //Ajouter l'input au DOM
    document.body.insertBefore(dropdown, element);
    element.remove();

};