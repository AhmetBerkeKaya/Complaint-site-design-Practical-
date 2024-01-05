/*document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('myCheckbox');
    var emailLabel = document.getElementById('label3');
    var emailInput = document.getElementById('email');

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            emailLabel.style.visibility = 'hidden';
            emailInput.style.visibility = 'hidden';
        } else {
            emailLabel.style.visibility = 'visible';
            emailInput.style.visibility = 'visible';
        }
    });
});*/
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById('myCheckbox');
  var emailLabel = document.getElementById('label3');
  var emailInput = document.getElementById('email');

  checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
          emailLabel.style.visibility = 'hidden';
          emailInput.style.visibility = 'hidden';
      } else {
          emailLabel.style.visibility = 'visible';
          emailInput.style.visibility = 'visible';
      }
  });
  $("#log").click(function () {
      var username = $("#username").val();
      var password = $("#password").val();
      var tel = $("#tel").val();
      var email = $("#email").val();

      if (checkbox.checked) {
          var storedEmployeeData = localStorage.getItem('employeeData');
          var employeeData = storedEmployeeData ? JSON.parse(storedEmployeeData) : {};
          var enteredUsername = $("#username").val();
          var enteredPassword = $("#password").val();
          var enteredTel = $("#tel").val();

          if (employeeData[enteredUsername] && employeeData[enteredUsername].password === enteredPassword && employeeData[enteredUsername].tel === enteredTel) {
              alert('Hoşgeldiniz değerli çalışanımız ' + enteredUsername);
              // Burada çalışan sayfasına yönlendirme yapabilirsiniz
              window.location.href = "anasayfaFirma.html";
          } else {
              alert('Giriş başarısız. Lütfen bilgilerinizi kontrol ediniz.');
          }
      } else {
          var storedUserData = localStorage.getItem('userData');
          var userData = storedUserData ? JSON.parse(storedUserData) : {};
          var enteredUsername = $("#username").val();
          var enteredPassword = $("#password").val();
          var enteredTel = $("#tel").val();
          var enteredEmail = $("#email").val();

          // E-posta kontrolünü sadece müşteri girişinde yap
          if (!checkbox.checked && email === '') {
              alert('Lütfen e-posta adresinizi giriniz!');
              return; // E-posta girilmediğinde burada dur
          }

          if (userData[enteredUsername] && userData[enteredUsername].password === enteredPassword && userData[enteredUsername].tel === enteredTel && userData[enteredUsername].email === enteredEmail) {
              alert('Hoşgeldiniz değerli müşterimiz ' + enteredUsername);
              // Burada müşteri sayfasına yönlendirme yapabilirsiniz
              window.location.href = "anasayfaMusteri.html";
          } else {
              alert('Giriş başarısız. Lütfen bilgilerinizi kontrol ediniz.');
          }
      }
  });
});


const pupils = document.querySelectorAll(".eye .pupil");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const emailInput=document.querySelector("#email")
const telInput=document.querySelector("#tel")
const eyeLids = document.querySelectorAll(".shut span");
const seeButton = document.getElementById('see');

window.addEventListener("mousemove", (e) => {
    pupils.forEach((pupil) => {
     
      var rect = pupil.getBoundingClientRect();
      var x = (e.pageX - rect.left) / 70 + "px";
      var y = (e.pageY - rect.top) / 70 + "px";
      pupil.style.transform = "translate3d(" + x + "," + y + ", 0px)";
    });
  });
  
  passwordInput.addEventListener('click', () => {
    eyeLids.forEach(eyeLid => {
      eyeLid.classList.add('active');
    });
  });
  
  document.addEventListener('click', (e) => {
    if (!passwordInput.contains(e.target)) {
      eyeLids.forEach(eyeLid => {
        eyeLid.classList.remove('active');
      });
    }
  });
function seePassword()
{
if(passwordInput.type=='password')
{
passwordInput.type='text';

passwordInput.addEventListener('click', () => {
  eyeLids.forEach(eyeLid => {
    eyeLid.classList.remove('active');
  });
});

passwordInput.addEventListener('click', () => {
  eyeLids.forEach(eyeLid => {
    eyeLid.classList.remove('active');
  });
});


}

else if(passwordInput.type!='password')
{
passwordInput.type='password';
passwordInput.addEventListener('click', () => {
  eyeLids.forEach(eyeLid => {
    eyeLid.classList.add('active');
  });
});

passwordInput.addEventListener('click', () => {
  eyeLids.forEach(eyeLid => {
    eyeLid.classList.add('active');
  });
});

  
}
}

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById('myCheckbox');

  $("#log").click(function () {
    var username = $("#username").val();
    var password = $("#password").val();
    var tel = $("#tel").val();
    var email = $("#email").val();

    if (checkbox.checked) {
      var storedEmployeeData = localStorage.getItem('employeeData');
      var employeeData = storedEmployeeData ? JSON.parse(storedEmployeeData) : {};
      var enteredUsername = $("#username").val();
      var enteredPassword = $("#password").val();
      var enteredTel = $("#tel").val();

      if (employeeData[enteredUsername] && employeeData[enteredUsername].password === enteredPassword && employeeData[enteredUsername].tel === enteredTel) {
        alert('Hoşgeldiniz değerli çalışanımız ' + enteredUsername);
      } else {
        alert('Giriş başarısız. Lütfen bilgilerinizi kontrol ediniz.');
      }
    } else {
      var storedUserData = localStorage.getItem('userData');
      var userData = storedUserData ? JSON.parse(storedUserData) : {};
      var enteredUsername = $("#username").val();
      var enteredPassword = $("#password").val();
      var enteredTel = $("#tel").val();
      var enteredEmail = $("#email").val();

      if (userData[enteredUsername] && userData[enteredUsername].password === enteredPassword && userData[enteredUsername].tel === enteredTel && userData[enteredUsername].email === enteredEmail) {
        alert('Hoşgeldiniz değerli müşterimiz ' + enteredUsername);
        window.location.href = "../views/anasayfa2.html";
      } else {
        alert('Giriş başarısız. Lütfen bilgilerinizi kontrol ediniz.');
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById('myCheckbox');

  $("#sign").click(function () {
    var username = $("#username").val();
    var password = $("#password").val();
    var tel = $("#tel").val();
    var email = $("#email").val();

    function isValidEmail(email) {
      
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
  function isValidUsername(username) 
  {
    
    const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
    if (specialCharacters.test(username)||(username.length <= 5)) {
      return false;

    }
  
   else
   {
    return true;

   }
    
  }

  function isValidPassword(password) {
   
    const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
  
    
    if (
      password.length <= 8 ||
      !/[A-Z]/.test(password) ||
      !/\d/.test(password) || // Check for at least one number
      specialCharacters.test(password)
    ) {
      return false;
    } else {
      return true;
    }
  }

  function isValidTel(tel)
  {
    const phoneNumberRegex = /^\d{11}$/;

    return phoneNumberRegex.test(tel);

  }


  

    if (checkbox.checked) {
      if (username === '' || password === '' || tel === '') {
        alert('Lütfen gerekli alanları doldurunuz!');

      }
      else if(!isValidUsername(username))
      {
      alert('Lütfen geçerli bir kullanıcı adı giriniz!')

      }

      else if(!isValidPassword(password))
      {
      alert('Lütfen geçerli bir şifre adı giriniz!')

      }
      else if(!isValidTel(tel))
      {
      alert('Lütfen geçerli bir telefon numarası giriniz!')

      }
      
      
      
      else {
        var storedEmployeeData = localStorage.getItem('employeeData');
        var employeeData = storedEmployeeData ? JSON.parse(storedEmployeeData) : {};

        if (!employeeData[username]) {
          employeeData[username] = {
            username: username,
            password: password,
            tel: tel
          };

          localStorage.setItem('employeeData', JSON.stringify(employeeData));

          alert('Kayıt başarılı ' + username + ' bizimle ortaklık yaptığınız için teşekkürler');
        } else {
          alert('Bu kullanıcı adı zaten kullanımda.');
        }
      }
    } 
    else {
      if (username === '' || password === '' || tel === '' || email === '') {
        alert('Lütfen gerekli alanları doldurunuz!');
      } 
      
      else if (!isValidEmail(email)) {
        alert('Lütfen geçerli email giriniz!');
      }

      else if(!isValidUsername(username))
      {
      alert('Kullanıcı en az 5 karakterden oluşup özel karakter içermemelidir!')
      }

      else if(!isValidPassword(password))
      {
      alert('Şifrenizde en az bir büyük harf en az bir sayı bulunmalıdır.Ve şifreniz 8 karakterden uzun olmalıdır ve özel karakter içermemelidir!')

      }
      else if(!isValidTel(tel))
      {
      alert('Lütfen 11 haneli telefon numaranızı giriniz!')

      }

      
      else {
        var storedUserData = localStorage.getItem('userData');
        var userData = storedUserData ? JSON.parse(storedUserData) : {};

        if (!userData[username]) {
          userData[username] = {
            username: username,
            password: password,
            tel: tel,
            email: email
          };

          localStorage.setItem('userData', JSON.stringify(userData));

          alert('Kayıt başarılı ' + username + ' bizi tercih ettiğiniz için teşekkürler');
        } else 
        {
          alert('Bu kullanıcı adı zaten kullanımda.');
        }
      }
    }
  });
});
