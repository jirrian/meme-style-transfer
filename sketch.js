// Copyright (c) 2018 ml5
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Style Transfer Image Example using p5.js
This uses a pre-trained model of The Great Wave off Kanagawa and Udnie (Young American Girl, The Dance)
=== */

let inputImg;
let statusMsg;
let transferBtn;
let style1;
let style2;

function setup() {
  noCanvas();
  // Status Msg
  statusMsg = select('#statusMsg');

  // Get the input image
  inputImg1 = select('#inputImg1');
  inputImg2 = select('#inputImg2');

  // Transfer Button
  transferBtn = select('#transferBtn')
  transferBtn.mousePressed(transferImages);

  // Create Style methods with pre-trained model
  style1 = ml5.styleTransfer('models/run4ckpt', modelLoaded);
}

// A function to be called when the models have loaded
function modelLoaded() {
  // Check if both models are loaded
  if(style1.ready){
    statusMsg.html('Ready!')
  }
}

// Apply the transfer to both images!
function transferImages() {
  statusMsg.html('Applying Style Transfer...!');
  
  style1.transfer(inputImg1, function(err, result) {
    createImg(result.src).parent('styleA');
  });

  style1.transfer(inputImg2, function(err, result) {
    createImg(result.src).parent('styleA');
  });

  statusMsg.html('Done!');
}