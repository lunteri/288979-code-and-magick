'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var CLOUD_GAP = 10;
var FONT_GAP = 255;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var barHeight = 150;
var GAP_BAR = 80;
 
var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
 
var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }

    return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono, sans-serif';
    ctx.fillText('Ура, вы победили!', 110, 40);
    ctx.fillText('Список результатов:', 110, 70);

    var maxTime = getMaxElement(times);
    for (var i = 0; i < players.length; i++) {
        
        if (players[i] === 'Вы') {
            ctx.fillStyle = 'rgb(255, 0, 0)';
        } 
        else {
        var alfa = Math.random();    
            ctx.fillStyle = 'rgba(0, 0, 255,' + alfa +')';
        }
        ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_Y + GAP_BAR + (barHeight - (barHeight * times[i]) / maxTime), BAR_WIDTH, (barHeight * times[i]) / maxTime);   
        ctx.fillStyle = '#000';
        ctx.fillText(players[i], CLOUD_X + GAP + (GAP + BAR_WIDTH)  * i, CLOUD_Y + FONT_GAP);

    }
};
