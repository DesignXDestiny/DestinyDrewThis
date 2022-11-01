type='text/javascript'


     $(document).ready(function()
      {
        $('img').bind('contextmenu', function(e){
          return false;
        }); 
    });
    
      let allImages = document.querySelector("img");
      allImages.forEach((value)=>{
          value.oncontextmenu = ()=>{
              return false;
          }
      })
      
      
      
         window.onAmazonLoginReady = function() {
      amazon.Login.setClientId('CLIENT-ID');
    };
    window.onAmazonPaymentsReady = function() {
                showButton();
    };
    
    
    
    