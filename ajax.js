

    $.get('https://api.sampleapis.com/coffee/hot', (data) => {
        $('#col1').text(data[2].title);
    
    });

    $.ajax( {
        type: "POST",
        url: 'https://crudcrud.com/api/3d3441bced03420ead1348d4a13acfc5',
        data: "Jeff"
    })
