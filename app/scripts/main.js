'use strict';

// 监听程序启动 
// 该文件只是控制chrome的渲染  事件监听
chrome.app.runtime.onLaunched.addListener(function() {
    var width = 800;
    var height = 400;
    var siginWin,sigupWin,indexWin;
    siginWin = chrome.app.window.create('sigin.html', {
        id: 'main',
        // type: "popup",
        bounds: {

            width: 320,
            height: 400,
            left: Math.round((screen.availWidth - width) / 2),
            top: Math.round((screen.availHeight - height)/2),

        },
        resizable: true
    },function(win){
        var _win = win.contentWindow;

        _win.onload = function(){
            var sigup = _win.document.getElementById('sigup');

            sigup.addEventListener("click",function(){
                sigupWin = chrome.app.window.create('sigup.html', {
                id: 'sigup',
                // type: "popup",
                bounds: {

                    width: 1170,
                    height: 800,
                    left: Math.round((screen.availWidth - width) / 2),
                    top: Math.round((screen.availHeight - height)/2),

                },
                resizable: true
            },function(win){
                var _win = win.contentWindow;
                _win.onload = function(){
                    _win.document.getElementById('sigupForm').addEventListener("submit",function(){
                        chrome.windows.remove("sigup");
                    });
                }
            });

        });
        }

    });

    
    
});
