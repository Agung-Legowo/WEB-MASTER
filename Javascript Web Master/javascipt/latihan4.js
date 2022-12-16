//Operator Kondisional


/*if(Kondisi) {
 	aksi
}
*/

var bilangan = prompt("Masukan Angka?")
if (bilangan%2 == 0) {
	console.log("Bilangan Genap")
} else if(bilangan%2 ==1) {
	console.log("Bilangan Ganjil")
} else {
	console.log('anda bukan memasukan angka')
}