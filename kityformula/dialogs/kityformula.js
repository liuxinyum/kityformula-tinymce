CKEDITOR.dialog.add("kityformula", function (editor) {
    var jme_fid = "kityformula_" + Math.ceil(Math.random()*10) ;
    return {
        title: "数学公式编辑器",
        minWidth: "500px",
        minHeight: "500px",
        contents: [{
            id: "tab1",
            label: "",
            title: "",
            expand: true,
            width: "785px",
            height: "390px",
            padding: 0,
            elements: [{
                type: "html",
                html: '<div style="width:785px;height:390px;"><iframe id="'+jme_fid+'" style="width:785px;height:390px;" frameborder="no" src="' + CKEDITOR.basePath + 'plugins/kityformula/kityFormulaDialog.html"></iframe></div>'
            }]
        }],
        onOk: function () {
            //点击确定按钮后的操作
            document.getElementById(jme_fid).contentWindow.onok(editor);
            return true;
        },
        onShow: function(){
            var selection = editor.getSelection();
            if (selection.getType() == CKEDITOR.SELECTION_ELEMENT) {
                var selElem = selection.getSelectedElement();
                if(selElem.getName() =='img'){
                    var latex_data = selElem.getAttribute("latex-data");
                    var data_latex = selElem.getAttribute("data-latex");
                    var mathml = latex_data != null?latex_data:data_latex;
                    document.getElementById(jme_fid).contentWindow.setlatex(mathml);
                    //document.getElementById(jme_fid).contentWindow.document.getElementById('data-latex').value = mathml;
                }else {
                    document.getElementById(jme_fid).contentWindow.setlatex('');
                }
            }else if(selection.getType() == CKEDITOR.SELECTION_TEXT){
                document.getElementById(jme_fid).contentWindow.setlatex('');
            }
        }
    }
});


