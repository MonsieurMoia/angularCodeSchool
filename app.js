(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(tab){
      this.tab = tab;
    };

    this.isSet = function(tab){
      return (this.tab === tab);
    };
  });

  app.controller('GalleryController', function(){
    this.current = 0;

    this.setCurrent = function(index){
      this.current = index;
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};
    
    this.addReview = function(product){
    	product.reviews.push(this.review);
      	this.review = {};
    };
  });

  var gems = [
    {
      name: 'Azurite',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
        "http://www.catzia.com/SMCosplay-RedGemBrooch.jpg",
        "http://1.bp.blogspot.com/-6pJRvsalG38/TWJHh2NC53I/AAAAAAAAANw/ojxIRscg7Yo/s1600/bigstock_Beautiful_Red_Gem_1432311.jpg",
        "http://1.bp.blogspot.com/_EzTyy2fT6AQ/SY-6LvMtyaI/AAAAAAAAAJw/sH9DGOccbwI/s400/Elongated-Trillium-Red-Spinel1e.gif"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Bloodstone',
      description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
      shine: 9,
      price: 22.90,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
        "http://www.gemlab.co.in/Gem%20Images/BlueSapphire1.jpg",
        "http://www.extremefx.net/diamonds/gem_blue01.jpg",
        "http://www.gemselect.com/photos/sapphire/sapphire-gem-223429a.jpg",
      ],
      reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Any gem with 12 faces is for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Zircon',
      description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
      shine: 70,
      price: 1100,
      rarity: 2,
      color: '#000',
      faces: 6,
      images: [
        "http://gemstoneguru.com/wp-content/uploads/2012/05/Amethyst_AGTA_1.png",
        "http://www.palagems.com/Images/gem_news/featured_tourm_purple_16.jpg",
        "http://mobugems.com/wp-content/uploads/2013/12/purpspinel.jpg"
      ],
      reviews: [{
        stars: 1,
        body: "This gem is WAY too expensive for its rarity value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "BBW: High Shine != High Quality.",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Don't waste your rubles!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }]
    }
  ];
})();
