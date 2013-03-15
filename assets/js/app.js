var names = ['aries.png', 'tauro.png', 'geminis.png', 'cancer.png', 'leo.png', 'virgo.png', 'libra.png', 'scorpio.png', 'sagitario.png', 'capricornio.png', 'acuario.png', 'piscis.png'];
var paths = {images : 'assets/images/', thumbs: 'assets/images/thumbs/', js : 'assets/js/', css : 'assets/css/'};

function albumController($scope){

	$scope.images = [
		{image : paths.images + names[0], thumbnail: paths.thumbs + names[0], description: 'lorem ipsum aries ', title: 'aries' },
		{image : paths.images + names[1], thumbnail: paths.thumbs + names[1], description: 'lorem ipsum tauro', title: 'tauro'  },
		{image : paths.images + names[2], thumbnail: paths.thumbs + names[2], description: 'lorem ipsum geminis', title: 'geminis'  },
		{image : paths.images + names[3], thumbnail: paths.thumbs + names[3], description: 'lorem ipsum cancer', title: 'cancer'  },
		{image : paths.images + names[4], thumbnail: paths.thumbs + names[4], description: 'lorem ipsum leo', title: 'leo'  },
		{image : paths.images + names[5], thumbnail: paths.thumbs + names[5], description: 'lorem ipsum virgo', title: 'virgo'  },
		{image : paths.images + names[6], thumbnail: paths.thumbs + names[6], description: 'lorem ipsum libra' , title: 'libra'  },
		{image : paths.images + names[7], thumbnail: paths.thumbs + names[7], description: 'lorem ipsum scorpio', title: 'scorpio'  },
		{image : paths.images + names[8], thumbnail: paths.thumbs + names[8], description: 'lorem ipsum sagitario', title: 'sagitario'  },
		{image : paths.images + names[9], thumbnail: paths.thumbs + names[9], description: 'lorem ipsum capricornio', title: 'capricornio'  },
		{image : paths.images + names[10], thumbnail: paths.thumbs + names[10], description: 'lorem ipsum acuario', title: 'acuario'  },
		{image : paths.images + names[11], thumbnail: paths.thumbs + names[11], description: 'lorem ipsum piscis', title: 'piscis'  }
	];

	$scope.currentImage = _.first($scope.images);

	$scope.setCurrentImage = function(image){
		$scope.currentImage = image;
	}

}