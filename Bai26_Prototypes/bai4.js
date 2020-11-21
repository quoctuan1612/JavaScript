/**
 * Chạy đoạn code phía dưới và giải thích kết quả
 * Link run code: https://repl.it/@maithedung/FarflungIdioticExabyte
 */

function answer() {
    return `
    // Ghi câu trả lời ở đây
    function sing nằm ở đối tượng Person, khita khởi tạo đối tượng mrThinh, hệ thống sẽ cấp pháp 1 ô nhớ để lưu đối tượng mrThing và function sing được lưu ở trong ô nhớ đang lưu trữ đối tượng mrThinh. Cũng như vậy khi khởi tạo đối tượng mrDung thì hệ thống cũng cấp pháp 1 ô nhớ để lưu trữ đối tượng mrDung. Vì vậy khi so sánh mrThinh.sing === mrDung.sing trả về false là vì function sing của mỗi đối tương đang gọi nằm ở hai ô nhớ khác nhau.
    `
  }
  
  function Person(name, age) {
    this.type = "person";
    this.name = name;
    this.age = age;
  
    this.sing = function() {
      console.log(`Là lá la...`);
    };
  
  }
  
  const mrThinh = new Person("Pham Thinh", 33);
  const mrDung = new Person("The Dung", 19);
  
  mrThinh.sing === mrDung.sing
  