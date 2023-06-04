/*
    Bài tập 1: Tính tiền lương nhân viên
*/

document.getElementById("btnTinhLuong").onclick = function () {
  //input: soLuong: number, soNgay: number
  let soLuong = +document.getElementById("soLuong").value;
  let soNgay = +document.getElementById("soNgay").value;

  //output: tongLuong: number
  let tongLuong = 0;

  //progress: Lấy số lương 1 ngày nhân với số ngày làm
  tongLuong = soLuong * soNgay;

  //in kết quả ra màn hình
  document.getElementById("tongLuong").innerHTML = tongLuong.toLocaleString();
};

/*
    Bài tập 2: Tính giá trị trung bình
*/

document.getElementById("btnTinhTrungBinh").onclick = function () {
  // input: num1: number, num2: number, num3: number, num4: number, num5: number,
  let num1 = +document.getElementById("number1").value;
  let num2 = +document.getElementById("number2").value;
  let num3 = +document.getElementById("number3").value;
  let num4 = +document.getElementById("number4").value;
  let num5 = +document.getElementById("number5").value;
  //output: ketQuaTrungBinh : number
  let ketQuaTrungBinh = (num1 + num2 + num3 + num4 + num5) / 5;

  //progress: Lấy tổng của 5 số sau đó chia cho 5
  //   ketQuaTrungBinh = num1 + num2;

  //in kết quả ra màn hình
  document.getElementById("trungBinh").innerHTML = ketQuaTrungBinh;
};

/*
    Bài tập 3: Quy đổi tiền
*/

document.getElementById("btnQuyDoi").onclick = function () {
  //input: USD = 23500, soTien : number
  let USD = 23500;
  let soTienNhap = +document.getElementById("soTienUSD").value;

  //output: soTienQuyDoi: number
  let soTienQuyDoi = 0;

  //progress: Lấy soTien nhân với USD giá trị mặc định là 23500
  soTienQuyDoi = soTienNhap * USD;

  //in kết quả ra màn hình
  document.getElementById("quyDoi").innerHTML = new Intl.NumberFormat(
    "vn-VN"
  ).format(soTienQuyDoi);
};

/*
    Bài tập 4: Tính diện tích, chu vi hình chữ nhật
*/

document.getElementById("btnchuNhat").onclick = function () {
  //input: chieuDai: number, chieuRong: number
  let chieuDai = +document.getElementById("chieuDai").value;
  let chieuRong = +document.getElementById("chieuRong").value;

  //output: chuVi: number, dienTich:number
  let chuVi = 0;
  let dienTich = 0;

  //progress: Chu vi = (chiều dài + chiều rộng) *2, diện tích = chiều dài * chiều rộng
  chuVi = (chieuDai + chieuRong) * 2;
  dienTich = chieuDai * chieuRong;

  //in kết quả ra màn hình
  document.getElementById("chuVi").innerHTML = chuVi;
  document.getElementById("dienTich").innerHTML = dienTich;
};

/*
    Bài tập 5: Tính tổng 2 kí số
*/

document.getElementById("btnToTal").onclick = function () {
  //input: num6: number, numDonVi: number, numChuc: number
  let num6 = +document.getElementById("input-number").value;
  let numChuc = 0;
  let numDonVi = 0;

  //output: toTal: number
  toTal = 0;

  //progress: Lấy hàng chục ta có num6 / 10, lấy hàng đơn vị num6 % 10
  numChuc = Math.floor(num6 / 10);
  numDonVi = num6 % 10;
  toTal = numChuc + numDonVi;
  console.log(toTal);
  //in kết quả ra màn hình
  document.getElementById("toTal").innerHTML = toTal;
};
