/**
 * Chạy đoạn code phía dưới và giải thích kết quả
 * Link run code: https://repl.it/@maithedung/DroopyPaltryKeygenerator
 */

function answer() {
    return `
    // Ghi câu trả lời ở đây
    function sing được tạo ra và lưu vào 1 ô nhớ, mrThinh và mr Dung cùng trỏ đến ô nhớ lưu trữ function sing lên khi so sánh mrThinh.sing === mrDung.sing thì giá trị trả về là true
    `
  }
  
  function Person(name, age) {
    this.type = "person";
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.sing = function() {
    console.log(`Là lá la...`);
  };
  
  const mrThinh = new Person("Pham Thinh", 33);
  const mrDung = new Person("The Dung", 19);
  
  mrThinh.sing === mrDung.sing
  