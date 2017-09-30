import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    selectedCity = {city: '', id: -1};
    cityToSearch = '';
    selectedCities = [];
    dataArr = [
        {
            id: '1',
            city: 'Mumbai',
            state: 'Maharashtra',
            country: 'India',
            cityString: 'Mumbai, Maharashtra, India'
        },
        {
            id: '2',
            city: 'Delhi',
            state: 'Delhi',
            country: 'India',
            cityString: 'Delhi, Delhi, India'
        },
        {
            id: '3',
            city: 'Banglore',
            state: 'Karnataka',
            country: 'India',
            cityString: 'Banglore, Karnataka, India'
        },
        {
            id: '4',
            city: 'Gurgaon',
            state: 'Haryana',
            country: 'India',
            cityString: 'Gurgaon, Haryana, India'
        }
    ];

    setSelectedCities(cityName) {
        let i;
        this.selectedCities = [];
        if (!cityName) {
            this.selectedCities = this.dataArr;
            return 0;
        }
        for (i = 0; i < this.dataArr.length; i++) {
            if (this.dataArr[i].city.toLowerCase().indexOf(cityName.toLowerCase()) !== -1) {
                this.selectedCities.push(this.dataArr[i]);
            }
        }
    }

    setSelectedCity(obj) {
        this.selectedCity = obj;
        this.cityToSearch = obj.city || '';
        this.selectedCities = [];
    }

    onBlur() {
        this.selectedCities = [];
    }

    onFocus() {
        this.setSelectedCities(this.cityToSearch);
    }


}
