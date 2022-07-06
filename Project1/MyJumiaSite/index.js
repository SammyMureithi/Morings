let dash=document.getElementById("menuIcon");
let menuList=document.getElementById("menuList")

clicked=0;
dash.addEventListener("click",function(){
    if(clicked==0){
    menuList.style.display="block"
    clicked+=1
}
else if(clicked==1){
    menuList.style.display="none"
    clicked-=1
}
})
/**
 * 
 * <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="myBody">
    <div class="toMost" id="menuIcon">
        <i class='bx bx-menu'></i>
    </div>
    <div class="menu" id="menuList">
    <div class="header">
        <i class='bx bxl-shopify'></i>
        <h2>My Jumia </h2>
    </div>
<div class="items">
    <div class="item2">
        <input type="text" placeholder="Search...">
    </div>
    <div class="item1" id="item1">
        <i class='bx bxs-dashboard'></i>
        <h2>DashBoard</h2>
    </div>
    <div class="item1">
        <i class='bx bxl-product-hunt'></i>
        <h2>Products</h2>
    </div>
    <div class="item1">
        <i class='bx bx-user-circle'></i>
        <h2>Users</h2>
    </div>
    <div class="item1">
        <i class='bx bxs-chat'></i>
        <h2>Message</h2>
    </div>
    <div class="item1">
        <i class='bx bx-trending-up'></i>
        <h2>Analytics</h2>
    </div>
    
    <div class="item1">
        <i class='bx bxs-cart-alt'></i>
        <h2>Orders</h2>
    </div>
    <div class="item1">
        <i class='bx bxs-virus'></i>
        <h2>Settings</h2>
    </div>
    <div class="myProfile">
        <div class="myPic">
            <img src="Images/mypic.jpg" alt="">
        </div>
        <div class="myPersonProfile">
            <div class="myName">
                <p>Sammy Mureithi</p>
            </div>
            <div class="myRole">
                <p>Manager</p>
            </div>
            <div class="logOut">
                <i class='bx bx-log-in'></i>
            </div>
        </div>
        
    </div>


</div>
</div>
    </div>
<div class="Top">
    <i class='bx bxl-shopify'></i>
    <h2>My Jumia </h2>
</div>
    </div>
   
    <script src="index.js"></script>
</body>
</html>
 */