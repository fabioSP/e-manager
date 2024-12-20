const items = [
  // eslint-disable-next-line
  { id: 0, title: 'Costela BBQ', categoryId: 0, shortDesc: 'Costelinha de porco ao molho Barbecue', fullDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam sint inventore ex enim recusandae quis vero, magni in nam tempora ullam autem distinctio assumenda laboriosam ea similique corrupti fuga adipisci!', img: 'https://vejario.abril.com.br/wp-content/uploads/2018/03/berg-silva_divulgac3a7c3a3o.jpg', isFeatured: true, price: 34.9, avgRating: 4.4 },
  // eslint-disable-next-line
  { id: 1, title: 'PCQ', categoryId: 0, shortDesc: 'Clássico PCQ', fullDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam sint inventore ex enim recusandae quis vero, magni in nam tempora ullam autem distinctio assumenda laboriosam ea similique corrupti fuga adipisci!', img: 'https://img.itdg.com.br/tdg/images/blog/uploads/2017/07/shutterstock_337714676.jpg', isFeatured: true, price: 40.6, avgRating: 4.0 },
  // eslint-disable-next-line
  { id: 2, title: 'Melted', categoryId: 0, shortDesc: 'Hamburger 150g com muito cheddar', fullDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam sint inventore ex enim recusandae quis vero, magni in nam tempora ullam autem distinctio assumenda laboriosam ea similique corrupti fuga adipisci!', img: 'https://catracalivre.com.br/wp-content/uploads/2018/07/lanche-hoppy-melt-duplo-da-mr-hoppy-sion-divulgacao.jpg', isFeatured: true, price: 35.5, avgRating: 4.9 },
  // eslint-disable-next-line
  { id: 3, title: 'Brutus', categoryId: 0, shortDesc: 'Hamburger Angus 300g, alface, cebola roxa...', fullDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam sint inventore ex enim recusandae quis vero, magni in nam tempora ullam autem distinctio assumenda laboriosam ea similique corrupti fuga adipisci!', img: 'https://supermercadosrondon.com.br/guiadecarnes/images/postagens/quer_fazer_hamburger_artesanal_perfeito_2019-05-14.jpg', isFeatured: true, price: 35.5, avgRating: 3.8 },
  // eslint-disable-next-line
  { id: 4, title: 'Angus Prime', categoryId: 0, shortDesc: '2 Burgers Angus com molho especial', fullDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam sint inventore ex enim recusandae quis vero, magni in nam tempora ullam autem distinctio assumenda laboriosam ea similique corrupti fuga adipisci!', img: 'https://snapplace.com.br/wp-content/uploads/2020/12/guia-do-hamburguer-sanduiche-1590607899872_v2_1920x1231.jpg', isFeatured: false, price: 28.6, avgRating: 4.0 },
  // eslint-disable-next-line
  { id: 5, title: 'Vegan', categoryId: 0, shortDesc: 'Hamburger vegetariano', fullDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam sint inventore ex enim recusandae quis vero, magni in nam tempora ullam autem distinctio assumenda laboriosam ea similique corrupti fuga adipisci!', img: 'https://s2.glbimg.com/tLOSL9w6CI9-pajPUladhxOE4U0=/940x523/e.glbimg.com/og/ed/f/original/2019/06/10/animalchef-3.jpg', isFeatured: false, price: 40.0, avgRating: 3.4 },
  // eslint-disable-next-line
  { id: 6, title: 'Combo Vegan', categoryId: 1, shortDesc: 'Hamburger vegetariano acompanha batata e refrigerante', fullDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam sint inventore ex enim recusandae quis vero, magni in nam tempora ullam autem distinctio assumenda laboriosam ea similique corrupti fuga adipisci!', img: 'https://prehistorico.com.br/wp-content/uploads/2020/09/Combo-Burger-1.jpg', isFeatured: false, price: 65.0, avgRating: 3.4 },
  // eslint-disable-next-line
  { id: 7, title: 'Combo Bacon BBQ', categoryId: 1, shortDesc: 'Hamburger Angus 150g com bacon e molho barbecue', fullDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam sint inventore ex enim recusandae quis vero, magni in nam tempora ullam autem distinctio assumenda laboriosam ea similique corrupti fuga adipisci!', img: 'https://duisktnou8b89.cloudfront.net/img/items/5f00e6d31cfa9.png', isFeatured: false, price: 58.0, avgRating: 3.4 },
  // eslint-disable-next-line
  { id: 8, title: 'Combo Supreme Charque', categoryId: 1, shortDesc: 'Hamburger Angus 150g com farofa de carne secae molho especial', fullDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam sint inventore ex enim recusandae quis vero, magni in nam tempora ullam autem distinctio assumenda laboriosam ea similique corrupti fuga adipisci!', img: 'https://i.pinimg.com/originals/24/42/86/244286f070381184b2df403eff50cb54.jpg', isFeatured: false, price: 58.0, avgRating: 3.4 },
  // eslint-disable-next-line
  { id: 9, title: 'Coca lata 350ml', categoryId: 2, shortDesc: '', fullDesc: '', img: 'https://static-webv8.jet.com.br/drogaosuper/produto/multifotos/hd/7894900019834_zoom.jpg', isFeatured: false, price: 8.0, avgRating: 3.4 },
  // eslint-disable-next-line
  { id: 10, title: 'Guaraná Antarctica lata 350ml', categoryId: 2, shortDesc: '', fullDesc: '', img: 'https://cd.shoppub.com.br/cenourao/media/cache/7d/f4/7df4d5eff3efae9299961f143e281750.jpg', isFeatured: false, price: 8.0, avgRating: 3.4 },
  // eslint-disable-next-line
  { id: 11, title: 'Cerveja Becks lata 350ml', categoryId: 2, shortDesc: '', fullDesc: '', img: 'https://emporiodacerveja.vtexassets.com/arquivos/ids/175490/Cerveja-Beck-s-350ml.jpg?v=637141751116770000', isFeatured: false, price: 13.0, avgRating: 3.4 },
  // eslint-disable-next-line
  { id: 12, title: 'Cerveja Eisenbhan lata 350ml', categoryId: 2, shortDesc: '', fullDesc: '', img: 'https://savegnago.vteximg.com.br/arquivos/ids/285576-1000-1000/CERVEJA-EISENBAHN-350ML-LT-PILSEN.jpg?v=636493683969770000', isFeatured: false, price: 12.0, avgRating: 3.4 },
  // eslint-disable-next-line
  { id: 13, title: 'Cerveja Heineken lata 350ml', categoryId: 2, shortDesc: '', fullDesc: '', img: 'https://io2.convertiez.com.br/m/superpaguemenos/shop/products/images/15811/medium/cerveja-heineken-350ml_11025.jpg', isFeatured: false, price: 12.0, avgRating: 3.4 },
  // eslint-disable-next-line
  { id: 14, title: 'Batata frita', categoryId: 3, shortDesc: 'Porção de batatas fritas crocantes', fullDesc: '', img: 'https://www.dinapolipremium.com.br/sistema//media/campobom/produtos/porcao-de-batata,5167_0.jpg', isFeatured: false, price: 15.0, avgRating: 3.4 },
  // eslint-disable-next-line
  { id: 15, title: 'Onion Rings', categoryId: 3, shortDesc: 'Anéis de cebola frita', fullDesc: '', img: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/7f539fc41a5543aebfe03afed73a0b48/BFV9112_MozzarellaStickOnionRings.jpg', isFeatured: false, price: 15.0, avgRating: 3.4 },
  // eslint-disable-next-line
  { id: 16, title: 'Iscas de Frango', categoryId: 3, shortDesc: 'Iscas de frango empanado', fullDesc: '', img: 'https://t1.rg.ltmcdn.com/pt/images/9/8/6/img_tirinhas_de_frango_empanadas_e_assadas_6689_600.jpg', isFeatured: false, price: 15.0, avgRating: 3.4 },
  // eslint-disable-next-line
  { id: 17, title: 'Torta Gelada de Café e Chocolate', categoryId: 4, shortDesc: 'Incrível torta gelada feita com café e chocolate', fullDesc: '', img: 'https://p2.trrsf.com/image/fget/cf/460/0/images.terra.com/2020/09/18/torta-gelada-cafe-chocolate-768x512.jpg', isFeatured: false, price: 15.0, avgRating: 3.4 },
  // eslint-disable-next-line
  { id: 18, title: 'Mousse de Chocolate', categoryId: 4, shortDesc: '', fullDesc: '', img: 'https://topreceitas.com.br/wp-content/uploads/2020/08/Receitas-de-sobremesas-f%C3%A1ceis-1280x720.png', isFeatured: false, price: 15.0, avgRating: 3.4 },
  // eslint-disable-next-line
  { id: 19, title: 'Grand Gateau', categoryId: 4, shortDesc: 'Bolo feito na hora com cobertura de chocolate e sorteve Magnum', fullDesc: '', img: 'https://blog.novasafra.com.br/wp-content/uploads/2017/09/Grand-Gateau.jpg', isFeatured: false, price: 27.0, avgRating: 3.4 }
]

const categories = [
  // eslint-disable-next-line
  { id: 0, description: 'Lanches' },
  // eslint-disable-next-line
  { id: 1, description: 'Combos' },
  // eslint-disable-next-line
  { id: 2, description: 'Bebidas' },
  // eslint-disable-next-line
  { id: 3, description: 'Porções' },
  // eslint-disable-next-line
  { id: 4, description: 'Sobremesas' }
]

const filter = ''

export default {
  items,
  categories,
  filter
}
