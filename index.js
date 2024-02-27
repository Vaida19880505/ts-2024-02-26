// 1. Sukurti 3 inputus bei buttona. Inputuose turi būt įrašomi vartotojo duomenys.
// 2. Typescript pagalba gauti elementus pagal id;
// 3. Sukurti UserType tipą;
// 4. Iš input'ų sudėti reikšmes į objekto kintamąjį. Nurodyt, kad kintamasis turėtu UserType;
// 5. Apsirayt users kintamąjį, jam nurodyt tipą;
// 6. Buttonui pridėt onClick eventą. Kai paspaudžiama ant buttono į aprašytą masyvą įpushinams user.
// 7. User'io atvaizduojami ekrane.
// 8. CAO TS 1temos 3 užd.
var emailInput = document.getElementById("user-email");
var passwordInput = document.getElementById("user-password");
var namedInput = document.getElementById("user-name");
var mainButton = document.getElementById("btn");
mainButton.addEventListener("Click", function () {
    var userLoginData = {
        email: emailInput.value,
        password: passwordInput.value,
        name: namedInput.value,
    };
    console.log(userLoginData);
});
