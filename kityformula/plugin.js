CKEDITOR.plugins.add("kityformula", {
    icons: 'kityformula',
        requires: ["dialog"],
        init: function(editor) {
            editor.addCommand("kityformula", new CKEDITOR.dialogCommand("kityformula"));
            editor.ui.addButton("kityformula", {
                label: "数学公式",//调用dialog时显示的名称
                command: "kityformula",
                icon: this.path + "/icons/kityformula.png"//在toolbar中的图标
            });

            if ( editor.contextMenu ) {
                editor.addMenuGroup( 'kityMathGroup' );
                editor.addMenuItem( 'mathEditorItem', {
                    label: '编辑数学公式',
                    icon: this.path + "/icons/kityformula.png",//在toolbar中的图标
                    command: 'kityformula',
                    group: 'kityMathGroup'
                });

                editor.contextMenu.addListener( function( element ) {
                    if ( element.getAscendant( 'img', true ) ) {
                        return { mathEditorItem: CKEDITOR.TRISTATE_OFF };
                    }
                });
            }

            CKEDITOR.dialog.add("kityformula", this.path + "dialogs/kityformula.js")

        }

});