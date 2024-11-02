const products = [
    {id: 'promo1', name: 'Camiseta Estampa Brasão Branca', image: 'resources/pecas/camiseta-brasao.svg'},
    {id: 'promo2', name: 'Camiseta Estampa Cavalo', image: 'resources/pecas/camiseta-cavalo.svg'},
    {id: 'promo3', name: 'Camiseta Estampa Cruz', image: 'resources/pecas/camiseta-cruz.svg'},
    {id: 'promo4', name: 'Camiseta Estampa Los Angeles', image: 'resources/pecas/camiseta-losangeles.svg'},
    {id: 'cam1', name: 'Camiseta Estampa Avião', image: 'resources/pecas/camiseta-aviao.svg'},
    {id: 'cam2', name: 'Camiseta Estampa Fusca', image: 'resources/pecas/camiseta-fusca.svg'},
    {id: 'cam3', name: 'Camiseta Estampa Espada', image: 'resources/pecas/camisetaEspada-frenteEcostas.svg'},
    {id: 'cam4', name: 'Camiseta Estampa Fusca', image: 'resources/pecas/camiseta-fusca.png'}
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