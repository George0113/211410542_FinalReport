function change(index){

    const p = document.querySelector('.show-classdemo');
    console.log('p', p);


    switch(index){
        case 1:
              p.innerHTML = `<iframe src="./demo/w01_42/index.html" width=100% height=100% />`
              break
        case 2:
              p.innerHTML = `<iframe src="./demo/w02_42/card_42_1.html" width=100% height=100% />`
              break
        case 3:
              p.innerHTML = `<iframe src="./demo/w04_42/w04_42.html" width=100% height=100% />`
              break
        case 4:
              p.innerHTML = `<iframe src="./demo/w06_42/w06_42.html" width=100% height=100% />`
              break 
    }


}