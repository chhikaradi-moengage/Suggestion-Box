# AngularJS 4 Pagination Component
This is a typeahead written in AngularJS 4 and Bootstrap using various events like ngModelChange, focus, click etc.

### Features
1. Can be used to select cities.
2. Populate cities dynamically based on user input.
3. Shows metadata like state and country of cities.

### How it works?
You have to dataArr and it will be ready for use. Sample data is shown below.
```
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
```

You can write your code to something after selecting a city in the following function:-
```
setSelectedCity(obj) {
        this.selectedCity = obj;
        this.cityToSearch = obj.city || '';
        this.selectedCities = [];
        
        // write your code here after selecting a city
        
    }
```

### How to run on local
Follow these steps
1. git clone git@github.com:chhikaradi21/Suggestion-Box.git
2. cd Suggestion-Box
3. npm install(using node version 6)
4. ng serve
5. Access in browser at port 4200 (localhost:4200)

## Further help
1. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.2.
2. Node version 6
