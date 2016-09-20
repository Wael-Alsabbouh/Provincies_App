function provinceCard(){
	return{
		restrict :"E",
		controller:'mainController',
		template:`<div class="container province_container">
					<div ng-repeat='province in provinces|filter:searching' class='col-md-12 province_style'>
                    <img class="prov_img" ng-src='{{province.image}}' alt="{{province.name}}">
                    <h3>{{province.name}}</h3>
                    <h5>{{province.description}}</h5>
                    <h3>{{province.capital.name}}</h3>
                    <h5>{{province.capital.description}}</h5>
                    </div>`
	};
}