imageInput.onchange = function (e) {
  var formData = new FormData()
  formData.append('xxx', e.target.files[0])
  $.ajax({
    url: 'yyy',
    data: formData,
    processData: false,
    contentType: false,
    type: 'post'
  })
  e.target.value = ''
}
