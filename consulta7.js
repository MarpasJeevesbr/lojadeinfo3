var dataRef = new Firebase('https://suprimentos-de-informati-7fa1d-default-rtdb.firebaseio.com/loja');

dataRef.on('value', function(snapshot) {

    var t = snapshot.val();
    var count = 0;

    for (var key in t) {
        var valor = t[key];

        console.log('chave', key);
        console.log('valor', valor);

        if(key === 'produtos') {

            var _itemsKey = Object.entries(valor);
    
    
    
            for (const [key2, value2] of _itemsKey) {
                count++;
    		
    		
                $("#tbProdutos tbody").append(
    
                    `<tr> +
    
                        <th scope="row">${count}</th> +
    
                        <td>${value2.produto}</td> +
                        <td>${value2.valor}</td> +
    
                    </tr>`
    
                );
    
            }
        }


    }

});
