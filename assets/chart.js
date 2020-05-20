d3.json("https://covidtracking.com/api/v1/states/daily.json").then(function(data, err) {
    if (err) throw err;
    
    console.log(data);
    desired_keys = ["state", "positive", "totalTestResults"];

    data.forEach(function(d){
        console.log(d.state);
    })

    
});

d3.json("https://covidtracking.com/api/v1/states/current.json").then(function(data, err) {
    if (err) throw err;
    
    console.log(data);

    
});

d3.json("https://api.census.gov/data/2019/pep/population?get=STATE,POP,NAME&for=state:*").then(function(data, err) {
    if (err) throw err;
    
    console.log(data);

    
});


d3.json("https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json").then(function(data, err) {
    if (err) throw err;
    
    console.log(data);

    
});