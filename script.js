var nome = document.getElementById("nm1");
var snome = document.getElementById("snome");
var idade = document.getElementById("idade");
var email = document.getElementById("email");
var cep = document.getElementById("CEP");

var btn = document.getElementById("verificar");
btn.addEventListener('click', validatudo);



function validaNome() {
    if (nome.value === "" || nome.value.length < 3) {
        alert("Nome inválido");
        return false;
    }

    return true;
}

function validaSnome() {
    if (snome.value === "" || snome.value.length < 3) {
        alert("Sobrenome Inválido");
        return false;
    }
    return true;
}


function validaEmail() {
    if (email.value === "" || email.value.indexOf('@') === -1) {
        alert("Email inválido.");
        return false;
    }

    return true;
}


function validaIdade() {
    var dataNasc = new Date(idade.value);
    var hoje = new Date();
    var idadeAnos = hoje.getFullYear() - dataNasc.getFullYear();

    var mesAtual = hoje.getMonth();
    var mesNasc = dataNasc.getMonth();

    if (mesAtual < mesNasc || (mesAtual === mesNasc && hoje.getDate() < dataNasc.getDate())) {
        idadeAnos--;
    }

    if (idadeAnos <= 12 || idadeAnos >= 122) {
        alert("Idade inválida");
        return false;
    }
    return true;
}

function validaTel() {
    if (tel.value === "" || tel.value.length !== 11) {
        alert("Telefone inválido.")
        return false;
    }
    return true;
}

function validaCEP() {
    if (cep.value === "" || cep.value.length !== 8) {
        alert("Código de Endereçamento Postal Inválido");
        return false;
    }
    return true;
}

function validaSexo() {
    var masculinoChecked = document.getElementById("semasculino").checked;
    var femininoChecked = document.getElementById("sefeminino").checked;

    if (!masculinoChecked && !femininoChecked) {
        alert("Por favor, selecione o sexo.");
        return false;
    }

    return true;
}


function validaSenha(){
    var senhaValida = document.getElementById("senha");
    var senhaValida2 = document.getElementById("senhaConfirma");
    if (senhaValida.value === "" || senhaValida.value.length < 8){
        alert ("A Senha deve conter no mínimo 8 caracteres.");
        return false;
    }  else if(senhaValida.value !== senhaValida2.value) {
        alert("As senhas não conferem!")
        return false;
    } 
    return true;
}




function validatudo(e) {
    if (!validaNome() || !validaSnome() || !validaIdade() || !validaTel() || !validaCEP() || !validaEmail() || !validaSexo() ||!validaSenha()) {
        e.preventDefault();
    } else {

    }
}













// function validaCPF(cpf) {
//     var Soma = 0
//     var Resto
//     //remove caracteres que não forem números
//     var strCPF = String(cpf).replace(/[^\d]/g, '')

//     if (strCPF.length !== 11)
//         return false
//     //verifica se todos os número são iguais, retorna falso
//     if ([
//         '00000000000',
//         '11111111111',
//         '22222222222',
//         '33333333333',
//         '44444444444',
//         '55555555555',
//         '66666666666',
//         '77777777777',
//         '88888888888',
//         '99999999999',
//     ].indexOf(strCPF) !== -1)
//         return false

//     for (i = 1; i <= 9; i++)
//         Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);

//     Resto = (Soma * 10) % 11

//     if ((Resto == 10) || (Resto == 11))
//         Resto = 0

//     if (Resto != parseInt(strCPF.substring(9, 10)))
//         return false

//     Soma = 0

//     for (i = 1; i <= 10; i++)
//         Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i)

//     Resto = (Soma * 10) % 11

//     if ((Resto == 10) || (Resto == 11))
//         Resto = 0

//     if (Resto != parseInt(strCPF.substring(10, 11)))
//         return false

//     return true
// }