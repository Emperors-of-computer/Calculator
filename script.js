function One() {
    document.frm.textfield.value += "1"
}
function Two() {
    document.frm.textfield.value += "2"
}
function Three() {
    document.frm.textfield.value += "3"
}
function Four() {
    document.frm.textfield.value += "4"
}
function Five() {
    document.frm.textfield.value += "5"
}
function Six() {
    document.frm.textfield.value += "6"
}
function Seven() {
    document.frm.textfield.value += "7"
}
function Eight() {
    document.frm.textfield.value += "8"
}
function Nine() {
    document.frm.textfield.value += "9"
}
function Zero() {
    document.frm.textfield.value += "0"
}
function Decimal() {
    document.frm.textfield.value += "."
}
function Add() {
    document.frm.textfield.value += "+"
}
function Sub() {
    document.frm.textfield.value += "-"
}
function Mul() {
document.frm.textfield.value += "X"
}
function Div() {
    document.frm.textfield.value += "÷"
}
function BackSpace() {
    TF = document.frm.textfield.value
    L = TF.length
    document.frm.textfield.value = TF.substring(0,L-1)
}
function Clear() {
    document.frm.textfield.value = ""
}
function BOpen() {
    document.frm.textfield.value += "("
}
function BClose() {
    document.frm.textfield.value += ")"
}
function BracketCheck(equation) {
    s = true
    a = 0
    b = 0
    q = equation
    for (i=0;i<q.length;i++) {
        ch = q[i]
        if (ch=="(") {
            a += 1
        }
        else if (ch == ")") {
            b += 1
        }
    }
    if (a != b) {
        s = false
    }
    return s
}
function ReplaceOperator(equation) {
    q = equation
    for (i=0;i<q.length;i++) {
        ch = q[i]
        if (ch == "X") {
            q = q.slice(0,i) + "*" + q.slice(i+1,q.length)
        }
    }
    for (i=0;i<q.length;i++) {
        ch = q[i]
        if (ch == "÷") {
            q = q.slice(0,i) + "/" + q.slice(i+1,q.length)
        }
    }
    return q
}
function Bracket(equation) {
    q = equation
    s = false
    while (s != true) {
        s = true
        for (i=0;i<(q.length-1);i++) {
            a = i
            b = a+1
            ac = q[a]
            bc = q[b]
            if (ac>="0" && ac<="9" && bc=="(") {
                s = false
                q = q.slice(0,a+1) + "*" + q.slice(b,q.length)
            }
            else if (ac==")" && bc>="0" && bc<="9") {
                s = false
                q = q.slice(0,a+1) + "*" + q.slice(b,q.length)
            }
            else if (ac==")" && bc=="(") {
                s = false
                q = q.slice(0,a+1) + "*" + q.slice(b,q.length)
            }
            if (s == false) {
                break
            }
        }
    }
    return q
}
function ShowResult() {
    r = document.frm.textfield.value
    if (BracketCheck(r) == true) {
        r = Bracket(r)
        r = ReplaceOperator(r)
        r = eval(r)
        document.frm.textfield.value = r
    }
    else {
        alert("Brackets Are Not Given Properly!")
    }
}