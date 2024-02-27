// 1. Sukurti 3 inputus bei buttona. Inputuose turi būt įrašomi vartotojo duomenys.
// 2. Typescript pagalba gauti elementus pagal id;
// 3. Sukurti UserType tipą;
// 4. Iš input'ų sudėti reikšmes į objekto kintamąjį. Nurodyt, kad kintamasis turėtu UserType;
// 5. Apsirayt users kintamąjį, jam nurodyt tipą;
// 6. Buttonui pridėt onClick eventą. Kai paspaudžiama ant buttono į aprašytą masyvą įpushinams user.
// 7. User'io atvaizduojami ekrane.
// 8. CAO TS 1temos 3 užd.

type LoginType = {
  email: string;
  name: string;
  password: string;
};

const emailInput: HTMLInputElement = document.getElementById(
  "user-email"
) as HTMLInputElement;
const passwordInput: HTMLInputElement = document.getElementById(
  "user-password"
) as HTMLInputElement;
const namedInput: HTMLInputElement = document.getElementById(
  "user-name"
) as HTMLInputElement;
const mainButton: HTMLButtonElement = document.getElementById(
  "btn"
) as HTMLButtonElement;

mainButton.addEventListener(`Click`, () => {
  const userLoginData: LoginType = {
    email: emailInput.value,
    password: passwordInput.value,
    name: namedInput.value,
  };
  console.log(userLoginData);
});
