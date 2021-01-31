function customDropdown(element){
    //aLler chercher la liste des options
    var options = element.querySelectorAll('option');

    var dropdown = document.createElement('div');
    dropdown.classList.add('c-dropdown');

    //Ajouter un text input
    var input = document.createElement('input');
    dropdown.appendChild(input);
    input.placeholder = 'Search';

    //Ajouter un X pour le reset
    var clearBtn = document.createElement('button');
    clearBtn.classList.add('clear-btn');
    clearBtn.innerText = 'X';
    dropdown.appendChild(clearBtn);

    //ajouter la liste de resultats sur le text input
    var resultsList = document.createElement('div');
    resultsList.classList.add('custom-dropdown-results');
    
    //generer le resultat pour chaque option
    Array.from(options).forEach(function(option){
        var optionResult = document.createElement('div');
        optionResult.classList.add('custom-dropdown-result-item');
        optionResult.innerText = option.innerText;

        resultsList.appendChild(optionResult);
    });

    dropdown.appendChild(resultsList);

    //Ajuster les resultats en fonction de la recherche


    //Ajouter l'input au DOM
    document.body.insertBefore(dropdown, element);
    element.remove();


}