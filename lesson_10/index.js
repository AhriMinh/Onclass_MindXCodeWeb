//tính tổng các số chẵn có trong mảng

function findSumEvenNumber(nums) {
    let sum = 0
    for(let i=0; i<nums.length ; i++) {
        if (console.log(nums[i]) % 2 == 0) {
            sum = sum + nums[i]
        }
    }
    }


function getTotalSalary(employees) {
    console.log("Key:", key)
    console.log("Salary:", employees[Salary])
}

/*BT 1:
  Viết hàm camelize(str) để thay đổi các từ được phân tách bằng dấu gạch ngang như “my-short-string” thành “myShortString” được viết bằng camel.

  Đó là: loại bỏ tất cả các dấu gạch ngang, mỗi từ sau dấu gạch ngang trở thành chữ hoa. Ví dụ:
  camelize("background-color") == 'backgroundColor';
  camelize("list-style-image") == 'listStyleImage';
  camelize("-webkit-transition") == 'WebkitTransition';

  hoang-minh -> hoangMinh*/



  function camel(str) {
    let newString = "";
    for (i=0; i < str.length; i++) {
        if(str[i] === "-") {
            i++;
            newString += str[i].toUpperCase();
        } else {
            newString += str[i];
        }
    }
    return newString;
    }
    
    console.log(camel("hoang-minh"));

    //tạo ra một mảng mới hoặc đối tượng mới rỗng rồi push từng phần tử vào đối tượng mới đó hoặc copy ra một đối tượng mới rồi chỉnh sửa trên đối tượng mới đó 





  /*BT 2:
  Viết một hàm sắp xếp giảm dần.*/


//   BT 3: 
//   Bạn có một mảng các đối tượng người dùng, mỗi đối tượng có user.name. Viết code chuyển đổi nó thành một mảng tên.
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };

  let users = [ john, pete, mary ];
//   [
//     {},
//     {},

//   ]

//   alert( names ); // John, Pete, Mary

function findName(arr) {
    let newUser = "";
    for (i=0; i<arr.length; i++) {
        newUser.push(arr[i].name)
    }
    return newUser;
}

console.log(findName(users));

