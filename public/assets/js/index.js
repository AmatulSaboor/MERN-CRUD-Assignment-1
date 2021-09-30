function openModalEditUser(user){
    $("#idEdit").val(user.id);
    $("#nameEdit").val(user.name);
    $("#emailEdit").val(user.email);
    $("#addressEdit").val(user.address);
    $("#phoneEdit").val(user.phone);
}