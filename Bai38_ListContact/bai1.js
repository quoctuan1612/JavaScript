/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
var readlineSync = require('readline-sync');
var fs = require('fs');
var listContacts = [];

function loadData(){
    var fileContent = fs.readFileSync('./data.json');
    listContacts = JSON.parse(fileContent);
}

function showMenu(){
    console.log("1. Nhập dữ liệu liên hệ");
    console.log("2. Sửa dữ liệu liên hệ");
    console.log("3. Xoá liên hệ");
    console.log("4. Tìm kiếm liên hệ");
    console.log("5. Lưu và thoát");
}

function createContact(){
    var name = readlineSync.question('Name: ');
    var phone = readlineSync.question('Phone number: ');
    var contact = {
        name: name,
        phoneNumber: phone
    };
    listContacts.push(contact);
}

function fixContact(){
    var oldContact = readlineSync.question("Write the contact to fix: ");
    console.log("");
    var flag = false;
    var key = 0;
    for (var contact of listContacts){
        if (oldContact === contact.name || oldContact === contact.phoneNumber){
            console.log("Thông tin liên hệ cần sửa: ");
            console.log("Tên: ", contact.name);
            console.log("Tên: ", contact.phoneNumber);
            console.log("");
            flag = true;
            break;
        }
        key++;
    }
    if (flag === false){
        console.log("Không tìm thấy tên hoặc số điện thoại cần sửa!!!");
    } else {
        var newNameContact = readlineSync.question("Write new name: ");
        var newPhoneNumber = readlineSync.question("Write new phone: ");
        listContacts[key].name = newNameContact;
        listContacts[key].phoneNumber = newPhoneNumber;
    }
    

}

function deleteContact(){
    var deleteContact = readlineSync.question("Write the contact to delete: ");
    for (var i = 0; i<listContacts.length; i++) {
        if (listContacts[i].name === deleteContact || listContacts[i].phoneNumber === deleteContact) {
            listContacts.splice(i, 1);
            break;
        }
    }
}

function findContact(){
    var findContact = readlineSync.question("Write the contact to find: ");
    var lengthContact = findContact.length;
    var listFIndContact = [];
    for (var contact of listContacts){
        if(contact.name.toLowerCase().indexOf(findContact.toLowerCase())>=0){
            listFIndContact.push(contact);
        } else {
            if(contact.phoneNumber.indexOf(findContact)>=0){
                listFIndContact.push(contact);
            }
        }
    }
    console.log(listFIndContact);
}

function saveAndExit(){
    var content = JSON.stringify(listContacts);
    fs.writeFileSync('./data.json', content);
}

function main(){
    loadData();
    showMenu();
    do{
        var option = readlineSync.question("Select: ");
        switch (option){
            case '1':
                createContact();
                break;
            case '2':
                fixContact();
                break;
            case '3':
                deleteContact();
                break;
            case '4':
                findContact();
                break;
            case '5':
                saveAndExit();
                break;
            default:
                console.log("Reselect!");
                break;
        };
    } while (option != 5);
}

main();