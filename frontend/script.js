// function in bracket is called self revoking function no need to call the function
// (function foo(){
//     console.log("Self revoking function");
//     document.getElementById("tag1").innerHTML="Content uploaded"
// })();

// function foo(){
//     console.log("Self revoking function");
    
//     document.getElementById("tag1").innerHTML="Content uploaded";
//     // document.getElementById("tag2").innerHTML="Content uploaded";
    
// }

// foo();
// // setTimeout(() => {
// //     console.log("This is delay message")
// // },200)


var productList=[]

function loadProducts (renderProductListWithData){
    setTimeout(() => { productList= productListFromServer
    renderProductListWithData();
},2000)
   
}

// a function become callback function when it is passed as argument in another function only in that context it is called callback function
// var x=20;
var arr1=[1,2,3,4,5,6];
function renderProduct(){
    // Fetch the data from server
    //convert the daata into html and render it on UI
    // loadProducts();
    document.getElementById('tag2').innerHTML=arr1
    function renderProductListWithData() {
        if(productList.length===0) {document.getElementById("Data").innerHTML="Loading Data from server..."
            return;
        }

        document.getElementById("Data").innerHTML=`  <table >
            <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>Product Name</th>
                    <th> Price</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
               ${productList.map((product,index) => {
                    return `
                        <tr>
                            <td>${index+1}</td>
                            <td>${product.name}</td>
                            <td>${product.price}</td>
                            <td>${product.description}</td>
                        </tr>
                    `
                    
                })}
            </tbody>
        </table>`
    }
    loadProducts(renderProductListWithData);
    renderProductListWithData();
}

// setTimeout(foo,5000);
// setTimeout(renderProducts,2000);
// foo();
// setTimeout(foo,0,"Hello from setTimeout");
// setTimeout(loadData,2000);
renderProduct();
// renderProductListWithData();

// setTimeout with 0 value execute all above process or thread after it execute 

// temperal literals 

