function display() {
    var mRate = document.getElementById("rate").value;
    var mHours = document.getElementById("hours").value;

    var normal;
    var overtime;
    if(mHours > 40) {
        normal = 40 * mRate;
        overtime = (mHours - 40) * (mRate * 1.5);
    }
    else {
        normal = mHours * mRate;
        overtime = 0;
    }

    document.getElementById("normalHrsDisplay").innerHTML = '$' + normal;
    document.getElementById("overtimeDisplay").innerHTML = '$' + overtime;
    document.getElementById("totalDisplay").innerHTML = '$' + (normal + overtime);

}