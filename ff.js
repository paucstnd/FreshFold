$(document).ready(function () {

  let selectedRating = 0;

  
  $("#stars span").on("click", function () {
    selectedRating = $(this).data("value");

    
    $("#stars span").removeClass("active");

    
    $("#stars span").each(function () {
      if ($(this).data("value") <= selectedRating) {
        $(this).addClass("active");
      }
    });

    
    $("#ratingText").text("Rating: " + selectedRating);
  });

 
  $(".submit-btn").on("click", function () {
    if (selectedRating === 0) {
      alert("Please select a star rating first.");
      return;
    }

    alert("Successfully submitted! Thank you for the feedback.");
  });

});

$(document).ready(function () {


  $(".apply-btn").on("click", function () {
    alert("Voucher successfully applied!");
  });

  
  $(".other-btn").on("click", function () {
    alert("There is no voucher available for today.");
  });

});

$(document).ready(function () {

  
  $(".plan .btn").on("click", function (e) {
    e.preventDefault(); 

    
    if ($(this).text().trim() === "Choose Plan") {
      alert("Successfully applied!");
    }
  });

});

$(function () {
  $("#newsletterForm").on("submit", function (e) {
    e.preventDefault();

    const email = $("#email").val().trim();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    alert("Subscribed successfully! Check your email for message.");

    this.reset();
  });
});

$(function () {
  $(".topics button").on("click", function () {
    alert("Unavailable right now");
  });
});

$(document).ready(function () {

  
  const validZips = ["1611", "1612", "1613", "1614"];

  $(".zip-form").on("submit", function (e) {
    e.preventDefault();

    const zip = $("#zip").val().trim();

  
    $(".alert").hide();

    
    if (!/^\d{4}$/.test(zip)) {
      $(".alert.error").show();
      return;
    }

    
    if (validZips.includes(zip)) {
      $(".alert.success").show();
    } else {
      $(".alert.warning").show();
    }

  });

});

  $(".form-group .btn:contains('Copy Link')").on("click", function () {
    const linkInput = $(this).siblings("input")[0];

    linkInput.select();
    linkInput.setSelectionRange(0, 99999); 
    document.execCommand("copy");

    
    const flash = $("<div class='copy-flash'>Link copied!</div>");
    $("body").append(flash);

    flash.fadeIn(200).delay(1000).fadeOut(500, function () {
      $(this).remove();
    });
  });


 
 $(document).ready(function () {

  let selectedRating = 0;

  
  $("#stars span").on("click", function () {
    selectedRating = $(this).data("value");

    
    $("#stars span").removeClass("active");

    
    $("#stars span").each(function () {
      if ($(this).data("value") <= selectedRating) {
        $(this).addClass("active");
      }
    });

    
    $("#ratingText").text("Rating: " + selectedRating);
  });

 
  $(".submit-btn").on("click", function () {
    if (selectedRating === 0) {
      alert("Please select a star rating first.");
      return;
    }

    alert("Successfully submitted! Thank you for the feedback.");
  });

});

$(document).ready(function () {


  $(".apply-btn").on("click", function () {
    alert("Voucher successfully applied!");
  });

  
  $(".other-btn").on("click", function () {
    alert("There is no voucher available for today.");
  });

});

$(document).ready(function () {

  
  $(".plan .btn").on("click", function (e) {
    e.preventDefault(); 

    
    if ($(this).text().trim() === "Choose Plan") {
      alert("Successfully applied!");
    }
  });

});

$(function () {
  $("#newsletterForm").on("submit", function (e) {
    e.preventDefault();

    const email = $("#email").val().trim();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    alert("Subscribed successfully! Check your email for message.");

    this.reset();
  });
});

$(function () {
  $(".topics button").on("click", function () {
    alert("Unavailable right now");
  });
});

$(document).ready(function () {

  
  const validZips = ["1611", "1612", "1613", "1614"];

  $(".zip-form").on("submit", function (e) {
    e.preventDefault();

    const zip = $("#zip").val().trim();

  
    $(".alert").hide();

    
    if (!/^\d{4}$/.test(zip)) {
      $(".alert.error").show();
      return;
    }

    
    if (validZips.includes(zip)) {
      $(".alert.success").show();
    } else {
      $(".alert.warning").show();
    }

  });

});

  $(".form-group .btn:contains('Copy Link')").on("click", function () {
    const linkInput = $(this).siblings("input")[0];

    linkInput.select();
    linkInput.setSelectionRange(0, 99999); 
    document.execCommand("copy");

    
    const flash = $("<div class='copy-flash'>Link copied!</div>");
    $("body").append(flash);

    flash.fadeIn(200).delay(1000).fadeOut(500, function () {
      $(this).remove();
    });
  });


 
$(document).ready(function () {

    // AUTO GENERATE TODAY'S DATE
    let today = new Date().toISOString().split("T")[0];
    $("input[type='date']").val(today);

    // SET DEFAULT +63
    let phoneInput = $("input[placeholder='Phone Number']");
    phoneInput.val("+63");

    // PHONE NUMBER FORMAT +63XXXXXXXXXX
    phoneInput.on("input", function () {

        let value = this.value.replace(/[^0-9]/g, "");

        // remove first 2 digits if user types 63
        if (value.startsWith("63")) {
            value = value.substring(2);
        }

        // limit to 10 digits
        value = value.substring(0, 10);

        this.value = "+63" + value;
    });

    // FORM SUBMIT ALERT
    $("form").submit(function (e) {
        e.preventDefault();

        let name = $("input[placeholder='Full Name']").val();
        let phone = phoneInput.val();

        // check if phone has exactly 10 digits after +63
        if (name === "" || phone.length !== 13) {
            alert("Please enter a valid phone number (+63 followed by 10 digits).");
            return;
        }

        alert("Thank you " + name + " for your order!\n\nYour pickup has been scheduled successfully. We will contact you shortly. Please wait for the notification of your order.");

        this.reset();

        // reset phone and date
        phoneInput.val("+63");
        $("input[type='date']").val(today);
    });

});

