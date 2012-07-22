// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: HelloWorldSample
// ==========================================================================

var HelloWorldSample  = HelloWorldSample || {};


HelloWorldSample.app = M.Application.design({

    /* Define the entry/start page of your app. This property must be provided! */
    entryPage : 'page1',

    page1: M.PageView.design({

        childViews: 'header content footer',

        header: M.ToolbarView.design({
            value: 'HEADER',
            anchorLocation: M.TOP
        }),

        content: M.ButtonView.design({
			value: 'Hello World Button',
			icon: 'star',
			events: {
				tap: {
					target: HelloWorldSample.MyButtonController,
					action:'buttonPressed'
				}
			}
        }),

        footer: M.ToolbarView.design({
            value: 'FOOTER',
            anchorLocation: M.BOTTOM
        })
    
    })

});