const products = [
    {id: 'promo1', name: 'Camiseta Brasão Branca', image: 'resources/peças/camiseta-brasao.svg'},
    {id: 'promo2', name: 'Camiseta Cavalo', image: 'resources/peças/camiseta-cavalo.svg'},
    {id: 'promo3', name: 'Camiseta Cruz', image: 'resources/peças/camiseta-cruz.svg'},
    {id: 'promo4', name: 'Camiseta Los Angeles', image: 'resources/peças/camiseta-losangeles.svg'},
    {id: 'cam1', name: 'Camiseta Silkada', image: 'resources/peças/camiseta-sambademinas.svg'},
    {id: 'cam2', name: 'Camisa Pólo Piquet Bordada', image: 'resources/peças/camiseta-esata.svg'},
    {id: 'cam3', name: 'camiseta 3', image: 'resources/peças/camiseta-netview.svg'},
    {id: 'cam4', name: 'camiseta 4', image: 'resources/blusa.jpg'}
    /*{id: 'cal1', name: 'calça 1', image: 'resources/shirt.jpg'},
    {id: 'cal2', name: 'calça 2', image: 'resources/blusa.jpg'},
    {id: 'cal3', name: 'calça 3', image: 'resources/blusa.jpg'},
    {id: 'cal4', name: 'calça 4', image: 'resources/blusa.jpg'},
    {id: 'av1', name: 'avental 1', image: 'resources/blusa.jpg'},
    {id: 'av2', name: 'avental 2', image: 'resources/blusa.jpg'},
    {id: 'av3', name: 'avental 3', image: 'resources/blusa.jpg'},
    {id: 'av4', name: 'avental 4', image: 'resources/blusa.jpg'}*/
]

function loadProduct(){
    const url = new URLSearchParams(window.location.search);
    const id = url.get('id');
    
    products.forEach(product => {
        if(product.id==id){
            document.getElementById('productname').textContent = product.name;
            const img = document.getElementById('productimg');
            img.src = product.image;
        }
    });
}