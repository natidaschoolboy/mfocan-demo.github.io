
var transportJob = 0;
var cateringJob=0;
var constructionJob=0;
var beautyJob=0;
var cleaningJob = 0;
var signed = false;
var user;
var pass;
var cpass;
const Jobs = [];
console.log(Jobs);


function businessSupply() {

    document.getElementById("bodycontent").innerHTML =`

    <section style="background: linear-gradient(white, #ff3c00ad);">
    <header style="width:100%" id="#">
    <a class="menu-button" style="width:auto" onclick="mainPage()">Back</a>
        <center><a href=#><img src="https://see.fontimg.com/api/renderfont4/p72nK/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/bUZPQ0FO/dripinkpersonaluse-black.png" alt="Dripping fonts"></a>
         <strong><p style="color: black">Business Supply</p></strong>
        </center>
        
    </header>

    <section class="business-menu" style="height: 80vh;">
       
            <center>
                <form action="#" method="get">
                    <button class="menu-button" onclick="showCatering()"><i class='bx bx-headphone' style='color:white;' ></i>Catering Services</button><br></br>
                    <button class="menu-button" onclick="showTransportation()"><i class='bx bxs-balloon' style='color:white;'  ></i>Transport Services</button><br></br>
                    <button class="menu-button" ><i class='bx bxs-wine' style='color:white;' ></i>Construction Services</button><br></br>
                    <button class="menu-button" onclick="showhealth()"><i class='bx bx-landscape' style='color:white;' ></i>Health & Beauty Services</button><br></br>
                    <button class="menu-button"><i class='bx bxs-plane-land' style='color:white;' ></i>Rental Services</button><br></br>
                    <button class="menu-button"><i class='bx bx-money' style='color:white;' ></i>Retail Services</button><br></br>
                    <button class="menu-button"><i class='bx bxs-plane-land' style='color:white;' ></i>Consulting Services</button><br></br>
                </form>
            </center>
         
      
    </section>
    
     <section  class="end">
    <div class="last-text">
    <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
    </div>

    <div class="top">
        <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
    </div>
</section>
</section>
    `;
    
    
}

function mainPage() {
    document.getElementById("bodycontent").innerHTML=`
     <header style="width:100%" id="#">
     <a onclick="showNewNotifications()" style="font-size: 25px;"><i class='bx bxs-bell'></i></a>
        
        <center><a href=#><img src="https://see.fontimg.com/api/renderfont4/p72nK/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/bUZPQ0FO/dripinkpersonaluse-black.png" alt="Dripping fonts"></a>
         <strong><p style="color: black">System Integrations</p></strong>
        </center>

    </header>
    <section class="menu-body" style="padding-bottom: 30px; width: 100%;">
        <center>
       
        <div class="menu-content">
          
            <a  id="business-supply" onclick="businessSupply()">
             <div class="row">
                 <img src="bus.png">
                 <div class="layer">
                     <h5 style="color: black;">BUSINESS SUPPLY</h5>
                 </div>
             </div>
            </a>
 
            <a onclick="businessAd()">
             <div class="row">
                 <img src="ad.jpg">
                 <div class="layer">
                    
                 </div>
             </div>
            </a>
         
 
            <a onclick="requestPage()">
             <div class="row">
                 <img src="SERV.jpeg">
                 <div class="layer">
                     <h5 style="color: black;">SERVICE REQUEST</h5>
                 </div>
             </div>
            </a>
 
            <a onclick="showServices()">
             <div class="row">
                 <img src="tender.jpeg">
                 <div class="layer">
                     <h5 style="color: black;">TENDER</h5>
                 </div>
             </div>
            </a>
       
 
         </div>
        </center>
    </section>

     <section  class="end">
    <div class="last-text">
    <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
    </div>

    <div class="top">
        <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
    </div>
</section>
    `;
    
}

function businessAd() {
    document.getElementById("bodycontent").innerHTML=`
    <section class="backgrd">
    <header style="width:100%" id="#">
   <a class="menu-button" style="width:auto" onclick="mainPage()">Back</a>
        <center><a href=#><img src="https://see.fontimg.com/api/renderfont4/p72nK/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/bUZPQ0FO/dripinkpersonaluse-black.png" alt="Dripping fonts"></a>
         <strong><p style="color: black">Business Advertising</p></strong>
        </center>
         
    </header>

    <section class="business-menu" style="height: 80vh;">
        <center>
            <form action="#" method="get">
                <button class="menu-button" onclick="showMusic()"><i class='bx bx-headphone' style='color:white;' ></i>Music</button><br></br>
                <button class="menu-button"><i class='bx bxs-balloon' style='color:white;'  ></i> Entertainment</button><br></br>
                <button class="menu-button" onclick="showEvents()" ><i class='bx bxs-wine' style='color:white;' ></i>Events</button><br></br>
                <button class="menu-button"><i class='bx bx-landscape' style='color:white;' ></i>ART</button><br></br>
                <button class="menu-button" onclick="showTravel()"><i class='bx bxs-plane-land' style='color:white;' ></i>Travel & Tourism</button><br></br>

                 

            </form>
        </center>
    </section>
    
     <section  class="end">
    <div class="last-text">
    <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
    </div>

    <div class="top">
        <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
    </div>
</section>
</section>
    `;
    
}

function request() {
    var selectElement = document.getElementById("request");
    const jobselected = selectElement.value;

    selectElement = document.getElementById("location");
    const locationselected = selectElement.value;

    selectElement = document.getElementById("schedule");
    const dateselected = selectElement.value;

    
  
    switch (jobselected) {
      case "transport":
         transportJob++;
         Jobs.push({ job: jobselected, location: locationselected, date: dateselected });
        
         showSentScreen();
        break;
      case "construction":
          constructionJob++;
          Jobs.push({ job: jobselected, location: locationselected, date: dateselected });
          //alert('Your request has been sent, await feedback from receiving company');
          showSentScreen();
        break;
        case "beauty":
          beautyJob++;
          Jobs.push({ job: jobselected, location: locationselected, date: dateselected });
          //alert('Your request has been sent, await feedback from receiving company');
          showSentScreen();
        break;
        case "cleaning":
          cleaningJob++;
          Jobs.push({ job: jobselected, location: locationselected, date: dateselected });
          //alert('Your request has been sent, await feedback from receiving company');
          showSentScreen();
        break;
        case "catering":
          cateringJob++;
          Jobs.push({ job: jobselected, location: locationselected, date: dateselected });
          showSentScreen();
        break;
     
      default:
         alert("nothing was selected");
        break;
    }
    
    console.log("Selected value:", selectedValue); 
      
}
function showThumbsUp() {
    const thumbsUpContainer = document.getElementById('thumbs-up-container');
    thumbsUpContainer.style.display = 'block';

    // Hide the GIF after 2 seconds
    setTimeout(() => {
        thumbsUpContainer.style.display = 'none';
    }, 2000);
}





function requestPage() {

    document.getElementById("bodycontent").innerHTML=`
    <section style="background: linear-gradient(rgb(214, 22, 22), #ff3c00ad);">
    <header style="width:100%" id="#">
        <a class="menu-button" style="width:auto" onclick="mainPage()">Back</a>
        <center><h1 style="font-size: 50px;">BUSINESS</h1> 
            <strong><p style="color: black">TENDER REQUEST</p></strong>
        </center>

    </header>

    <section class="business-menu" style="height: 80vh;">
       
        <center>
            <form action="#" method="get" style="padding-top:30px;">
                <h4 style="width: 400px;">TYPE OF BUSINESS REQUEST</h4>
                <select name="request" id="request" style="width: 350px; color: BLACK; border-style: none; height: 40px; border-radius: 5px">
                    <option value="transport">TRANSPORT</option>
                    <option value="construction">CONSTRUCTION</option>
                    <option value="beauty">BEAUTY</option>
                    <option value="cleaning">CLEANING</option>
                    <option value="catering">CATERING</option>
                </select>
                <br></br>
                <h4 style="width: 400px; align-self: left;">TYPE OF SERVICE        </h4>
                <select name="service" id="service"  style="width: 350px; color:BLACK; border-style: none; height: 40px; border-radius: 5px;">
                    <option value="goods removal">GOODS REMOVAL</option>
                    <option value="welding">WELDING</option>
                    <option value="make up artist">MAKE UP ARTIST</option>
                    <option value="car wash">CAR WASH</option>
                </select>
                <br></br>
                <h4 style="width: 400px;">PRODUCT SCOPE</h4>
                <select name="scope" id="scope"  style="width: 350px; color: BLACK; border-style: none; height: 40px; border-radius: 5px;">
                    <option value="Furniture">FURNITURE</option>
                    <option value="Budglers">BUDGLERS</option>
                    <option value="Manicure">MANICURE</option>
                    <option value="Valet">VALET</option>
                </select>

                <br></br>
                <h4 style="width: 400px;">LOCATION</h4>
                <select name="location" id="location"  style="width: 350px; color:BLACK; border-style: none; height: 40px; border-radius: 5px;" required>
                    <option value="Gauteng">GAUTENG</option>
                    <option value="Free State">FREE STATE</option>
                    <option value="North West">NORTH WEST</option>
                    <option value="Eastern Cape">EASTERN CAPE</option>
                    <option value="Western Cape">WESTERN CAPE</option>
                    <option value="Northern Cape">NORTHERN CAPE</option>
                    <option value="Limpopo">LIMPOPO</option>
                    <option value="KwaZulu-Natal">KWAZULU-NATAL</option>
                    <option value="Mpumalanga">MPUMALANGA</option>
                </select>
                <br></br>
                <h4 style="width: 400px;">SCHEDULE</h4>
                <input type="datetime-local" name="schedule" id="schedule" style="width: 350px; color:BLACK; border-style: none; height: 40px; border-radius: 5px;" required >
                <br></br>
                <a class="menu-button" style="width: 250px;" onclick="request()">REQUEST</a>

                

            </form>
            
        </center>
            
        
     
  
</section>

    <section  class="end">
        <div class="last-text">
        <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
        </div>
    
        <div class="top">
            <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
        </div>
    </section>
</section>
    `;
    
}

function showCatering() {

    document.getElementById("bodycontent").innerHTML=`
    <section style="background: linear-gradient(white, #ff3c00ad);">
    <header style="width:100%" id="#">
   <a class="menu-button" style="width:auto" onclick="businessSupply()">Back</a>
        <center><a href=#><img src="https://see.fontimg.com/api/renderfont4/p72nK/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/bUZPQ0FO/dripinkpersonaluse-black.png" alt="Dripping fonts"></a>
         <strong><p style="color: black">Catering Services</p></strong>
        </center>
         
    </header>

    <section class="business-menu" style="height: 80vh;">
        <center>
            <form action="#" method="get">
                <button class="menu-button" onclick="showfastFoods()">Fast-Foods</button><br></br>
                <button class="menu-button">Restaurants</button><br></br>
                <button class="menu-button">Chisanyamas</button><br></br>
                <button class="menu-button">Bakeries</button><br></br>
                <button class="menu-button">Mobile Kitchens</button><br></br>
                <button class="menu-button">Catering Suppliers</button><br></br>
            </form>
        </center>
    </section>
    
     <section  class="end">
    <div class="last-text">
    <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
    </div>

    <div class="top">
        <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
    </div>
</section>
</section>
    `;
    
}
function showfastFoods() {

    document.getElementById("bodycontent").innerHTML=`
    <section style="background: linear-gradient(white, #ff3c00ad);">
    <header style="width:100%" id="#">
   <a class="menu-button" style="width:auto" onclick="showCatering()">Back</a>
        <center><a href=#><img src="https://see.fontimg.com/api/renderfont4/p72nK/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/bUZPQ0FO/dripinkpersonaluse-black.png" alt="Dripping fonts"></a>
         <strong><p style="color: black">Catering Services</p></strong>
        </center>
         
    </header>

    <section class="business-menu" style="height: 80vh;">
        <center>
            <form action="#" method="get">
                <button class="menu-button">Italian Boy<span style="color: green; font-size: 15px;">  Open.</span></button><br></br>
                <button class="menu-button">Dipitseng<span style="color: green; font-size: 15px;">  Open.</button><br></br>
                <button class="menu-button" onclick="showAkwande()">Akwande Lifestyle<span style="color: green; font-size: 15px;">  Open.</button><br></br>
                <button class="menu-button">Dee's Kota<span style="color: green; font-size: 15px;">  Open.</button><br></br>
                <button class="menu-button">Tities Fast Food<span style="color: green; font-size: 15px;">  Open.</button><br></br>
                <button class="menu-button">Flora's Cakes<span style="color: green; font-size: 15px;">  Open.</button><br></br>
            </form>
        </center>
    </section>
    
     <section  class="end">
    <div class="last-text">
    <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
    </div>

    <div class="top">
        <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
    </div>
</section>
</section>
    `;
    
}

function showAkwande() {

    document.getElementById("bodycontent").innerHTML=`
    <section style="background: linear-gradient(rgb(214, 22, 22), #ff3c00ad);">
    <header style="width:100%" id="#">
        <a class="menu-button" style="width:auto" onclick="showfastFoods()">Back</a>
        <center><h1 style="font-size: 50px;">Akwande Lifestyle</h1> 
            <strong><p style="color: black">Catering Services</p></strong>
        </center>

    </header>

    <section class="business-menu" style="height: 80vh;">
        <center>
            <a onclick="alert('This will take you to the contact page')">Contact</a> | 
            <a onclick="alert('This will take you to the Profile Page')">View Profile</a><br>
            <img class="order-image" src="img/burger.jpg" alt=""><br></br>
            <a class="menu-button1" onclick="showSentScreen()">Request Order</a>
            <a class="menu-button1">View Pricelist</a>

        </center>
       
    </section>
       
       

    <section  class="end">
        <div class="last-text">
        <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
        </div>
    
        <div class="top">
            <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
        </div>
    </section>
</section>
    
    `;
    
}

function showTransportation() {

    document.getElementById("bodycontent").innerHTML=`
    <section style="background: linear-gradient(white, #ff3c00ad);">
    <header style="width:100%" id="#">
   <a class="menu-button" style="width:auto" onclick="businessSupply()">Back</a>
        <center><a href=#><img src="https://see.fontimg.com/api/renderfont4/p72nK/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/bUZPQ0FO/dripinkpersonaluse-black.png" alt="Dripping fonts"></a>
         <strong><p style="color: black">Transport Services</p></strong>
        </center>
         
    </header>

    <section class="business-menu" style="height: 80vh;">
        <center>
            <form action="#" method="get">
                <button class="menu-button" onclick="showlocalDeliveries()">Local Deliveries</button><br></br>
                <button class="menu-button">Goods Removal</button><br></br>
                <button class="menu-button" >Local Shuttles</button><br></br>
                <button class="menu-button">Water and Sand Supply</button><br></br>
                <button class="menu-button">Staff Transport</button><br></br>
                <button class="menu-button">Emergency Transport</button><br></br>
            </form>
        </center>
    </section>
    
     <section  class="end">
    <div class="last-text">
    <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
    </div>

    <div class="top">
        <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
    </div>
</section>
</section>
    `;
    
}

function showlocalDeliveries() {

    document.getElementById("bodycontent").innerHTML=`
    <section style="background: linear-gradient(white, #ff3c00ad);">
    <header style="width:100%" id="#">
   <a class="menu-button" style="width:auto" onclick="showTransportation()">Back</a>
        <center><a href=#><img src="https://see.fontimg.com/api/renderfont4/p72nK/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/bUZPQ0FO/dripinkpersonaluse-black.png" alt="Dripping fonts"></a>
         <strong><p style="color: black">Local Deliveries</p></strong>
        </center>
         
    </header>

    <section class="business-menu" style="height: 80vh;">
        <center>
            <form action="#" method="get">
                <button class="menu-button">Busquets</button><br></br>
                <button class="menu-button" onclick="showR8M()">RBM Associated Logistics</button><br></br>
                <button class="menu-button">Moja Deliveries</button><br></br>
                <button class="menu-button">Msiza Integrated</button><br></br>
                <button class="menu-button">PRP 555 Transport</button><br></br>
                <button class="menu-button">Green Scorpion</button><br></br>
            </form>
        </center>
    </section>
    
     <section  class="end">
    <div class="last-text">
    <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
    </div>

    <div class="top">
        <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
    </div>
</section>
</section>
    `;
    
}

function showR8M() {

    document.getElementById("bodycontent").innerHTML=`
    <section style="background: linear-gradient(rgb(214, 22, 22), #ff3c00ad);">
    <header style="width:100%" id="#">
        <a class="menu-button" style="width:auto" onclick="showlocalDeliveries()">Back</a>
        <center><h1 style="font-size: 50px;">RBM ASSOCIATED LOGISTICS</h1> 
            <strong><p style="color: black">Transportation Services</p></strong>
        </center>

    </header>

    <section class="business-menu" style="height: 80vh;">
        <center>
            <a onclick="alert('This will take you to the contact page')">Contact</a> | 
            <a onclick="alert('This will take you to the Profile Page')">View Profile</a> | 
            <a onclick="alert('Choose a date to schedule in')">Schedule</a><br>
            <img class="order-image" src="img/r8m.jpg" alt=""><br></br>
            <a class="menu-button1" onclick="showSentScreen()">Request Transport</a><br></br>
            <a class="menu-button1">View Transportation Pricelist</a>

        </center>
       
    </section>
       
       

    <section  class="end">
        <div class="last-text">
        <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
        </div>
    
        <div class="top">
            <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
        </div>
    </section>
</section>
    
    `;
}

function showZakesHairStudio() {

    document.getElementById("bodycontent").innerHTML=`
    <section style="background: linear-gradient(rgb(214, 22, 22), #ff3c00ad);">
    <header style="width:100%" id="#">
        <a class="menu-button" style="width:auto" onclick="showBarbers()">Back</a>
        <center><h1 style="font-size: 50px;">Zakes Hair Studio</h1> 
            <strong><p style="color: black">Barber</p></strong>
        </center>

    </header>

    <section class="business-menu" style="height: 80vh;">
        <center>
            <a onclick="alert('This will take you to the Contact Page')">Contact</a> | 
            <a onclick="alert('This will take you to the Profile Page')">View Profile</a> | 
            <a onclick="alert('Choose a date to schedule in')">Schedule</a><br>
            <img class="order-image" src="img/barber.jpg" alt=""><br></br>
            <a class="menu-button1" onclick="showSentScreen()">Book Appointment</a><br></br>
            <a class="menu-button1">View Catalog & Pricelist</a>

        </center>
       
    </section>
       
       

    <section  class="end">
        <div class="last-text">
        <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
        </div>
    
        <div class="top">
            <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
        </div>
    </section>
</section>
    
    `;
}
function showBarbers() {

    document.getElementById("bodycontent").innerHTML=`
    <section style="background: linear-gradient(white, #ff3c00ad);">
    <header style="width:100%" id="#">
   <a class="menu-button" style="width:auto" onclick="showhealth()">Back</a>
        <center><a href=#><img src="https://see.fontimg.com/api/renderfont4/p72nK/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/bUZPQ0FO/dripinkpersonaluse-black.png" alt="Dripping fonts"></a>
         <strong><p style="color: black">Health & Beauty</p></strong>
        </center>
         
    </header>

    <section class="business-menu" style="height: 80vh;">
        <center>
            <form action="#" method="get">
                <button class="menu-button" onclick="showZakesHairStudio()">Zakes Hair Studio</button><br></br>
                <button class="menu-button">Art King Barber</button><br></br>
                <button class="menu-button">Rozzet Nails</button><br></br>
                <button class="menu-button">Douza's Salon</button><br></br>
                <button class="menu-button">Chock Salon</button><br></br>
                <button class="menu-button">Queeneva</button><br></br>
            </form>
        </center>
    </section>
    
     <section  class="end">
    <div class="last-text">
    <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
    </div>

    <div class="top">
        <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
    </div>
</section>
</section>
    `;
    
}
function showhealth() {

    document.getElementById("bodycontent").innerHTML=`
    <section style="background: linear-gradient(white, #ff3c00ad);">
    <header style="width:100%" id="#">
   <a class="menu-button" style="width:auto" onclick="businessSupply()">Back</a>
        <center><a href=#><img src="https://see.fontimg.com/api/renderfont4/p72nK/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/bUZPQ0FO/dripinkpersonaluse-black.png" alt="Dripping fonts"></a>
         <strong><p style="color: black">Health & Beauty</p></strong>
        </center>
         
    </header>

    <section class="business-menu" style="height: 80vh;">
        <center>
            <form action="#" method="get">
                <button class="menu-button" onclick="showBarbers()">Barbers</button><br></br>
                <button class="menu-button">Salon's</button><br></br>
                <button class="menu-button">Make-up Artists</button><br></br>
                <button class="menu-button">Spa Treatments</button><br></br>
                <button class="menu-button">Health Products</button><br></br>
                <button class="menu-button">Healthy Lifestyle</button><br></br>
            </form>
        </center>
    </section>
    
     <section  class="end">
    <div class="last-text">
    <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
    </div>

    <div class="top">
        <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
    </div>
</section>
</section>
    `;
    
}
function showKwaNdebele() {
    document.getElementById("bodycontent").innerHTML=`
    <section class="backgrd">
    <header style="width:100%" id="#">
        <a class="menu-button" style="width:auto" onclick="showEvents()">Back</a>
        <center><h1 style="font-size: 50px;">KwaNdebele Festive Friends</h1> 
            <strong><p style="color: black">KFF EVENT</p></strong>
        </center>

    </header>

    <section class="business-menu" style="height: 80vh;">
        <center>
            <a>Trends</a> | 
            <a onclick="alert('This will take you to the Profile Page')">View Profile</a> | 
            <a>Location</a><br>
            <img class="order-image" src="img/club.jpg" alt=""><br></br>
            <a class="menu-button1" onclick="showSentScreen()">Request Bookings</a><br></br>
            <a class="menu-button1">Upcoming Events</a>

        </center>
       
    </section>
       
       

    <section  class="end">
        <div class="last-text">
        <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
        </div>
    
        <div class="top">
            <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
        </div>
    </section>
</section>
    
    `;
}
function showEvents() {

    document.getElementById("bodycontent").innerHTML=`
    <section class="backgrd">
    <header style="width:100%" id="#">
   <a class="menu-button" style="width:auto" onclick="businessAd()">Back</a>
        <center><a href=#><img src="https://see.fontimg.com/api/renderfont4/p72nK/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/bUZPQ0FO/dripinkpersonaluse-black.png" alt="Dripping fonts"></a>
         <strong><p style="color: black">EVENTS</p></strong>
        </center>
         
    </header>

    <section class="business-menu" style="height: 80vh;">
        <center>
            <form action="#" method="get">
                <button class="menu-button" onclick="showSocial()">Social Events</button><br></br>
                <button class="menu-button">Business Seminars</button><br></br>
                <button class="menu-button">Recreational Events</button><br></br>
                <button class="menu-button">Religious Events</button><br></br>
                <button class="menu-button">Cultural Events</button><br></br>
                <button class="menu-button">Night Prayer Service</button><br></br>
            </form>
        </center>
    </section>
    
     <section  class="end">
    <div class="last-text">
    <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
    </div>

    <div class="top">
        <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
    </div>
</section>
</section>
    `;
    
}
function showSocial() {

    document.getElementById("bodycontent").innerHTML=`
    <section class="backgrd">
    <header style="width:100%" id="#">
   <a class="menu-button" style="width:auto" onclick="showEvents()">Back</a>
        <center><a href=#><img src="https://see.fontimg.com/api/renderfont4/p72nK/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/bUZPQ0FO/dripinkpersonaluse-black.png" alt="Dripping fonts"></a>
         <strong><p style="color: black">SOCIAL EVENTS</p></strong>
        </center>
         
    </header>

    <section class="business-menu" style="height: 80vh;">
        <center>
            <form action="#" method="get">
                <button class="menu-button">Vintage Events</button><br></br>
                <button class="menu-button" onclick="showKwaNdebele()">KwaNdebele Festive</button><br></br>
                <button class="menu-button">Easter Tournament</button><br></br>
                <button class="menu-button">2K Lifestyle</button><br></br>
                <button class="menu-button">OSWAB events</button><br></br>
                <button class="menu-button">Night Prayer Service</button><br></br>
            </form>
        </center>
    </section>
    
     <section  class="end">
    <div class="last-text">
    <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
    </div>

    <div class="top">
        <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
    </div>
</section>
</section>
    `;
    
}

function showDubai() {
    document.getElementById("bodycontent").innerHTML=`
    <section class="backgrd">
    <header style="width:100%" id="#">
        <a class="menu-button" style="width:auto" onclick="showGuestHouse()">Back</a>
        <center><h1 style="font-size: 50px;">Dubai</h1> 
            <strong><p style="color: black">Guest House</p></strong>
        </center>

    </header>

    <section class="business-menu" style="height: 80vh;">
        <center>
            
            <a onclick="alert('This will take you to the Profile Page')">View Profile</a> | 
            <a onclick="alert('Dubai Guest House has been alerted and they will contact you shortly')">Contact</a><br>
            <img class="order-image" src="img/dubai.jpg" alt=""><br></br>
            <a class="menu-button1" onclick="showSentScreen()">Book Reservations</a><br></br>
            <a class="menu-button1">View Pricelist</a>

        </center>
       
    </section>
       
       

    <section  class="end">
        <div class="last-text">
        <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
        </div>
    
        <div class="top">
            <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
        </div>
    </section>
</section>
    
    `;
}
function showTravel() {

    document.getElementById("bodycontent").innerHTML=`
    <section class="backgrd">
    <header style="width:100%" id="#">
   <a class="menu-button" style="width:auto" onclick="businessAd()">Back</a>
        <center><a href=#><img src="https://see.fontimg.com/api/renderfont4/p72nK/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/bUZPQ0FO/dripinkpersonaluse-black.png" alt="Dripping fonts"></a>
         <strong><p style="color: black">EVENTS</p></strong>
        </center>
         
    </header>

    <section class="business-menu" style="height: 80vh;">
        <center>
            <form action="#" method="get">
                <button class="menu-button" onclick="showPubsAndGrills()">Pubs and Grills</button><br></br>
                <button class="menu-button">Lodges</button><br></br>
                <button class="menu-button">Resorts</button><br></br>
                <button class="menu-button" onclick="showGuestHouse()">Guest Houses</button><br></br>
                <button class="menu-button">Bed & Breakfast</button><br></br>
                <button class="menu-button">Holiday INN</button><br></br>
            </form>
        </center>
    </section>
    
     <section  class="end">
    <div class="last-text">
    <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
    </div>

    <div class="top">
        <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
    </div>
</section>
</section>
    `;
    
}
function showPubsAndGrills() {

    document.getElementById("bodycontent").innerHTML=`
    <section class="backgrd">
    <header style="width:100%" id="#">
   <a class="menu-button" style="width:auto" onclick="showTravel()">Back</a>
        <center><a href=#><img src="https://see.fontimg.com/api/renderfont4/p72nK/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/bUZPQ0FO/dripinkpersonaluse-black.png" alt="Dripping fonts"></a>
         <strong><p style="color: black">Pubs and Grills</p></strong>
        </center>
         
    </header>

    <section class="business-menu" style="height: 80vh;">
        <center>
            <form action="#" method="get">
                <button class="menu-button">Craven A</button><br></br>
                <button class="menu-button">Jimmy's Pub and Grill</button><br></br>
                <button class="menu-button">Florence Palms</button><br></br>
                <button class="menu-button">Enkandla</button><br></br>
                <button class="menu-button">Maiphephi</button><br></br>
                <button class="menu-button">Amongst Us</button><br></br>
            </form>
        </center>
    </section>
    
     <section  class="end">
    <div class="last-text">
    <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
    </div>

    <div class="top">
        <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
    </div>
</section>
</section>
    `;
    
}
function showGuestHouse() {

    document.getElementById("bodycontent").innerHTML=`
    <section class="backgrd">
    <header style="width:100%" id="#">
   <a class="menu-button" style="width:auto" onclick="showTravel()">Back</a>
        <center><a href=#><img src="https://see.fontimg.com/api/renderfont4/p72nK/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/bUZPQ0FO/dripinkpersonaluse-black.png" alt="Dripping fonts"></a>
         <strong><p style="color: black">Guest Houses</p></strong>
        </center>
         
    </header>

    <section class="business-menu" style="height: 80vh;">
        <center>
            <form action="#" method="get">
                <button class="menu-button" onclick="showDubai()">Dubai</button><br></br>
            </form>
        </center>
    </section>
    
     <section  class="end">
    <div class="last-text">
    <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
    </div>

    <div class="top">
        <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
    </div>
</section>
</section>
    `;
    
}

function showGabbana() {
    document.getElementById("bodycontent").innerHTML=`
    <section class="backgrd">
    <header style="width:100%" id="#">
        <a class="menu-button" style="width:auto" onclick="showDJProducer()">Back</a>
        <center><h1 style="font-size: 50px;">Gabbana</h1> 
            <strong><p style="color: black">DJ and Producer</p></strong>
        </center>

    </header>

    <section class="business-menu" style="height: 80vh;">
        <center>
            <a>Music Updates</a> | 
            <a onclick="alert('This will take you to the Profile Page')">View Profile</a> | 
            <a onclick="alert('Dubai Guest House has been alerted and they will contact you shortly')">Contact</a><br>
            <img class="order-image" src="img/Gabanna.jpg" alt=""><br></br>
            <a class="menu-button1" onclick="showSentScreen()" style="color: green; border-color: green;">Book Gabbana</a><br></br><br></br>
            <a class="menu-button1">Gabbana - Deep Sessions Vol 1</a><br></br>
            <a class="menu-button1">Gabbana - Deep Sessions Vol 2</a><br></br>
            <a class="menu-button1">Gabbana - Deep Sessions Vol 3</a><br></br>
            <a class="menu-button1">Gabbana - Deep Sessions Vol 4</a><br></br>
            
          
        </center>
       
    </section>
       
       

    <section  class="end">
        <div class="last-text">
        <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
        </div>
    
        <div class="top">
            <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
        </div>
    </section>
</section>
    
    `;
}

function showMusic() {

    document.getElementById("bodycontent").innerHTML=`
    <section class="backgrd">
    <header style="width:100%" id="#">
   <a class="menu-button" style="width:auto" onclick="businessAd()">Back</a>
        <center><a href=#><img src="https://see.fontimg.com/api/renderfont4/p72nK/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/bUZPQ0FO/dripinkpersonaluse-black.png" alt="Dripping fonts"></a>
         <strong><p style="color: black">Local Music</p></strong>
        </center>
         
    </header>

    <section class="business-menu" style="height: 80vh;">
        <center>
            <form action="#" method="get">
                <button class="menu-button">Music Producers</button><br></br>
                <button class="menu-button" onclick="showDJProducer()">DJ and Producer</button><br></br>
                <button class="menu-button">Deejays</button><br></br>
                <button class="menu-button">Artists/Vocalists</button><br></br>
                <button class="menu-button">Collaboration</button><br></br>
                <button class="menu-button">Record Labels</button><br></br>
            </form>
        </center>
    </section>
    
     <section  class="end">
    <div class="last-text">
    <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
    </div>

    <div class="top">
        <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
    </div>
</section>
</section>
    `;
    
}
function showDJProducer() {

    document.getElementById("bodycontent").innerHTML=`
    <section class="backgrd">
    <header style="width:100%" id="#">
   <a class="menu-button" style="width:auto" onclick="showMusic()">Back</a>
        <center><a href=#><img src="https://see.fontimg.com/api/renderfont4/p72nK/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/bUZPQ0FO/dripinkpersonaluse-black.png" alt="Dripping fonts"></a>
         <strong><p style="color: black">DJ and Producers</p></strong>
        </center>
         
    </header>

    <section class="business-menu" style="height: 80vh;">
        <center>
            <form action="#" method="get">
                <button class="menu-button" onclick="showGabbana()">Gabbana</button><br></br>
                <button class="menu-button">Fatso89</button><br></br>
                <button class="menu-button">KnightSA</button><br></br>
                <button class="menu-button">MabokoSA</button><br></br>
                <button class="menu-button">Saizo Dikota</button><br></br>
                <button class="menu-button">Marcus Deep SA</button><br></br>
            </form>
        </center>
    </section>
    
     <section  class="end">
    <div class="last-text">
    <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
    </div>

    <div class="top">
        <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
    </div>
</section>
</section>
    `;
    
}

function showServices() {

    var content='';
    content +=`
    <section style="background: linear-gradient(rgb(243, 234, 234), #42231aad);">
    <header style="width:100%" id="#">
        <a class="menu-button" style="width:auto" onclick="mainPage()">Back</a>
        <center><h1 style="font-size: 30px;">NOTIFICATIONS</h1> 
            <strong><p style="color: black">Services Available</p></strong>
        </center>

    </header>

    <section class="business-menu" style="height: 80vh;">
        <center>
            <a class="notification-button" onclick="showAvailableCateringJobs()">CATERING      (`+cateringJob+`)</a><br></br>
            <a class="notification-button" onclick="showAvailableTransportJobs()">TRANSPORT     (`+transportJob+`)</a><br></br>
            <a class="notification-button" onclick="showAvailableConstructionJobs()">CONSTRUCTION  (`+constructionJob+`)</a><br></br>
            <a class="notification-button" onclick="showAvailableBeautyJobs()">BEAUTY        (`+beautyJob+`)</a><br></br>
            <a class="notification-button" onclick="showAvailableCleaningJobs()">CLEANING      (`+cleaningJob+`)</a><br></br>
        </center>
       
    </section>
       
       

    <section  class="end">
        <div class="last-text">
        <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
        </div>
    
        <div class="top">
            <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
        </div>
    </section>
</section>
    `;

    document.getElementById("bodycontent").innerHTML=content;
    
}

function showNewNotifications() {
    var content='';
    content +=`<section style="background: linear-gradient(rgb(243, 234, 234), #42231aad);">
    <header style="width:100%" id="#">
        <a class="menu-button" style="width:auto" onclick="mainPage()">Back</a>
        <center><h1 style="font-size: 30px;">NOTIFICATIONS</h1> 
            <strong><p style="color: black">New Notifications</p></strong>
        </center>

    </header>

    <section class="business-menu" style="height: 80vh;">
        <center>
            <a><i class='bx bxs-bell'></i><Strong style="font-size: 20px;">5 UPCOMING EVENTS</Strong><br>
            <span style="font-size: 14px;">Mpumalanga, LIBANGENI   </span><a style="font-size: 15px; height: 15px; width: 10px;" class="menu-button">View More</a></a><br></br><br></br>

            <a><i class='bx bxs-bell'></i><Strong style="font-size: 20px;">7 MFOCAN BUSINESS IDENTIFIED</Strong><br>
                <span style="font-size: 14px;">Mpumalanga, LIBANGENI   </span><a style="font-size: 15px; height: 15px; width: 10px;" class="menu-button">View</a></a><br></br><br></br>
            
            <a><i class='bx bxs-bell'></i><Strong style="font-size: 20px;">TENDER ALLOCATED TO @BUS V...</Strong><br>
                 <a style="font-size: 15px; height: 15px; width: 10px; align-items: right;" class="menu-button">View</a></a><br></br><br></br>

                 <a><i class='bx bxs-bell'></i><Strong style="font-size: 20px;">CONSTRUCTION TENDER</Strong><br>
                    <span style="font-size: 14px; color: green;"><strong>AVAILABLE   </strong></span>
                    
                    <span style="font-size: 14px;">-Mpumalanga, Libangeni         </span><a style="font-size: 15px; height: 15px; width: 10px;" class="menu-button">View</a></a><br></br><br></br>5

            
        </center>
       
    </section>
       
       

    <section  class="end">
        <div class="last-text">
        <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
        </div>
    
        <div class="top">
            <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
        </div>
    </section>
</section>

    `;

    document.getElementById("bodycontent").innerHTML=content;
    
}

function showAvailableTransportJobs() {
    var content='';
    content +=`
    <section style="background: linear-gradient(rgb(243, 234, 234), #42231aad);">
    <header style="width:100%" id="#">
        <a class="menu-button" style="width:auto" onclick="mainPage()">Back</a>
        <center><h1 style="font-size: 30px;">NOTIFICATIONS</h1> 
            <strong><p style="color: black">New Notifications</p></strong>
        </center>
        
        

    </header>

    <section class="business-menu">
        <center>`;

        if (Jobs.length>0) {
            Jobs.forEach(job => {
                if (job.job=='transport') {
                    content+=`<div style="font-size: 15px;" class="menu-button1">
                    <img src="img/pfp.jpg" class="circle-image"><br>
                    <p>Tender From:  ${user}</p>
                    <p>Service: Transport</p>
                    <p>Location: ${job.location}<br>Date: ${job.date}</p><br>
                     <a style="background-color: green; font-size: 25px" class="menu-button" onclick="removetrans()">Accept Job</a> | <a onclick="removetrans()" style="background-color: Red;font-size: 25px" class="menu-button">Deny Job</a><br/>
                </div><br>`;
                    
                }
                
              
            });
            
        } else {

            content+=`<h1>They are no available jobs for this category</h1>`;
            
        }

        content+=`</center>
       
    </section>
       
       

    <section  class="end">
        <div class="last-text">
        <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
        </div>
    
        <div class="top">
            <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
        </div>
    </section>
</section>`;
            
            

    document.getElementById("bodycontent").innerHTML=content;
    
}

function removetrans() {
    transportJob--;
if (Jobs.length > 0) {
    const index = Jobs.findIndex(job => job.job === 'transport');
    if (index !== -1) {
        Jobs.splice(index, 1); // Remove the element at the found index
    }
}

showAvailableTransportJobs(); 
}

function showAvailableCleaningJobs() {
    var content='';
    content +=`
    <section style="background: linear-gradient(rgb(243, 234, 234), #42231aad);">
    <header style="width:100%" id="#">
        <a class="menu-button" style="width:auto" onclick="mainPage()">Back</a>
        <center><h1 style="font-size: 30px;">NOTIFICATIONS</h1> 
            <strong><p style="color: black">New Notifications</p></strong>
        </center>
        
        

    </header>

    <section class="business-menu">
        <center>`;

        if (Jobs.length>0) {
            Jobs.forEach(job => {
                if (job.job=='cleaning') {
                    content+=`<div style="font-size: 20px;" class="menu-button1">
                    <img src="img/pfp.jpg" class="circle-image"><br>
                    <p>Tender From:  ${user}</p>
                    <p>Service: Cleaning</p>
                    <p>Location: ${job.location}| Date: ${job.date}</p><br>
                     <a style="background-color: green; font-size: 25px" class="menu-button" onclick="removeclean()">Accept Job</a> | <a onclick="removeclean()" style="background-color: Red;font-size: 25px" class="menu-button">Deny Job</a><br/>
                </div><br>`;
                    
                }
                
              
            });
            
        } else {

            content+=`<h1>They are no available jobs for this category</h1>`;
            
        }

        content+=`</center>
       
    </section>
       
       

    <section  class="end">
        <div class="last-text">
        <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
        </div>
    
        <div class="top">
            <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
        </div>
    </section>
</section>`;
            
            

    document.getElementById("bodycontent").innerHTML=content;
    
}
function removeclean() {
    cleaningJob--;
if (Jobs.length > 0) {
    const index = Jobs.findIndex(job => job.job === 'cleaning');
    if (index !== -1) {
        Jobs.splice(index, 1); // Remove the element at the found index
    }
}

showAvailableCleaningJobs(); 
}

function showAvailableBeautyJobs() {
    var content='';
    content +=`
    <section style="background: linear-gradient(rgb(243, 234, 234), #42231aad);">
    <header style="width:100%" id="#">
        <a class="menu-button" style="width:auto" onclick="mainPage()">Back</a>
        <center><h1 style="font-size: 30px;">NOTIFICATIONS</h1> 
            <strong><p style="color: black">New Notifications</p></strong>
        </center>
        
        

    </header>

    <section class="business-menu">
        <center>`;

        if (Jobs.length>0) {
            Jobs.forEach(job => {
                if (job.job=='beauty') {
                    content+=`<div style="font-size: 20px;" class="menu-button1">
                    <img src="img/pfp.jpg" class="circle-image"><br>
                    <p>Tender From:  ${user}</p>
                    <p>Service: Beauty</p>
                    <p>Location: ${job.location}| Date: ${job.date}</p><br>
                     <a style="background-color: green; font-size: 25px" class="menu-button" onclick="removebeauty()">Accept Job</a> | <a onclick="removebeauty()" style="background-color: Red;font-size: 25px" class="menu-button">Deny Job</a><br/>
                </div><br>`;
                    
                }
                
              
            });
            
        } else {

            content+=`<h1>They are no available jobs for this category</h1>`;
            
        }

        content+=`</center>
       
    </section>
       
       

    <section  class="end">
        <div class="last-text">
        <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
        </div>
    
        <div class="top">
            <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
        </div>
    </section>
</section>`;
            
            

    document.getElementById("bodycontent").innerHTML=content;
    
}
function removebeauty() {
    beautyJob--;
if (Jobs.length > 0) {
    const index = Jobs.findIndex(job => job.job === 'beauty');
    if (index !== -1) {
        Jobs.splice(index, 1); // Remove the element at the found index
    }
}

showAvailableBeautyJobs(); 
}

function showAvailableCateringJobs() {
    var content='';
    content +=`
    <section style="background: linear-gradient(rgb(243, 234, 234), #42231aad);">
    <header style="width:100%" id="#">
        <a class="menu-button" style="width:auto" onclick="mainPage()">Back</a>
        <center><h1 style="font-size: 30px;">NOTIFICATIONS</h1> 
            <strong><p style="color: black">New Notifications</p></strong>
        </center>
        
        

    </header>

    <section class="business-menu">
        <center>`;

        if (Jobs.length>0) {
            Jobs.forEach(job => {
                if (job.job=='catering') {
                    content+=`<div style="font-size: 20px;" class="menu-button1">
                    <img src="img/pfp.jpg" class="circle-image"><br>
                    <p>Tender From:  ${user}</p>
                    <p>Service: Catering</p>
                    <p>Location: ${job.location}| Date: ${job.date}</p><br>
                     <a style="background-color: green; font-size: 25px" class="menu-button" onclick="removecatering()">Accept Job</a> | <a onclick="removecatering()" style="background-color: Red;font-size: 25px" class="menu-button">Deny Job</a><br/>
                </div><br>`;
                    
                }
                
              
            });
            
        } else {

            content+=`<h1>They are no available jobs for this category</h1>`;
            
        }

        content+=`</center>
       
    </section>
       
       

    <section  class="end">
        <div class="last-text">
        <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
        </div>
    
        <div class="top">
            <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
        </div>
    </section>
</section>`;
            
            

    document.getElementById("bodycontent").innerHTML=content;
    
}
function removecatering() {
    cateringJob--;
if (Jobs.length > 0) {
    const index = Jobs.findIndex(job => job.job === 'catering');
    if (index !== -1) {
        Jobs.splice(index, 1); // Remove the element at the found index
    }
}

showAvailableCateringJobs(); 
}

function showAvailableConstructionJobs() {
    var content='';
    content +=`
    <section style="background: linear-gradient(rgb(243, 234, 234), #42231aad);">
    <header style="width:100%" id="#">
        <a class="menu-button" style="width:auto" onclick="mainPage()">Back</a>
        <center><h1 style="font-size: 30px;">NOTIFICATIONS</h1> 
            <strong><p style="color: black">New Notifications</p></strong>
        </center>
        
        

    </header>

    <section class="business-menu">
        <center>`;

        if (Jobs.length>0) {
            Jobs.forEach(job => {
                if (job.job=='construction') {
                    content+=`<div style="font-size: 20px;" class="menu-button1">
                    <img src="img/pfp.jpg" class="circle-image"><br>
                    <p>Tender From:  ${user}</p>
                    <p>Service: Construction</p>
                    <p>Location: ${job.location}| Date: ${job.date}</p><br>
                     <a style="background-color: green; font-size: 25px" class="menu-button" onclick="removeconstruction()">Accept Job</a> | <a onclick="removeconstruction()" style="background-color: Red;font-size: 25px" class="menu-button">Deny Job</a><br/>
                </div><br>`;
                    
                }
                
              
            });
            
        } else {

            content+=`<h1>They are no available jobs for this category</h1>`;
            
        }

        

        content+=`</center>
       
    </section>
       
       

    <section  class="end">
        <div class="last-text">
        <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
        </div>
    
        <div class="top">
            <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
        </div>
    </section>
</section>`;
            
            

    document.getElementById("bodycontent").innerHTML=content;
    
}

function removeconstruction() {
    constructionJob--;
if (Jobs.length > 0) {
    const index = Jobs.findIndex(job => job.job === 'construction');
    if (index !== -1) {
        Jobs.splice(index, 1); // Remove the element at the found index
    }
}

showAvailableConstructionJobs(); 
}

// Check if the browser supports notifications
if ('Notification' in window) {
    // Request permission from the user
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            const notifyBtn = document.getElementById('notify-btn');
            
            // Add an event listener to trigger the notification
            notifyBtn.addEventListener('click', () => {
                const notification = new Notification('Hello!', {
                    body: 'This is a test notification.', // Notification message
                    icon: 'https://via.placeholder.com/48' // Optional icon
                });

                // Optional: Add an event listener to the notification
                notification.onclick = () => {
                    window.focus();
                    alert('Notification clicked!');
                };
            });
        } else {
            console.log('Notification permission denied.');
        }
    });
} else {
    alert('Your browser does not support notifications.');
}

function showSentScreen() {

    if (signed==false) {
        showSignInPage();
        
    } else {
        var content='';
    content +=`<section style="background: black">
    <header style="width:100%" id="#">
        <a onclick="showNewNotifications()" style="font-size: 25px;"><i class='bx bxs-bell'></i></a>
        <center><a href=#><img style="color:white;"src="https://see.fontimg.com/api/renderfont4/p72nK/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/bUZPQ0FO/dripinkpersonaluse-black.png" alt="Dripping fonts"></a>
         <strong><p style="color: white">Request Sent</p></strong>
        </center>

    </header>
    <section class="business-menu" style="height: 80vh; ">
        <center>
            <img style="border-style: none" class="circle-image" src="img/thumb.gif" alt="">
            <h1 style="color: white;">Request Sent Successfully!!</h1>
            <p style="color: white">Await feedback from the reciever</p><br>
            <a style="color: white; border-color:white;" class="menu-button1" onclick="showServices()">OK</a>
        </center>
       
    </section>
       
       

    <section  class="end">
        <div class="last-text">
        <p>&COPY;Copyrighted by MFOCAN 2024. All Rights Reserved</p>
        </div>
    
        <div class="top">
            <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
        </div>
    </section>
</section>`;
            
    document.getElementById("bodycontent").innerHTML=content;
    }

}

function showSignInPage() {
    var content='';
    content +=`<header style="width: 100%; color: black; background-color: white;" id="#">
       <center><a href=#><img src="https://see.fontimg.com/api/renderfont4/p72nK/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/bUZPQ0FO/dripinkpersonaluse-black.png" alt="Dripping fonts"></a>
        <strong><p style="color: black">System Integrations</p></strong>
       </center>
   </header>
   <div class="sign">
    <center>
        <form action="#" class="sign-form">
        
        <input type="text" class="enter-form" placeholder="Username" id="username"><br></br>
        <input type="password" class="enter-form" placeholder="Password" id="password"><br></br>
        <input type="password" class="enter-form" placeholder="Confirm Password" id="cpassword"><br></br>
        
        <button class="btn" onclick="signup()">Sign Up</button><br>
        
       
       </form>
    </center>
   </div>


   <section class="end">
    <div class="last-text">
    <p>&COPY;Copyrighted by MFOCANS 2024. All Rights Reserved</p>
    </div>

    <div class="top">
        <a href="#"><i class="bx bx-up-arrow-alt"></i></a>
    </div>
</section>
`;
            
    document.getElementById("bodycontent").innerHTML=content;
    

   

    
}

function signup() {
    
        user = document.getElementById("username").value.trim();
        pass = document.getElementById("password").value.trim();
        cpass = document.getElementById("cpassword").value.trim();
    
        
        if (user === "") {
            alert("Username cannot be empty.");
            return;
        }
    
        if (pass === "" || cpass === "") {
            alert("Password fields cannot be empty.");
            return;
        }
    
        if (pass !== cpass) {
            alert("Passwords do not match.");
            return;
        }
    
      
        alert(`Sign-up successful! Welcome, ${user}.`);
        signed = true;
        showSentScreen();
        
       
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("cpassword").value = "";
   
    
    
    
}
