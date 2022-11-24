var dataRef = new Firebase('https://suprimentos-de-informati-7fa1d-default-rtdb.firebaseio.com/loja');

dataRef.on('value', function(snapshot) {

    var t = snapshot.val();
    var count = 0;

    for (var key in t) {
        var valor = t[key];

        console.log('chave', key);
        console.log('valor', valor);

        if(key === 'clientes') {

            var _itemsKey = Object.entries(valor);
    
    
    
            for (const [key2, value2] of _itemsKey) {
                count++;
    		
    		
                $("#tbClientes tbody").append(
    
                    `<tr> +
    
                        <th scope="row">${count}</th> +
    
                        <td>${value2.nome}</td> +
                        <td>${value2.telefone}</td> +
                        <td>${value2.endereco.log} ${value2.endereco.n} ${value2.endereco.cep} </td> +
                        <td>${value2.email}</td> +
    
                    </tr>`
    
                );
    
            }
        }


    }

});
