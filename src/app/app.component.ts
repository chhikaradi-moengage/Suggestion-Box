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
            cityString: 'Mumbai, Maharashtra, India',
            selectedClass: ''
        },
        {
            id: '2',
            city: 'Delhi',
            state: 'Delhi',
            country: 'India',
            cityString: 'Delhi, Delhi, India',
            selectedClass: ''
        },
        {
            id: '3',
            city: 'Banglore',
            state: 'Karnataka',
            country: 'India',
            cityString: 'Banglore, Karnataka, India',
            selectedClass: ''
        },
        {
            id: '4',
            city: 'Gurgaon',
            state: 'Haryana',
            country: 'India',
            cityString: 'Gurgaon, Haryana, India',
            selectedClass: ''
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

        // write your code here after selecting a city

    }

    onBlur() {
        this.selectedCities = [];
    }

    onFocus() {
        this.setSelectedCities(this.cityToSearch);
    }

    onKeydown(event) {

        var getSelectedCityIndex = function (arr) {
            for (let i = 0; i < arr.length; i += 1) {
                if (arr[i].selectedClass) {
                    return i;
                }
            }
            return -1;
        };

        var checkForArrowKey = function(keyCode, selectedCities) {
            let i;
            let selectedIndex = getSelectedCityIndex(selectedCities);
            if (selectedIndex !== -1) {
                selectedCities[selectedIndex].selectedClass = '';
            }
            if ( keyCode === -1 || (keyCode === 38 && selectedIndex > 0) ) {
                selectedCities[selectedIndex - 1].selectedClass = 'selected-city';
            } else if ( keyCode === -1 || (keyCode === 40 && selectedIndex < (selectedCities.length - 1)) ) {
                selectedCities[selectedIndex + 1].selectedClass = 'selected-city';
            }
        };

        if ( event.keyCode === 27 ) {
            this.selectedCities = [];
        }else if ( event.keyCode === 38 || event.keyCode === 40 ) {
            checkForArrowKey(event.keyCode, this.selectedCities);
        } else if (event.keyCode === 13) {
            var selectedIndex = getSelectedCityIndex(this.selectedCities);
            this.cityToSearch = this.selectedCities[selectedIndex].city;
            this.selectedCities = [];
        }
    }


}
