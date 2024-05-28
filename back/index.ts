const nombre = "Jorge";
const oli = 3;
const userName: string = "Mike";
// const name2:string = "Nico"
// const name3:string = "Martin"
const isAdmin: boolean = true;

interface IUserAddress {
  street: string;
  number: number;
}

interface IUser {
  name: string;
  age: number;
  active: boolean;
  address: IUserAddress;
}

const usuarioMike: IUser = {
  name: "oli",
  age: 9,
  active: false,
  address: {
    street: "jalisco street",
    number: 5,
  },
};

const verifySession = (userName: string, userState: boolean) => {
  return `${userName} isLoggedIn? ${userState}`;
};

console.log(verifySession(userName, isAdmin));

const saludo = (name: string, time: number): string => {
  return `oli ${name}, la hora es ${time}`;
};

console.log(saludo(nombre, oli));

type tallaCamisa = "S" | "M" | "L" | "XL";

function validarTalla(talla: tallaCamisa): string {
  if (talla === "XL" || talla == "S") {
    return "Agotado";
  }
  return "Disponible";
}

console.log(validarTalla("L"));
console.log(validarTalla("S"));
